import React from "react";
import { CoolButton } from "./CoolButton";
import { IProduct } from "../types";

interface ProductListProps {
  products: IProduct[];
  onEdit?: (product: IProduct) => void;
  onDelete?: (product: IProduct) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            padding: 10,
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
              backgroundColor: "white",
              minWidth: "220px",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontSize: "18px",
                color: "black",
                textAlign: "center",
                borderBottom: "1px solid black",
                textTransform: "uppercase",
              }}
            >
              {product.nombre}
            </h3>
            <p style={{ fontSize: "14px" }}>
              <strong>Precio:</strong> ${product.precio.toString()}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>Referencia:</strong> {product.referencia}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>Talla:</strong> {product.talla}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>Color:</strong> {product.color}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>Categoría:</strong> {product.categoria}
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {onEdit && (
                <CoolButton
                  value="Editar"
                  colorButton="blue"
                  colorText="white"
                  fontSize={10}
                  pressCoolButton={() => onEdit(product)}
                />
              )}
              {onDelete && (
                <CoolButton
                  value="Eliminar"
                  colorButton="red"
                  colorText="white"
                  fontSize={10}
                  pressCoolButton={() => onDelete(product)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
