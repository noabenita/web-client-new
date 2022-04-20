import './LoginPage.css';
import React from 'react';

function LoginPage({db, setMode, setCurrent}) {
    const [usersArray,setUserArray] = React.useState({username:'', password:''});          
    function ifSubmited(e) {  
        console.log('if submit im login');
        for (var i =0; i <db.length; i++) {
            if(db[i].UserName == usersArray.username && db[i].Password == usersArray.password){
                setCurrent({
                    UserName: db[i].UserName,
                    NickName: db[i].NickName,
                    Img: db[i].Img,
                    Password: db[i].Password, 
                    Chats: db[i].Chats
                })
                setMode(2);
                return
                } 
            }
        alert('username or password is incorrect'); 
        e.preventDefault();
    }      
    function ifChange(event) {
        const {name, value} = event.target;
        setUserArray({
            ...usersArray,
            [name]:value
        })
    }
    function changeMode(){
        setMode(1);
        return
    }
    return ( 
        <>   
        {/* <nav id="mainImage" className="w3-sidebar w3-hide-medium w3-hide-small">
            <div className="bgimg" ></div>               
        </nav> */}

            {/* <div id="headDec">
                <header className="w3-container w3-center" id="home">
                    <h1 className="onChat w3-jumbo">
                        <b>O-N Chat</b>
                    </h1>
                    <p className="secHeadLine"> Fast, Simple and Secure Messaging.</p>
                </header>
            </div> */}

            {/* <div className = "loginPageHeadline w3-container w3-light-grey w3-center w3-opacity"> */}
                {/* <label> */}
                    <div className ="loginText w3-light-grey w3-container w3-center w3-large" > 
                        Login
                    </div>            
                {/* </label> */}
            {/* </div>         */}
                
            <div id="loginInfo">
                <form >
                    <label>               
                        <input type="text" name="username" className='w3-container w3-xlarge' 
                        onChange={ifChange} placeholder='Username'  />
                    </label>


            {/* <div id="loginInfo"> */}
                    <label>      
                        <input type="password" name="password" className='w3-container w3-xlarge'
                         onChange={ifChange} placeholder='Password'  />
                    </label>
                {/* </form> */}
                
            
            
            {/* <input id= 'button2' value="Sign-In" type="radio" name="tab" className="sign-in" 
                 onClick={ifSubmited}> </input>
                    <label htmlFor='button2' className='tab'> Sign In</label> */}
               
            <form > 
                <button className='w3-button w3-center w3-light-grey w3-padding-large' 
              onClick={ifSubmited}  id='button2'>
                    Sign In
                </button>   
            </form>

            {/* <p > */}
                <button id='button1' value="Sign-Up" type="radio" name="tab" className="sign-up" 
                 onClick={changeMode}> Sign Up</button>
                     {/* <label htmlFor='button1' className='tab'> Sign Up</label> */}
                
            {/* </p> */}
           </form>
           </div>
            <footer
              className="poweredBy w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge ">
              <p className="w3-medium">
              Powered by <a>Or Nasri &amp; Noa Benita</a>
              </p>
            {/* End footer */}
           </footer>
           
         </>
    );
    
}
export default LoginPage;