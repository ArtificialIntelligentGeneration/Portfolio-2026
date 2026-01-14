import os
import json
import base64
import urllib.request
import urllib.error

# Config
# Using keys directly from .env reading (Step 344)
API_KEY = "AIzaSyBQe2rPVj9aOIikXrM1HbZC1GNb_05t2jY"
PROXY_URL = "http://rreklama547:QXMKR2EVbj@161.77.64.83:50100"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key={API_KEY}"

# Prompt
PROMPT = "A professional studio portrait of a male Systems Architect, 30 years old, wearing a black turtleneck and charcoal grey blazer, modern glasses. Confident, intelligent expression. Background is a dark, sleek modern tech office with consistent cyan and purple neon rim lighting matching a cyberpunk aesthetic. Photorealistic, 8k resolution, cinematic lighting, sharp focus, high quality."

# Proxy Setup
if PROXY_URL:
    proxy_handler = urllib.request.ProxyHandler({'https': PROXY_URL, 'http': PROXY_URL})
    opener = urllib.request.build_opener(proxy_handler)
    urllib.request.install_opener(opener)

# Payload
data = {
    "contents": [{
        "parts": [{"text": PROMPT}]
    }]
}

print(f"Generating image with prompt: {PROMPT[:50]}...")

# Request
req = urllib.request.Request(
    URL, 
    data=json.dumps(data).encode('utf-8'), 
    headers={'Content-Type': 'application/json'}
)

try:
    # 120s Timeout is Critical
    with urllib.request.urlopen(req, timeout=120) as response:
        result = json.loads(response.read())
        # Parse Image (Base64)
        if 'candidates' in result:
            b64_data = result['candidates'][0]['content']['parts'][0]['inlineData']['data']
            with open("photo_generated.png", "wb") as f:
                f.write(base64.b64decode(b64_data))
            print("Success! Saved to photo_generated.png")
        else:
            print("No candidates returned.")
            print(result)
except Exception as e:
    print(f"Error: {e}")
