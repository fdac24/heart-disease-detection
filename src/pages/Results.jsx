import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Same logo as Home page
import disclaimer from "../assets/images/disclaimer.png"; // Same disclaimer as Home page

function Results() {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <div className="home">
      <div className="header">Heart Disease Detection Tool</div>
      <div className="header-container">
        <div className="text-container">
          <p className="welcome">Results for Your Heart Health Assessment</p>
          <p className="welcome-text">
            Please find your heart disease risk assessment results below.
          </p>
        </div>
        <img className="logo" alt="Logo" src={logo} />
      </div>

      <div className="results-content">
        {result ? (
          <>
            <div className="you-are-at">
              <p>Based on our model, you are predicted to be: </p>
            </div>
            <div className="prediction">
              <p>{result.prediction ? "Low Risk" : "High Risk"}</p>
            </div>
            <div className="results-breakdown">
              <p>What do your results mean?</p>
            </div>
            {/* New Section */}
            <div className="assessment">
              {result.prediction ? (
                <p>
                  You are predicted to be at <strong>Low Risk</strong>. While
                  this is great news, it's important to remain proactive about
                  your heart health. Maintain a healthy lifestyle by eating a
                  balanced diet, staying active, and keeping up with routine
                  medical check-ups.
                </p>
              ) : (
                <p>
                  You are predicted to be at <strong>High Risk</strong>. Please
                  note that this assessment is not a medical diagnosis. We
                  strongly encourage you to consult with a healthcare
                  professional to discuss your results and take appropriate
                  action to address your heart health.
                </p>
              )}
            </div>
          </>
        ) : (
          <p>No result available. Please try again.</p>
        )}
      </div>

      <div className="resources">
  <div className="results-breakdown">
    <p>Resources</p>
  </div>
  <div className="assessment">
    <p>
      Educating yourself about heart health is an important step in staying proactive. 
      Here are some resources where you can learn more and keep up with the latest 
      research and findings on heart disease:
    </p>
    <ul>
      <li>
        <a href="https://www.heart.org" target="_blank" rel="noopener noreferrer">
          American Heart Association (AHA)
        </a> – Trusted information on heart disease prevention, treatment, and the latest research.
      </li>
      <li>
        <a href="https://www.cdc.gov/heartdisease/" target="_blank" rel="noopener noreferrer">
          Centers for Disease Control and Prevention (CDC)
        </a> – Comprehensive resources on heart disease statistics, prevention, and guidelines.
      </li>
      <li>
        <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer">
          National Institutes of Health (NIH)
        </a> – Cutting-edge heart health research and initiatives supported by the federal government.
      </li>
      <li>
        <a href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer">
          Mayo Clinic
        </a> – Expert medical insights on heart disease, symptoms, and lifestyle tips.
      </li>
    </ul>
    <p>
      In addition to these resources, consider speaking with your healthcare provider, who can 
      recommend reading materials or local programs tailored to your needs. Keeping informed 
      helps you take control of your heart health journey. Remember, a combination of education, 
      regular check-ups, and a healthy lifestyle is key to maintaining good heart health. 
      Don't hesitate to reach out to professionals if you have questions or concerns.
    </p>
  </div>
</div>


      <img className="disclaimer" alt="Disclaimer" src={disclaimer} />

      <div className="footer">
        <p>University of Tennessee, Knoxville</p>
        <p>Fundamentals of Digital Archeology Course</p>
      </div>
    </div>
  );
}

export default Results;
