import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


function Chat({db, current}){
    const[addButton, setAddButton] = React.useState(false);
    const[state,setState]=React.useState(0);
    const[user,setUser]=React.useState({contact: "", imgContact:"", message:""})
    const[chat,setChat]=React.useState([])
   /** for the open page when we sign in - no chat open **/
    if(state == 0){
        return(
            <>
            <LeftSide db={db} current={current} setState = {setState} setUser={setUser} setChat={setChat} />
            </>
        );
    }
    else{
        return(
            <>
            <LeftSide db={db} current={current} setState = {setState} setUser={setUser} setChat={setChat}/>         
            <RightSide db={db} current={current} user={user} chat={chat} setChat={setChat}/>
            </>
        );
    }



}
export default Chat