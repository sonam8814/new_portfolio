import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>TechStartup India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed responsive web interfaces using React and collaborated
              with the design team to implement pixel-perfect UI components. Gained
              hands-on experience with modern development workflows and agile
              methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Self-employed</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built full-stack applications for local businesses and startups.
              Delivered projects using Node.js, MongoDB, and React while managing
              client relationships and project timelines independently.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Seeking Opportunities</h4>
                <h5>Open to Work</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently enhancing my skills in backend development, system design,
              and machine learning. Actively building projects that solve real-world
              problems while seeking an opportunity in a growth-oriented tech
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
