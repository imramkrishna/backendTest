export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    inStock: boolean;
    quantity: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation",
        inStock: true,
        quantity: 25
    },
    {
        id: 2,
        name: "Cotton T-Shirt",
        price: 19.99,
        category: "Apparel",
        description: "Comfortable cotton t-shirt available in multiple colors",
        inStock: true,
        quantity: 100
    },
    {
        id: 3,
        name: "Coffee Maker",
        price: 89.99,
        category: "Home & Kitchen",
        description: "Programmable coffee maker with thermal carafe",
        inStock: true,
        quantity: 15
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 119.99,
        category: "Apparel",
        description: "Lightweight running shoes with cushioned sole",
        inStock: false,
        quantity: 0
    },
    {
        id: 5,
        name: "Smartphone Case",
        price: 24.99,
        category: "Electronics",
        description: "Protective case for smartphones with screen protection",
        inStock: true,
        quantity: 50
    },
    {
        id: 6,
        name: "Denim Jeans",
        price: 49.99,
        category: "Apparel",
        description: "Classic fit denim jeans in various sizes",
        inStock: true,
        quantity: 30
    }
];