import React, { useState } from "react";
import "./App.css";

function App() {

  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  const [passwords, setPasswords] = useState({
    password1: "",
    password2: "",
  });

  const [passwordLength, setPasswordLength] = useState(12);

  function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

  function getRandomPassword() {
    let randomPasssword = ""
    for (let i=0; i < passwordLength; i++){
      randomPasssword += getRandomCharacter()
    }
    return randomPasssword
  }

  function generatePasswords() {
    const generatedPasswordOne = getRandomPassword();
    const generatedPasswordTwo = getRandomPassword();
    setPasswords({
      password1: generatedPasswordOne,
      password2: generatedPasswordTwo,
    });
  }

  function copyPassword(e) {
    const password = e.target.value;
  navigator.clipboard.writeText(password);
  const popup = document.getElementById("copied-popup");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 1000);
  }

  function handlePasswordLengthChange(e) {
    setPasswordLength(parseInt(e.target.value));
  }
  

  return (
    <div className="container">
      <div className="header">Generate a <br/> <span className="header--span">random password</span></div>
      <div className="subheader">Never use an insecure password again.</div>
      <label className="lab--slide">
        Password Length:
        <div class="slider-container">
          <input type="range" min="8" max="20" value={passwordLength} onChange={handlePasswordLengthChange} class="slider" id="password-length-slider" />
          <span class="slider-value">{passwordLength}</span>
        </div>
      </label>

      <button className="generate-btn" onClick={generatePasswords}>Generate passwords</button>
      <div className="passwords">
        <div className="line"></div>
      <label>
          <input className="pass--input" type="text" placeholder="Password 1" readOnly value={passwords.password1} onClick={copyPassword}/>
          <input className="pass--input" type="text" placeholder="Password 2" readOnly value={passwords.password2} onClick={copyPassword}/>
      </label>
      <div className="copied-popup" id="copied-popup">Copied!</div>
      </div>
    </div>
  );
}

export default App;
