const router = require("express").Router();

const { query } = require("express");
const DonHang = require("../models/DonHang");
const {
  vertifyTokenAndAuth,
  vertifyTokenAndAdmin,
  vertifyToken,
} = require("./vertifyToken");

// TAO DON HANG > NGƯỜI MUA HÀNG
router.post("/", vertifyToken, async (req, res) => {
  const newDonHang = new DonHang(req.body);

  try {
    const saveDonHang = await newDonHang.save();
    res.status(200).json(saveDonHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE DON HANG ADMIN ONLY
router.put("/:id", vertifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedDonHang = await DonHang.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedDonHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//XOA DON HANG > USER
router.delete("/:id", vertifyTokenAndAuth, async (req, res) => {
  try {
    await DonHang.findByIdAndDelete(req.params.id);

    res.status(200).json("DonHang da duoc xoa");
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM DON HANG CUA USER
router.get("/find/:id", vertifyTokenAndAuth, async (req, res) => {
  try {
    const donHang = await DonHAng.findById({ userId: req.params.id });

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(donHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM ALL DON HANG ADMIN ONLY
router.get("/", vertifyTokenAndAdmin, async (req, res) => {
  try {
    const dsDonHang = await DonHang.find();

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(dsDonHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TÍNH THU NHẬP TỪ 2 THÁNG TRỞ LẠI
router.get("/income", vertifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await DonHang.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: { month: { $month: "$createdAt" }, sales: "$amount" },
      },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
