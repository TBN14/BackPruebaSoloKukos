import { Response, response } from "express";
import { msgResponse } from "./msg.alerta";

export const msg_ = (code: String, field: String, res: Response) => {
  const responde = msgResponse(code, field);
  res.json(responde);
};