import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useProduct = () => {

  const getProduct = (params) =>
    useQuery({
      queryKey: ["product", params],
      queryFn: () => api.get("/products", { params }),
    });

  
    const getProductById = ({ id }) =>
        useQuery({
          queryKey: ["product-detail", id],
          queryFn: () => api.get(`/products/${id}`),
        });
      
  return { getProduct, getProductById };
};
