import React, { useState } from 'react';
import LoginPage from './loginPage/LoginPage'
import Chat from './chatPage/Chat';
import SignUpPage from './signUpPage/SignUpPage';

function App() {
  const[mode,setMode]=React.useState(0);
  const[newUser, setNewUser]= React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const[current,setCurrent]=React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const[img, setImg]=React.useState("");

  const dataStructure= [
    {UserName:'or',
    NickName:'orush',
    Img:"https://bootdey.com/img/Content/avatar/avatar3.png",
    Password: 'Nn123456', 
    Chats:[
      {contact: 'ron',
      imgContact: "https://bootdey.com/img/Content/avatar/avatar2.png",
      message:[
        {data:"hey",time: '12:10',flag:true, type:'text'},
        {data:"?",time: '12:15',flag:false, type:'text'},
        {data:"what are u doing ?",time: "12:17",flag:false, type:'text'}]}, 
      {contact :"hen",
      imgContact: "https://bootdey.com/img/Content/avatar/avatar1.png",
      message:[
        {data:"how are u?? i want to tell you about my friend",time: '14:10',flag:true, type:'text'},
        {data:"♥",time: '14:11',flag:true, type:'text'},
        {data:"Im fine love, how are you ?",time: "14:40",flag:false, type:'text'}]},
      {contact :"noa",
       imgContact: "https://bootdey.com/img/Content/avatar/avatar8.png",
       message:[
         {data:"hii",time: '10:32',flag:true, type:'text'},
         {data:"https://bootdey.com/img/Content/avatar/avatar2.png",time: '10:33',flag:false, type:'img'},
         {data:"do you know Ron?",time: "10:34",flag:false, type:'text'}]}]},
        {UserName:'niv',
        NickName:'nivush',
        Img:"https://bootdey.com/img/Content/avatar/avatar6.png",
        Password: 'Nn123456',
        Chats:[]
        },
        {UserName:'ron',
        NickName:'ronush',
        Img:"https://bootdey.com/img/Content/avatar/avatar2.png",
        Password: 'Nn123456',
        Chats:[{contact: 'or',
        imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
        message:[
          {data:"hey",time: '12:10',flag:false, type:'text'},
          {data:"?",time: '12:15',flag:true, type:'text'},
          {data:"what are u doing ?",time: "12:17",flag:true, type:'text'}]},
          {contact :"hen",
          imgContact: "https://bootdey.com/img/Content/avatar/avatar8.png",
          message:[
            {data:"how are u??",time: '13:10',flag:true, type:'text'},
            {data:"want to eat pizza?",time: '14:11',flag:true, type:'text'},
            {data:"Im fine",time: "14:40",flag:false, type:'text'}]}]
        },
        {UserName:'noa',
        NickName:'noeit',
        Img:"https://bootdey.com/img/Content/avatar/avatar8.png",
        Password: 'Nn123456',
        Chats:[{contact :"or",
        imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
        message:[
          {data:"hii",time: '10:32',flag:false, type:'text'},
          {data:"https://bootdey.com/img/Content/avatar/avatar2.png",time: '10:33',flag:true, type:'img'},
          {data:"do you know Ron?",time: "10:34",flag:true, type:'text'}]},
          {contact :"niv",
          imgContact: "https://bootdey.com/img/Content/avatar/avatar6.png",
          message:[
            {data:"hii",time: '10:32',flag:false, type:'text'}]}]},
        {UserName:'hen',
        NickName:'henhen',
        Img:"https://bootdey.com/img/Content/avatar/avatar1.png",
        Password: 'Nn123456',
        Chats:[{contact :"or",
        imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
        message:[
          {data:"how are u?? i want to tell you about my friend",time: '14:10',flag:false, type:'text'},
          {data:"♥",time: '14:11',flag:false, type:'text'},
          {data:"Im fine love, how are you ?",time: "14:40",flag:true, type:'text'}]},
          {contact :"ron",
          imgContact: "https://bootdey.com/img/Content/avatar/avatar2.png",
          message:[
            {data:"how are u??",time: '13:10',flag:false, type:'text'},
            {data:"want to eat pizza?",time: '14:11',flag:false, type:'text'},
            {data:"Im fine",time: "14:40",flag:true, type:'text'}]}]
        }];

// navigate between pages     
if(mode == 0){
  return (
    <LoginPage db={dataStructure} setMode={setMode} setCurrent={setCurrent} newUser={newUser}/>
  );
}
if(mode == 1){
  return (
    <SignUpPage db={dataStructure} setMode={setMode} setNewUser={setNewUser} setImg={setImg} img={img}/>
  );
}
if(mode == 2){
  return (
    <Chat db={dataStructure} current = {current} />
  );
  }
}

export default App;