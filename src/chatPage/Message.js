
function Message({data, time, flag}){
    
    if (flag){
        console.log('right')
        console.log(data)
        return(
        <>
             <div className="message-data">
                 <span className="message-data-time"> <p>{time}</p> </span>
             </div>
             <div className="message my-message">
                    {" "} {data} {" "}
            </div>
            </>
        );
    }
       
        return(
            <>
            {console.log('left')}    
            {console.log(data)}
             <div className="message-data text-right">
                 <span className="message-data-time-right"> <p>{time}</p> </span>
             </div>
             <div className="message other-message float-right">
                    {" "} {data} {" "}
            </div>
            </>
        );    
    
}

export default Message