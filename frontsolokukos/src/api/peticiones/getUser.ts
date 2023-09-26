import { IUser } from "../../types";
import { createAxiosInstance } from "../axiosInstance";

export async function getUser(user: IUser): Promise<any> {
  try {
    // Crea una instancia de Axios usando tu configuración
    const axiosInstance = createAxiosInstance("localhost", "3001");

    // Realiza una solicitud GET
    // const response = await axiosInstance.get("/login/Lenteja/123");
    const response = await axiosInstance.get(
      `/login/${user.usuario}/${user.password}`
    );

    return response.data;
  } catch (error) {
    console.log("error consulta getUser :>> ", error);
    throw error;
  }
}
