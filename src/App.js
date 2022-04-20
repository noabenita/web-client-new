import React, { useState } from 'react';
import LoginPage from './loginPage/LoginPage'
import Chat from './chatPage/Chat';
import SignUpPage from './signUpPage/SignUpPage';

function App() {
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

  // const[dataStructure, setDataStructure] = React.useState()      
  const[mode,setMode]=React.useState(0);
  const[user, setUser]= React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const[current,setCurrent]=React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});

    function insertNewUser(username,nickname,img, password, chats){
      // user
      dataStructure.push({username,nickname,img, password, chats});
    }

    function ifSubmit(username,nickname,img, password, confirmpassword){
    console.log('ifSubmit of signup');
      if (!(((username.length == 0) || (nickname.length == 0) || (img.length == 0) ||
      (password.length == 0) || (confirmpassword.length == 0)))) {
          if(img != ' '){
              if ((/[a-z]/.test(password)) && (/[A-Z]/.test(password))
              && (/[0-9]/.test(password)) && (password.length >= 8)){
                  if ((confirmpassword == password)){
                      if (!(dataStructure.find((e) => e.UserName == username))){
                        setUser({
                          UserName:username,
                          NickName:nickname,
                          Img: img,
                          Password : password,
                          Chats: []
                        });
                        insertNewUser(username,nickname,img, password, []);
                          console.log('in signup');
                          console.log(dataStructure);
                          // setMode(0);
                          return;
                      } else {
                          alert("Username is already exist.");
                          // x.preventDefault();
                      }
                  } else {
                      alert ("Passwords do not match.");
                      // x.preventDefault();
                  }
              } else {
                  alert("Password must conatain : lowercase letter, uppercase letter, number and minimum 8 charcters.");
                  // x.preventDefault();
              }
          } else {
          alert ("Image format do not match.");
          // x.preventDefault();
        }
      } else {
        alert("Please fill all fields.");
        // x.preventDefault();
      }
  }
    
  // console.log(dataStructure);
if(mode == 0){
  console.log('in login');
  console.log(dataStructure);
  return (
    <LoginPage db={dataStructure} setMode={setMode} setCurrent={setCurrent}/>
    
  );
}
if(mode == 1){
  console.log('im sign up mode');
  return (
    <SignUpPage ifSubmit={ifSubmit}/>
  );
}
if(mode == 2){
  return (
    <Chat current = {current}/>
  );
  }
}

export default App;