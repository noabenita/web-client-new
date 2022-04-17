import {Link} from 'react-router-dom';
import {useState} from 'react';


function Chats({name, img, messages,render, key}){
  console.log("the render state is(chats)" ,render);
 return(
    <button className='w3-button w3-center w3-light-grey w3-padding-large' id='button1' >
      <Link to="/ContactChat" state={{name: name, img: img, message: messages, render:render}}> {name}</Link>
      {" "}

      <li className="clearfix">
      <img src={img} alt="avatar"/>
    <div className="about">
       
    </div>
  </li>
  </button>

 );   
}

export default Chats
