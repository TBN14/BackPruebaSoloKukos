import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Paper, Typography, Grid } from "@mui/material";

import { StandardInput, PasswordInput, CoolButton } from "../components";

import { IUser } from "../types";

import { getUser } from "../api/peticiones";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<IUser>({
    _id: null,
    nombre: "",
    usuario: "",
    password: "",
    rol: "",
  });

  const handleInputChange = (input: string, value: string) => {
    setUserData({
      ...userData,
      [input]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const apiUser: IUser = await getUser(userData);
      console.log("apiUser :>> ", apiUser);

      if (
        apiUser &&
        apiUser.usuario === userData.usuario &&
        apiUser.password === userData.password
      ) {
        if (apiUser.rol === "ADMIN") {
          navigate("/admin");
        } else if (apiUser.rol === "VENDEDOR") {
          navigate("/user");
        } else {
          console.error("Rol desconocido");
        }
      } else {
        alert("Datos invalidos");
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al obtener el usuario de la API:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px", width: "30%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form>
          <StandardInput
            value={userData.usuario}
            label="Nombre de usuario"
            name="usuario"
            onChange={handleInputChange}
          />
          <PasswordInput
            value={userData.password}
            label="Contraseña"
            name="password"
            onChange={handleInputChange}
          />
          <Grid container justifyContent="center">
            <Grid item>
              <CoolButton
                value="Iniciar Sesión"
                iconName="login"
                colorButton="primary"
                colorText="white"
                iconSize={24}
                fontSize={18}
                pressCoolButton={handleLogin}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};
