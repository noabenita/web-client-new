import './LeftSide.css';
import {Link, useNavigate} from 'react-router-dom';

function LeftSide({current, setState, setUser, setChat}){
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

   
    return(
        <>
            <nav className="mainImage w3-sidebar ">
                <div className="bgimg" ></div>               
            </nav>

            <div  className="semiTrans w3-hide-medium w3-hide-small" ></div>
            <div id="button">            
                <button className=" logoutButton w3-button w3-light-grey w3-padding-small" type="submit"
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
                    <ul className=" chat-list  ">
                        <ul className="friends-list">
                            {current.Chats.map((user)=>
                            <li className="clearfix">
                                <button type="button" onClick={clicked} id={user.contact}>
                                    <img src={user.imgContact} alt="avatar"/>  {user.contact} 
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