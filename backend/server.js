import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(
  "mongodb://localhost/deets",
  { useMongoClient: true }
)
mongoose.Promise = Promise
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Product = mongoose.model("Product", {
  name: String,
  rating: Number
})

app.get("/", (req, res) => {
  res.send("Products API")
})

app.get("/products", (req, res) => {
  console.log("hello")
  Product.find().then(products => {
    res.json(products)
  })
})

app.get("/products/top", (req, res) => {
  console.log("hello from top")
  Product.find()
    .sort({ rating: -1 })
    .limit(5)
    .then(products => {
      res.json(products)
    })
})

app.post("/products", (req, res) => {
  const receivedProduct = req.body
  receivedProduct.rating = 0
  const product = new Product(receivedProduct)

  product
    .save()
    .then(() => {
      res.status(201).send("Product added")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

app.put("/products", (req, res) => {
  console.log("hello from put", req.body._id)
  Product.findByIdAndUpdate(req.body._id, { rating: req.body.rating }, () => {
    console.log("hejhej")
    res.json({ success: true })
  })
  // .then(product => {
  //   res.status(201).send("Product updated")
  // })
  // .catch(err => {
  //   res.status(err)
  // })
})

app.listen(8085, () => console.log("Products API listening on port 8085!"))
