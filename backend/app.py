from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Home Route
@app.route("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }

# Detect Fracture API
@app.route("/detect", methods=["POST"])
def detect():

    file = request.files["image"]

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
    app.run(debug=True)