import re

file_path = 'app/sitemap/page.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to parse the 'const locations = [ ... ];' block.
# Since it's valid JS/JSX, maybe we can assume a structure.
# But regex parsing nested structures is hard.
# However, the structure is very consistent:
# const locations = [
#    {
#       name: "...",
#       services: [
#          { title: "...", link: "..." },
#          ...
#       ]
#    },
#    ...
# ];

# Let's try to extract the whole block string first.
start_marker = "const locations = ["
end_marker = "  ];"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx == -1 or end_idx == -1:
    print("Could not find locations block")
    exit()

end_idx += len(end_marker)
locations_block = content[start_idx:end_idx]

# Now we parse the locations_block manually line by line to build a python object
# ignoring comments and filtering duplicates.

lines = locations_block.split('\n')
new_lines = []
seen_links = set()
seen_titles = set() # Per location or global?
# Note: Same title/link might appear in DIFFERENT locations (e.g. if name is generic), 
# but here links usually include the slug which implies location.
# But titles definitely include location name.
# So we should scope uniqueness to the location block.

current_location = None
location_services = []
inside_services = False
filtered_services = []

# Helper to flush location
def format_services(services):
    # services is list of dicts {title, link}
    # We want to deduplicate here.
    # Logic: Keep the LAST occurrence if link matches?
    # Or strict dedupe?
    # User had duplicates (old vs new). The new ones (longer titles) are usually at the end.
    # So we traverse in reverse to keep unique links/titles, then reverse back.
    
    unique_svcs = []
    seen = set()
    
    # Process in reverse order to keep the LATEST/LAST entry
    for svc in reversed(services):
        # normalize link
        link = svc['link'].strip()
        # normalize title (ignore case?)
        title = svc['title'].strip()
        
        # Unique key: just link? Or title?
        # In Jayanagar 7th block:
        # Link: .../best-maternity-clinic-in-jayanagar-7th-block
        # Title 1: Best maternity clinic...
        # Title 2: Exceptional Mother Care...
        # We want to keep Title 2 (Newer/Better). Which is later in the list.
        # So iterating reverse and checking link uniqueness works.
        
        if link not in seen:
            unique_svcs.append(svc)
            seen.add(link)
    
    return list(reversed(unique_svcs))


import ast

# We will rely on simple line processing because the format is uniform.
# But we must handle the nesting { name: ..., services: [ ... ] }

processing_locations = []
current_loc_obj = None # {name: "", services: []}
inside_location = False
inside_service_array = False

# Regex for name
name_re = re.compile(r'name:\s*"(.*?)"')
title_re = re.compile(r'title:\s*"(.*?)"')
link_re = re.compile(r'link:\s*"(.*?)"')

current_svc = {} # {title, link}

for line in lines:
    stripped = line.strip()
    
    # Skip commented out lines
    if stripped.startswith('//'):
        continue
    
    if stripped.startswith('{') and not inside_location:
         inside_location = True
         current_loc_obj = {'name': '', 'services': []}
         continue
         
    if 'name:' in stripped:
        m = name_re.search(stripped)
        if m:
            current_loc_obj['name'] = m.group(1)
        continue
        
    if 'services: [' in stripped:
        inside_service_array = True
        continue
        
    if inside_service_array:
        if stripped.startswith('{'):
            current_svc = {}
        elif 'title:' in stripped:
            m = title_re.search(stripped)
            if m:
                current_svc['title'] = m.group(1)
        elif 'link:' in stripped:
            m = link_re.search(stripped)
            if m:
                current_svc['link'] = m.group(1)
        elif stripped.startswith('},'):
            if 'title' in current_svc and 'link' in current_svc:
                current_loc_obj['services'].append(current_svc)
            current_svc = {}
        elif stripped.startswith('],'):
            inside_service_array = False
    
    if stripped.startswith('},') and not inside_service_array and inside_location:
        # End of location
        processing_locations.append(current_loc_obj)
        inside_location = False
        current_loc_obj = None

# Now rebuild the block
result_lines = ["const locations = ["]

for loc in processing_locations:
    result_lines.append("    {")
    result_lines.append(f'      name: "{loc["name"]}",')
    result_lines.append("      services: [")
    
    # Deduplicate services
    unique_services = format_services(loc['services'])
    
    for svc in unique_services:
        result_lines.append("        {")
        result_lines.append(f'          title: "{svc["title"]}",')
        result_lines.append(f'          link: "{svc["link"]}",')
        result_lines.append("        },")
    
    result_lines.append("      ],")
    result_lines.append("    },")
    
result_lines.append("  ];")

new_block = "\n".join(result_lines)

# Replace in content
new_content = content[:start_idx] + new_block + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Deduplicated sitemap/page.jsx")
