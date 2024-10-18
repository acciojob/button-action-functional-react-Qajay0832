import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para,setPara]=useState(false);
  return (
    <div id="main">
      <p id="para">{para?"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy":''}</p>
      <button id="click" onClick={()=>setPara(true)}>Click Me</button>
    </div>
  );
}


export default App;
