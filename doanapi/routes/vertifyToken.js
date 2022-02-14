const jwt = require("jsonwebtoken");

// – 403 Forbidden: Client không có quyền truy cập vào phần nội dung, nghĩa là nó không được phép, vì vậy máy chủ từ chối cung cấp tài nguyên được yêu cầu. Không giống như 401, danh tính của client đã được máy chủ nhận biết.
const vertifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("token khong hop le");
      req.user = user;
      next(); // thanh cong se qua user router
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
// sua thi dung id moi sua, xoa cung vay
const vertifyTokenAndAuth = (req, res, next) => {
  vertifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Ban khong co quyen de lam viec nay!");
    }
  });
};

//get nhan vien thi khong can dung id
const vertifyTokenAndAdmin = (req, res, next) => {
  vertifyToken(req, res, () => {
    if(req.user.isAdmin) {
        next();
    }else {
        res.status(403).json("Ban khong co quyen de lam viec nay!");
    }
  });
};
module.exports = { vertifyToken, vertifyTokenAndAuth ,vertifyTokenAndAdmin};
