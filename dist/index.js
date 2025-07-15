"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const products_1 = require("./routes/products");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/products", products_1.productRoutes);
app.use(errorHandler_1.errorHandler);
app.get("/", (req, res) => {
    res.json({ message: "E-commerce Product API is running!" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
