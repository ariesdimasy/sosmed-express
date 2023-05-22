const express = require("express")
const router  = express.Router()

const { verifyToken } = require("./../middleware/auth")

const { tweetController }  = require("./../controllers")

router.get("/",tweetController.getAllTweet)
router.get("/:user_id",tweetController.userTweet)
router.get("/tweet_id",tweetController.getDetailTweet)
router.post("/",verifyToken,tweetController.tweetPost)
router.put("/:tweet_id",verifyToken,tweetController.tweetUpdate)
router.delete("/:tweet_id",verifyToken,tweetController.tweetDelete)

module.exports = router