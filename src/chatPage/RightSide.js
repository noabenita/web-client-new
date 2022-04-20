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
        <div className="first-row w3-padding-16 myname" id='plist'>
            {user.contact}
            <div classNmae="current-img">
            {/* <img src={user.imgContact} alt="avatar"/> */}
             </div>
        </div>
        <div className="second-row">
        <div className="chat-messeges" >
            <ul className="friends-list">
                {/* {messageList} */}
                {chat.map((message)=>
                <li className="clearfix">
                    {message.data}
                </li>)}  
            </ul>
        </div>
        </div>

        <div className="third-row">   
                 {console.log('done with array')}
            
        <div className="send-text ">
            <label>
        <input className="text-line" type="input" placeholder="Enter your text here ..." 
        id = "msg" name ="msg" value = {msg.msg} onChange={ifChange}>

        </input>
        </label>
        </div>
        <button className="send-button" onClick={submit} >send</button>
        </div>
        </>
    );

}
export default RightSide