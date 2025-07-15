import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { productRoutes } from "./routes/products";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/products", productRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.json({ message: "E-commerce Product API is running!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});