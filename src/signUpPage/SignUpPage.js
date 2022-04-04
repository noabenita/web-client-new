import {Link} from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  
  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {/* Sidebar with image */}
          <nav id="mainImage" className="w3-sidebar w3-hide-medium w3-hide-small">
            <div className="bgimg" >/</div>
          </nav>
        </div>

        <div className='col'>
          <div id = "headDec">
            {/* Header */}
            <header className="w3-container w3-center" id="home">
              <h1 className="w3-jumbo">
                <b>O-N Chat</b>
              </h1>
              <p> Fast, Simple and Secure Messaging.</p>
            </header>
          </div>
          <div id ='put1'>
            <form action="/action_page.php" target="_blank">
              <p>
                <label>
                  <input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Username" />
                </label>
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="NickName" />
              </p>
              <label>Select Image : </label>
              <input type="file" name="image" />
            </form>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="password"
                placeholder="Password" />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="password"
                placeholder="Confirm Password"/>
            </p>
            <p>
              <button className='w3-button w3-light-grey w3-padding-large' type='submit'>
                <Link to="/ChatPage">Sign In</Link>
              </button>
            </p>
            {/* End Contact Section */}
          </div>

          {/* Footer */}
          <footer
              id="poweredBy"
              className=" w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge ">
            <p className="w3-medium ">
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

export default SignUpPage;