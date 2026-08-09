import os
import re
import urllib.request
import string

def make_component_name(path):
    # e.g. /bigbody/lusions1.html -> BigbodyLusions1
    name = path.replace("/", " ").replace(".html", "")
    return "".join(w.capitalize() for w in name.split())

TEMPLATE = """import { useEffect } from "react";

const COMPONENT_NAME = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFEE";
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  }, []);

  const htmlContent = `RAW_HTML`;

  return (
    <div className="min-h-screen text-xl md:text-2xl leading-relaxed p-4 md:p-8 w-full max-w-4xl mx-auto" style={{ fontFamily: "Times New Roman, serif", color: "#000055" }}>
      <style>{\`
        a { color: #B32D41; text-decoration: underline; font-weight: bold; }
        a:hover { color: #FF4444; }
        h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 1em; text-align: left; width: 100% !important; }
        strong, b { font-weight: 900; }
        ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1em; width: 100% !important; }
        li { margin-bottom: 0.5em; }
        img { max-width: 100%; height: auto; display: inline-block; }
        center { text-align: center; display: block; width: 100% !important; }
        hr { border: 0; border-top: 2px solid currentColor; margin: 1em auto; width: 100% !important; }
        
        p, td, blockquote, li, font, div {
          font-size: 1.6rem !important;
          line-height: 1.7 !important;
        }
        
        /* Force full horizontal width for paragraphs, blockquotes, and tables */
        blockquote { 
          margin-left: 0 !important; 
          margin-right: 0 !important; 
          padding-left: 0 !important; 
          padding-right: 0 !important; 
          width: 100% !important; 
          max-width: 100% !important; 
        }
        table { 
          clear: both;
          width: 100% !important; 
          max-width: 100% !important; 
          margin-top: 1.5rem;
        }
        p { 
          width: 100% !important; 
          max-width: 100% !important; 
        }
      \`}</style>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-full" />
    </div>
  );
};

export default COMPONENT_NAME;
"""

with open("Index.tsx", "r", encoding="utf-8") as f:
    idx_content = f.read()

paths = set(re.findall(r"\$\{BASE\}(/[a-zA-Z0-9_./-]+)", idx_content))

components = []
routes = []

for path in paths:
    if path.endswith(".gif") or path == "/index.html":
        continue

    url = "https://www.nancho.net" + path
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode("utf-8", errors="replace")
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
        continue
    
    body_match = re.search(r"<body[^>]*>(.*?)</body>", html, re.IGNORECASE | re.DOTALL)
    if body_match:
        html = body_match.group(1)
    
    html = html.replace("`", "\\`")
    html = html.replace("\ufffd", "--")
    html = html.replace("${", "\\${") # Prevent React template string interpolation errors
    
    # Absolute src fix
    html = re.sub(r"src=[\"\'](/[^\"\']+)[\"\']", r"src=\"https://www.nancho.net\1\"", html, flags=re.IGNORECASE)
    html = re.sub(r"src=(/[^\s>]+)", r"src=\"https://www.nancho.net\1\"", html, flags=re.IGNORECASE)
    
    comp_name = make_component_name(path)
    file_content = TEMPLATE.replace("COMPONENT_NAME", comp_name).replace("RAW_HTML", html)
    
    comp_file = comp_name + ".tsx"
    with open(comp_file, "w", encoding="utf-8") as f:
        f.write(file_content)
        
    components.append(comp_name)
    routes.append((path, comp_name))
    
    idx_content = idx_content.replace(f"`${{BASE}}{path}`", f'"{path}"')
    
    print(f"Created {comp_file} from {path}")

with open("Index.tsx", "w", encoding="utf-8") as f:
    f.write(idx_content)

# Update App.tsx logic
try:
    with open("../App.tsx", "r", encoding="utf-8") as f:
        app_content = f.read()
    
    imports = "\n".join([f"import {r[1]} from \"./pages/{r[1]}\";" for r in routes])
    route_elements = "\n          ".join([f"<Route path=\"{r[0]}\" element={{<{r[1]} />}} />" for r in routes])
    
    app_content = app_content.replace("import Index from \"./pages/Index\";", f"import Index from \"./pages/Index\";\n{imports}")
    app_content = app_content.replace("<Route path=\"/\" element={<Index />} />", f"<Route path=\"/\" element={{<Index />}} />\n          {route_elements}")
    
    with open("../App.tsx", "w", encoding="utf-8") as f:
        f.write(app_content)
    print("Updated App.tsx")
except Exception as e:
    print(f"Could not update App.tsx: {e}")
