# E-commerce Product API

A RESTful API for managing products in an e-commerce platform built with Node.js, Express, and TypeScript.

## Tech Stack
- **Node.js** with **Express** framework for the server
- **TypeScript** for type safety and better development experience
- In-memory data storage for simplicity (easily replaceable with database)

## How to Run
```bash
npm install && npm run dev
```

For production build:
```bash
npm run build && npm start
```

## API Endpoints

### 1. GET /products
Returns all products
```bash
curl -X GET http://localhost:3000/products
```

### 2. GET /products/:id
Returns a single product by ID
```bash
curl -X GET http://localhost:3000/products/1
```

### 3. GET /products?category=Apparel
Filter products by category
```bash
curl -X GET "http://localhost:3000/products?category=Apparel"
```

### 4. POST /products
Create a new product (requires JSON body)
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Product",
    "price": 29.99,
    "category": "Electronics",
    "description": "A new electronic product",
    "inStock": true,
    "quantity": 10
  }'
```

## Sample Response Format
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "price": 79.99,
      "category": "Electronics",
      "description": "High-quality wireless headphones with noise cancellation",
      "inStock": true,
      "quantity": 25
    }
  ],
  "total": 1
}
```

## Error Handling
The API returns consistent error responses:
```json
{
  "success": false,
  "message": "Error description"
}
```

## Available Categories
- Electronics
- Apparel
- Home & Kitchen

Server runs on port 3000 by default (configurable via PORT environment variable).