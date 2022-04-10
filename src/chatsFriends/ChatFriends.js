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
      </div>
    </div>
  </li>

 );   
}

export default ChatFriends;