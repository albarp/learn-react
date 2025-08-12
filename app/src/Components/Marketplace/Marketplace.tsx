import { useState } from "react";

export default function Marketplace() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleBuy(): Promise<void> {
    setPending(pending + 1)
    await delay(3000)
    setPending(p => p -1)
    setCompleted(completed + 1)
  }

  function delay(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
  }

  return (
    <>
      <h3>Pending {pending}</h3>
      <h3>Completed {completed}</h3>
      <button onClick={handleBuy}>Buy</button>
    </>
  );
}
