const products = require("../controllers/product.js");
var path = require("path");

module.exports = (app) => {

    app.get("/api/products", (req, res) => {
        console.log()
        products.index(req, res)
    });

    app.get("/api/products/:id", (req, res) => {
        products.details(req, res)
    });

    app.get("/api/editproducts/:id", (req, res) => {
        products.details(req, res)
    });

    app.post("/api/products", (req, res) => {
        products.addProduct(req, res)
    });

    app.put("/api/products/:id", (req, res) => {
        products.editProduct(req, res)
    });

    app.delete("/api/delete/:id", (req, res) => {
        products.deleteProduct(req, res)
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}