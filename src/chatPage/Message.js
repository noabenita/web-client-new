import './Message.css';

function Message({data, time, flag}){
    
    if (flag){
        return(
         
         <ul className="clearfix">
             <div className="message-data">
                 <span className="message-data-time message"> <p>{time}</p> </span>
             </div>
             <div className="message my-message">
                    {" "} {data} {" "}
            </div>
         </ul>
        
        );
    } else {
        return(
            <ul className='message-data-righ'>
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