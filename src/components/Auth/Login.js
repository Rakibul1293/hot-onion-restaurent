import React, { useState } from 'react';
import { useAuth } from "./Auth.js";
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
import "./Login.css";
import logo from './images/logo.png';


const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isNewAccount, setNewAccount] = useState(true);
  const [isConPass, setIsConPass] = useState(false);
  // const history = useHistory();
  const auth = useAuth();
  console.log(auth);

  const onSubmit = data => {
    console.log(data.email, data.password);
    if (isNewAccount) {
      auth.signup(data.email, data.password)
        .then(res => {
          console.log('success', res);
          // history.push('/food-category');
        })
    }
    else {
      auth.signin(data.email, data.password)
        .then(res => {
          console.log('success', res);
        })
    }
  };

  const toggleSigninType = (e, type) => {
    e.preventDefault();
    setNewAccount(type);
  }

  const conPassHandle = () => {
    const password = document.getElementById("password").value;
    console.log(password);
    const conPassword = document.getElementById("conPassword").value;
    console.log(conPassword);
    if (password !== conPassword) {
      setIsConPass(true);
      return;
    } else {
      setIsConPass(false);
    }
  }


  return (
    <div className="ship bg">
      <div className="ship-form">
        <img src={logo} alt="" />

        {
          isNewAccount ?
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 style={{ color: "#f91944" }}>Sign In Form</h3>

              <input name="name" ref={register({ required: true })} placeholder="Name" />
              {errors.name && <span className="error">Name is required</span>}

              <input name="email" ref={register({ required: true })} placeholder="Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input id="password" name="password" defaultValue="" ref={register({ required: true })} placeholder="Password" />
              {errors.password && <span id="passErr" className="error">Password is required</span>}

              <input id="conPassword" name="conPassword" defaultValue="" ref={register({ required: true })} placeholder="Confirm Password" />
              {errors.conPassword && <span className="error">Confirm Password is required</span>}
              {isConPass && <span id="conPassErr" className="error">Password Doesn't Match</span>}

              <input onClick={() => conPassHandle()} style={{ color: "#f91944", fontWeight: "500" }} type="submit" />
              <a href=""
                onClick={(e) => toggleSigninType(e, false)}
                style={{ marginLeft: "61px", marginTop: "31px", color: "#f91944", fontWeight: "500", textDecoration: "none" }}>
                Already have an Account ?
              </a>
            </form>
            :
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 style={{ color: "#f91944" }}>Log In Form</h3>

              <input name="email" ref={register({ required: true })} placeholder="Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input name="password" ref={register({ required: true })} placeholder="Password" />
              {errors.password && <span className="error">Password is required</span>}

              <input style={{ color: "#f91944", fontWeight: "500" }} type="submit" />
              <a href=""
                onClick={(e) => toggleSigninType(e, true)}
                style={{ marginLeft: "61px", marginTop: "31px", color: "#f91944", fontWeight: "500", textDecoration: "none" }}>
                Create a new Account ?
              </a>
            </form>
        }
      </div>
    </div >
  );
};

export default Login;