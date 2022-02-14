const router = require("express").Router();

const { query } = require("express");
const Hang = require("../models/Hang");

// TAO HANG
router.post("/", async (req, res) => {
  const newHang = new Hang(req.body);

  try {
    const saveHang = await newHang.save();
    res.status(200).json(saveHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE HANG
router.put("/:id", async (req, res) => {
  try {
    const updatedHang = await Hang.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//XOA  HANG
router.delete("/:id", async (req, res) => {
  try {
    await Hang.findByIdAndDelete(req.params.id);

    res.status(200).json("Hang da duoc xoa");
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM hang
router.get("/:id", async (req, res) => {
  try {
    const hang = await Hang.findById({_id : req.params.id});

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(hang);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TIM KIEM ALL GIO HANG ADMIN ONLY
router.get("/", async (req, res) => {
  try {
    const hang = await Hang.find();


    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(hang);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;