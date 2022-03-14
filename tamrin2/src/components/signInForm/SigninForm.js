import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Select, Space } from "antd";
import "antd/dist/antd.css";
import "./signinForm.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
function Signinform() {
   const [education, setEducation] = useState(false);

   const handleEducation = () => {
      setEducation(true);
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
               <option value="DICTUM">زیر سیکل</option>
               <option value="CONSTANCY">سیکل</option>
               <option value="COMPLEMENT">دیپلم</option>
               <option value="COMPLEMENT">فوق دیپلم</option>
               <option value="COMPLEMENT">لیسانس</option>
               <option value="COMPLEMENT">فوق لیسانس</option>
               <option value="COMPLEMENT">دکترا</option>
            </Form.Select>
         </Form.Group>
         <Form.Group>
            {education ? (
               <Form.Select
                  onChange={handleEducation}
                  className="form-input m-1"
                  type="email"
                  placeholder="محل تحصیل"
                  required
               >
                  <option value="DICTUM">زیر سیکل</option>
               </Form.Select>
            ) : (
               ""
            )}
         </Form.Group>
         <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
               className="form-input m-1"
               type="email"
               placeholder="پست الکترونیک"
               required
            />
         </Form.Group>
         <Form.Group className="mb-3 me-1" controlId="formBasicPassword">
            <Space direction="vertical" className="pass-inp">
               <Input.Password
                  className="password-input"
                  placeholder="کلمه عبور"
                  iconRender={(visible) =>
                     visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
               />
            </Space>
         </Form.Group>

         <Button className="my-btn me-1" variant="success" type="submit">
            ثبت نام
         </Button>
      </>
   );
}

export default Signinform;
