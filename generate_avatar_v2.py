import os
import json
import base64
import http.client
from urllib.parse import urlparse

# Config (Hardcoded for reliability based on previous success reading)
API_KEY = "AIzaSyBQe2rPVj9aOIikXrM1HbZC1GNb_05t2jY"
PROXY_URL = "http://rreklama547:QXMKR2EVbj@161.77.64.83:50100"

# Prompt
PROMPT = "A professional studio portrait of a male Systems Architect, 30 years old, wearing a black turtleneck and charcoal grey blazer, modern glasses. Confident, intelligent expression. Background is a dark, sleek modern tech office with consistent cyan and purple neon rim lighting matching a cyberpunk aesthetic. Photorealistic, 8k resolution, cinematic lighting, sharp focus, high quality."

payload = {
    "contents": [{
        "parts": [{"text": PROMPT}]
    }]
}

print("🚀 Generating Avatar with NanoBanana Pro (v2 method)...")

try:
    if PROXY_URL:
        proxy_parsed = urlparse(PROXY_URL)
        proxy_host = proxy_parsed.hostname
        proxy_port = proxy_parsed.port
        proxy_auth = f"{proxy_parsed.username}:{proxy_parsed.password}" if proxy_parsed.username else None
    
    # Connect
    conn = http.client.HTTPConnection(proxy_host, proxy_port, timeout=120)
    
    headers = {
        'Content-Type': 'application/json',
        'Host': 'generativelanguage.googleapis.com'
    }
    
    if proxy_auth:
        import base64 as b64_auth
        auth_encoded = b64_auth.b64encode(proxy_auth.encode()).decode()
        headers['Proxy-Authorization'] = f'Basic {auth_encoded}'
    
    target_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key={API_KEY}"
    body = json.dumps(payload)
    
    conn.request("POST", target_url, body, headers)
    response = conn.getresponse()
    
    data = b''
    while True:
        chunk = response.read(8192)
        if not chunk: break
        data += chunk
        
    conn.close()
    
    if response.status == 200:
        result = json.loads(data.decode('utf-8'))
        if 'candidates' in result:
            b64_data = result['candidates'][0]['content']['parts'][0]['inlineData']['data']
            with open("photo_generated.png", "wb") as f:
                f.write(base64.b64decode(b64_data))
            print("✅ Avatar generated successfully! Saved to photo_generated.png")
        else:
            print("❌ No image in response")
            print(result)
    else:
        print(f"❌ HTTP Error: {response.status}")
        print(data.decode('utf-8'))

except Exception as e:
    print(f"❌ Error: {e}")
