import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import "./signinForm.css";
import axios from "axios";
function Signinform() {
   const [education, setEducation] = useState(false);
   const [passVisibility, setpassVisibility] = useState(false);
   const [data, setdata] = useState("");
   const [province, setProvince] = useState("");
   const [city, setCity] = useState("");
   useEffect(() => {
      axios.get("/iranstates.json").then((res) => {
         setdata(res.data);
      });
      // fetch("/iranstates.json")
      //    .then((res) => res.json())
      //    .then((data) => {
      //       setdata(data);
      //       console.log(data);
      //    });
   }, []);

   useEffect(() => {
      setCity(province);
      console.log(province);
   }, [province]);

   const handleEducation = () => {
      setEducation(true);
   };

   const handleCity = (e) => {
      setProvince(e.target.value);
   };

   return (
      <>
         <p>رایگان ثبت نام کنید</p>
         <Form.Group className="d-flex">
            <Form.Control
               className="form-input1 m-1"
               type="text"
               placeholder="نام"
               required
            />
            <Form.Control
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
               required
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
               <Form.Select
                  className="form-input m-1"
                  type="email"
                  placeholder="محل تحصیل"
                  required
               >
                  <option value="" disabled selected hidden>
                     محل تحصیل
                  </option>
               </Form.Select>
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
                        (city) => ostan == province && <option>{city}</option>
                     );
                  })}
               </Form.Control>
            </Form.Group>
         </Form.Group>
         <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
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
               className="form-input m-1 "
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
                  bottom: "11px",
                  cursor: "pointer",
               }}
            >
               {passVisibility ? <BsEyeSlashFill /> : <BsEyeFill />}
            </span>

            {/* <Space direction="vertical" className="pass-inp">
               <Input.Password
                  className="password-input"
                  placeholder="کلمه عبور"
                  iconRender={(visible) =>
                     visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
               />
            </Space> */}
         </Form.Group>

         <Button className="my-btn me-1" variant="success" type="submit">
            ثبت نام
         </Button>
      </>
   );
}

export default Signinform;
