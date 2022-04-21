import React from "react";
import './RightSide.css';
import Message from "./Message";

function RightSide({current,user,chat, setChat}){
    function recordFunc(){
        let audioIN = { audio: true };
        //  audio is true, for recording
     
        // Access the permission for use
        // the microphone
        navigator.mediaDevices.getUserMedia(audioIN)
     
          // 'then()' method returns a Promise
          .then(function (mediaStreamObj) {
     
            // Connect the media stream to the
            // first audio element
            let audio = document.querySelector('audio');
            //returns the recorded audio via 'audio' tag
     
            // 'srcObject' is a property which
            // takes the media object
            // This is supported in the newer browsers
            if ("srcObject" in audio) {
              audio.srcObject = mediaStreamObj;
            }
            else {   // Old version
              audio.src = window.URL
                .createObjectURL(mediaStreamObj);
            }
            audio.onloadedmetadata = function (ev){};
          
            // Start record
            let start = document.getElementById('btnStart');
     
            // Stop record
            let stop = document.getElementById('btnStop');
     
            // 2nd audio tag for play the audio
            let playAudio = document.getElementById('audioPlay');
     
            // This is the main thing to recorded
            // the audio 'MediaRecorder' API
            let mediaRecorder = new MediaRecorder(mediaStreamObj);
            // Pass the audio stream
     
            // Start event
            start.addEventListener('click', function (ev) {
              audio.src = null;
              mediaRecorder.start();
              audio.play();
            });
     
            // Stop event
    
            stop.addEventListener('click', function (ev) {
              mediaRecorder.stop();
              audio.pause();
              
            });
     
            // If audio data available then push
            // it to the chunk array
            mediaRecorder.ondataavailable = function (ev) {
              dataArray.push(ev.data);
            }
     
            // Chunk array to store the audio data
            let dataArray = [];
     
            // Convert the audio data in to blob
            // after stopping the recording
            mediaRecorder.onstop = function (ev) {
     
              // blob of type mp3
              let audioData = new Blob(dataArray,
                 { 'type': 'audio/mp3;' });
               
              // After fill up the chunk
              // array make it empty
              dataArray = [];
     
              // Creating audio url with reference
              // of created blob named 'audioData'
              let audioSrc = window.URL
                  .createObjectURL(audioData);
     
              // Pass the audio url to the 2nd video tag
              playAudio.src = audioSrc;
              audioIN = { audio: false };
            }
            
            
          })
     
          // If any error occurs then handles the error
          .catch(function (err) {
            console.log(err.name, err.message);
          });
    
      }

      
    const[msg,setMsg] = React.useState("")

    // insert to chat array of contact chat
    function submit(event, data, type){
    // check that msg is not empty message
    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes();
        if(msg!=""){
          chat.push({data:data,time:(time), flag:false, type:type});
        }      
        setChat(chat);
        setMsg("");
        document.getElementById("msg").value = ("");
    }
    function ifChange(e) {
        setMsg(e.target.value)
    }

    // const messageList = chat.map((message)=> {
    //     return <Message data ={message.data} time ={message.time} flag={message.flag} type={type}/>
    //   });
    return(
        <>
        <div className="boxo w3-container first-row">
          {/* current user */}
            <img className='userImg' src={user.imgContact}  // img of current chat
                alt="avatar"/> {user.contact}
        </div>

        <div className="second-row chat-messeges">
            <ul className="friends-list">
                {chat.map((message)=>
                <li className="clearfix ">
                    <Message data = {message.data} time={message.time} flag={message.flag} type={message.type}/>
                </li>)}  
            </ul>
        </div>

        <div className="third-row">   
                 {console.log('done with array')}
            
        <th className="input-text send-text ">
           <input type="text" className="text-line form-control" name="msg" id="msg" 
           placeholder="Enter your message here" onChange={ifChange} value={msg.msg}></input>
        </th>

        <button onClick={(event, data, type) => submit(event, msg, "text")} 
        type="button" className="send-button butn btn btn-light"> send </button>
        </div>

        <div class="dropdown">
            <button class="btn btn-secondary fa fa-paperclip w3-xlarge" type="button" id="dropdownMenuButton" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu w3-light-grey" aria-labelledby="dropdownMenuButton">            
                <button  className='messegeTypes' >
                    <input type="file" id="actual-btn" hidden/>
                    <label className="fa fa-picture-o icons1 w3-large" for="actual-btn" ></label>
                </button>
                
                <button  className='messegeTypes' >
                    <input type="file" id="actual-btn" hidden/>
                    <label className="fa fa-video-camera icons w3-large" for="actual-btn"></label>
                </button>

                <button 
                    className="messegeTypesMic fa fa-microphone icons w3-large" data-toggle="modal" 
                        for="actual-btn" data-target="#exampleModal" onClick={recordFunc}
                    >
                </button>               
            </div>  
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div classN="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">recording</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body"> 
                        <p>                    
                            <button id="btnStart">START RECORDING</button>                   
                            <button id="btnStop">STOP RECORDING</button>                    
                        </p>                                  
                        <audio id="audioPlay1"controls></audio>
                        <audio id="audioPlay" controls></audio>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        

        </>
    );

}
export default RightSide