import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(
  "mongodb://localhost/moods",
  { useMongoClient: true }
)
mongoose.Promise = Promise
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Moods = mongoose.model("Moods", {
  name: String,
  rating: Number
})

app.get("/", (req, res) => {
  res.send("Moods Value")
})

app.get("/mainpage", (req, res) => {
  console.log("hello")
  Product.find().then(moods => {
    res.json(moods)
  })
})

app.get("/mainpage", (req, res) => {
  console.log("hello from top")
  Product.find()
    .sort({ rating: -1 })
    .limit(5)
    .then(moods => {
      res.json(moods)
    })
})

app.post("/mainpage", (req, res) => {
  const receivedMoods = req.body
  receivedMoods.rating = 0
  const deets = new Moods(receivedMoods)

  deets
    .save()
    .then(() => {
      res.status(201).send("Moods added")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


app.put("/mainpage", (req, res) => {
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
