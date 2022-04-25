import './Message.css';

function Message({data, time, flag, type}){
    if(type == 'text') {  
        if (flag){
            return(
            
                <div class="mine messages round left-in leftSide ">
                <div class="talktext">
                    <p className='message-data-left '>           
                        <ul className='clearfix message last '>
                            <div className='message-data width=220" '>
                                <span className="message-data-time "> <p>{time}</p>  <p>{" "} {data} {" "}</p></span>
                            </div>
                            
                        </ul>
                    
                        </p>
                </div>
                </div>  
            );

        } else {
            return(
                <div class='mine messages round right-in ' >
                <ul className='message-data-righ'>
                <ul className='clearfix message last'>
                <div className='text-right'>
                    <span className="message-data-time-right  other-message float-right"> <p>{time}</p> <p> {" "} {data} {" "} </p> </span>
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
            
                <div class="talk-bubble tri-right round left-in  ">
                <div class="talktext">
                    <p className='message-data-left '>           
                        <ul className='clearfix '>
                            <div className='message-data width="220 '>
                                <span className="message-data-time "> <p>{time}</p>  <img src={data}  width="350"  /> </span>
                            </div>
                            
                        </ul>
                    
                        </p>
                </div>
                </div>  
        );

        } else {
            return(
                <div  class='mine messages round right-in ' >
                <ul className='message-data-righ '>
                <ul className='clearfix message last'>
                <div className='text-right'>
                    <span className="message-data-time-right  other-message float-right"> <p>{time}</p> <img src={data} width="350" /> </span>
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
                
                    <div class="talk-bubble tri-right round left-in  ">
                    <div class="talktext">
                        <p className='message-data-left '>           
                            <ul className='clearfix '>
                                <div className='message-data width="220 '>
                                    <span className="message-data-time "> <p>{time}</p>
                                    <audio src={data} controls  >  
                                    {/* <source src={data} alt="" />  */}
                                    </audio>
                                    </span>

                                </div>
                                
                            </ul>
                        
                            </p>
                    </div>
                    </div>  
            );
    
            } else {
                return(
                    <div  class='mine messages round right-in ' >
                    <ul className='message-data-righ '>
                    <ul className='clearfix message last'>
                    <div className='text-right'>
                        <span className="message-data-time-right  other-message float-right"> <p>{time}</p> <audio src={data} controls  ></audio> </span>
                    </div>
                    </ul>
                    </ul>
                    </div>
                );    
            }

        // if(flag){
            

        // } else {  
        //     console.log("hhh")
        //     return(
               
        //         <div class="talk-bubble tri-right round left-in  ">
        //         <div class="talktext">
        //             <p className='message-data-left '>           
        //                 <ul className='clearfix '>
        //                     <div className='message-data width="220 '>
        //                         <span className="message-data-time "> <p>{time}</p>  <img src={data} alt="" /></span>
        //                     </div>
                            
        //                 </ul>
                    
        //                 </p>
        //         </div>
        //         </div> 
                
        // );

        }
    }

    // if(type == 'video'){
    //     if(flag){

    //     } else {
            
    //     }
    // }
    // if(type == 'audio'){
    //     if(flag){

    //     } else {
            
    //     }
    // }            


export default Message