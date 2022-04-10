import {Link, useNavigate} from 'react-router-dom';
import './SignUpPage.css';
import { useState } from "react";
import { findByAltText } from '@testing-library/react';
import User from '../index';


function SignUpPage({db}) {
  const [createUser, setCreateUser]= useState({username:'', nickname:'', img:'', password:'', confirmpassword:''});
  var nav = useNavigate();


  // add new user to DB
  function ifSubmit(x){
    if (chackEmpty()) {
      if (validatePassword()){
        if (passwordConfirmation()){
          if (ifExist()){
            var newUser = new User(createUser.username, createUser.nickname, createUser.img, createUser.password, createUser.confirmpassword);
            db.push(newUser);
            nav("/LoginPage");
          }
          else{
            alert("Username is already exist");
            x.preventDefault();
          }
        }
        else{
          alert ("Password do not match");
          x.preventDefault();
        }
      }
      else{
        alert("Password must conatain : lowercase letter, uppercase letter, number and minimum 8 charcters");
        x.preventDefault();
      }
    }
    else{
      alert("Please fill all fields");
      x.preventDefault();
    }

  }
  

  // check if user is already exist
  function ifExist(){
    if(db.find((e) => e.UserName == createUser.username)){
      return false;     
    } else {
      return true;
    }
  }

  // check empty fields
  function chackEmpty(){
    if (((createUser.username.length == 0) || (createUser.nickname.length == 0) || (createUser.img.length == 0) ||
    (createUser.password.length == 0) || (createUser.confirmpassword.length == 0))){ 
      return false;
    }
    else{
      return true; 
    }
  }

  // check validation of confirm password
  function passwordConfirmation(){
    if (!(createUser.confirmpassword == createUser.password)){
      return false;
    }
    return true;
  }

  function ifChange(event){
    const {name, value} = event.target;
    setCreateUser({
      ...createUser,
      [name]:value
    })
  }

  // validation of password
  function validatePassword(){
    if ((/[a-z]/.test(createUser.password)) && (/[A-Z]/.test(createUser.password))
    && (/[0-9]/.test(createUser.password)) && (createUser.password.length >= 8)){
      return true;
    }
    else {      
      return false;
    }
  }

  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {/* Sidebar with image */}
          <nav id="mainImage" className="w3-sidebar w3-hide-medium w3-hide-small">
            <div className="bgimg" >/</div>
          </nav>
        </div> 

        <div className='col1'>
          <div id = "headDec">
            {/* Header */}
            <header className="w3-container w3-center" id="home">
              <h1 className="w3-jumbo">
                <b>O-N Chat</b>
              </h1>
              <p> Fast, Simple and Secure Messaging.</p>
            </header>
          </div>

          <div className = "signupPageHeadline w3-container w3-light-grey w3-center w3-opacity">
                <label>
                    <div className =" SignUpText w3-center w3-large" > 
                        SignUp
                    </div>            
                </label>
            </div>

          <div id ='put'>
            <form action="/action_page.php" target="_blank">
              <p>
                  <input className="w3-input w3-padding-16 w3-border" type="text" name="username" 
                  placeholder="Username" onChange={ifChange} />
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border" type="text" name ="nickname"
                  placeholder="NickName"  onChange={ifChange} />
              </p>
              <label>Select Image : </label>
              <input className="addImage" type="file" onChange={ifChange} name="img" />
            </form>
            <p>
              <input className="w3-input w3-padding-16 w3-border" name="password" type="password"
                placeholder="Password"  onChange={ifChange} />
            </p>
            <p>
              <input className="w3-input w3-padding-16 w3-border" name="confirmpassword" type="password"                
                placeholder="Confirm Password" onChange={ifChange}/>
            </p>
            <form onSubmit={ifSubmit}>
              <button className='w3-button w3-light-grey w3-padding-large' >
                Sign Up
              </button>
            </form>
            {/* End Contact Section*/}
          </div>
          {/* Footer */}
          <footer
              id="poweredBy" className=" w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge ">
              <p className="w3-medium">
              Powered by <a>Or Nasri &amp; Noa Benita</a>
              </p>
            {/* End footer */}
          </footer>
        </div>  
        {/* END PAGE CONTENT */}
      </div>
      
    </div>

  );
}


export default SignUpPage