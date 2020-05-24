const mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, product) => {
            if(err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", product: product});
            }
        })
    },
    

    details: (req, res) => {
        let id = req.params.id;
        Product.findOne({_id:id}, (err, product) => {
            if(err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Succes!", product: product});
            }
        })
    },

    addProduct: (req, res) => {
        Product.create({
            title: req.body.title, qty: req.body.qty, price: req.body.price
        }, (err, product) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", product: product});
            }
        })
    },

    editProduct: (req, res) => {
        let id = req.params.id;
        Product.findById(id, (err, product) => {
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.title.length >= 3){
                    product.title = req.body.title;
                }
                if(req.body.qty >= 0){
                    product.qty = req.body.qty;
                }
                if(req.body.price >= 0){
                    product.price = req.body.price;
                }
            }
                product.save(err, (err) => {
                    if(err){
                        res.json({message: "Error!", error: err});
                    }
                    else{
                        res.json({message: "Success!", product: product})
                    }
            })
            })
},

deleteProduct: (req, res) => {
    let id = req.params.id;
    Product.remove({_id:id}, (err) => {
        if(err){
            res.json({message: "Error!", error: err});
        }
        else{
            res.json({message: "Success!", removed: true});
        }
    })
}
}  