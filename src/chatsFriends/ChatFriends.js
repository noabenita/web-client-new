function ChatFriends({name, img}){
 return(
    <button >
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
  </button>

 );   
}

export default ChatFriends;