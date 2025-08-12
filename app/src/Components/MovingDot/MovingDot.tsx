import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({ X: 0, Y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({ X: e.clientX, Y: e.clientY });
      }}
      style={{
        position: "relative",
        width: "50vw",
        height: "50vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: position.X - 10,
          top: position.Y - 10,
          width: 20,
          height: 20,
        }}
      ></div>
    </div>
  );
}
