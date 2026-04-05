import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";

const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    progress.loaded();

    // Add class to show the character after loading
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add("character-loaded");
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={containerRef}>
          <div className="character-rim"></div>
          <div className="female-avatar">
            <svg viewBox="0 0 200 400" className="avatar-svg">
              <defs>
                <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6b9e7a" />
                  <stop offset="50%" stopColor="#4a7c59" />
                  <stop offset="100%" stopColor="#2d5a3d" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Female silhouette */}
              <g className="silhouette" filter="url(#glow)">
                {/* Head */}
                <ellipse cx="100" cy="45" rx="30" ry="35" fill="url(#avatarGradient)" />
                {/* Hair */}
                <path
                  d="M70 45 Q65 20 80 15 Q100 5 120 15 Q135 20 130 45 Q135 30 125 25 Q100 10 75 25 Q65 30 70 45"
                  fill="url(#avatarGradient)"
                  className="hair"
                />
                <path
                  d="M65 50 Q55 80 60 120"
                  stroke="url(#avatarGradient)"
                  strokeWidth="15"
                  fill="none"
                  className="hair-strand"
                />
                <path
                  d="M135 50 Q145 80 140 120"
                  stroke="url(#avatarGradient)"
                  strokeWidth="15"
                  fill="none"
                  className="hair-strand"
                />
                {/* Neck */}
                <rect x="90" y="75" width="20" height="25" fill="url(#avatarGradient)" />
                {/* Shoulders and upper body */}
                <path
                  d="M50 100 Q70 95 100 100 Q130 95 150 100 Q160 110 155 140 L155 200 L45 200 L45 140 Q40 110 50 100"
                  fill="url(#avatarGradient)"
                  className="body"
                />
                {/* Arms */}
                <path
                  d="M50 105 Q35 120 30 180 Q28 200 35 210"
                  stroke="url(#avatarGradient)"
                  strokeWidth="15"
                  fill="none"
                  className="arm left-arm"
                />
                <path
                  d="M150 105 Q165 120 170 180 Q172 200 165 210"
                  stroke="url(#avatarGradient)"
                  strokeWidth="15"
                  fill="none"
                  className="arm right-arm"
                />
                {/* Lower body - dress/skirt */}
                <path
                  d="M55 200 Q50 250 45 320 Q40 360 100 370 Q160 360 155 320 Q150 250 145 200"
                  fill="url(#avatarGradient)"
                  className="dress"
                />
              </g>
            </svg>
          </div>
          <div className="avatar-glow"></div>
        </div>
      </div>
    </>
  );
};

export default Scene;