import { createAxiosInstance } from "../axiosInstance";

export async function getProduct(): Promise<any> {
  try {
    const axiosInstance = createAxiosInstance("localhost", "3001");

    const response = await axiosInstance.get("/get-products");

    return response.data;
  } catch (error) {
    console.log("error consulta getProduct :>> ", error);
    throw error;
  }
}
