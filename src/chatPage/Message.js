import './Message.css';

function Message({data, time, flag}){
    
    if (flag){
        console.log('right')
        return(
            <div className='container'>
            <ul className='message-data-left width="220'>
         <ul className='clearfix'>
             <div className='message-data width="220 '>
                 <span className="message-data-time"> <p>{time}</p> </span>
             </div>
             <div className="message my-message">
                    {" "} {data} {" "}
            </div>
         </ul>
         </ul>
         </div>
        );
    } else {
        console.log('left')

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