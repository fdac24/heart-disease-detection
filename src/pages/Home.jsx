import "../assets/style.css";
import logo from "../assets/images/logo.png";
import disclaimer from "../assets/images/disclaimer.png";
import stats from "../assets/images/Stats.png";
import pencil from "../components/Pencil.svg";
import sparkle from "../components/Sparkle.svg";
// import HDForm from './HDForm';

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="header">Heart Disease Detection Tool</div>

        <p className="welcome">
          Welcome to our Heart Health Tool – Empowering you to take charge of
          your health.
        </p>

        <img className="logo" alt="Logo" src={logo} />

        <p className="welcome-text">
          As dedicated students committed to making a difference, we developed
          this tool to help empower individuals with knowledge about their heart
          health. Our mission is to provide easy access to insights that can
          encourage proactive choices for a healthier future.
        </p>

        <div className="heart">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="ellipse-2" />

            <p className="heart-text">
              <span className="text-wrapper">
                Heart disease is a serious health concern, affecting more than 1
                in 10 adults in the U.S. It’s the leading cause of death,
                accounting for 1 in 4 deaths, with over 700,000 lives lost in
                2022 alone. Advanced imaging shows that nearly 70% of people
                tested have early signs of coronary artery disease, with about
                90% of adults in the U.S. at risk of develop, yet 3 in 5 of
                these cases go undiagnosed.
              </span>
            </p>
          </div>

          <div className="overlap">
            <p className="div-2">
              <span className="text-wrapper-2">H</span>
              <span className="text-wrapper-2">eart Statistics</span>
            </p>

            <img className="stats-instance" alt="Statistics" src={stats} />
          </div>
        </div>

        <div className="goal">
          <div className="overlap-2">
            <div className="ellipse" />
            <div className="ellipse-2" />

            <p className="goal-text">
              As part of our studies, we developed this tool to help you quickly
              assess your heart disease risk. Our goal is to empower you with
              insights for informed health choices. If you may be at risk, we
              encourage consulting a medical professional. Early awareness is
              key to prevention, and we’re here to support your journey to a
              healthier future.
            </p>
          </div>

          <div className="overlap-3">
            <div className="div-2">Our Goal</div>

            <img className="sparkle" alt="Sparkle" src={sparkle} />
          </div>
        </div>

        <div className="model">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="ellipse-2" />

            <p className="model-text">
              Our heart disease assessment uses a machine learning model based
              on a trusted medical dataset. It analyzes factors like blood
              pressure and cholesterol to offer insights into your heart health.
              While not a replacement for medical advice, this tool helps you
              decide if a check-up is needed. We’re using the latest data to
              support proactive health decisions.
            </p>
          </div>

          <div className="overlap-4">
            <div className="div-2">Our Model</div>

            <img className="pencil" alt="Pencil" src={pencil} />
          </div>
        </div>

        <p className="instructions">
          <br />
          Using information from a medical assessment provided by your doctor,
          simply answer the questions, and we’ll assess your risk of having
          heart disease based on our pre-trained model. Together, we can take
          proactive steps towards preventing heart disease and fostering
          healthier lives for all.
        </p>

        {/* HDForm here */}
        {/* <HDForm */}

        <img className="disclaimer" alt="Disclaimer" src={disclaimer} />
      </div>
    </div>
  );
};
