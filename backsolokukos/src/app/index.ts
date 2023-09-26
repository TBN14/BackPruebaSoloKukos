import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { conectDb } from "./config.db";
import * as routes from "../routes";

dotenv.config();
console.clear();
conectDb();

const PORT = process.env.PORT || 8080;
const APP = express();

APP.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, x_token ,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

APP.use(express.json());
APP.get("/", (req: Request, res: Response) =>
  res.send("Servidor iniciado existosamente, escuchando 🟢")
);
APP.get("/api", (req: Request, res: Response) =>
  res.send("API funcionando correctamente 🟢")
);

APP.use("/api", routes.USER);
APP.use("/api", routes.PRODUCTS);

APP.use((req: Request, res: Response) =>
  res.status(404).send("ERROR path not found.")
);

APP.listen(PORT, () => console.log(`API lisening: http://localhost:${PORT}`));
