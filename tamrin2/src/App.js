import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Loginform from "./components/LoginForm";
import Signinform from "./components/SigninForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   const [isLoggedIn, setIsLogedIn] = useState(true);
  
   const greenStyle = {
      backgroundColor: "#198754"
   }
   const grayStyle ={
      backgroundColor: "gray"
   }
   const handleLoginClick = () => {
      setIsLogedIn(true);
   };

   const handleSignInClick = () => {
      setIsLogedIn(false);
   };

   return (
      <div className="signin-form-containter">
         <Form className="signin-form">
            <Form.Group className="d-flex mb-3">
               <Button
                  onClick={handleLoginClick}
                  className="my-btn  me-1"
                  variant="success"
                  style={isLoggedIn ? greenStyle: grayStyle}
               >
                  ورود
               </Button>
               <Button
                  onClick={handleSignInClick}
                  className="my-btn ms-3"
                  variant="secondary"
                  style={isLoggedIn ? grayStyle: greenStyle}
               >
                  ثبت نام
               </Button>
            </Form.Group>
            <div className="App">
               {isLoggedIn ? <Loginform /> : <Signinform />}
            </div>
         </Form>
      </div>
   );
}

export default App;
