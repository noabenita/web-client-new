import './LoginPage.css';
import React from 'react';

function LoginPage({db, setMode, setCurrent, newUser}) {
    const [usersArray,setUserArray] = React.useState({username:'', password:''});          
    function ifSubmited(e) {  
        console.log('ifsubmit in login');
        if(newUser.UserName.length >0){
            console.log('add new user')
            db.push(newUser);
            console.log(db);
        }
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
        setMode(1)
        return
    }
    return ( 
        <>   
        <div className="w3-sidebar ">
            <div className="bgimg" ></div>               
        </div>

                <header className="w3-container w3-center" id="home">
                    <h1 className="onChat w3-jumbo">
                        <b>O-N Chat</b>
                    </h1>
                    <p className="secHeadLine"> Fast, Simple and Secure Messaging.</p>
                </header>

            <div className ="loginPageHeadline w3-light-grey w3-container w3-center w3-large w3-opacity" > 
                        Login
            </div> 
                   
                
            <div id="loginInfo1">
                <form >
                    <label>               
                        <input type="text" name="username" className='w3-container w3-xlarge' 
                        onChange={ifChange} placeholder='Username'  />
                    </label>
                </form>
                </div>

            <div id="loginInfo2">
                <form>
                    <label>      
                        <input type="password" name="password" className='w3-container w3-xlarge' 
                        onChange={ifChange} placeholder='Password'  />
                    </label>
                </form>
            </div>
                
               <div>
            <form > 
                <button id='button1Log' className='w3-button w3-center w3-light-grey w3-padding-large' 
                    onClick={ifSubmited}  >
                    Sign In
                </button>
                 <p>  
                <button id='button2Log' className='w3-button w3-center w3-light-grey w3-padding-large' 
                 onClick={changeMode}> Sign Up</button>
               </p>
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