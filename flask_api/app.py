from flask import Flask, request, jsonify
import numpy as np
import pickle

# Load the trained model and scaler
with open("heart_disease_model.pkl", "rb") as file:
    model = pickle.load(file)
with open("scaler.pkl", "rb") as file:
    scaler = pickle.load(file)

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    # Extract features from the request
    data = request.get_json()
    features = [
        data['age'], data['sex'], data['cp'], data['trestbps'], data['chol'],
        data['fbs'], data['restecg'], data['thalach'], data['exang'], 
        data['oldpeak'], data['slope'], data['ca'], data['thal']
    ]
    
    # Convert features to numpy array and scale
    features = np.array(features).reshape(1, -1)
    scaled_features = scaler.transform(features)
    
    # Make prediction
    prediction = model.predict(scaled_features)[0]
    probability = model.predict_proba(scaled_features)[0][1]  # Probability of heart disease
    
    # Return result
    result = {
        "prediction": "Heart Disease" if prediction == 1 else "No Heart Disease",
        "probability": probability
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
