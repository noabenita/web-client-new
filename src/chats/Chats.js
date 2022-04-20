import {Link} from 'react-router-dom';
import {useState} from 'react';
import ContactChat from '../ContactChat';


function Chats({name, img, messages,setRender}){
  
 return(
   <>
    <button className='w3-button w3-center w3-light-grey w3-padding-large' id='button1' >
      {/* <Link to="/ContactChat" state={{name: name, img: img, message: messages, setRender: setRender}}> {name}</Link> */}
      <ContactChat name= {name} img= {img} message= {messages} setRender={setRender}/>
      {" "}

      <li className="clearfix">
      <img src={img} alt="avatar"/>
    <div className="about">
       
    </div>
  </li>
  </button>
</>
 );   
}

export default Chats