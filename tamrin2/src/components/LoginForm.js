import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Loginform({ isLoggedIn }) {
   const [passVisibility, setpassVisibility] = useState(false);
   const notify = () => toast("Wow so easy !");
   return (
      <>
         <p>خوش آمدید</p>

         <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
               className="form-input m-1"
               type="email"
               placeholder="پست الکترونیک"
               required
            />
         </Form.Group>

         <Form.Group
            className="mb-3 position-relative"
            controlId="formBasicPassword"
         >
            <Form.Control
               className="form-input m-1"
               type={passVisibility ? "text" : "password"}
               placeholder="کلمه عبور"
               required
            />
            <span
               onClick={() => setpassVisibility(!passVisibility)}
               className="position-absolute"
               style={{
                  color: "white",
                  left: "50px",
                  bottom: "9px",
                  cursor: "pointer",
               }}
            >
               {passVisibility ? <BsEyeSlashFill /> : <BsEyeFill />}
            </span>
         </Form.Group>
         <a href="#">فراموش کردید؟</a>
         <Button
            onClick={notify}
            className="my-btn mt-2 me-1"
            variant="success"
            type="submit"
         >
               <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
               />
            ورود
         </Button>
      </>
   );
}

export default Loginform;
