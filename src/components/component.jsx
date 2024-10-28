import "../assets/style.css";
import logoimport from "../images/logo.png";

export const Title = () => {
  return (
    <div className="title">
      <p className="text-wrapper">
        Welcome to our heart disease detection tool!
      </p>
    </div>
  );
};

export const Label = () => {
  return (
    <div className="label">
      <p className="bio">
        <span className="text-wrapper">
          We’re a team of dedicated students with a shared goal:{" "}
        </span>
        <span className="italic">
          to help you take charge of your heart health. <br />
        </span>
        <span className="text-wrapper">
          <br />
          Simply answer the questions provided, and we’ll assess your risk based
          on the latest research. Together, we can work towards preventing heart
          disease and promoting healthier lives. <br />
        </span>
        <span className="disclaimer">
          Important Disclaimer:
          We are not medical professionals. The information and assessments provided 
          by this tool are for educational purposes only and should not be considered
          medical advice. If you are experiencing a medical emergency or have serious 
          concerns about your health, please call 911 or consult with a licensed 
          healthcare professional immediately.
        </span>
      </p>
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="image">
      <img className="logo" src={logoimport} />
    </div>
  );
};
