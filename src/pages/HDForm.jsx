import "../assets/style.css";
import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the backend or Flask server
    console.log(formData);
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
            />
          </div>

          <div className="mb-3">
            <label>Sex:</label>
            <select
              name="sex"
              className="form-select"
              value={formData.sex}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Chest Pain Type:</label>
            <select
              name="cp"
              className="form-select"
              value={formData.cp}
              onChange={handleChange}
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
            />
          </div>

          <div className="mb-3">
            <label>Fasting Blood Sugar &gt; 120 mg/dl:</label>
            <select
              name="fbs"
              className="form-select"
              value={formData.fbs}
              onChange={handleChange}
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
            />
          </div>

          <div className="mb-3">
            <label>Exercise-Induced Angina:</label>
            <select
              name="exang"
              className="form-select"
              value={formData.exang}
              onChange={handleChange}
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
            />
          </div>

          <div className="mb-3">
            <label>Slope of Peak Exercise ST Segment:</label>
            <select
              name="slope"
              className="form-select"
              value={formData.slope}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="0">Upsloping</option>
              <option value="1">Flat</option>
              <option value="2">Downsloping</option>
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
            />
          </div>

          <div className="mb-3">
            <label>Thalassemia:</label>
            <select
              name="thal"
              className="form-select"
              value={formData.thal}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="0">Normal</option>
              <option value="1">Fixed Defect</option>
              <option value="2">Reversible Defect</option>
            </select>
          </div>

          <button type="submit" className="btn btn-danger mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HDForm;