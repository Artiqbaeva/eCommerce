import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { Form, Input, Select, Checkbox, Button, message } from "antd";
import { PatternFormat } from "react-number-format";
import axios from "axios";
import { clearCart } from "@/redux/features/cart";
import checkout from "@/assets/checkout.svg";

const { TextArea } = Input;
const { Option } = Select;

const BOT_TOKEN = "8051245953:AAFVfneikTYpPEbmhihCCXdxjGYwBM2rBgc";
const USER_ID = "6548150434";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  if (!cart.length) return <Navigate to="/cart" replace />;

  const totalPrice = Math.floor(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const handleSubmit = async (values) => {
    const orderDetails = cart
      .map((item) => `${item.title} × ${item.quantity}`)
      .join(", ");

    const messageText = `
🛒 New Order Received!
👤 Name: ${values.firstName} ${values.lastName}
📧 Email: ${values.email}
📞 Phone: ${values.phone}
🏠 Address: ${values.address}, ${values.city}, ZIP: ${values.zip}, ${values.country}
📝 Notes: ${values.notes || "No notes"}
📦 Products: ${orderDetails}
💰 Total Price: $${totalPrice}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: USER_ID,
        text: messageText,
        parse_mode: "HTML",
      });

      dispatch(clearCart());
      message.success("Ordered successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      message.error("Failed to send order. Try again.");
    }
  };

  return (
    <>
      <div className="w-full">
        <img
          onClick={() => navigate("/")}
          className="w-full h-full cursor-pointer"
          src={checkout}
          alt="checkout"
        />
      </div>

      <div className="bg-white px-6 md:px-16 lg:px-32 py-12 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Billing details</h2>
            <Form
              layout="vertical"
              form={form}
              onFinish={handleSubmit}
              requiredMark="optional"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[{ required: true, message: "Please enter your first name" }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[{ required: true, message: "Please enter your last name" }]}
                >
                  <Input />
                </Form.Item>
              </div>

              <Form.Item name="company" label="Company Name (Optional)">
                <Input />
              </Form.Item>

              <Form.Item
                name="country"
                label="Country / Region"
                rules={[{ required: true, message: "Please select your country" }]}
              >
                <Select placeholder="Select country">
                  <Option value="Uzbekistan">Uzbekistan</Option>
                  <Option value="Sri Lanka">Sri Lanka</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="address"
                label="Street address"
                rules={[{ required: true, message: "Please enter address" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="city"
                label="Town / City"
                rules={[{ required: true, message: "Please enter city" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="province"
                label="Province"
                rules={[{ required: true, message: "Please select a province" }]}
              >
                <Select placeholder="Select province">
                  <Option value="Asia">Asia</Option>
                  <Option value="Western Province">Western Province</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="zip"
                label="ZIP code"
                rules={[{ required: true, message: "Please enter ZIP code" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <PatternFormat
                  format="+(998) ## ### ## ##"
                  allowEmptyFormatting
                  mask="_"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email address"
                rules={[
                  { required: true, message: "Please enter email" },
                  { type: "email", message: "Invalid email" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item name="notes" label="Additional Information">
                <TextArea rows={3} />
              </Form.Item>

              <Form.Item
                name="terms"
                valuePropName="checked"
                rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject("You must accept terms and conditions") }]}
              >
                <Checkbox>I agree to the terms and conditions</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  className="bg-yellow-500 hover:bg-yellow-600 border-none"
                  block
                >
                  Place Order
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Product</h2>
            <div className="text-sm text-gray-800 space-y-3 bg-gray-50 p-6 rounded-xl shadow-sm">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.title} × {item.quantity}</span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}
              <hr />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between font-bold text-yellow-600 text-lg">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
              <hr />
              <div className="space-y-2 pt-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  Direct Bank Transfer
                </label>
                <p className="text-xs text-gray-500 ml-5">
                  Make your payment directly into our bank account.
                </p>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  Cash On Delivery
                </label>
              </div>
              <p className="text-xs text-gray-500 pt-4">
                Your personal data will be used to support your experience. Read our <span className="underline">privacy policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
