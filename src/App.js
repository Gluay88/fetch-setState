import React, { useEffect, useState } from "react";
import "./App.css";

// public/data.json
//states
// idle
// loading
// loaded
// error

function App() {
  const [state, setState] = useState("idle");

  function clicked() {
    setState("loading");
    fetch("/data.json")
      .then((data) => {
        try {
          JSON.parse(data);
          setState("loaded");
        } catch (error) {
          setState("req-error");
        }
      })
      .catch((err) => {
        setState("network-error");
      });
  }

  if (state === "loading") {
    return <h1>Loaging...</h1>;
  }
  if (state === "req-error") {
    return <h1>Bad request!</h1>;
  }
  if (state === "network-error") {
    return <h1>Something weng wrong!</h1>;
  }
  return (
    <div className="App" onClick={clicked}>
      Current state: {state}
    </div>
  );
}

export default App;
