import './Message.css';

function Message({data, time, flag}){


    
    if (flag){
        return(

            
<div class="talk-bubble tri-right round left-in  ">
  <div class="talktext">
    <p className='message-data-left '>           
         <ul className='clearfix '>
             <div className='message-data width="220 '>
                 <span className="message-data-time "> <p>{time}</p>  <p>{" "} {data} {" "}</p></span>
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
                 <span className="message-data-time-right  other-message float-right"> <p>{time}</p> <p> {" "} {data} {" "} </p> </span>
             </div>
            </ul>
            </ul>
            </div>
        );    
    }
}
    if(type == 'img'){
        if(flag){

        } else {

        }
    }
    if(type == 'video'){
        if(flag){

        } else {
            
        }
    }
    if(type == 'audio'){
        if(flag){

        } else {
            
        }
    }            
}

export default Message