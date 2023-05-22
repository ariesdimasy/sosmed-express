const pagination = require("./helpers")

const jwt = require("jsonwebtoken");

const payload = { 
    user_id : 1,
    name: "dimas", 
    email:"dimas@gmail.com"
}

const c = jwt.sign(payload,"1234")

const balikin = jwt.verify(c,"1234")

console.log("==> ", c)
console.log("balikin ==> ", balikin)

pagination(2)