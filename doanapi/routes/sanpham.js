const router = require("express").Router();

const { query } = require("express");
const SanPham = require("../models/SanPham");
const { vertifyTokenAndAuth, vertifyTokenAndAdmin } = require("./vertifyToken");

// TAO SAN PHAM
router.post("/", async (req, res) => {
  const newSanPhan = new SanPham(req.body);

  try {
    const saveSanPham = await newSanPhan.save();
    res.status(200).json(saveSanPham);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE SAN PHAM
router.put("/find/:id", async (req, res) => {
  try {
    const updatedSanPham = await SanPham.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedSanPham);
  } catch (err) {
    res.status(500).json(err);
  }
});

//XOA SAN PHAM
router.delete("/:id", async (req, res) => {
  try {
    await SanPham.findByIdAndDelete(req.params.id);

    res.status(200).json("SanPham da duoc xoa");
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM SAN PHAM
router.get("/find/:id", async (req, res) => {
  try {
    const sanpham = await SanPham.findById(req.params.id);

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(sanpham);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM ALL ADMIN HAY USER ĐỀU SÀI ĐƯỢC KHÔNG CẦN VERTIFY
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qDanhmuc = req.query.danhmuc;
  const qHang = req.query.hang;
  try {
    let dsSanPham;

    if (qNew) {
      dsSanPham = await SanPham.find().limit(4);
    } else if (qDanhmuc) {
      dsSanPham = await SanPham.find({
        danhmuc: {
          $in: [qDanhmuc],
        },
      });
    } else if (qHang) {
      dsSanPham = await SanPham.find({hangLaptop: qHang});
    } else {
      dsSanPham = await SanPham.find();
    }

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(dsSanPham);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
