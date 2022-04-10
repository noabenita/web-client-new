function ChatFriends({name, img}){
 return(
    <li className="clearfix">
    <img
      src={img}
      alt="avatar"
    />
    <div className="about">
      <div className="name">{name}</div>
      <div className="status">
        {" "}
        {/* <i className="fa fa-circle offline" /> left 7 mins ago{" "} */}
      </div>
    </div>
  </li>

 );   
}

export default ChatFriends;