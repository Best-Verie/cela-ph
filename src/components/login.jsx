import "./../App.css";
// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export function LoginForm() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [message, setMessage] = useState("");

  //   message = "";

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      //   let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        // setMessage("User created successfully");
      } else {
        console.log("erroooo occured!");
        // setMessage("Some error occured");
        console.log("email", email);
        console.log("passworddd", password);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white lg:w-2/3 p-5 text-black text-sm login-form">
      {/* <p>{message}</p> */}
      <form onSubmit={handleSubmit} className="p-3">
        <div className="form-group my-5">
          <label htmlFor="">
            <span className="block float-left my-3">Email Address</span>
            <input
              type="email"
              id="email"
              value={email}
              className="form-control p-2 w-full border rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group my-5">
          <label htmlFor="">
            <span className="block float-left my-3">Password</span>
            <input
              type="password"
              id="password"
              value={password}
              className="form-control p-2 w-full border rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn p-3 rounded text-white w-full login-btn"
          id="buy"
        >
          Login
        </button>
      </form>
    </div>
  );
}
