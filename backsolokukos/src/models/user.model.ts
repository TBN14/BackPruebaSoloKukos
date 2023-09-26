import { Schema, model } from "mongoose";

interface User {
  nombre: string;
  usuario: string;
  password: string;
  rol: string;
}

const UserSchema = new Schema<User>({
  nombre: { type: String, required: true },
  usuario: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
});

export const UserModel = model<User>("users", UserSchema);
