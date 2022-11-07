import { Router } from "next/router";
import { useState } from "react";
import { registerUser } from "../lib/auth";

export function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

async function handleSubmit(event) {
    event.preventDefault();
  
       const [response] = await registerUser({
        fullName,
        password,
        email,
      });
    if(response.body.isSuccess==true){
      print(response.body.message);
      Router.push('/components/log.js');
    }
    else if(response.body.isSuccess==false){
      print(response.body.errors);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>

        <legend>Register</legend>

        <div>
          <label>
            Email
          </label>
          <input type="email" id="emailInput"   placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label>
            Full Name
          </label>
          <input type="text" id="fullName"   placeholder="Full Name" onChange={(event) => setFullName(event.target.value)}/>
        </div>
        <div>
          <label>
            Password
          </label>
          <input type="password" id="passwordInput" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        </div>
        
        <button type="submit" className="btn btn">
          Submit
        </button>

      </fieldset>
    </form>
  );
}
