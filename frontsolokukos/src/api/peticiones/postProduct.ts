import { IProduct } from "../../types";
import { createAxiosInstance } from "../axiosInstance";

export async function postProduct(product: IProduct): Promise<any> {
  try {
    const axiosInstance = createAxiosInstance("localhost", "3001");

    const response = await axiosInstance.post("/post-product", product);

    console.log("response :>> ", response);

    return response.data;
  } catch (error) {
    console.log("error consulta postProduct :>> ", error);
    throw error;
  }
}
