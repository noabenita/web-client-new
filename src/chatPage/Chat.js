import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


function Chat({dataStructure, current}){

    const[state,setState]=React.useState(0);
    const[user,setUser]=React.useState({contact: "", imgContact:"", message:""})
    const[chat,setChat]=React.useState([])
    if(state == 0){
        return(
           
            <LeftSide db={dataStructure} current={current} setState = {setState} setUser={setUser} setChat={setChat}/>
            

        );
    }
    else{
        return(
            <>
             
            <LeftSide db={dataStructure} current={current} setState = {setState} setUser={setUser} setChat={setChat}/>
            <RightSide current={current} user={user} chat={chat} setChat={setChat} />
            
            </>
        );
    }



}
export default Chat