import { IUser } from "../../types";
import { createAxiosInstance } from "../axiosInstance";

export async function postUser(user: IUser): Promise<any> {
  try {
    const axiosInstance = createAxiosInstance("localhost", "3001");

    const response = await axiosInstance.post("/post-user", user);

    console.log("response :>> ", response);

    return response.data;
  } catch (error) {
    console.log("error consulta postUser :>> ", error);
    throw error;
  }
}
