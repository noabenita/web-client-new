// DONT TOUCH!
// const Message =({data, time, flag})=>{
//     return(
//          <li className="clearfix">
//              <div className="message-data text-right">
//                  <span className="message-data-time-right"> {time} </span>
//              </div>
//              <div className="message other-message float-right">
//                     {" "} {data} {" "}
//             </div>
//          </li>
//     );
// }
function Message({data, time, flag}){
    return(
         <li className="clearfix">
             <div className="message-data text-right">
                 <span className="message-data-time-right"> <p>{time}</p> </span>
             </div>
             <div className="message other-message float-right">
                    {" "} {data} {" "}
            </div>
         </li>
    );
}
export default Message