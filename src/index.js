import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatPage from './chatPage/ChatPage';
import LoginPage from './loginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './signUpPage/SignUpPage';


class User{
    constructor(username, nickname, img, password, confirmpassword){
      this.UserName = username;
      this.Nickname = nickname;
      this.Img = img;
      this.Password = password;
      this.ConfirmPassword = confirmpassword;
    }
}

const dataStracture= [new User('or', 'orush', 'photo.jpg', 12345, 12345)];


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/" element ={<LoginPage />}>
              </Route>
              <Route path="/SignUpPage" element ={<SignUpPage />}>
              </Route>
              <Route path="/ChatPage" element ={<ChatPage />}>
              </Route>
            </Routes>
        </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();