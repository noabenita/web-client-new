import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import {Modal} from "react-bootstrap"


function Chat({dataStructure, current}){
    const[addButton, setAddButton] = React.useState(false);
    const[state,setState]=React.useState(0);
    const[user,setUser]=React.useState({contact: "", imgContact:"", message:""})
    const[chat,setChat]=React.useState([])
    const[userAdd, setUserAdd]=useState({contact:""})

    function ifChange(event) {
        const {name, value} = event.target;
        setUserAdd({
            ...userAdd,
            [name]:value
        })
    }

    function addUserChat(){
        var member = dataStructure.filter(function(x){
            return x.UserName === userAdd.contact
        })
        for(var i=0; i<current.Chats.length; i++){
            if(current.Chats[i].contact === userAdd.contact){
                alert("you already have this chat")
                return
            }
        }
        if(member.length == 0){
            alert("The user you enterd is not in the database ")
            return
        }
        else if(current.UserName === userAdd.contact){
            alert("you can't add yourself to chats")
            return
        }
        else {
            current.Chats.push({contact: userAdd.contact,imgContact:member.Img,message:[]})
        }
    }
    if(state == 0){
        return(
            <>
            <LeftSide db={dataStructure} current={current} setState = {setState} setUser={setUser} setChat={setChat}
                         setAddButton={setAddButton}/>
                         {console.log(addButton)}
                    

            

            {/* <div className="noaModal">
            { addButton && console.log("were in the modal") &&  <Modal show={addButton}>
                <Modal.Header closeButton onClick={()=>setAddButton(false)}>
                    <Modal.Title id="contained-modal-title-vcenter"> Add new chat </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="Enter Username" id="newUser" name="contact" onChange={ifChange}></input>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="danger" onClick={()=>setAddButton(false)}>Close</button>
                    <button onClick={()=>{ addUserChat(); setAddButton(false)}}>Submit</button>
                </Modal.Footer>
            </Modal>
            }
            </div> */}
            </>
        );
    }
    else{
        return(
            <>
             
             <LeftSide db={dataStructure} current={current} setState = {setState} setUser={setUser} setChat={setChat}
                        setAddButton={setAddButton}/>
            <RightSide current={current} user={user} chat={chat} setChat={setChat} />
            { addButton && <Modal addButton={addButton}>
                <Modal.Header closeButton onClick={()=>setAddButton(false)}>
                    <Modal.Title id="contained-modal-title-vcenter"> Add new chat </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="Enter Username" id="newUser" name="contact" onChange={ifChange}></input>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="danger" onClick={()=>setAddButton(false)}>Close</button>
                    <button onClick={()=>{ addUserChat(); setAddButton(false)}}>Submit</button>
                </Modal.Footer>
            </Modal>
            }
            </>
        );
    }



}
export default Chat