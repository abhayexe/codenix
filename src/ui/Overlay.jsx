import { useEffect, useState } from "react";
import "./Overlay.css";

const overlayContent = {
  monitor: {
    title: "Learn More",
    description:
      "Learn More about CODÉNIX at ",
  },
  desk: {
    title: "Join",
    description: "Join CODÉNIX",
  },
  keyboard: {
    title: "Keyboard",
    description: "The tool that brings ideas to life, one keystroke at a time.",
  },
};

export default function Overlay({ activeHotspot, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (activeHotspot) {
      setTimeout(() => setVisible(true), 600);
    } else {
      setVisible(false);
    }
  }, [activeHotspot]);

  if (!activeHotspot) return null;

  const content = overlayContent[activeHotspot];

  return (
    <div className={`overlay ${visible ? "visible" : ""}`}>
      <div className="overlay-content">
        {/* <button className="back-btn" onClick={onClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button> */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </div>
  );
}
