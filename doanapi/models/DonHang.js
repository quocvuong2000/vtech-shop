const mongoose = require("mongoose");

// sau khi mua hang
const DonHangSchema = new mongoose.Schema(
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
    amount: { type: Number, required: true },
    // mua hang su dung api stripe no tra ve object
    address: { type: Object, required: true },
    status: { type: String, default: "Chưa giải quyết" },
  },
  {
    //được tạo khi nào
    timestamps: true,
  }
);

module.exports = mongoose.model("DonHang", DonHangSchema);
