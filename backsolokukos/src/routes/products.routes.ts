import express from "express";
import {
  deleteProduct,
  postProduct,
  getProducts,
  getProduct,
  putProduct,
} from "../controllers";

export const PRODUCTS = express.Router();

PRODUCTS.get("/get-product/:nombre", getProduct);
PRODUCTS.get("/get-products", getProducts);
PRODUCTS.post("/post-product", postProduct);
PRODUCTS.put("/put-product/:id", putProduct);
PRODUCTS.delete("/delete-product/:id", deleteProduct);
