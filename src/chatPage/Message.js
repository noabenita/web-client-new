import './Message.css';

function Message({data, time, flag}){


    
    if (flag){
        return(

            
<div class="talk-bubble tri-right round left-in ">
  <div class="talktext ">
    <p className='message-data-left'>           
         <ul className='clearfix '>
             <div className='message-data width="220 '>
                 <span className="message-data-time"> <p>{time}</p>  <p>{" "} {data} {" "}</p></span>
             </div>
            
         </ul>
       
         </p>
  </div>
</div>

            
            
           
        );
    } else {
        return(
            <ul className='round left-in message-data-righ'>
            <ul className="clearfix">
             <div className=" text-right">
                 <span className="message-data-time-right"> <p>{time}</p> </span>
             </div>
             <div className="message other-message float-right">
                    {" "} {data} {" "}
            </div>
            </ul>
            </ul>
        );    
    }
}

export default Message