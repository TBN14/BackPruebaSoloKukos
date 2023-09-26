import { Request, Response } from "express";
import { msg_ } from "../helpers/global";
import { UserModel} from "../models";

export const postUser = async (req: Request, res: Response) => {
  new UserModel(req.body)
    .save()
    .then(() => msg_("x", "", res))
    .catch((error: any) => {
      if (error.errors) {
        for (const propiedad in error.errors) return msg_("x", propiedad, res);
      } else {
        for (const prop in error.keyPattern) return msg_("x", `${prop}`, res);
      }
    });
};

export const login = async (req: Request, res: Response) => {
  try {
    const { password, usuario } = req.params;
    const USER: any = await UserModel.findOne({
      $and: [{ usuario }, { password }],
    });
    if (!USER) return msg_("x", "Datos invalidos", res);
    res.json(USER);
  } catch (error) {
    res.json({ msg: error });
    console.error(error);
  }
};
