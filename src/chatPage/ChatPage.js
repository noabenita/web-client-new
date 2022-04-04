import './ChatPage.css';
import {Link} from 'react-router-dom';

function ChatPage(){
    return (
      <>
      {/* Sidebar with image */}
      <nav id="mainImage" className="w3-sidebar w3-hide-medium w3-hide-small">
        <div className="bgimg" ></div>
      </nav>

      {/* semi Transperent Screen*/}
      <div id="semiTrans" className=" w3-hide-medium w3-hide-small" ></div>
      {/* powered by*/}
      <div className="poweredBy">
          {" "}
          <pre>Powered by Or Nasri &amp; Noa Benita </pre>
      </div>
        
      <div id="button">
      <p>
            <button
              className="w3-button w3-light-grey w3-padding-small"
              type="submit"
            >
               <Link to="/">Logout</Link>
            </button>
      </p>
      </div>
    </>    
    );
}

export default ChatPage;
