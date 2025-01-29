from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# URL for the Hugging Face model (replace with your API endpoint)
API_URL = "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2"
headers = {"Authorization": "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxx"}  # Replace with your Hugging Face token

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("input")
    context = request.json.get("context", "Default context.")  # You can define the context here or pass it from frontend

    # Query the model with the user input and context
    result = query({
        "inputs": {
            "question": user_input,
            "context": context
        }
    })

    # Return the model's answer as a JSON response
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
