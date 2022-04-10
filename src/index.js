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
    this.chats = [];
  }
}

class Chat{
  constructor(){
    this.messages=[];
  }
}


var loggedIn;

const dataStracture= [{name:'or', nickname: 'orush', img:'photo.jpg', password: 12345, confirmPassword : 12345, 
                    chats: [{data:"hey",time: '12:10',flag:true},{data:"?",time: '12:15',flag:false}, {data:"what",time: "12:17",flag:false}],
                     friends: ["noa", "mor"]}]
                     
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
export default User
