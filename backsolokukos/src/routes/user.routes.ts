import express from "express";
import { login, postUser } from "../controllers";
export const USER = express.Router();

USER.post("/post-user", postUser);
USER.get("/login/:usuario/:password", login);
