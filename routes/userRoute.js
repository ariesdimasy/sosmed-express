const express = require("express")
const router  = express.Router()

const { userController }  = require("./../controllers")

router.get("/profile",userController.profilePage)
router.post("/profile-update",userController.updateProfile)

module.exports = router