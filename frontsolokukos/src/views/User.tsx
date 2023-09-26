import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { CoolButton, ProductList } from "../components";
import { IProduct } from "../types";
import { getProduct } from "../api/peticiones";

export const User = () => {
  const navigate = useNavigate();
  const [apiProducts, setApiProducts] = useState<IProduct[]>([]);

  const handleSignOut = () => {
    navigate("/");
    console.log("Cerrar sesión con:");
  };

  const groupProductsByCategory = (products: IProduct[]) => {
    const groupedProducts: { [category: string]: IProduct[] } = {};

    products.forEach((product) => {
      const { categoria } = product;

      if (!groupedProducts[categoria]) {
        groupedProducts[categoria] = [];
      }

      groupedProducts[categoria].push(product);
    });

    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory(apiProducts);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getProduct();
        if (response && response.length) {
          setApiProducts(response);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div style={{ margin: 15 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(106, 181, 255, 0.4)",
          padding: 10,
        }}
      >
        <Typography variant="h4">Usuario</Typography>
        <CoolButton
          value="Cerrar Sesión"
          iconName="login"
          colorButton="primary"
          colorText="white"
          iconSize={14}
          fontSize={14}
          pressCoolButton={handleSignOut}
        />
      </div>
      <div
        style={{
          padding: 20,
          backgroundColor: "rgba(236, 246, 255, 0.4)",
        }}
      >
        {Object.keys(groupedProducts).map((category) => (
          <div key={category}>
            <div
              style={{
                paddingLeft: 10,
              }}
            >
              <h1>{category}</h1>
            </div>
            <ProductList products={groupedProducts[category]} />
          </div>
        ))}
      </div>
    </div>
  );
};
