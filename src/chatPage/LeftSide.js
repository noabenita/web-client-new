import './LeftSide.css';
import React from 'react';
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

function LeftSide({db ,current, setState, setUser, setChat}){
    const [show, setShow] = React.useState(false);
    const[render, setRender]=React.useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[userAdd, setUserAdd]=React.useState({contact:""})

    function addUserChat(x){
        var member=0;
        var index;
        for(var i=0; i<db.length; i++){
            if(db[i].UserName == userAdd.contact){
                member = db[i];
            }
            if(current.UserName == db[i].UserName){
                index=i;
            }
        }
        for(var i=0; i<current.Chats.length; i++){
            if(db[index].Chats[i].contact === userAdd.contact){
                alert("you already have this chat")
                x.preventDefault();
                return;
            }
        }
        if(member == 0){
            alert("The user you entered is not in the database ")
            x.preventDefault();
            return;

            
        }
        else if(current.UserName == userAdd.contact){
            alert("you can't add yourself to chats")
            x.preventDefault();
            return;

            
        }
        else {
            db[index].Chats.push({contact: userAdd.contact,imgContact:member.Img,message:[]})
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
                console.log(j)
                if (j > 0){
                    return current.Chats[i].message[j-1].data
            }
        }
    }
}
  
    function lastMsgTime (currentCon){
        for(var i = 0; i<current.Chats.length;i++){
            if (current.Chats[i].contact == currentCon) {
                var j = current.Chats[i].message.length;
                if(j>0){
                return current.Chats[i].message[j-1].time
                }
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
                    </ul>
                   
                    <div className="input-group-prepend">
                        {/* <button className="addCon fa fa-user-circle w3-xlarge" onClick={()=> {setAddButton(true)}}/>          */}

                    <Button className="addCon fa fa-user-circle w3-xlarge" variant="primary" onClick={handleShow}/>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> Add new chat </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input placeholder="Enter Username" id="newUser" name="contact"
                                     onChange={ifChange}></input>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={(x)=> {addUserChat(x);
                                    handleClose();setRender(render+1)}}>
                                        {console.log(render)}
                                    Add User
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div> 
          </div>

        </>
    )

}
export default LeftSide