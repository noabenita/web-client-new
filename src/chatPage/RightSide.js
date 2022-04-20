import React from "react";
import './RightSide.css';


function RightSide({current,user,chat, setChat}){
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
       document.getElementById('msg').value = ("");
       setMsg("");
       setChat(chat); 
  
    }
    function ifChange(e) {
        setMsg(e.target.value)
    }

    const messageList = chat.map((message)=> {
          return <Message data ={message.data} time ={message.time} flag={message.flag}/>
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
        <div className="second-row chat-messeges">
            <ul className="friends-list">
                {chat.map((message)=>
                <li className="clearfix ">
                    <Message data = {message.data} time={message.time} flag={message.flag}/>
                </li>)}  
            </ul>
        </div>

        <div className="third-row">   
                 {console.log('done with array')}
            
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