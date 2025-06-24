// components/SearchModal.jsx
import { Modal, Input } from "antd";
import React from "react";

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      title={<h2 className=" font-semibold text-xl">Search</h2>}
      closeIcon={
        <i className="fa-solid fa-xmark text-gray-600 hover:text-yellow-600 transition text-lg" />
      }
      bodyStyle={{
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: "#fffbea",
      }}
    >
      <Input.Search
        placeholder="Search for products..."
        enterButton="Search"
        size="large"
        onSearch={(value) => {
          console.log("Searching:", value);
          onClose();
        }}
        style={{ borderRadius: "9999px" }}
      />
    </Modal>
  );
};

export default SearchModal;
