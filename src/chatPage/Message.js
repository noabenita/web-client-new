import './Message.css';

function Message({data, time, flag}){
    
    if (flag){
        console.log('right')
        return(
            <ul className='message-data-left col1'>
         <ul className="clearfix">
             <div className="message-data">
                 <span className="message-data-time"> <p>{time}</p> </span>
             </div>
             <div className="message my-message">
                    {" "} {data} {" "}
            </div>
         </ul>
         </ul>
        );
    } else {
        console.log('left')

        return(
            <ul className='message-data-righ col2'>
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