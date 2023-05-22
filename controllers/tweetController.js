const db = require("./../models")
const jwt = require("jsonwebtoken")
const Tweet = db.tweet

module.exports = {
    getAllTweet:async (req, res) => {
        try { 

            const result = await Tweet.findAll({
                attributes:["id","tweet","imageUrl","userId"],
                include:[{ 
                    model:db.user,
                    attributes:["name","email","username"]
                   
                }]
            })

            if(result.length > 0){
                res.status(200).send({
                    success:true,
                    message:"tweets success",
                    data:result
                })
            } else { 
                res.status(404).send({
                    success:false,
                    message:"tweets not found",
                    data:{}
                })
            }

        } catch (err) { 
            res.status(500).send({
                success:false,
                message:JSON.stringify(err),
                data:{} 
            })
        }
    },
    getDetailTweet:async (req, res) => {
        try { 

        } catch (err) { 
            res.status(500).send({
                success:false,
                message:JSON.stringify(err),
                data:{} 
            })
        }
    },
    userTweet:async (req, res) => {
        try { 
            const { user_id } = req.params
            
            const result = await Tweet.findAll({
                where: {
                    user_id:user_id
                }
            })

            if(result) { 
                res.status(200).send({
                    success:true,
                    message:"tweet sucessfully fetch",
                    data:result 
                })
            } else { 
                res.status(400).send({
                    success:false,
                    message:"tweet fetch failed",
                    data:{} 
                })
            }

        } catch(err) {

        }
    },
    tweetPost:async (req, res) => {
        try { 

            const { tweet, imageUrl } = req.body
            const token =  req.headers.authorization.split(" ")[1]

            // console.log("token => ", token)
            // process.exit()
            const decode = jwt.verify(token,"coding-is-easy")
            const user_id = decode.id

            const result = await Tweet.create({
                tweet:tweet, 
                imageUrl:imageUrl || '',
                userId:user_id
            })

            if(result?.tweet) { 
                res.status(201).send({
                    success:true,
                    message:"tweet sucessfully created",
                    data:result 
                })
            } else { 
                res.status(400).send({
                    success:false,
                    message:"tweet create failed",
                    data:{} 
                })
            }

        } catch (err) { 
            res.status(500).send({
                success:false,
                message:err.message,
                data:{} 
            })
        }
    },
    tweetDelete: async (req, res) => {
        return await res.status(200).send({
            success:true,
            message:"delete tweet success",
            data:{} 
        })
    },
    tweetUpdate: async (req, res) => {
        return await res.status(200).send({
            success:true,
            message:"update tweet success",
            data:{} 
        })
    },
}