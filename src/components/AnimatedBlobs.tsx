import { useEffect, useRef } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";

const AnimatedBlobs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    progress.loaded();

    const container = containerRef.current;
    if (!container) return;

    const timer = setTimeout(() => {
      container.classList.add("blobs-loaded");
    }, 300);

    return () => {
      clearTimeout(timer);
      progress.clear();
    };
  }, [setLoading]);

  return (
    <div className="animated-blobs-container" ref={containerRef}>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob-glow"></div>
    </div>
  );
};

export default AnimatedBlobs;