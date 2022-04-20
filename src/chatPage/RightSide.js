import React from "react";
import './RightSide.css';
import Message from "./Message";

function RightSide({current,user,chat, setChat}){
    const[msg,setMsg] = React.useState("")

    // insert to chat array of contact chat
    function submit(event, data){
    // check that msg is not empty message
    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes();
        if(msg!=""){
          chat.push({data:data,time:(time), flag:false});
        }      
        setChat(chat);
        setMsg("");
        document.getElementById("msg").value = ("");
    }
    function ifChange(e) {
        setMsg(e.target.value)
    }

    const messageList = chat.map((message)=> {
        return <Message data ={message.data} time ={message.time} flag={message.flag}/>
      });
    return(
        <>
        <div className="boxo w3-container first-row">
          {/* current user */}
            <img className='userImg' src={user.imgContact}  // img of current chat
                alt="avatar"/> {user.contact}
        </div>

        <div className="second-row chat-messeges">
            <ul className="friends-list">
                {chat.map((message)=>
                <li className="clearfix">
                    <Message data = {message.data} time={message.time} flag={message.flag}/>
                </li>)}  
            </ul>
        </div>

        <div className="third-row">               
        <th className="input-text send-text ">
           <input type="text" className="text-line form-control" name="msg" id="msg" 
           placeholder="Enter your message here" onChange={ifChange} value={msg.msg}></input>
        </th>

        <button onClick={(event, data) => submit(event, msg)} 
        type="button" className="send-button butn btn btn-light"> send </button>
        </div>
        </>
    );

}
export default RightSide