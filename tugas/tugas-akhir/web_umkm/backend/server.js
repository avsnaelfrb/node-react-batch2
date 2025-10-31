import "dotenv/config";
import express from "express";
import cors from "cors";
import mainRoute from "./src/routes/mainRoute.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

app.listen(port, () => {
  console.log(`server berjalan di port: ${port}`);
});

export default app;
