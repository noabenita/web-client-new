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
    /**function for add user in button */
    function addUserChat(x){
        var member=0;
        var index;
        var flag=true;
        for(var i=0; i<db.length; i++){
            // save the user we wnat to add
            if(db[i].UserName == userAdd.contact){
                member = db[i];
            }
            // save the index of the user that login - to add for him
            if(current.UserName == db[i].UserName){
                index=i;
                flag=false;
            }
        }

        // valid checks
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
            if(flag){
                db.push(current);
                index=(db.length-1);
            } 
                current.Chats.push({contact: userAdd.contact,imgContact:member.Img,message:[]})
        }
    }

    function clicked(e){
        for(var i = 0; i<current.Chats.length;i++){
            if(e.target.id == current.Chats[i].contact){
                /**save the user we click on his chat */
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

    /** function to find the last massege to show on left chats */
    function lastMsg(currentCon){
        for(var i = 0; i<current.Chats.length;i++){
            if (current.Chats[i].contact == currentCon) {
                var j = current.Chats[i].message.length;
                if (j > 0){
                    if(current.Chats[i].message[j-1].data.startsWith("blob")){
                        return "media"
                    } else {
                        return current.Chats[i].message[j-1].data
                    }

            }
        }
    }
}
   /** function to find the time of the last massege to show on left chats */
    function lastMsgTime(currentCon){
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

            <div className=" card chat-app ">
                <div id="plist" className="people-list ">  
                    {/* show current user */}                 
                    <div className='w3-border w3-padding-16 myname'>   
                        <img className='myImg' src={current.Img} alt="img" 
                            /> {current.NickName}
                    </div>
                    <ul className=" chat-list">
                        <li className='friends-list '>
                            {/* show the lisst chats in left side */}
                            {current.Chats.map((user, key)=>
                            <ul className="" key={user.contact}>
                               
                                <button className='chatListButton' onClick={clicked} id={user.contact}>
                                    <img onClick={clicked} id={user.contact} src={user.imgContact} alt="avatar"/> 
                                    <div onClick={clicked} id={user.contact} className='contactName'>  {user.contact}</div> 
                                    <div onClick={clicked} id={user.contact} className='lastMsg '>  {lastMsg(user.contact)} ...</div>   
                                    <div onClick={clicked} id={user.contact} className='lastMsgTime '>  {lastMsgTime(user.contact)}</div> 
                                </button>   
                              
                                
                               
                            </ul> 
    
                           )}  
                        </li>
                       
                    </ul>                   
                    <div className="input-group-prepend">
                     {/* modal of add new chat to list */}
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