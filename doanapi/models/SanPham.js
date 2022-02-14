const mongoose = require("mongoose");

const SanPhamSchema = new mongoose.Schema(
  {
    tensp: { type: String, required: true, unique: true },
    motasp: { type: String, required: true },
    hinhsp: { type: String },
    giasp: { type: Number, required: true },
    danhmuc: { type: Array },
    trangthai: { type: Boolean, default: true },
    hang: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SanPham", SanPhamSchema);
