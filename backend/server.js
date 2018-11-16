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
  value: Number
})

app.get("/", (req, res) => {
  res.send("Moods Value")
})

app.get("/moods", (req, res) => {
  console.log("hello")
  Moods.find().then(moods => {
    res.json(moods)
  })
})


app.post("/moods", (req, res) => {
  const receivedMoods = req.body
  receivedMoods.value = 0
  const moods = new Moods(receivedMoods)

   moods
    .save()
    .then(() => {
      res.status(201).send("Moods added")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


app.put("/moods", (req, res) => {
  console.log("hello from put", req.body._id)
  Product.findByIdAndUpdate(req.body._id, { value: req.body.value }, () => {
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
