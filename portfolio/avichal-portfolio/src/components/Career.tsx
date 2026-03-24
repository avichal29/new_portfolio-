import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Intern</h4>
                <h5>Sankalptaru Foundation</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built predictive models using Python and scikit-learn for
              forecasting farm conditions. Performed demand analysis with
              Matplotlib to support sustainable farming strategy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Vision Intern</h4>
                <h5>TechEagle Innovations</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a CV-based drone system integrating YOLOv5 with
              real-time feedback control. Designed autonomous landing in
              ROS/Gazebo using OpenCV and ArUco markers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founding Engineer</h4>
                <h5>Datavedam</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building a multi-product AI-driven platform from the ground up
              using Python, FastAPI & React. Developing AI agents, RAG systems,
              OCR/OMR pipelines, and scalable backend services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
