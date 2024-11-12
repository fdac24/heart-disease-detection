from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load model and scaler
model = pickle.load(open("heart_disease_model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = data["features"]
    scaled_features = scaler.transform([features])
    prediction = model.predict(scaled_features)[0]
   
    return jsonify({"prediction": int(prediction)})

if __name__ == "__main__":
    app.run(debug=True)
