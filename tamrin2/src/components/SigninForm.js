import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signinform() {
   const [education, setEducation] = useState(false);
   const [passVisibility, setpassVisibility] = useState(false);
   const [data, setdata] = useState("");
   const [province, setProvince] = useState("");
   const [checkValue, setcheckValue] = useState({
      name: "",
      family: "",
      State: "",
      City: "",
      email: "",
      password: "",
   });

   const notify = () => toast("ثبت نام با موفقیت انجام شد :)");

   useEffect(() => {
      axios.get("/iranstates.json").then((res) => {
         setdata(res.data);
      });
   }, []);

   const handleEducation = () => {
      setEducation(true);
   };

   const handleCity = (e) => {
      setProvince(e.target.value);
      setcheckValue({ ...checkValue, State: e.target.value })
   };

   const submitHandler = () => {
      console.log(checkValue);
      if (
         checkValue.name &&
         checkValue.family &&
         checkValue.State &&
         checkValue.City &&
         checkValue.email &&
         checkValue.password 
      ) {
         notify();
      }
   };
   return (
      <>
         <p>رایگان ثبت نام کنید</p>
         <Form.Group className="d-flex" onSubmit={notify}>
            <Form.Control
               onChange={(e) =>
                  setcheckValue({ ...checkValue, name: e.target.value })
               }
               className="form-input1 m-1"
               type="text"
               placeholder="نام"
               required
            />
            <Form.Control
               onChange={(e) =>
                  setcheckValue({ ...checkValue, family: e.target.value })
               }
               className="form-input1 m-1"
               type="text"
               placeholder="نام خانوادگی"
               required
            />
         </Form.Group>

         <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Select
               onChange={handleEducation}
               className="form-input m-1"
               type="email"
               placeholder="میزان تحصیلات"
            >
               <option value="" disabled selected hidden>
                  میزان تحصیلات
               </option>
               <option value="CONSTANCY">سیکل</option>
               <option value="diploma">دیپلم</option>
               <option value="COMPLEMENT">فوق دیپلم</option>
               <option value="COMPLEMENT">لیسانس</option>
               <option value="COMPLEMENT">فوق لیسانس</option>
               <option value="COMPLEMENT">دکترا</option>
            </Form.Select>
         </Form.Group>
         <Form.Group>
            {education && (
               <Form.Control
                  className="form-input m-1"
                  type="text"
                  placeholder="محل تحصیل"
                  required
               ></Form.Control>
            )}

            <Form.Group className="d-flex">
               <Form.Control
                 
                  value={province}
                  onChange={handleCity}
                  className="form-input1 m-1"
                  as="select"
                  type="text"
                  required
               >
                  <option value="" disabled selected hidden>
                     استان
                  </option>

                  {Object.keys(data).map((State) => {
                     return <option>{State}</option>;
                  })}
               </Form.Control>

               <Form.Control
                  as="select"
                  onChange={(e) =>
                     setcheckValue({ ...checkValue, City: e.target.value })
                  }
                  onClick={() => {
                     !province &&
                        Swal.fire({
                           title: "لطفا استان خود را انتخاب کنید.",
                           width: 600,
                           padding: "3em",
                           color: "rgb(0,128,0)",
                           background: "#fff url(/images/trees.png)",
                           backdrop: `
                       rgba(0,128,0,0.4)
                       url("/images/nyan-cat.gif")
                       left top
                       no-repeat
                     `,
                        });
                  }}
                  className="form-input1 m-1"
                  type="text"
                  required
               >
                  <option value="" disabled selected hidden>
                     محل تولد
                  </option>

                  {Object.entries(data).map((stateCity) => {
                     let ostan = stateCity.splice(0, 1);
                     stateCity = stateCity.join("").split(",");
                     return stateCity.map(
                        (city) =>
                           ostan[0] === province && <option>{city}</option>
                     );
                  })}
               </Form.Control>
            </Form.Group>
         </Form.Group>
         <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
               onChange={(e) =>
                  setcheckValue({ ...checkValue, email: e.target.value })
               }
               className="form-input m-1"
               type="email"
               placeholder="پست الکترونیک"
               required
            />
         </Form.Group>
         <Form.Group
            className="mb-3 me-1 position-relative"
            controlId="formBasicPassword"
         >
            <Form.Control
               onChange={(e) =>
                  setcheckValue({ ...checkValue, password: e.target.value })
               }
               className="form-input m-1 "
               type={passVisibility ? "text" : "password"}
               placeholder="کلمه عبور"
               required
            />
            <span
               onClick={(e) => setpassVisibility(!passVisibility)}
               className="position-absolute"
               style={{
                  color: "white",
                  left: "50px",
                  bottom: "11px",
                  cursor: "pointer",
               }}
            >
               {passVisibility ? <BsEyeSlashFill /> : <BsEyeFill />}
            </span>
         </Form.Group>

         <Button
            onClick={submitHandler}
            className="my-btn me-1"
            variant="success"
            type="submit"
         >
            ثبت نام
         </Button>
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
      </>
   );
}

export default Signinform;
