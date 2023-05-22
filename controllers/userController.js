module.exports = {
    profilePage: async (req, res) => {
        try { 

        } catch(err) { 
            res.status(500).send({
                success:false,
                message:JSON.stringify(err),
                data:false
            })
        }
    },
    updateProfile: async (req, res ) => {
        try {

        } catch (err) { 
            res.status(500).send({
                success:false,
                message:JSON.stringify(err),
                data:false
            })
        }
    }
}