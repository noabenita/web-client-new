import './Message.css';

function Message({data, time, flag, type}){
    /**to show the messages in chat according to type, flag - to choose the side (message send for me or to me) */
    if(type == 'text') {  
        if (flag){
            return(
            
                <div className="mine messages round left-in leftSide ">
                <div className="talktext">
                    <div className='message-data-left '>           
                        <ul className='clearfix message last '>
                            <div className='message-data width=220" '>
                                <span className="message-data-time ">  <div>{time}</div>   <div>{" "} {data} {" "}</div></span>
                            </div>
                            
                        </ul>
                    
                        </div>
                </div>
                </div>  
            );

        } else {
            return(
                <div className='mine messages round right-in ' >
                <ul className='message-data-righ'>
                <ul className='clearfix message last'>
                <div className='text-right'>
                    <span className="message-data-time-right  other-message float-right">  <div>{time}</div> 
                     <div> {" "} {data} {" "} </div> </span>
                </div>
                </ul>
                </ul>
                </div>
            );    
        }
    }

    else if(type== "video"){
        if (flag){
            return(
            
                <div className="talk-bubble tri-right round left-in  ">
                <div className="talktext">
                    <div className='message-data-left '>           
                        <ul className='clearfix '>
                            <div className='message-data width="220 '>
                                <span className="message-data-time ">  <div>{time}</div> 
                                <video controls src={data} width="350" /> </span>
                            </div>
                            
                        </ul>
                    
                        </div>
                </div>
                </div>  
        );

        } else {
            return(
                <div  className='mine messages round right-in ' >
                <ul className='message-data-righ '>
                <ul className='clearfix message last'>
                <div className='text-right'>
                    <span className="message-data-time-right  other-message float-right">  <div>{time}</div> 
                     <video controls src={data} width="350" /> </span>
                </div>
                </ul>
                </ul>
                </div>
            );    
        }
    }

    else if(type == "img"){
        if (flag){
            return(
            
                <div className="talk-bubble tri-right round left-in  ">
                <div className="talktext">
                    <div className='message-data-left '>           
                        <ul className='clearfix '>
                            <div className='message-data width="220 '>
                                <span className="message-data-time ">  <div>{time}</div>   <img src={data}  width="350"  /> </span>
                            </div>
                            
                        </ul>
                    
                        </div>
                </div>
                </div>  
        );

        } else {
            return(
                <div className='mine messages round right-in ' >
                <ul className='message-data-righ '>
                <ul className='clearfix message last'>
                <div className='text-right'>
                    <span className="message-data-time-right  other-message float-right">  <div>{time}</div> 
                     <img src={data} width="350" /> </span>
                </div>
                </ul>
                </ul>
                </div>
            );    
        }
    }

  
    else if(type == "audio"){
            if (flag){
                return(
                
                    <div className="talk-bubble tri-right round left-in  ">
                    <div className="talktext">
                        <div className='message-data-left '>           
                            <ul className='clearfix '>
                                <div className='message-data width="220 '>
                                    <span className="message-data-time ">  <div>{time}</div> 
                                    <audio src={data} controls  >  
                                    </audio>
                                    </span>

                                </div>
                                
                            </ul>
                        
                            </div>
                    </div>
                    </div>  
            );
    
            } else {
                return(
                    <div  className='mine messages round right-in ' >
                    <ul className='message-data-righ '>
                    <ul className='clearfix message last'>
                    <div className='text-right'>
                        <span className="message-data-time-right  other-message float-right">
                             <div>{time}</div> 
                             <audio src={data} controls  ></audio> </span>
                    </div>
                    </ul>
                    </ul>
                    </div>
                );    
            }

        }
    }


export default Message