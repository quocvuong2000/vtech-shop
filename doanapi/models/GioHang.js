const mongoose = require("mongoose");

const GioHangSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    //được tạo khi nào
    timestamps: true,
  }
);

module.exports = mongoose.model("GioHang", GioHangSchema);
