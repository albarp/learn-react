import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleWalk() {
    alert(`Next is ${walk ? 'Stop' : 'Walk'}`)
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleWalk}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1 style={ {color: walk ? 'darkgreen': 'darkred'}}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
