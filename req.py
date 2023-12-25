import requests

# url = "http://localhost:3000/user/3"

# url = "http://localhost:3000/gl/1"
url = "http://172.233.146.207:3000/users/"

# data = {'api_key':'bxvFrtCRD46G&^%fBHCD##df'}

# response = requests.post(url, json=data)

response = requests.get(url)

print(f"Status Code: {response.status_code}")
print(f"Response Content: { response.text }")
