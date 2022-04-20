import './SignUpPage.css';
import React from 'react';

function SignUpPage({db, setMode,insertNewUser, setNewUser}) {
  // const[user, setUser]= React.useState({UserName: "", NickName:"", Img:"", Password:"", Chats:""});
  const [createUser, setCreateUser]= React.useState({username:'', nickname:'', img:'', password:'', confirmpassword:''});
  function checkPhoto(e){
    if (e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)){
      const {name, value} = e.target;
      setCreateUser({
        ...createUser,
        [name]:value
      })
    } else{
      createUser.img =' ';
        }
    }

    function ifSubmit(x){
      console.log('ifSubmit of signup');
        if (!(((createUser.username.length == 0) || (createUser.nickname.length == 0) || (createUser.img.length == 0) ||
        (createUser.password.length == 0) || (createUser.confirmpassword.length == 0)))) {
            if(createUser.img != ' '){
                if ((/[a-z]/.test(createUser.password)) && (/[A-Z]/.test(createUser.password))
                && (/[0-9]/.test(createUser.password)) && (createUser.password.length >= 8)){
                    if ((createUser.confirmpassword == createUser.password)){
                        if (!(db.find((e) => e.UserName == createUser.username))){
                          setNewUser({
                            UserName:createUser.username,
                            NickName:createUser.nickname,
                            Img: createUser.img,
                            Password : createUser.password,
                            Chats: [
                              {contact: 'ron',
                              imgContact: "https://bootdey.com/img/Content/avatar/avatar2.png",
                              message:[
                                {data:"hey",time: '12:10',flag:true},
                                {data:"?",time: '12:15',flag:false},
                                {data:"what",time: "12:17",flag:false}]}, 
                              {contact :"hen",
                              imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
                              message:[
                                {data:"how are u??",time: '14:10',flag:true},
                                {data:"♥",time: '14:11',flag:true},
                                {data:"fine, honey",time: "14:40",flag:false}]},
                              {contact :"noa",
                               imgContact: "https://bootdey.com/img/Content/avatar/avatar3.png",
                               message:[
                                 {data:"how are u??",time: '14:10',flag:true},
                                 {data:"♥",time: '14:11',flag:true},
                                 {data:"fine, honey",time: "14:40",flag:false}]}]
                          });
                            setMode(0)
                        } else {
                            alert("Username is already exist.");
                            x.preventDefault();
                        }
                    } else {
                        alert ("Passwords do not match.");
                        x.preventDefault();
                    }
                } else {
                    alert("Password must conatain : lowercase letter, uppercase letter, number and minimum 8 charcters.");
                    x.preventDefault();
                }
            } else {
            alert ("Image format do not match.");
            x.preventDefault();
          }
        } else {
          alert("Please fill all fields.");
          x.preventDefault();
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
  

          <header className="w3-container w3-center" id="home">
                    <h1 className="onChatS w3-jumbo">
                        <b>O-N Chat</b>
                    </h1>
                    <p className="secHeadLineS"> Fast, Simple and Secure Messaging.</p>
                </header>

                <div className ="signupText w3-light-grey w3-container w3-center w3-large w3-opacity" > 
                  Sign Up </div> 
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

              <form > 
                <button id='button3' className='w3-button w3-center w3-light-grey w3-padding-large' 
                    onClick={ifSubmit}  >
                    Sign Up
                </button>
              </form>
              {/* End Contact Section*/}
            </div>
            {/* Footer */}
            <footer
              className="poweredByS w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge ">
              <p className="w3-medium">
                Powered by <a>Or Nasri &amp; Noa Benita</a>
                </p>
              {/* End footer */}
            </footer>
          </div>  
          {/* END PAGE CONTENT */}
        </div>
        
      // </div>
    );
}

export default SignUpPage