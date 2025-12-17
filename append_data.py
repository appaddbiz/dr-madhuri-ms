import os

site_data_file = r"utils/siteData.jsx"
seo_data_file = r"utils/seoData.js"
parsed_file = r"parsed_output.txt"

with open(parsed_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Split content
parts = content.split('--- SEO DATA ---')
site_part = parts[0].replace('--- SITE DATA ---', '').strip()
seo_part = parts[1].strip()

# Append to siteData.jsx
with open(site_data_file, 'r', encoding='utf-8') as f:
    site_content = f.read()

# Find the last occurrence of ];
last_bracket_index = site_content.rfind('];')
if last_bracket_index != -1:
    new_site_content = site_content[:last_bracket_index] + site_part + "\n" + site_content[last_bracket_index:]
    with open(site_data_file, 'w', encoding='utf-8') as f:
        f.write(new_site_content)
    print("Updated siteData.jsx")
else:
    print("Could not find closing bracket in siteData.jsx")

# Append to seoData.js
with open(seo_data_file, 'r', encoding='utf-8') as f:
    seo_content = f.read()

last_bracket_index_seo = seo_content.rfind('];')
if last_bracket_index_seo != -1:
    new_seo_content = seo_content[:last_bracket_index_seo] + seo_part + "\n" + seo_content[last_bracket_index_seo:]
    with open(seo_data_file, 'w', encoding='utf-8') as f:
        f.write(new_seo_content)
    print("Updated seoData.js")
else:
    print("Could not find closing bracket in seoData.js")
