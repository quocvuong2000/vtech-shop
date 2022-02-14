const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//DANG KI
//send thông tin len db
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  //khi up len db no khong up ngay ma cho 1vai` milisecond giay nen phai tao ham asynchronous
  // doi khi loi tren db nen phai su dung try catch
  try {
    const savedUser = await newUser.save();
    // console.log(savedUser); muon hien len client side phai dung res
    res.status(201).json(savedUser);
  }catch(err) {
      res.status(500).json(err); 
  }
});

//DANG NHAP
router.post("/login", async (req, res) => {
  
  
  try {
  const user  = await User.findOne({username: req.body.username});
  !user && res.status(401).json("Sai tai khoan hoac mat khau");

    //401 Unauthorized
    user.password !== req.body.password && res.status(401).json("Sai tai khoan hoac mat khau");

    const accessToken = jwt.sign({
      id:user._id,
      isAdmin: user.isAdmin
    },process.env.JWT_SEC,
    {expiresIn:"3d"}
    )

    const {password,...others} = user._doc;
    res.status(200).json({...others,accessToken});
  }catch(err) {
      res.status(500).json(err); 
  }
});
module.exports = router;
