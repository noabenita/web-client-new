import React from "react";
import './RightSide.css';

function RightSide({current,user,chat, setChat}){
    const[msg,setMsg] = React.useState("")

    function submit(e){
        chat.push({data:msg,time:new Date(),flag:false});
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


        <div className="chat-messeges" >
        <ul className="friends-list">
         {chat.map((message)=>
             <li className="clearfix">

                    {message.data}
                    </li>    
        )}  
        </ul>
        </div>
        <div className="send-text">
        <input type="input" id = "msg" name ="msg" value = {msg.msg} onChange={ifChange}></input>
        </div>
        <button className="send-button" type="button" onClick={submit} >send</button>
        
        </>
    );

}
export default RightSide