import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginForm.css";

function Loginform({ isLoggedIn }) {
   return (
      <>
         <p className="khoshAmadid">خوش آمدید</p>

         <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
               className="form-input m-1"
               type="email"
               placeholder="پست الکترونیک"
               required
            />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
               className="form-input m-1"
               type="password"
               placeholder="کلمه عبور"
               required
            />
         </Form.Group>
         <a>
            <p className="faramoosh">فراموش کردید؟</p>
         </a>
         <Button className="my-btn me-1" variant="success" type="submit">
            ورود
         </Button>
      </>
   );
}

export default Loginform;
