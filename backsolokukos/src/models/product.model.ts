import { Schema, model } from "mongoose";

interface Product {
  nombre: string;
  precio: Number;
  referencia: string;
  talla: string;
  color: string;
  categoria: string;
}

const ProductSchema = new Schema<Product>({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  referencia: { type: String, required: true },
  talla: { type: String, required: true },
  color: { type: String, required: true },
  categoria: { type: String, required: true },
});

export const ProductModel = model<Product>("products", ProductSchema);
