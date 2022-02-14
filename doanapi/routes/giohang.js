const router = require("express").Router();

const { query } = require("express");
const GioHang = require("../models/GioHang");
const { vertifyTokenAndAuth, vertifyTokenAndAdmin, vertifyToken } = require("./vertifyToken");

// TAO GIO HANG
router.post("/", vertifyToken, async (req, res) => {
  const newGioHang = new GioHang(req.body);

  try {
    const saveGioHang = await newGioHang.save();
    res.status(200).json(saveGioHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE GIO HANG
router.put("/:id", vertifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedGioHang = await GioHang.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedGioHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//XOA GIO HANG
router.delete("/:id", vertifyTokenAndAdmin, async (req, res) => {
  try {
    await GioHang.findByIdAndDelete(req.params.id);

    res.status(200).json("GioHang da duoc xoa");
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM GIO HANG CUA USER 
router.get("/find/:id", vertifyTokenAndAdmin, async (req, res) => {
  try {
    const giohang = await GioHang.findById({userId : req.params.id});

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(giohang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM ALL GIO HANG ADMIN ONLY
router.get("/", vertifyTokenAndAdmin, async (req, res) => {
  try {
    const dsGioHang = await GioHang.find();


    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(dsGioHang);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;