import React, { useState } from "react";
import { signInWithEmailAndPassword } from "../../../firebase";

const HeaderGuest: React.FC = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginOrRegister = () => {
    if (email.trim() && password.trim()) {
      signInWithEmailAndPassword(email, password);
    }
  };
  return (
    <div className="row">
      <div className="col">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="col">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={handleLoginOrRegister}>
          Login/Register
        </button>
      </div>
    </div>
  );
};

export default HeaderGuest;
