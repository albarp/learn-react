import { useState } from "react";
import ColorSwitch from "./ColorSwitch";

export default function ColorChoose() {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(0);

  function handleChangeColor() {
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div onClick={() => setCount(count + 1)}>
        {count}
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <ColorSwitch onChangeColor={handleChangeColor} />
      </div>
    </>
  );
}
