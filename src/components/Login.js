import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(email, password);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      window.M.toast({
        html: `Welcome ${result.user.email}`,
        classes: "green",
      });
      history.push("/");
    } catch (err) {
      window.M.toast({ html: err.message, classes: "red" });
    }
  };
  return (
    <div className="center container" style={{ maxWidth: "500px" }}>
      <h3> Please Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-field  ">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn blue">
          Login
        </button>
      </form>
    </div>
  );
}
