const User = require("../models/User");
const {
  vertifyTokenAndAuth,
  vertifyTokenAndAdmin,
} = require("./vertifyToken");

const router = require("express").Router();

//TAO USER
router.post("/", async (req,res) => {
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res.status.json(saveUser);
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("user da duoc xoa");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    // res.status(200).json(user); send kieu nay se gui toan bo du lieu bao gom password
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/usertest", (req,res)=> {
//     res.send("user test is successfull");
// })

// router.post("/userposttest", (req,res) => {
//     const username = req.body.username;
//     res.send("your username is " + username);
// })
module.exports = router;
