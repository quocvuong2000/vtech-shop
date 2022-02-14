const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const sanPhamRoute = require("./routes/sanpham");
const sanPhamTestRoute = require("./routes/sanphamtest");
const hangRoute = require("./routes/hang");
const giohangRoute = require("./routes/giohang");
const donhangRoute = require("./routes/donhang");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(
    console.log("DB Connection successfull!")
)
.catch((err) => {
    console.log(err);
});
app.use(cors());
app.use(express.json()); //có thể pass file json xử lý
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/sanpham",sanPhamRoute);
app.use("/api/hang",hangRoute);
app.use("/api/sanphamtest",sanPhamTestRoute);
app.use("/api/giohang",giohangRoute);
app.use("/api/donhang",donhangRoute);


app.listen(process.env.PORT || 5000, ()=> {
    console.log("backend server dang chay!");
})