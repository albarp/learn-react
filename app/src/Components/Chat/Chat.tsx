import { useState } from "react";

export default function Chat() {
  const [recipient, setRecipient] = useState("Alice");
  const [message, setMessage] = useState("")

  function handleSubmmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
        alert(recipient)
    }, 5000);
  }

  return (
    <form onSubmit={ e => handleSubmmit(e)}>
      <label>To {recipient}</label>
      <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
        <option value={"Alice"}>Alice</option>
        <option value={"Bob"}>Bob</option>
      </select>
      <textarea value={message} onChange={ e => setMessage(e.target.value)}></textarea>
      <button type="submit">Send</button>
      </form>
  );
}
