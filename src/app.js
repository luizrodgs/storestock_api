import express from "express";

const app = express();
app.use(express.json());

const products = [
    {
        id: 1,
        brand: "Samsung",
        model: "Galaxy S20",
        serial: "ABC123",
        quantity: 10,
        price: 1500.00
    },
    {
        id: 2,
        brand: "Apple",
        model: "iPhone 12",
        serial: "DEF456",
        quantity: 8,
        price: 1200.00
    },
];

function getProduct(id) {
    return products.findIndex(product => {
        return product.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("StoreStock - API")
})

app.get("/products", (req, res) => {
    res.status(200).json(products);
})

app.get("/products/:id", (req, res) => {
    const index = getProduct(req.params.id);
    res.status(200).json(products[index]);
})

app.post("/products", (req, res) => {
    products.push(req.body);
    res.status(201).send("Product successfully added to stock");
});

app.put("/products/update-price/:id", (req, res) => {
    const index = getProduct(req.params.id);
    products[index].price = Number(req.body.price);
    res.status(200).json("Product Price sucessfully updated on stock");
})

export default app;