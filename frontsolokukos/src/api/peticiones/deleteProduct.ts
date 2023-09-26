import { IProduct } from "../../types";
import { createAxiosInstance } from "../axiosInstance";

export async function deleteProduct(id: string): Promise<any> {
  try {
    const axiosInstance = createAxiosInstance("localhost", "3001");

    const response = await axiosInstance.delete(`/delete-product/${id}`);

    console.log("response :>> ", response);

    return response.data;
  } catch (error) {
    console.log("error consulta deleteProduct :>> ", error);
    throw error;
  }
}
