import "../assets/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HDForm() {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert form data to the required format
      const dataToSend = {
        features: Object.values(formData).map(value => 
          isNaN(value) ? value : parseFloat(value) // Convert numeric values to floats
        ),
      };

      // Send a POST request to the Flask API
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      // Navigate to the Results page with the prediction result
      navigate("/results", { state: { result } });
    } catch (error) {
      console.error("Error connecting to the API:", error);
    }
  };

  return (
    <div className="main-form" style={{ top: "2050px" }}>
      <div className="container mt-4 p-4 rounded form-container">
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="mb-3">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="mb-3">
            <label>Sex:</label>
            <select
              name="sex"
              className="form-select"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">Female</option>
              <option value="1">Male</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Chest Pain Type:</label>
            <select
              name="cp"
              className="form-select"
              value={formData.cp}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">Typical Angina</option>
              <option value="1">Atypical Angina</option>
              <option value="2">Non-Anginal Pain</option>
              <option value="3">Asymptomatic</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Resting Blood Pressure:</label>
            <input
              type="number"
              name="trestbps"
              className="form-control"
              value={formData.trestbps}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="mb-3">
            <label>Serum Cholesterol mg/dl:</label>
            <input
              type="number"
              name="chol"
              className="form-control"
              value={formData.chol}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="mb-3">
            <label>Fasting Blood Sugar &gt; 120 mg/dl:</label>
            <select
              name="fbs"
              className="form-select"
              value={formData.fbs}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Resting Electrocardiographic Results:</label>
            <select
              name="restecg"
              className="form-select"
              value={formData.restecg}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">Normal</option>
              <option value="1">ST-T Wave Abnormality</option>
              <option value="2">Left Ventricular Hypertrophy</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Maximum Heart Rate Achieved:</label>
            <input
              type="number"
              name="thalach"
              className="form-control"
              value={formData.thalach}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="mb-3">
            <label>Exercise-Induced Angina:</label>
            <select
              name="exang"
              className="form-select"
              value={formData.exang}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Oldpeak (ST Depression) Induced by Exercise Relative to R:</label>
            <input
              type="number"
              name="oldpeak"
              className="form-control"
              value={formData.oldpeak}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
            />
          </div>

          <div className="mb-3">
            <label>Slope of Peak Exercise ST Segment:</label>
            <select
              name="slope"
              className="form-select"
              value={formData.slope}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Number of Major Vessels (0-3) Colored by Fluoroscopy:</label>
            <input
              type="number"
              name="ca"
              className="form-control"
              value={formData.ca}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="mb-3">
            <label>Thalassemia:</label>
            <select
              name="thal"
              className="form-select"
              value={formData.thal}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="1">Normal</option>
              <option value="2">Fixed Defect</option>
              <option value="3">Reversible Defect</option>
            </select>
          </div>

          <button type="submit" className="btn btn-danger mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HDForm;
