import { Request, Response } from "express";
import { msg_ } from "../helpers/global";
import { ProductModel } from "../models";

export const getProduct = async (req: Request, res: Response) => {
  const { nombre } = req.params;
  try {
    console.log(nombre);
    const product = await ProductModel.find({ nombre });
    if (!product) {
      return msg_("x", "No exiten prodcutos", product);
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    if (!products.length) return msg_("x", "No exiten prodcutos", res);
    else {
      res.json(products);
    }
  } catch (error) {
    res.json({ msg: error });
    console.error(error);
  }
};

export const postProduct = async (req: Request, res: Response) => {
  new ProductModel(req.body)
    .save()
    .then(() => msg_("x", "producto guardado correctamente", res))

    .catch((error: any) => {
      console.log("error :>> ", error);
      if (error.errors) {
        for (const propiedad in error.errors) return msg_("x", propiedad, res);
      } else {
        for (const prop in error.keyPattern) return msg_("x", `${prop}`, res);
      }
    });
};

export const putProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;

  try {
    const putProduct = await ProductModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!putProduct) {
      return msg_("x", "No exiten prodcutos", res);
    }
    res.json(putProduct);
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    if (!deleteProduct) {
      return msg_("x", "No exiten prodcutos", res);
    }
    res.json(deleteProduct);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
