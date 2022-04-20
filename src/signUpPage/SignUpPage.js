// import './LoginPage.css';
import React from 'react';


function SignUpPage({ifSubmit}) {
    const [createUser, setCreateUser]= React.useState({username:'', nickname:'', img:'', password:'', confirmpassword:''});
     function checkPhoto(e){
        if (e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)){
          const {name, value} = e.target;
          setCreateUser({
            ...createUser,
            [name]:value
          })
        }
        else{
          createUser.img =' ';
        }
    }
    function ifChange(event){
        const {name, value} = event.target;
        setCreateUser({
          ...createUser,
          [name]:value
        })
    }

    return(
        <div className='container'>
        <div className='row'>
          <div className='col'>
            {/* Sidebar with image */}
            <nav id="mainImage" className="w3-sidebar w3-hide-medium w3-hide-small">
              <div className="bgimg" />
            </nav>
          </div> 
  
          <div className='col1'>
            <div id = "headDec">
              {/* Header */}
              <header className="w3-container w3-center" id="home">
                <h1 className="w3-jumbo">
                  <b>O-N Chat</b>
                </h1>
                <p> Fast, Simple and Secure Messaging.</p>
              </header>
            </div>
  
            <div className = "signupPageHeadline w3-container w3-light-grey w3-center w3-opacity">
                  <label>
                      <div className ="SignUpText w3-center w3-large" > 
                          SignUp
                      </div>            
                  </label>
              </div>
  
            <div id ='put'>
              <form action="/action_page.php" target="_blank">
                <p>
                    <input className="w3-input w3-padding-16 w3-border" type="text" name="username" 
                    placeholder="Username" onChange={ifChange} />
                </p>
                <p>
                  <input
                    className="w3-input w3-padding-16 w3-border" type="text" name ="nickname"
                    placeholder="NickName"  onChange={ifChange} />
                </p>
                <label>Select Image : </label>
                <input className="addImage" type="file" onChange={checkPhoto} name="img" />
              </form>
              <p>
                <input className="w3-input w3-padding-16 w3-border" name="password" type="password"
                  placeholder="Password"  onChange={ifChange} />
              </p>
              <p>
                <input className="w3-input w3-padding-16 w3-border" name="confirmpassword" type="password"                
                  placeholder="Confirm Password" onChange={ifChange}/>
              </p>
              <form onSubmit={ifSubmit(createUser.username,createUser.nickname,createUser.img,
                                createUser.password, createUser.confirmpassword)}>
                <button className='w3-button w3-light-grey w3-padding-large' >
                  Sign Up
                </button>
              </form>
              {/* End Contact Section*/}
            </div>
            {/* Footer */}
            <footer
                id="poweredBy" className=" w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge ">
                <p className="w3-medium">
                Powered by <a>Or Nasri &amp; Noa Benita</a>
                </p>
              {/* End footer */}
            </footer>
          </div>  
          {/* END PAGE CONTENT */}
        </div>
        
      </div>
    );
}

export default SignUpPage