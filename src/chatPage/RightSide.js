import React from "react";
import './RightSide.css';
import Message from "./Message";
import {Button} from 'react-bootstrap'
import { Modal } from "react-bootstrap";

function RightSide({db, current,user,chat, setChat}){
    const[msg,setMsg] = React.useState("")
    const[rec, setRec] = React.useState("")
    const[show, setShow] = React.useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const[render, setRender]=React.useState(1)

    var clickVideo = ()=>{
        document.getElementById('actual-btn1').click();
    }
    var clickImg = ()=>{
        document.getElementById('actual-btn2').click();
    }
    
    /** record function */
    function recordFunc(){
        //  audio is true, for recording
        let audioIN = { audio: true };
          
        navigator.mediaDevices.getUserMedia(audioIN)
     
          .then(function (mediaStreamObj) {
            let audio = document.querySelector('audio');
     
            // 'srcObject' is a property that takes the media object
            if ("srcObject" in audio) {
              audio.srcObject = mediaStreamObj;
            }
            else { 
              audio.src = window.URL.createObjectURL(mediaStreamObj);
            }
            audio.onloadedmetadata = function (ev){};
          
            // Start recording
            let start = document.getElementById('btnStart');
     
            // Stop recording
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
            //   audio.play();
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
     
            // Convert the audio data in to blob when press on the stop recording button
            mediaRecorder.onstop = function (ev) {
     
              // blob of type mp3
              let audioData = new Blob(dataArray,
                 { 'type': 'audio/mp3;' });
               
              // After fill up the chunk
              // array make it empty
              dataArray = [];
     
              // Creating audio url
              let audioSrc = window.URL
                  .createObjectURL(audioData);
     
              // Pass the audio url to the 2nd video tag
              playAudio.src = audioSrc;
              audioIN = { audio: false };
              setRec(playAudio.src); 
            }
            
            
          })
     
          // If any error occurs then handles the error
          .catch(function (err) {
            console.log(err.name, err.message);
          });
    
      }
     
    /** insert to chat array of contact chat according to type */
    function submit(event, data, type){
        var index;
        var index2;
        // find the user index to add
        for(var i=0;i<db.length;i++){
            if(db[i].UserName == current.UserName){
                index = i;
            }
        }
        for(var j=0;j<db[index].Chats.length;j++){
            if(db[index].Chats[j].contact == user.contact){
                index2 = j;
            }
        }
        const now = new Date();
        const time = now.getHours() + ':' + now.getMinutes(); 

        if(type=="video"){
            data = URL.createObjectURL(event.target.files[0]);
            chat.push({data:data,time:(time), flag:false, type:type});
            // db[index].Chats[index2].message.push({data:data,time:(time), flag:false, type:"video"});
            setChat(chat);
            setRender(render+1)
            event.target.value = null
        }
        if(type=="img"){
            data = URL.createObjectURL(event.target.files[0]);
            chat.push({data:data,time:(time), flag:false, type:type});
            // db[index].Chats[index2].message.push({data:data,time:(time), flag:false, type:type});
            setChat(chat);
            setRender(render+1)
            event.target.value = null

        }
        
        if(type == "text"){
        // check that msg is not empty message
            if(msg!=""){
                // db[index].Chats[index2].message.push({data:data,time:(time), flag:false, type:"text"});
                chat.push({data:data,time:(time), flag:false, type:"text"});
            }     
            setChat(chat);
            setMsg("");
            document.getElementById("msg").value = ("");
        }
        if(type=='audio'){
            // db[index].Chats[index2].message.push({data:data,time:(time), flag:false, type:"audio"});
            chat.push({data:data,time:(time), flag:false, type:"audio"});
            setChat(chat);
        }
        
    }
    function ifChange(e) {
        setMsg(e.target.value)
    }

    return(
        <>
        <div className="boxo w3-container first-row">
          {/* current user */}
            <img className='userImg' src={user.imgContact}  
                alt="avatar"/> {user.contact}
        </div>

        <div className="second-row chat-messeges">
            <ul className="friends-list">
                {/* show messages in current chat */}
                {chat.map((message)=>
                <li className="clearfix " key={message.data}>
                    <Message data = {message.data} time={message.time} flag={message.flag} type={message.type}/>
                </li>)}  
            </ul>
        </div>

        <div className="third-row">               
        <div className="input-text send-text ">
            {/* text box */}
           <input type="text" className="text-line form-control" name="msg" id="msg" 
           placeholder="Enter your message here" onChange={ifChange} value={msg.msg}></input>
        </div>
        {/* text button */}
        <button onClick={(event, data, type) => submit(event, msg, "text")} 
        type="button" className="send-button butn btn btn-light"> send </button>
        </div>

        <div className="dropdown">
            <button className="btn btn-secondary fa fa-paperclip w3-xlarge" type="button" id="dropdownMenuButton" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
             {/* image button */}
            <div className="dropdown-menu w3-light-grey" aria-labelledby="dropdownMenuButton">            
                <button onClick={clickImg} className='messegeTypes' >
                    <input type="file" accept = "image/png, image/jpeg" id="actual-btn2"
                    onChange={(e,data,type)=>{submit(e,data,"img")}} 
                     name="img" hidden/>
                    <label className="fa fa-picture-o icons1 w3-large" htmlFor="actual-btn2" ></label>
                </button>
                 {/* video button */}
                <button onClick={clickVideo} className='messegeTypes' >
                    <input type="file" accept="video/*" id="actual-btn1"
                    onChange={(e,data,type)=>{submit(e,data,"video")}} 
                     name="video" hidden/>
                    <label className="fa fa-video-camera icons w3-large" htmlFor="actual-btn1" ></label>
                </button>  
                {/* record button */}
                <button 
                    className="messegeTypesMic fa fa-microphone icons w3-large" data-toggle="modal" 
                    htmlFor="actual-btn" data-target="#exampleModal" onClick={()=>{recordFunc(); handleShow(true) }}
                    >
                </button>  

           
            </div>  
        </div>
        {/* modal to record button  */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                    <Modal.Title> Recording </Modal.Title>

            </Modal.Header>
            <Modal.Body>
                               
                        <button id="btnStart">START RECORDING</button>                   
                        <button id="btnStop">STOP RECORDING</button>                    
                                                        
                        {/* <audio id="audioPlay1"controls></audio> */}
                        <audio id="audioPlay" controls></audio>
            </Modal.Body>
            <Modal.Footer>
                        <Button type="button"  className="btn btn-secondary"  onClick={handleClose} data-dismiss="modal">Close</Button>
                        <Button type="button"  onClick={(e,data,type)=>{submit(e,rec,"audio"); handleClose()}}
                          className="btn btn-primary">send</Button>
            </Modal.Footer>
            </Modal>

        </>
    );

}
export default RightSide