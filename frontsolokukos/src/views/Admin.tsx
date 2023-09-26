import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { CoolButton, ModalProduct, ProductList } from "../components";
import { IProduct } from "../types";
import {
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../api/peticiones";

export const Admin = () => {
  const navigate = useNavigate();
  const [apiProducts, setApiProducts] = useState<IProduct[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [productData, setProductData] = useState<IProduct>({
    _id: "",
    nombre: "",
    precio: 0,
    referencia: "",
    talla: "",
    color: "",
    categoria: "",
  });

  const handleSignOut = () => {
    navigate("/");
    console.log("Cerrar sesión con:");
  };

  const handleAddProduct = () => {
    setAddProductModalOpen(true);
    setIsEditing(false);
    setProductData({
      _id: null,
      nombre: "",
      precio: 0,
      referencia: "",
      talla: "",
      color: "",
      categoria: "",
    });
  };

  const handleEditProduct = (product: IProduct) => {
    setProductData(product);
    setIsEditing(true);
    setAddProductModalOpen(true);
  };
  const handleDeleteProduct = async (product: IProduct) => {
    try {
      console.log("Eliminando producto:", product);
      const response = await deleteProduct(product._id);
      console.log("Producto eliminado:", response);

      const updatedProducts = await getProduct();
      setApiProducts(updatedProducts);
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  const handleSaveProduct = async (formData: IProduct) => {
    try {
      console.log("formData :>> ", formData);
      const response = await postProduct(formData);
      console.log("Nuevo producto agregado:", response);

      setAddProductModalOpen(false);
      setProductData({
        _id: "",
        nombre: "",
        precio: 0,
        referencia: "",
        talla: "",
        color: "",
        categoria: "",
      });
      const updatedProducts = await getProduct();
      setApiProducts(updatedProducts);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  const handleSaveEditedProduct = async (formData: IProduct) => {
    try {
      console.log("formData :>> ", formData);

      const response = await updateProduct(formData._id, formData);
      console.log("Producto actualizado:", response);

      setAddProductModalOpen(false);

      setProductData({
        _id: "",
        nombre: "",
        precio: 0,
        referencia: "",
        talla: "",
        color: "",
        categoria: "",
      });

      const updatedProducts = await getProduct();
      setApiProducts(updatedProducts);
    } catch (error) {
      console.error("Error al actualizar producto:", error);
    }
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
        <Typography variant="h4">Administrador</Typography>
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
        <div style={{ textAlign: "center" }}>
          <CoolButton
            value="Agregar Producto"
            iconName="add"
            colorButton="lime"
            colorText="white"
            iconSize={24}
            fontSize={12}
            pressCoolButton={handleAddProduct}
          />
        </div>
        {Object.keys(groupedProducts).map((category) => (
          <div key={category}>
            <div
              style={{
                paddingLeft: 10,
              }}
            >
              <h1>{category}</h1>
            </div>
            <ProductList
              products={groupedProducts[category]}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
        ))}
      </div>
      {isAddProductModalOpen && (
        <ModalProduct
          isOpen={isAddProductModalOpen}
          onClose={() => setAddProductModalOpen(false)}
          onSubmit={() => {
            isEditing
              ? handleSaveEditedProduct(productData)
              : handleSaveProduct(productData);
          }}
          product={productData}
          onInputChange={(input, value) =>
            setProductData({ ...productData, [input]: value })
          }
          isEditing={isEditing}
        />
      )}
    </div>
  );
};
