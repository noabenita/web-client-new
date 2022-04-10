import './ChatPage.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Message from '../message/Message';
import ChatFriends from '../chatsFriends/ChatFriends';
import MyChat from '../MyChat';


function ChatPage({db,current}){
  // find user that login
  const findMe = db.find((value)=> {
    return(value.UserName == current.nowOnline)
  });

  const chatFriendsList = findMe.Friends.map((frd, key)=>{
    return <ChatFriends name= {frd.friendName} img = {frd.img} key={key}/>
  })

  const messageList = findMe.Chats.map((msg, key)=> {
    return <Message data ={msg.data} time ={msg.time} flag={msg.flag} key={key}/>
  });

    return (
      <>
       <nav id="mainImage" className="w3-sidebar w3-hide-small">
        <div className="bgimg" ></div>
      </nav>
      
       <div  className="semiTrans w3-hide-medium w3-hide-small" ></div>
     
       <div className="poweredBy">{" "}
          <pre>Powered by Or Nasri &amp; Noa Benita </pre>
    </div>
        
      <div id="button">
        <p>
          <button className="w3-button w3-light-grey w3-padding-small" type="submit">
            <Link to="/">Logout</Link>
          </button>
        </p>
      </div> 
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
  <div className="container">
    <div className="row clearfix">
      <div className="col-lg-12 ">
        <div className="card chat-app  ">
          <div id="plist" className="people-list ">
            <div container className='box w3-border w3-padding-32'>
              <div className="col-lg-5 chat-list">
                {/* details of the owner chat */}
                  <MyChat image = {findMe.Img} name={findMe.Nickname}></MyChat>
              </div>
            </div>
            <div className="input-group1">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <button className="addCon fa fa-user-circle" />
                </span>
              </div>
            </div> 
            <ul className="list-unstyled chat-list mt-2 mb-0 w3-border">
            {chatFriendsList}
            </ul>
          </div>
          <div className="chat">
            <div className="chat-header clearfix">
              {/* right side - chat */}
              <div className="row">
                <div className="col-lg-6">
                  <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png"  // img of current chat
                      alt="avatar"/>
                  </a>
                  <div className="chat-about">
                    <h6 className="m-b-0">{current.nowOnline}</h6>
                    <small>Last seen: 2 hours ago</small>
                  </div>
                </div>
                
              </div>
            </div>
            {/* maessages */}
            <div className="chat-history">
              <ul className="m-b-0">
                {messageList}
              </ul>
            </div>
            {/* message box */}
            <div className="chat-message clearfix">
                <div className="input-group-prepend">
                    <button className="fa fa-send" id='sendButton' type='submit' />        
                </div>
                <div border className='borderOfSendLine'>
                <form action="/action_page.php" target="_blank">
              <p>
                  <input className="form-control w3-input" type="text" name="username" 
                  placeholder="Enter text here..." />
              </p>
              </form>
              </div>
                 
                
                <div class="dropdown">
                  <button class="btn btn-secondary fa fa-paperclip w3-xlarge" type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </button>

                  <div className="dropdown-menu w3-light-grey" aria-labelledby="dropdownMenuButton">  
                              
                   <button  className='messegeTypes' >
                    <input type="file" id="actual-btn" hidden/>
                    <label className="fa fa-picture-o icons" for="actual-btn" ></label>
                  </button>
                  
                  <button  className='messegeTypes' >
                    <input type="file" id="actual-btn" hidden/>
                    <label className="fa fa-video-camera icons" for="actual-btn"></label>
                  </button>

                  <button  className='messegeTypes' >
                    <input type="file" id="actual-btn" hidden/>
                    <label className="fa fa-microphone icons" for="actual-btn"></label>
                  </button>
                     
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>

  );
}

export default ChatPage
