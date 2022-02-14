const mongoose = require("mongoose");

const HangSchema = new mongoose.Schema({
    tenhang: {type: String, required: true, unique: true},
    
},{
    timestamps: true
});

module.exports = mongoose.model("Hang", HangSchema);