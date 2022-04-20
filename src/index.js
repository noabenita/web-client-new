import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatPage from './chatPage/ChatPage';
import ContactChat from './ContactChat';
import LoginPage from './loginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './signUpPage/SignUpPage';




// class User{

//   constructor(username, nickname, img, password, chats){
//     this.UserName = username;
//     this.Nickname = nickname;
//     this.Img = img;
//     this.Password = password;
//     this.Chats = chats;
//   }

// }

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

const currentUser = {nowOnline:null}; 

const dataStructure= [
  {UserName:'or',
  NickName:'orush',
  Img:"https://bootdey.com/img/Content/avatar/avatar3.png",
  Password: 1, 
  Chats:[
    {contact: 'ron',
    imgContact: "https://bootdey.com/img/Content/avatar/avatar2.png",
    message:[
      {data:"hey",time: '12:10',flag:true},
      {data:"?",time: '12:15',flag:false},
      {data:"what",time: "12:17",flag:false}]}, 
    {contact :"hen",
    imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
    message:[
      {data:"how are u??",time: '14:10',flag:true},
      {data:"♥",time: '14:11',flag:true},
      {data:"fine, honey",time: "14:40",flag:false}]},
    {contact :"noa",
     imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
     message:[
       {data:"how are u??",time: '14:10',flag:true},
       {data:"♥",time: '14:11',flag:true},
       {data:"fine, honey",time: "14:40",flag:false}]}]}];




                     
        

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/" element ={<LoginPage db={dataStructure} current={currentUser}/>}>
              </Route>
              <Route path="/LoginPage" element ={<LoginPage db={dataStructure}  current={currentUser}/>}>
              </Route>
              <Route path="/SignUpPage" element ={<SignUpPage db={dataStructure}  current={currentUser}/>}>
              </Route>
              <Route path="/ChatPage" element ={<ChatPage db={dataStructure} current={currentUser}/>}>
              </Route>
              {/* <Route path="/ContactChat" element ={<ContactChat  db={dataStracture}  current={currentUser}/>}>
              </Route> */}
            </Routes>
        </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// export default User