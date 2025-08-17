import { useState } from "react";

export default function ShapeEditor() {
  const [shapes, setShapes] = useState([
    {
      x: 0,
      y: 20,
      kind: "circle",
    },
    {
      x: 40,
      y: 20,
      kind: "square",
    },
    {
      x: 80,
      y: 20,
      kind: "circle",
    },
  ]);

  function onMoveShapes() {
    const newShapesPosition = shapes.map((s) => ({
      ...s,
      y: s.kind === "circle" ? s.y + 10 : s.y,
    }));
    setShapes(newShapesPosition);
  }

  const shapeElements = shapes.map((s) => (
    <div
      style={{
        height: 20,
        width: 20,
        margin: 10,
        position: "absolute",
        left: s.x,
        top: s.y,
        backgroundColor: "rgb(138, 18, 185)",
        borderRadius: s.kind === "circle" ? "50%" : "0",
      }}
    />
  ));

  return (
         <div
       style={{
         height: 500,
         width: 500,
         position: "relative",
       }}
     >
      <button onClick={onMoveShapes}>Move circles down</button>
      <div>{shapeElements}</div>
    </div>
  );
}
