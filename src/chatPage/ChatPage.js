import './ChatPage.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function ChatPage(){

    return (
      <>
      
       <nav id="mainImage" className="w3-sidebar w3-hide-small">
        <div className="bgimg" ></div>
      </nav>
      
       <div  className="semiTrans w3-hide-medium w3-hide-small" ></div>
     
       <div className="poweredBy">
          {" "}
          <pre>Powered by Or Nasri &amp; Noa Benita </pre>
    </div>
        
      <div id="button">
      <p>
            <button
              className="w3-button w3-light-grey w3-padding-small"
              type="submit"
            >
               <Link to="/">Logout</Link>
            </button>
      </p>
      </div> 

  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <div className="row clearfix">
      <div className="col-lg-12 ">
        <div className="card chat-app  ">
          <div id="plist" className="people-list ">
            <div container className='box w3-border w3-padding-32'>
              <div className="col-lg-5 chat-list">
                  <div className='myPic'
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#view_info"
                  >
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="myName">
                    <h6 className="m-b-0 w3-large">Aiden Chavez</h6>
                  </div>
                  
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
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">Vincent Porter</div>
                  <div className="status">
                    {" "}
                    <i className="fa fa-circle offline" /> left 7 mins ago{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix active">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">Aiden Chavez</div>
                  <div className="status">
                    {" "}
                    <i className="fa fa-circle online" /> online{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">Mike Thomas</div>
                  <div className="status">
                    {" "}
                    <i className="fa fa-circle online" /> online{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">Christian Kelly</div>
                  <div className="status">
                    {" "}
                    <i className="fa fa-circle offline" /> left 10 hours ago{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar8.png"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">Monica Ward</div>
                  <div className="status">
                    {" "}
                    <i className="fa fa-circle online" /> online{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">Dean Henry</div>
                  <div className="status">
                    {" "}
                    <i className="fa fa-circle offline" /> offline since Oct 28{" "}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="chat">
            <div className="chat-header clearfix">
              {/* right side - chat */}
              <div className="row">
                <div className="col-lg-6">
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#view_info"
                  >
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="avatar"
                    />
                  </a>
                  <div className="chat-about">
                    <h6 className="m-b-0">Aiden Chavez</h6>
                    <small>Last seen: 2 hours ago</small>
                  </div>
                </div>
                
              </div>
            </div>
            {/* maessages */}
            <div className="chat-history">
              <ul className="m-b-0">
                <li className="clearfix">
                  <div className="message-data text-right">
                    <span className="message-data-time">10:10 AM, Today</span>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="avatar"
                    />
                  </div>
                  <div className="message other-message float-right">
                    {" "}
                    Hi Aiden, how are you? How is the project coming along?{" "}
                  </div>
                </li>
                <li className="clearfix">
                  <div className="message-data">
                    <span className="message-data-time">10:12 AM, Today</span>
                  </div>
                  <div className="message my-message">
                    Are we meeting today?
                  </div>
                </li>
                <li className="clearfix">
                  <div className="message-data">
                    <span className="message-data-time">10:15 AM, Today</span>
                  </div>
                  <div className="message my-message">
                    Project has been already finished and I have results to show
                    you.
                  </div>
                </li>
              </ul>
            </div>
            {/* message box */}
            <div className="chat-message clearfix">
            
                <div className="input-group-prepend">
                    <button className="fa fa-send" id='sendButton' type='submit' />        
                </div>
                <div border className='borderrr'>
                <form action="/action_page.php" target="_blank">
                  <p>
                      <input className="form-control w3-input" type="text" name="username" 
                      placeholder="Enter text here..."/>
                  </p>
                </form>   
                </div>
                <div class="dropdown">
                  <button class="btn btn-secondary fa fa-paperclip w3-xlarge" type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </button>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">                
                    <button className="fa fa-picture-o icons"></button>               
                    <button className="fa fa-video-camera icons"></button>
                    <button className="fa fa-microphone icons"></button>
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

export default ChatPage;
