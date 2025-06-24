// components/LoginModal.jsx
import React from "react";
import { Modal, Form, Input, Button } from "antd";

const LoginModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log("Login values:", values);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      title={<h2 className=" font-semibold text-xl">Login</h2>}
      bodyStyle={{ backgroundColor: "#fffbea", paddingTop: 24 }}
      closeIcon={
        <i className="fa-solid fa-xmark text-gray-600 hover:text-yellow-600 transition text-lg" />
      }
    >
      <Form form={form} layout="vertical" onFinish={handleLogin}>
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 border-none"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
