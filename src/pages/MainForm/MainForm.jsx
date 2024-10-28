import "../../assets/style.css"; // Assuming this file contains global styles
import { useState } from "react";

function MainForm() {
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
    <div className="main-form">
      <div className="div">
        <form onSubmit={handleSubmit} className="form-layout">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>

          <label>
            Sex:
            <select name="sex" value={formData.sex} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Chest Pain Type:
            <select name="cp" value={formData.cp} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">Typical Angina</option>
              <option value="1">Atypical Angina</option>
              <option value="2">Non-Anginal Pain</option>
              <option value="3">Asymptomatic</option>
            </select>
          </label>

          <label>
            Resting Blood Pressure:
            <input
              type="number"
              name="trestbps"
              value={formData.trestbps}
              onChange={handleChange}
            />
          </label>

          <label>
            Serum Cholesterol mg/dl:
            <input
              type="number"
              name="chol"
              value={formData.chol}
              onChange={handleChange}
            />
          </label>

          <label>
            Fasting Blood Sugar &gt 120 mg/dl:
            <select name="fbs" value={formData.fbs} onChange={handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>

          <label>
            Resting Electrocardiographic Results:
            <select
              name="restecg"
              value={formData.restecg}
              onChange={handleChange}
            >
              <option value="0">Normal</option>
              <option value="1">ST-T Wave Abnormality</option>
              <option value="2">Left Ventricular Hypertrophy</option>
            </select>
          </label>

          <label>
            Maximum Heart Rate Achieved:
            <input
              type="number"
              name="thalach"
              value={formData.thalach}
              onChange={handleChange}
            />
          </label>

          <label>
            Exercise-Induced Angina:
            <select
              name="exang"
              value={formData.exang}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>

          <label>
            Oldpeak (ST Depression) Induced by Exercise Relative to R:
            <input
              type="number"
              name="oldpeak"
              value={formData.oldpeak}
              onChange={handleChange}
            />
          </label>

          <label>
            Slope of Peak Exercise ST Segment:
            <select
              name="slope"
              value={formData.slope}
              onChange={handleChange}
            >
              <option value="0">Upsloping</option>
              <option value="1">Flat</option>
              <option value="2">Downsloping</option>
            </select>
          </label>

          <label>
            Number of Major Vessels (0-3) Colored by Flourosopy:
            <input
              type="number"
              name="ca"
              value={formData.ca}
              onChange={handleChange}
            />
          </label>

          <label>
            Thalassemia:
            <select name="thal" value={formData.thal} onChange={handleChange}>
              <option value="0">Normal</option>
              <option value="1">Fixed Defect</option>
              <option value="2">Reversible Defect</option>
            </select>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MainForm;
