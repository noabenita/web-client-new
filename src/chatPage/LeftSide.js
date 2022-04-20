


function LeftSide({current, setState, setUser, setChat}){
    function clicked(e){
        for(var i = 0; i<current.Chats.length;i++){
            if(e.target.id == current.Chats[i].contact){
                setUser(
                    {contact: current.Chats[i].contact,
                    imgContact: current.Chats[i].imgContact,
                    message: current.Chats[i].message});
                setState(1)
                setChat(current.Chats[i].message);
            }
        }
    }
    return(
        <ul className="friends-list">
         {current.Chats.map((user)=>
             <li className="clearfix">
                <button type="button" onClick={clicked} id={user.contact}>
                
                    {user.contact}
                    </button>    
                </li> 
        )}  
        </ul>
    )

}
export default LeftSide