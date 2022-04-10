import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatPage from './chatPage/ChatPage';
import LoginPage from './loginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './signUpPage/SignUpPage';




class User{

  constructor(username, nickname, img, password, confirmpassword, chats, friends){
    this.UserName = username;
    this.Nickname = nickname;
    this.Img = img;
    this.Password = password;
    this.ConfirmPassword = confirmpassword;
    this.Chats = chats;
    this.Friends = friends;
  }

}

// class Chat{
//   constructor(){
//     this.messages=[];
//   }
// }

// class Message {
//   constructor(time, data, flag){
//     this.time = time;
//     this.data = data;
//     this.flag = flag; // 1 - if i send , 0- else
//   }

// }

const currentUser = {nowOnline:null}; 

const dataStracture= [new User('or', 'orush', "https://bootdey.com/img/Content/avatar/avatar3.png", 12345, 12345, 
                    [{data:"hey",time: '12:10',flag:true},{data:"?",time: '12:15',flag:false},
                     {data:"what",time: "12:17",flag:false}],
                    [{friendName:"ron", img:"https://bootdey.com/img/Content/avatar/avatar2.png"},
                     {friendName: "noa benita", img: "https://bootdey.com/img/Content/avatar/avatar3.png"}])]
                     
        

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