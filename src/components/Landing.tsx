import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger flower bloom animation after component mounts
    const timer = setTimeout(() => {
      if (flowerRef.current) {
        const container = flowerRef.current.querySelector('.flower-container');
        if (container) {
          container.classList.add('loaded');
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SONAM
              <br />
              <span>KUMARI</span>
            </h1>
          </div>
          <div className="landing-center-flower" ref={flowerRef}>
            <div className="flower-container">
              <div className="flower-petals">
                <div className="petal petal-1"></div>
                <div className="petal petal-2"></div>
                <div className="petal petal-3"></div>
                <div className="petal petal-4"></div>
                <div className="petal petal-5"></div>
                <div className="petal petal-6"></div>
                <div className="petal petal-7"></div>
                <div className="petal petal-8"></div>
              </div>
              <div className="flower-inner-petals">
                <div className="inner-petal inner-1"></div>
                <div className="inner-petal inner-2"></div>
                <div className="inner-petal inner-3"></div>
                <div className="inner-petal inner-4"></div>
              </div>
              <div className="flower-center">
                <div className="flower-core"></div>
              </div>
            </div>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">& Designer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">& Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
