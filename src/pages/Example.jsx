import { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("The value of count changes");
  },[]);

  const deduct = () => {
    setCount((prevVal) => {
      console.log(prevVal);
      return prevVal - 1;
    });
    setStatus("You subtracted");
  };

  const add = () => {
    setCount((prev) => prev + 1);
    console.log(count);
    setStatus("You Added");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={deduct} style={{ fontSize: "64px" }}>
          -
        </button>
        <span style={{ fontSize: "32px" }}>{count}</span>
        <button onClick={add} style={{ fontSize: "64px" }}>
          +
        </button>
      </div>
      <p> {status}</p>
    </div>
  );
};

export default Example;
