const express = require("express")
const router  = express.Router()

const { authController }  = require("./../controllers")

const { multerUpload } = require("./../middleware/Multer")

router.post("/login", authController.authLogin)

router.post("/register",multerUpload.single('image'),authController.authRegister)

module.exports = router