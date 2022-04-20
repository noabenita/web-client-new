import './LoginPage.css';
import React from 'react';

function LoginPage({db, setMode, setCurrent}) {
    
    const [usersArray,setUserArray] = React.useState({username:'', password:''});
    
    function ifSubmit(e) {            
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
    function changemode(){
        setMode(1);
    }
    return ( 
        <>   
        <nav className="mainImage w3-sidebar ">
            <div className="bgimg" ></div>               
        </nav>

            <div id="headDec">
                <header className="w3-container w3-center" id="home">
                    <h1 className="onChat w3-jumbo">
                        <b>O-N Chat</b>
                    </h1>
                    <p className="secHeadLine"> Fast, Simple and Secure Messaging.</p>
                </header>
            </div>

            <div className ="loginText w3-light-grey w3-container w3-center w3-large w3-opacity" > 
                        Login
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
                <button className='w3-button w3-center w3-light-grey w3-padding-large' 
                id='button2'>
                    Sign In
                </button>   
            </form>

            <p >
                <button className='w3-button w3-center w3-light-grey w3-padding-large'
                 id='button1' onClick={changemode}>
                    Sign Up
                </button>
            </p>
        
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