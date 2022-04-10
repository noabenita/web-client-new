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

class Message {
  constructor(time, data, flag){
    this.time = time;
    this.data = data;
    this.flag = flag; // 1 - if i send , 0- else
  }

}



const currentUser = {nowOnline:"null"}; 

const dataStracture= [new User(null)];

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/" element ={<LoginPage db={dataStracture} current={currentUser}/>}>
              </Route>
              <Route path="/LoginPage" element ={<LoginPage db={dataStracture}  current={currentUser}/>}>
              </Route>
              <Route path="/SignUpPage" element ={<SignUpPage db={dataStracture}  current={currentUser}/>}>
              </Route>
              <Route path="/ChatPage" element ={<ChatPage db={dataStracture} current={currentUser}/>}>
              </Route>
            </Routes>
        </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
export default User