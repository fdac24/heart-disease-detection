import "../assets/style.css";
import logo from "../assets/images/logo.png";
import disclaimer from "../assets/images/disclaimer.png";
import stats from "../components/Stats.svg";
import pencil from "../components/Pencil.svg";
import sparkle from "../components/Sparkle.svg";
import HDForm from "./HDForm";

export const Home = () => {
  return (
    <div className="home">
      <div className="header">Heart Disease Detection Tool</div>

      <div className="header-container">
        <div className="text-container">
          <p className="welcome">
            Welcome to our Heart Health Tool – Empowering you to take charge of
            your health.
          </p>
          <p className="welcome-text">
            As dedicated students committed to making a difference, we developed
            this tool to help empower individuals with knowledge about their
            heart health. Our mission is to provide easy access to insights that
            can encourage proactive choices for a healthier future.
          </p>
        </div>
        <img className="logo" alt="Logo" src={logo} />
      </div>

      {/* Our Goal Section */}
      <div className="overlap-3">
        <div className="content">
          <img className="sparkle" alt="Sparkle" src={sparkle} />
          <p className="text-wrapper-2">Our Goal</p>
        </div>
        <p className="goal-text">
          As part of our studies, we developed this tool to help you quickly
          assess your heart disease risk. Our goal is to empower you with
          insights for informed health choices. If you may be at risk, we
          encourage consulting a medical professional. Early awareness is key to
          prevention, and we’re here to support your journey to a healthier
          future.
        </p>
      </div>

      {/* Heart Statistics Section */}
      <div className="overlap">
        <div className="content">
          <img className="stats-instance" alt="Statistics" src={stats} />
          <p className="text-wrapper-2">Heart Statistics</p>
        </div>
        <p className="heart-text">
          Heart disease is a serious health concern, affecting more than 1 in 10
          adults in the U.S. It’s the leading cause of death, accounting for 1
          in 4 deaths, with over 700,000 lives lost in 2022 alone. Advanced
          imaging shows that nearly 70% of people tested have early signs of
          coronary artery disease, yet 3 in 5 of these cases go undiagnosed.
        </p>
      </div>

      {/* Our Model Section */}
      <div className="overlap-4">
        <div className="content">
          <img className="pencil" alt="Pencil" src={pencil} />
          <p className="text-wrapper-2">Our Model</p>
        </div>
        <p className="model-text">
          Our heart disease assessment uses a machine learning model based on a
          trusted medical dataset. It analyzes factors like blood pressure and
          cholesterol to offer insights into your heart health. While not a
          replacement for medical advice, this tool helps you decide if a
          check-up is needed. We’re using the latest data to support proactive
          health decisions.
        </p>
      </div>

      <p className="instructions">
        Using information from a medical assessment provided by your doctor,
        simply answer the questions, and we’ll assess your risk of having heart
        disease based on our pre-trained model. Together, we can take proactive
        steps towards preventing heart disease and fostering healthier lives for
        all.
      </p>

      <HDForm />

      <img className="disclaimer" alt="Disclaimer" src={disclaimer} />

      <div className="footer">
        <p>Univeristy of Tennessee, Knoxville</p>
        <p>Fundamentals of Digital Archeology Course </p>
      </div>
    </div>
  );
};
