import { IUser } from "../../types";
import { createAxiosInstance } from "../axiosInstance";

export async function getUser(user: IUser): Promise<any> {
  try {
    const axiosInstance = createAxiosInstance("localhost", "3001");

    const response = await axiosInstance.get(
      `/login/${user.usuario}/${user.password}`
    );

    return response.data;
  } catch (error) {
    console.log("error consulta getUser :>> ", error);
    throw error;
  }
}
