import mongoose from "mongoose";

export const conectDb = () => {
  const MONGO_URI =
    process.env.MONGO_URI_DEV || "mongodb://0.0.0.0:27017/PruebaSoloKukos";
  mongoose.set("strictQuery", true);
  mongoose
    .connect(`${MONGO_URI}`)
    .then(() => console.log("Connected succes mongo DB  🟢"))
    .catch((error: any) => console.log("Error contected mongo DB 🔴", error));
};
