import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(
    // 1st arg: side effect (callback function)
    () => console.log("useEffect called"),
    // 2nd arg: dependencies array
    [count]
  );

  //abdther way to write in array of dependencies as a secind arguemnt
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  //updating itle of page using useeffect
  useEffect(() => {
    document.title = "dogs";
  }, [text]);

  //settimeout with useeffect
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
