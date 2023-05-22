const express = require("express")
const router  = express.Router()

const { body, validationResult } = require("express-validator")

const { authController }  = require("./../controllers")

const { multerUpload } = require("./../middleware/Multer")

router.post("/login", body('email').isEmail(),(req , res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) { 
        return res.status(400).json({
            errors:errors.array()
        })
    }
},  authController.authLogin)

router.post("/register",multerUpload.single('image'),authController.authRegister)

module.exports = router