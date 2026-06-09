from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Home Route
@app.route("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }

# Detect Fracture API
@app.route("/detect", methods=["POST", "OPTIONS"])
def detect():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    file = request.files.get("image")

    if not file:
        return jsonify({"error": "No image provided"}), 400

    # Fake AI Result
    result = {
        "patient_name": "Rahul Sharma",
        "age": "24 Years",
        "bone": "Radius Bone",
        "fracture": "Fracture Detected",
        "confidence": "96%",
        "severity": "Moderate",
        "type": "Hairline Fracture"
    }

    return jsonify(result)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
