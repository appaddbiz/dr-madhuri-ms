
import re
import json

def parse_doc(file_path, start_id):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by separator
    chunks = re.split(r'={10,}', content)
    
    site_data_entries = []
    seo_data_entries = []
    
    current_id = start_id
    
    for chunk in chunks:
        if not chunk.strip():
            continue
            
        # Parse sections
        # Title/Content/FAQs part
        # Meta Title
        # Meta Description
        # URL
        # Schema
        
        # Regex to find sections
        meta_title_match = re.search(r'Meta Title:\s*(.*?)\s*(?=Meta Description:|URL:|Schema :|$)', chunk, re.DOTALL | re.IGNORECASE)
        meta_desc_match = re.search(r'Meta Description:\s*(.*?)\s*(?=URL:|Schema :|$)', chunk, re.DOTALL | re.IGNORECASE)
        url_match = re.search(r'URL:\s*(.*?)\s*(?=Schema :|$)', chunk, re.DOTALL | re.IGNORECASE)
        schema_match = re.search(r'Schema\s*:\s*<script type="application/ld\+json">(.*?)</script>', chunk, re.DOTALL | re.IGNORECASE)
        
        # FAQs section usually starts with "FAQs" and ends before Meta Title
        faqs_match = re.search(r'FAQs\s*:?\s*(.*?)\s*(?=Meta Title:|Meta Description:|$)', chunk, re.DOTALL | re.IGNORECASE)
        
        # Content body is everything before FAQs
        body_end_index = -1
        if faqs_match:
            body_end_index = faqs_match.start()
        elif meta_title_match:
            body_end_index = meta_title_match.start()
            
        body_content = chunk[:body_end_index].strip()
        
        # Extract title from body (first line or H1)
        lines = body_content.split('\n')
        title = ""
        h1_match = re.search(r'(.*?)\(h1\)', body_content)
        if h1_match:
            title = h1_match.group(1).strip()
            # Remove the H1 line from body content to avoid duplication if needed, 
            # but usually we want to keep it as H1 tag in description
        else:
            title = lines[0].strip() if lines else "Untitled"

        # Generate slug
        url_raw = url_match.group(1).strip() if url_match else ""
        slug = url_raw.replace(' ', '-').lower()
        if not slug.startswith('/'):
            slug = '/' + slug
        
        # Prepare HTML Description
        # Convert plain text body to HTML paragraphs
        # First line might be H1 text, so wrap it in <h1 style="...">
        html_description = ""
        body_lines = [line.strip() for line in lines if line.strip()]
        
        # Heuristic: Find H1 line
        h1_line_idx = -1
        for i, line in enumerate(body_lines):
            if '(h1)' in line:
                h1_text = line.replace('(h1)', '').strip()
                html_description += f'      <h1 style="text-align:justify;font-size:30px;color:#f50a64">{h1_text}</h1>\n\n'
                h1_line_idx = i
                break
        
        if h1_line_idx == -1 and body_lines:
             # Assume second line is H1 if first is location, or just first line
             # Looking at doc: "Jayanagar 7th Block\nExceptional Mother Care...(h1)"
             pass

        for i, line in enumerate(body_lines):
            if i == h1_line_idx:
                continue
            if line.lower().startswith('jayanagar 7th block') and len(line) < 30: # content location header
                continue
                
            # Check for subheadings or specific patterns if needed, else wrap in p
            text = line.replace('<', '&lt;').replace('>', '&gt;')
            # Link replacement heuristic: replace "Best maternity clinic..." with link if possible?
            # User said "as i have added already", so I should try to duplicate the valid HTML structure.
            # Convert simple text to P
            html_description += f'      <p style="text-align:justify;padding:10px">\n        {text}\n      </p>\n\n'

        # FAQs Parsing
        faqs_data = []
        if faqs_match:
            faqs_text = faqs_match.group(1)
            # Split by number pattern like "1: " or "1. "
            faq_items = re.split(r'\d+[:\.]\s*', faqs_text)
            for item in faq_items:
                if not item.strip():
                    continue
                # Split question and answer
                # Usually "Question? Answer"
                parts = re.split(r'\?\s*', item, maxsplit=1)
                if len(parts) == 2:
                    q = parts[0].strip() + "?"
                    a = parts[1].strip()
                    faqs_data.append({'question': q, 'answer': a})
        
        # Meta Data
        meta_title = meta_title_match.group(1).strip() if meta_title_match else title
        meta_desc = meta_desc_match.group(1).strip() if meta_desc_match else ""
        
        # Schema
        schema_json = {}
        if schema_match:
            try:
                schema_str = schema_match.group(1).strip()
                # Clean up potential JS comments or formatting issues
                schema_json = json.loads(schema_str)
            except:
                pass

        # Keywords from schema
        keywords = ""
        if 'keywords' in schema_json:
            if isinstance(schema_json['keywords'], list):
                keywords = ", ".join(schema_json['keywords'])
            else:
                keywords = schema_json['keywords']

        # H2 - Use meta title as default
        h2 = meta_title

        # Build SiteData Object
        img_name = slug.strip('/').replace('/', '-')
        site_entry = {
            "id": current_id,
            "title": title.replace('(h1)', '').strip(), # Clean title
            "description": html_description,
            "img": f"/assets/sitemap/{img_name}.jpg",
            "link": slug,
            "faqs": faqs_data
        }
        site_data_entries.append(site_entry)
        
        # Build SeoData Object
        seo_entry = {
            "url": f"https://www.drmadhurimsobgyn.com/sitemap{slug}",
            "title": meta_title,
            "description": meta_desc,
            "keywords": keywords,
            "h2": h2,
            "jsonScript": schema_json
        }
        seo_data_entries.append(seo_entry)
        
        current_id += 1

    return site_data_entries, seo_data_entries

site_entries, seo_entries = parse_doc(r'c:\Users\91789\OneDrive\Desktop\AppAdd-Websites\Dr. Madhuri MS Website\temp_doc.txt', 36)

with open(r'c:\Users\91789\OneDrive\Desktop\AppAdd-Websites\Dr. Madhuri MS Website\parsed_output.txt', 'w', encoding='utf-8') as f:
    f.write("--- SITE DATA ---\n")
    for entry in site_entries:
        f.write("  {\n")
        f.write(f"    id: {entry['id']},\n")
        f.write(f"    title: \"{entry['title']}\",\n")
        f.write("    description: `\n")
        f.write(entry['description'].rstrip() + "\n")
        f.write("    `,\n")
        f.write(f"    img: \"{entry['img']}\",\n")
        f.write(f"    link: \"{entry['link']}\",\n")
        f.write("    faqs: [\n")
        for faq in entry['faqs']:
            f.write("      {\n")
            f.write(f"        question: \"{faq['question']}\",\n")
            f.write(f"        answer:\n")
            f.write(f"          \"{faq['answer']}\",\n")
            f.write("      },\n")
        f.write("    ],\n")
        f.write("  },\n")

    f.write("\n--- SEO DATA ---\n")
    for entry in seo_entries:
        f.write("  {\n")
        f.write(f"    url: \"{entry['url']}\",\n")
        f.write(f"    title: \"{entry['title']}\",\n")
        f.write(f"    description:\n")
        f.write(f"      \"{entry['description']}\",\n")
        f.write(f"    keywords:\n")
        f.write(f"      \"{entry['keywords']}\",\n")
        f.write(f"    h2: \"{entry['h2']}\",\n")
        f.write(f"    jsonScript: {json.dumps(entry['jsonScript'], indent=6)},\n")
        f.write("  },\n")
