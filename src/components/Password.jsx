import React, { useState } from "react";
import { generatePass, copyPassword } from "../logic";
import copy from "../assets/copy.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Password = () => {
  const [password, setPassword] = useState(10);
  const [generatedPassword, setgeneratedPassword] = useState("");

  const generatePassword = () => {
    const config = {
      range: document.getElementById("passwordRange").value,
      usingMayus: document.getElementById("usingMayus").checked,
      usingNumbers: document.getElementById("usingNumbers").checked,
      usingSymbols: document.getElementById("usingSymbols").checked,
    };

    setPassword(config.range);

    const passGebnerated = generatePass(config);

    setgeneratedPassword(passGebnerated);

    return passGebnerated;
  };

  return (
    <div className="password-card">
      <span>Genera tu contraseña</span>
      <div className="password">
        <input
          id="main-generated-pass"
          type="text"
          readOnly
          value={generatedPassword}
        />
        <div onClick={copyPassword} className="copy">
          <img src={copy} alt="Copy password" />
        </div>
      </div>
      <div className="configuration">
        <div className="range">
          <input
            id="passwordRange"
            onChange={generatePassword}
            type="range"
            max={30}
            min={5}
            value={password}
          />
          <span>{password}</span>
        </div>
        <br />
        <div className="props">
          <div className="item">
            <input
              onChange={generatePassword}
              id="usingMayus"
              type="checkbox"
            />
            <span>Incluir mayúsculas</span>
          </div>
          <div className="item">
            <input
              onChange={generatePassword}
              id="usingNumbers"
              type="checkbox"
            />
            <span>Incluir números</span>
          </div>
          <div className="item">
            <input
              onChange={generatePassword}
              id="usingSymbols"
              type="checkbox"
            />
            <span>Incluir simbolos</span>
          </div>
        </div>
      </div>
      <ToastContainer />
      <button onClick="generatePassword">Reload<button/>
    </div>
  );
};
