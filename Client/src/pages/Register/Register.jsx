import React from 'react';
import { Button, Form, Input } from 'antd';
import { RegisterUser } from '../../api/users';
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success("User registered successfully");
        navigate('/login');  // Redirect to login page after successful registration
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.log(error);
      message.error("An error occurred during registration");
    }
  }

  return (
    <header className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section className="left-section">
          <h1>
            Sign Up for BookMyShow
          </h1>
        </section>
        <section className="right-section">
          <Form
              layout='vertical'
              onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                type="text"
                placeholder="Enter your Name"
              ></Input>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                type="email"
                placeholder="Enter your Email"
              ></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                type="password"
                placeholder="Enter your Password"
              ></Input>
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </section>
      </main>
    </header>
  )
}

export default Register;