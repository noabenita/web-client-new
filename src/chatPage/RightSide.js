import React from "react";
import './RightSide.css';

function RightSide({current,user,chat, setChat}){
    const[msg,setMsg] = React.useState("")

    function submit(e){
        chat.push({data:msg,time:new Date(),flag:false});
    const[msg,setMsg] = React.useState("");
    const[render, setRender] = React.useState(0);

    // insert to chat array of contact chat
    function submit(event, data){
    // check that msg is not empty message
        if(msg!=""){
          chat.push({data:data,time:(new Date().toString()), flag:false});
          console.log('insert to chat');
        }      
        console.log({chat});
        setChat(chat);
        setMsg("");
        document.getElementById("msg").value = ("");
    }
    function ifChange(e) {
        setMsg(e.target.value)
        console.log(e.target.value)
    }
    return(
        <>
        <div className="boxo w3-container first-row">
          {/* current user */}
            <img className='userImg' src={user.imgContact}  // img of current chat
                alt="avatar"/> {user.contact}
        </div>


        <div className="chat-messeges" >
        <ul className="friends-list">
         {chat.map((message)=>
             <li className="clearfix">
                    {message.data}
                    </li>    
        )}  
        </ul>
        </div>
        <div className="send-text ">
        <input className="text-line" type="input" placeholder="Enter your text here ..." 
        id = "msg" name ="msg" value = {msg.msg} onChange={ifChange}>

        </input>
        </div>
        <button className="send-button" type="button" onClick={submit} >send</button>
        
        </>
    );

}
export default RightSide