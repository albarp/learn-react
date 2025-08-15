import { useState, type ChangeEvent } from "react";
import BackGround from "./Background";
import Box from "./Box";

export default function BackgroundBox() {
  const [box, setBox] = useState({ color: 'orange', position:{X: 0, Y: 0 }});

  function onBoxMove(dx: number, dy: number) {
    setBox({
        ...box,
        position: {
            X: box.position.X + dx,
            Y: box.position.Y + dy
        }
    })
  }

  function onChangeColor(e: ChangeEvent<HTMLSelectElement>){
    setBox({
        ...box,
        color: e.target.value
    })
  }

  return (
    <>
      <select value={box.color} onChange={onChangeColor}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <BackGround position={{ x: 0, y: 0 }} />
      <Box
        color={box.color}
        position={{ X: box.position.X, Y: box.position.Y }}
        onMove={onBoxMove}
      >
        Drag me
      </Box>
    </>
  );
}
