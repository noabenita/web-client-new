import React from 'react';
import LoginPage from './LoginPage';
import Chat from './ChatPage';

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


  const[mode,setMode]=React.useState(0);
  const[current,setCurrent]=React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});

  
if(mode == 0){
  return (
    <LoginPage db={dataStructure} setMode={setMode} setCurrent={setCurrent}/>
    
  );
}
if(mode == 1){
  return (
    "signup page"
  );
}
if(mode == 2){
  return (
    <Chat current = {current}/>
  );
  }
}

export default App;