import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!container || box.length === 0) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX + 200}`,
        scrub: true,
        pin: true,
        id: "work",
        pinSpacing: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after a short delay to ensure proper layout
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    // Clean up
    return () => {
      clearTimeout(refreshTimeout);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  // Add spacer after work section to prevent overlap
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const projects = [
  { name: "E-Commerce Platform", category: "Full Stack Web App", tools: "React, Node.js, MongoDB, Stripe" },
  { name: "Portfolio Website", category: "3D Interactive Experience", tools: "Three.js, GSAP, React" },
  { name: "Task Management App", category: "Productivity Tool", tools: "Next.js, TypeScript, PostgreSQL" },
  { name: "Social Media Dashboard", category: "Analytics Platform", tools: "React, D3.js, Firebase" },
  { name: "Brand Identity Design", category: "UI/UX Design", tools: "Figma, Illustrator" },
  { name: "Blog Platform", category: "Content Management", tools: "Next.js, MDX, Tailwind" },
];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
