import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";


function Chat({db, current}){
    const[state,setState]=React.useState(0);
    const[user,setUser]=React.useState({contact: "", imgContact:"", message:""})
    const[chat,setChat]=React.useState([])

    if(state == 0){
        return(
            <>
            <LeftSide db={db} current={current} setState = {setState} setUser={setUser} setChat={setChat}/>
            </>
        );
    }
    else{
        return(
            <>
            <LeftSide db={db} current={current} setState = {setState} setUser={setUser} setChat={setChat}/>         
            <RightSide db={db} current={current} user={user} chat={chat} setChat={setChat} />
            
            </>
        );
    }



}
export default Chat