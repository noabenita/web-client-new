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
        {data:"https://rr4---sn-5hneknee.googlevideo.com/videoplayback?expire=1650915649&ei=4aRmYrPFK4vWgwPs_5_oDQ&ip=91.240.71.192&id=o-APedJaR864nX2GBqchl6Vs4cNEXzWzqw1rlwdApHRr8k&itag=18&source=youtube&requiressl=yes&spc=4ocVC5v81z1ZOi9M7noQz4CwzZyi&vprv=1&mime=video%2Fmp4&ns=RGVBb7YN_V5jyYre83UUydsG&gir=yes&clen=440876&ratebypass=yes&dur=13.351&lmt=1633886161460818&fexp=24001373,24007246&c=WEB&txp=1319222&n=KwvxvyeJrXLRdEdIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgJz9otf_JVsKGkqH_ceA9IPPdDx7tX-VdJf08becezg4CIAEXY4zuzKNK5FWcs9HiK3tGh31c8J1NAMY9NvXmUNVJ&title=%D7%90%D7%9B%D7%9C%D7%AA+%D7%90%D7%95%D7%AA%D7%94+|+%D7%A1%D7%A8%D7%98%D7%95%D7%9F+%D7%90%D7%A0%D7%99%D7%9E%D7%A6%D7%99%D7%94+%D7%A7%D7%A6%D7%A8&redirect_counter=1&cm2rm=sn-ab5eer76&req_id=62773a719120a3ee&cms_redirect=yes&mh=yO&mip=132.70.66.9&mm=34&mn=sn-5hneknee&ms=ltu&mt=1650893803&mv=m&mvi=4&pl=15&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgWMjMbGrke3KqLD6B1QbgsDgByZgx0M1UK5sBUcYQrsMCIQDmpCYvPdplWBdRnt2ODjo1AtsCQGOSToQdDBUl3cACEw%3D%3D",
        time: '12:15',flag:false, type:'video'},
        {data:"what are u doing ?",time: "12:17",flag:false, type:'text'}]}, 
      {contact :"hen",
      imgContact: "https://bootdey.com/img/Content/avatar/avatar8.png",
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
          {data:"https://rr4---sn-5hneknee.googlevideo.com/videoplayback?expire=1650915649&ei=4aRmYrPFK4vWgwPs_5_oDQ&ip=91.240.71.192&id=o-APedJaR864nX2GBqchl6Vs4cNEXzWzqw1rlwdApHRr8k&itag=18&source=youtube&requiressl=yes&spc=4ocVC5v81z1ZOi9M7noQz4CwzZyi&vprv=1&mime=video%2Fmp4&ns=RGVBb7YN_V5jyYre83UUydsG&gir=yes&clen=440876&ratebypass=yes&dur=13.351&lmt=1633886161460818&fexp=24001373,24007246&c=WEB&txp=1319222&n=KwvxvyeJrXLRdEdIw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgJz9otf_JVsKGkqH_ceA9IPPdDx7tX-VdJf08becezg4CIAEXY4zuzKNK5FWcs9HiK3tGh31c8J1NAMY9NvXmUNVJ&title=%D7%90%D7%9B%D7%9C%D7%AA+%D7%90%D7%95%D7%AA%D7%94+|+%D7%A1%D7%A8%D7%98%D7%95%D7%9F+%D7%90%D7%A0%D7%99%D7%9E%D7%A6%D7%99%D7%94+%D7%A7%D7%A6%D7%A8&redirect_counter=1&cm2rm=sn-ab5eer76&req_id=62773a719120a3ee&cms_redirect=yes&mh=yO&mip=132.70.66.9&mm=34&mn=sn-5hneknee&ms=ltu&mt=1650893803&mv=m&mvi=4&pl=15&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgWMjMbGrke3KqLD6B1QbgsDgByZgx0M1UK5sBUcYQrsMCIQDmpCYvPdplWBdRnt2ODjo1AtsCQGOSToQdDBUl3cACEw%3D%3D",
          time: '12:15',flag:true, type:'video'},
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
        Img:"https://bootdey.com/img/Content/avatar/avatar8.png",
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
     
  const[mode,setMode]=React.useState(0);
  const[newUser, setNewUser]= React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const[current,setCurrent]=React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const[img, setImg]=React.useState("");



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