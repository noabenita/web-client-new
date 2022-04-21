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
        {data:"hey",time: '12:10',flag:true, type:'text'},
        {data:"?",time: '12:15',flag:false, type:'text'},
        {data:"what are u doing ?",time: "12:17",flag:false, type:'text'}]}, 
      {contact :"hen",
      imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
      message:[
        {data:"how are u?? i want to tell you about my friend",time: '14:10',flag:true, type:'text'},
        {data:"♥",time: '14:11',flag:true, type:'text'},
        {data:"Im fine love, how are you ?",time: "14:40",flag:false, type:'text'}]},
      {contact :"noa",
       imgContact: "https://bootdey.com/img/Content/avatar/avatar8.png",
       message:[
         {data:"hii",time: '10:32',flag:true, type:'text'},
         {data:"♥",time: '10:33',flag:true, type:'text'},
         {data:"hii! how are you?",time: "10:45",flag:false, type:'text'}]}]}];
     
  const[mode,setMode]=React.useState(0);
  const[newUser, setNewUser]= React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const[current,setCurrent]=React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});


    function insertNewUser(username,nickname,img, password,chats){
      // console.log(user);
      // setUser({
      //     UserName:username,
      //     NickName:nickname,
      //     Img: img,
      //     Password : password,
      //     Chats: chats
      //   });
      // dataStructure.push(user);
      // console.log(user);
      console.log(dataStructure);
    }

if(mode == 0){
  console.log('in login');
  console.log(dataStructure);
  return (
    <LoginPage db={dataStructure} setMode={setMode} setCurrent={setCurrent} newUser={newUser}/>
    
  );
}
if(mode == 1){
  console.log('im sign up mode');
  return (
    <SignUpPage db={dataStructure} setMode={setMode} insertNewUser={insertNewUser} setNewUser={setNewUser}/>
  );
}
if(mode == 2){
  return (
    <Chat db={dataStructure} current = {current}/>
  );
  }
}

export default App;