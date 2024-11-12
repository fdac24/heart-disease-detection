import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <div className="results-container">
      {result ? (
        <>
          <h2>Prediction Result:</h2>
          <p>Prediction: {result.prediction ? "Low Risk" : "High Risk"}</p>
        </>
      ) : (
        <p>No result available. Please try again.</p>
      )}
    </div>
  );
}

export default Results;
