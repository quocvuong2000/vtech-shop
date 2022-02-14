const mongoose = require("mongoose");

const SanPhamSchema = new mongoose.Schema(
  {
    tensp: { type: String, required: true, unique: true },
    hangLaptop: { type: String, required: true },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SanPhamTest", SanPhamSchema);
