const mongoose = require("mongoose")
const loginSchema = mongoose.Schema(
    {
        name: { type:String,required:true},
        username: { type:String,required:true},
        password: { type:String,required:true}
    }
)
const loginModel = mongoose.model("admindata", loginSchema)
module.exports = loginModel