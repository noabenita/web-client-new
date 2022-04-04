
import { Component } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './LoginPage.css';
import {useState} from 'react';
import ChatPage from '../chatPage/ChatPage';



function LoginPage({db}) {
    const [usersArray,setUserArray] = useState({username:'', password:''});
    var nav = useNavigate();
    
    function ifSubmit() {
        if(db.find((e) => e.UserName == usersArray.username && e.Password == usersArray.password)) {
            nav("/ChatPage");
        } else {
            alert('failed');
        }
    }
        
    function ifChange(event) {
        const {name, value} = event.target;
        setUserArray({
            ...usersArray,
            [name]:value
        })
    }
        
    return ( 
        <>  
       
            <nav id="mainImage" className="w3-sidebar w3-hide-medium w3-hide-small">
                <div className="bgimg" ></div>               
            </nav>

            <div id="headDec">
                <header className="w3-container w3-center" id="home">
                    <h1 className="w3-jumbo">
                        <b>O-N Chat</b>
                    </h1>
                    <p> Fast, Simple and Secure Messaging.</p>
                </header>
            </div>


            <div container id = "loginPageHeadline">
                <label>
                    <div className ="w3-light-grey w3-container w3-center w3-large" > 
                        Login
                    </div>            
                </label>
            </div>

                
                
            <div id="loginInfo">
                <form >
                    <label>               
                        <input type="text" name="username" className='w3-container w3-xlarge' onChange={ifChange} placeholder='Username'  />
                    </label>
                </form>
                </div>

            <div id="loginInfo">
                <form>
                    <label>               
                        <input type="password" name="password" className='w3-container w3-xlarge' onChange={ifChange} placeholder='Password'  />
                    </label>
                </form>
            </div>
                
                
            <form onSubmit={ifSubmit}> 
                <button className='w3-button w3-center w3-light-grey w3-padding-large' type='submit' id='button2'>
                    Sign In
                </button>   
            </form>

            <p >
                <button className='w3-button w3-center w3-light-grey w3-padding-large' type='submit' id='button1'>
                    <Link to="/SignUpPage">Sign Up</Link>
                </button>
            </p>

   
            <p>
                <footer
                    id="poweredBy"
                    className=" w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge ">
                    <p className="w3-medium">
                        Powered by <a>Or Nasri &amp; Noa Benita</a>
                    </p>
                </footer>
            </p>
        
                    
        </>
    );
    
}
export default LoginPage;