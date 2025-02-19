const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            // required:true,
            minlength:[3,"Must be three charecter or long"],
        },
        lastname:{
         type:String,
            // required:true,
            minlength:[3,"Must be three charecter or long"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength: [5, "email must be at leat 5 charecters or above"],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },

    // socketId: {
    //     type: String,
    // }, 

})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '24hrs' });
    return token;
}
 userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
 }

 userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

 const userModel = mongoose.model('user', userSchema);

 module.exports = userModel;
