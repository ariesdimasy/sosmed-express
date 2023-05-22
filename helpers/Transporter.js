const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:'alhusna901@gmail.com',
        pass:"pbfukfkoezcgvgio"
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports = transporter