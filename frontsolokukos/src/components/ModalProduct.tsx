import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, TextField, Button } from "@mui/material";
import { IProduct } from "../types";

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: IProduct) => void;
  product: IProduct;
  onInputChange: (input: string, value: string) => void;
  isEditing: boolean;
}

export const ModalProduct: React.FC<ModalProductProps> = ({
  isOpen,
  onClose,
  onSubmit,
  product,
  onInputChange,
  isEditing,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onInputChange(name, value);
  };

  const handleSubmit = () => {
    onSubmit(product);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          overflowY: "auto",
        }}
      >
        <h2 style={{ paddingTop: 20, marginBottom: 0 }}>
          {isEditing ? "Editar Productos" : "Agregar Productos"}
        </h2>
        <form>
          <TextField
            label="Nombre"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Precio"
            name="precio"
            type="number"
            value={product.precio}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Referencia"
            name="referencia"
            value={product.referencia}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Talla"
            name="talla"
            value={product.talla}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Color"
            name="color"
            value={product.color}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Categoría"
            name="categoria"
            value={product.categoria}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            sx={{ marginBottom: 5 }}
          >
            {isEditing ? "Editar" : "Agregar"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
