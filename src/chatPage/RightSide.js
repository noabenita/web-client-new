import React from "react";
import './RightSide.css';
import Message from "./Message";

function RightSide({current,user,chat, setChat}){
    const[msg,setMsg] = React.useState("")

    // insert to chat array of contact chat
    function submit(e){
        chat.push({data:msg,time:new Date(),flag:false});
        console.log('insert to chat');
        console.log({chat});
        setChat(chat);
        setMsg("");
        document.getElementById("msg").value = ("");
    }
    function ifChange(e) {
        setMsg(e.target.value)
        // console.log(e.target.value)
    }

    const messageList = chat.map((message, key)=> {
          return <Message data ={message.data} time ={message.time} flag={message.flag} key={key}/>
        });
    return(
        <>
        {/* print messages */}
        <div className="first-row w3-border w3-padding-16">
            {user.contact}
            <div classNmae="current-img">
            <img  src={user.imgContact} alt="avatar"/> </div>
        </div>
        <div className="chat-messeges" >
            <ul className="friends-list">
                {messageList}
                {/* {chat.map((message)=>
                <li className="clearfix">
                    {message.data}
                </li>)}   */}
            </ul>
        </div>
        {console.log('done with array')}
        <div>
        <div className="send-text ">
        <input className="text-line" type="input" placeholder="Enter your text here ..." 
        id = "msg" name ="msg" value = {msg.msg} onChange={ifChange}>

        </input>
        </div>
        <button className="send-button" type="button" onClick={submit} >send</button>
        </div>
        </>
    );

}
export default RightSide