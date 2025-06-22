import React from "react";
import { Modal, Form, Input, Button } from "antd";

const LoginModal = ({ open, onClose }) => {
  const [form] = Form.useForm(); // ✅ Hook to‘g‘ri joyda

  const handleLogin = (values) => {
    console.log("Login values:", values);
    onClose();
  };

  return (
    <Modal open={open} onCancel={onClose} footer={null} centered title="Login">
      <Form form={form} layout="vertical" onFinish={handleLogin}>
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
