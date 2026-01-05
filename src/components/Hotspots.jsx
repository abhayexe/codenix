import { useState } from "react";
import { Html } from "@react-three/drei";

function Hotspot({ position, id, label, onHotspotClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html
      position={position}
      center
      transform={false}
      sprite
      zIndexRange={[0, 0]}
    >
      <div
        onClick={() => onHotspotClick(id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {/* Main marker icon */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: hovered
              ? "linear-gradient(135deg,rgb(0, 115, 255),rgb(60, 0, 255))"
              : "linear-gradient(135deg,rgba(255, 255, 255, 0.22),rgba(255, 255, 255, 0.67))",
            border: hovered ? "3px solid #00ffff" : "3px solid #ffffff",
            boxShadow: hovered
              ? "0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)"
              : "0 0 10px rgba(255, 255, 255, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: hovered ? "#ffffff" : "#333333",
              boxShadow: hovered ? "0 0 10px #ffffff" : "none",
            }}
          />
        </div>

        {/* Pulsing ring animation */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid rgba(0, 255, 255, 0.6)",
            animation: "pulse 2s ease-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Tooltip on hover */}
        {hovered && (
          <div
            style={{
              position: "absolute",
              top: "-45px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0, 0, 0, 0.9)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              whiteSpace: "nowrap",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 255, 255, 0.5)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              pointerEvents: "none",
            }}
          >
            {label}
            <div
              style={{
                position: "absolute",
                bottom: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid rgba(0, 0, 0, 0.9)",
              }}
            />
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </Html>
  );
}

export default function Hotspots({ onHotspotClick }) {
  const hotspots = [
    { id: "monitor", position: [1.2, 1.4, -0.77], label: "Learn More" },
    { id: "desk", position: [1.2, 1.4, .93], label: "Join" },
    // { id: "keyboard", position: [0.8, 0.95, -0.3], label: "Keyboard" },
  ];

  return (
    <group>
      {hotspots.map((hotspot) => (
        <Hotspot
          key={hotspot.id}
          position={hotspot.position}
          id={hotspot.id}
          label={hotspot.label}
          onHotspotClick={onHotspotClick}
        />
      ))}
    </group>
  );
}
