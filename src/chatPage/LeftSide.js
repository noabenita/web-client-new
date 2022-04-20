import './LeftSide.css';
import {Link, useNavigate} from 'react-router-dom';

function LeftSide({db ,current, setState, setUser, setChat}){
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
                        <img className='myImg' src={current.Img}  // img of current chat
                            alt="avatar"/> {current.NickName}
                    </div>
                    <ul className=" chat-list">
                        <ul className="friends-list">
                            {current.Chats.map((user)=>
                            <li className="clearfix">
                                <button type="button" className='chatListButton' onClick={clicked} id={user.contact}>
                                    <img src={user.imgContact} alt="avatar"/> 
                                    <div className='contactName'>  {user.contact}</div> 
                                    <div className='lastMsg '>  {lastMsg(user.contact)} ...</div>   
                                    <div className='lastMsgTime '>  {lastMsgTime(user.contact)}</div> 
                                </button> 
                               
                            </li> 
                            )}  
                        </ul>
                        {/* {chatFriendsList}  */}
                    </ul>
                   
                    <div className="input-group-prepend">
                        <button className="addCon fa fa-user-circle w3-xlarge" />         
                    </div>
                </div> 
          </div>

        </>
    )

}
export default LeftSide