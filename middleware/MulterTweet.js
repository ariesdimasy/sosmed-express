const multer = require("multer")
const fs = require("fs")

const defaultPath = 'Public'

const storage = multer.diskStorage({
    destination:async (req, file, cb) => {

        let directoryExists = fs.existsSync(`${defaultPath}/tweetImage`)
        if(!directoryExists) { 
            await fs.promises.mkdir(`${defaultPath}/tweetImage`,{ 
                recursive:true
            });
        }

        cb(null,`${defaultPath}/tweetImage`)
        
    },
    filename:(req, file, cb) => {
        cb(null, 'TIMG-'+Date.now()+'.'+file.mimetype.split("/")[1])
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype.split("/")[1] === "jpg" || 
    file.mimetype.split("/")[1] === 'jpeg' || 
    file.mimetype.split("/")[1] === 'png') { 
        cb(null, true)
    } else { 
        cb(new Error("file not supported"))
    }
}

const multerTweetUpload = multer({ storage: storage , fileFilter: fileFilter})

module.exports = { 
    multerTweetUpload
}