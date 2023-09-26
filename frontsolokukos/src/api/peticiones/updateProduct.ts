import { IProduct } from "../../types";
import { createAxiosInstance } from "../axiosInstance";

export async function updateProduct(
  id: string,
  product: IProduct
): Promise<any> {
  try {
    const axiosInstance = createAxiosInstance("localhost", "3001");

    const response = await axiosInstance.put(`/put-product/${id}`, product);

    console.log("response :>> ", response);

    return response.data;
  } catch (error) {
    console.log("error consulta updateProduct :>> ", error);
    throw error;
  }
}
