"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../products");
const router = express_1.default.Router();
exports.productRoutes = router;
router.get("/", (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            const filteredProducts = products_1.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            return res.json({
                success: true,
                data: filteredProducts,
                total: filteredProducts.length
            });
        }
        res.json({
            success: true,
            data: products_1.products,
            total: products_1.products.length
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
router.get("/:id", (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            });
        }
        const product = products_1.products.find(p => p.id === productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.json({
            success: true,
            data: product
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
router.post("/", (req, res) => {
    try {
        const { name, price, category, description, inStock, quantity } = req.body;
        if (!name || !price || !category || !description || inStock === undefined || quantity === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, price, category, description, inStock, quantity"
            });
        }
        if (typeof price !== "number" || price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be a positive number"
            });
        }
        if (typeof quantity !== "number" || quantity < 0) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be a non-negative number"
            });
        }
        const newProduct = {
            id: Math.max(...products_1.products.map(p => p.id)) + 1,
            name,
            price,
            category,
            description,
            inStock,
            quantity
        };
        products_1.products.push(newProduct);
        res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product created successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
