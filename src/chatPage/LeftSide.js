import './LeftSide.css';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

function LeftSide({db ,current, setState, setUser, setChat, setAddButton}){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[userAdd, setUserAdd]=React.useState({contact:""})

    function addUserChat(){
        console.log("im in the adduser chat")
        var member;
        debugger
        // for(var i=0; i<2; i++){
        //     if(db[i].UserName==userAdd.contact){
        //         member = db[i];
        //     }
        // }
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
    function clicked(e){
        for(var i = 0; i<current.Chats.length;i++){
            if(e.target.id == current.Chats[i].contact){
                setUser(
                    {contact: current.Chats[i].contact,
                    imgContact: current.Chats[i].imgContact,
                    message: current.Chats[i].message});
                setState(1)
                setChat(current.Chats[i].message);
            }
        }
    }

    function ifChange(event) {
        const {name, value} = event.target;
        setUserAdd({
            ...userAdd,
            [name]:value
        })
    }

    function logout(){
        setState(0)
    }

    function lastMsg (currentCon){
        for(var i = 0; i<current.Chats.length;i++){
            if (current.Chats[i].contact == currentCon) {
                var j = current.Chats[i].message.length;
                return current.Chats[i].message[j-1].data
            }
        }
    }
  
    function lastMsgTime (currentCon){
        for(var i = 0; i<current.Chats.length;i++){
            if (current.Chats[i].contact == currentCon) {
                var j = current.Chats[i].message.length;
                return current.Chats[i].message[j-1].time
            }
        }
    }


   
    return(
        <>
            <nav className="mainImage w3-sidebar ">
                <div className="bgimg" ></div>               
            </nav>

            <div  className="semiTrans w3-hide-medium w3-hide-small" ></div>
            <div id="button">            
                <button className=" logoutButton w3-button w3-padding-small" type="submit"
                 onClick={logout}> 
                    logout
                </button>
            </div> 

            <div className=" card chat-app ">
                <div id="plist" className="people-list ">                   
                    <div container className='w3-border w3-padding-16 myname'>   {/* current user */}
                        <img className='myImg' src={current.Img} alt="img" // img of current chat
                            /> {current.NickName}
                    </div>
                    <ul className=" chat-list">
                        <li className='friends-list '>
                            {current.Chats.map((user)=>
                            <ul className="">
                                <button type="button" className='chatListButton' onClick={clicked} id={user.contact}>
                                    <img src={user.imgContact} alt="avatar"/> 
                                    <div className='contactName'>  {user.contact}</div> 
                                    <div className='lastMsg '>  {lastMsg(user.contact)} ...</div>   
                                    <div className='lastMsgTime '>  {lastMsgTime(user.contact)}</div> 
                                </button> 
                               
                            </ul> 
                            )}  
                        </li>
                        {/* {chatFriendsList}  */}
                    </ul>
                   
                    <div className="input-group-prepend">
                        {/* <button className="addCon fa fa-user-circle w3-xlarge" onClick={()=> {setAddButton(true)}}/>          */}


  
    <>
      <Button className="addCon fa fa-user-circle w3-xlarge" variant="primary" onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new chat </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input placeholder="Enter Username" id="newUser" name="contact" onChange={ifChange}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {addUserChat();setShow(false)}}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  


                    </div>
                </div> 
          </div>

        </>
    )

}
export default LeftSide