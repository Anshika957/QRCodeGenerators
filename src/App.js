import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react'; 

function App() {
  const [text, setText] = useState("");
 function generateQR(e)
 {
setText()
 }
 function handleChange(e){
  setText(e.target.value)
 }
  return (
    <div classname="App">
        <h1>
           QR CODE GENERATOR
        </h1>
        <QRCode value={text}/>
        <div classname="input-here">
          <p>ENTER YOUR GENERATE CODE</p>
          <input types="text" value={text} onChange={(e)=>{handleChange(e)}}/>
          </div>
         </div>
  
  );
}

export default App;