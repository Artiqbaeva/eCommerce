import React, { useState, useEffect } from "react";
import { Modal, Input, Spin } from "antd";
import { useProduct } from "@/api/hooks/useProduct";
import useDebounce from "@/hooks/UseDebounce";

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query);
  const { getSearchProduct } = useProduct();
  const { data, isLoading } = getSearchProduct({ q: debounced.trim() });

  useEffect(() => {
    if (isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      title={<h2 className="font-semibold text-xl">Search</h2>}
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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        size="large"
        style={{ borderRadius: "9999px" }}
      />

      <div className="mt-6 max-h-[300px] overflow-y-auto space-y-2">
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Spin />
          </div>
        ) : data?.data?.products?.length ? (
          data.data.products.map((item) => (
            <div
              onClick={() => {
                onClose();
                window.location.href = `/product/${item.id}`;
              }}
              key={item.id}
              className="p-3 rounded border hover:border-yellow-600 transition cursor-pointer bg-white"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-500 text-sm">${item.price}</p>
            </div>
          ))
        ) : (
          debounced && (
            <p className="text-center text-gray-500 py-6">No results found.</p>
          )
        )}
      </div>
    </Modal>
  );
};

export default SearchModal;