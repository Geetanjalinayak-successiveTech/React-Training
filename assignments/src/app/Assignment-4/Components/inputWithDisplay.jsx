"use client";
import { useState } from "react";

export default function InputWithDisplay() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    input !== ""
      ? setMessage("This message is Shown Because you typed something ")
      : setMessage("");
  }

  return (
    <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
        background: "#f4f4f4",
      }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleClick}> CLick to show message </button>
      {message!=="" ? <h2>{message}</h2> : <></>}
    </main>
  );
}
