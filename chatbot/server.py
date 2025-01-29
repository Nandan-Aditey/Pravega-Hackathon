from huggingface_hub import InferenceClient
import json
from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__)

# Initialize Hugging Face InferenceClient
repo_id = "Qwen/Qwen2.5-Coder-32B-Instruct"
client = InferenceClient(
    model=repo_id,
    timeout=120,
)

def chat_with_bot(user_input: str):
    # Define system and user messages
    messages = [
        {"role": "system", "content": "You are a friendly and supportive chatbot. You are talking to a person requiring mental support only be positive"},
        {"role": "user", "content": user_input}
    ]
    
    response = client.post(
        json={
            "inputs": user_input,
            "parameters": {"max_new_tokens": 200},
            "task": "chat",
        }
    )

    # Decode response
    return json.loads(response.decode())[0]["generated_text"]

@app.route('/chat', methods=['POST'])
def chat():
    # Get user input from the frontend
    user_input = request.json.get('message')

    if not user_input:
        return jsonify({"error": "No input provided"}), 400
    
    # Get response from the model
    response_text = chat_with_bot(user_input)
    
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(debug=True)
