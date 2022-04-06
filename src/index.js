import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatPage from './chatPage/ChatPage';
import LoginPage from './loginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './signUpPage/SignUpPage';

class User{
  constructor(username, nickname, img, password, confirmpassword, online){
    this.UserName = username;
    this.Nickname = nickname;
    this.Img = img;
    this.Password = password;
    this.ConfirmPassword = confirmpassword;
    this.online = online;
    this.chats = [];
  }
}

class Chat{
  constructor(){
    this.messages=[];
  }
}

class Message {
  constructor(time, data, flag){
    this.time = time;
    this.data = data;
    this.flag = flag; // 1 - if i send , 0- else
  }

}

var loggedIn;

function onLogin(user){
  console.log(user);
  loggedIn = user;
}

function getLogin(){
  return loggedIn;
}

const dataStracture= [new User('or', 'orush', 'photo.jpg', 12345, 12345)];


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/" element ={<LoginPage db={dataStracture} lg= {loggedIn} />}>
              </Route>
              <Route path="/LoginPage" element ={<LoginPage db={dataStracture} lg= {loggedIn}/>}>
              </Route>
              <Route path="/SignUpPage" element ={<SignUpPage db={dataStracture}/>}>
              </Route>
              <Route path="/ChatPage" element ={<ChatPage db={dataStracture} lg= {loggedIn}/>}>
              </Route>
            </Routes>
        </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
export default User;

