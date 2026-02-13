const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const users = [
  { id: 1, name: "Andi" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Citra" }
]

app.get("/users", (req, res) => {
  res.json(users)
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})
