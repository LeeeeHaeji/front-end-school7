const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authShema = new Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model("auth", authSchema);