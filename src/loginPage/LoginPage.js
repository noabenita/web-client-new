
import { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';



class LoginPage extends Component {
    render() {
        
    
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

                        
            {/* <div className ="w3-light-grey w3-center w3-medium" id = "loginPageHeadline">
                Login              
            </div> */}
            
            
            <div container id="put1">
            <form>
                <label>               
                    <input type="text"  className='w3-container w3-xlarge' placeholder='Username'  />
                </label>
            </form>
            </div>

            <div id="put1">
            <form>
                <label>               
                    <input type="password" className='w3-container w3-xlarge' placeholder='Password'  />
                </label>
            </form>
            </div>
            
            

            <p>
                <button className='w3-button w3-light-grey w3-padding-large' type='submit' id='button1'>
                    <Link to="/ChatPage">Sign In</Link>
                </button>
                <button className='w3-button w3-center w3-light-grey w3-padding-large' type='submit' id='button2'>
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
}
export default LoginPage;