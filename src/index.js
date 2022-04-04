// import React from 'react';
// import ReactDOM from 'react-dom';
// import LoginPage from './loginPage/LoginPage';
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//   <React.StrictMode>
//     <LoginPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ChatPage from './chatPage/ChatPage';
import LoginPage from './loginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import SignUpPage from './signUpPage/SignUpPage';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/" element ={<LoginPage />}>
              </Route>
              <Route path="/SignUpPage" element ={<SignUpPage />}>
              </Route>
              <Route path="/ChatPage" element ={<ChatPage />}>
              </Route>
            </Routes>
        </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();