const express = require("express")
const app = express()
const cors = require("cors")
const port = 4560

const { authRoute, tweetRoute, userRoute } = require("./routes")

app.use(express.static('Public'))
app.use(express.json())
app.use(cors())

app.use("/user",userRoute)
app.use("/tweet",tweetRoute)
app.use("/auth",authRoute)

app.get("/",(req, res) => {
    res.status(200).send({
        success:true,
        message:"sosmed app rest API",
        data:{}
    })
})

app.listen(port, () => {
    console.log(" server run on port ", port)
})