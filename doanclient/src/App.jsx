import TrangChu from "./pages/TrangChu";
import DangKi from "./pages/DangKi";
import DangNhap from "./pages/DangNhap";
import SanPham from "./pages/SanPham";
import DanhSachSanPham from "./pages/DanhSachSanPham";
import GioHang from "./pages/GioHang";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from './pages/test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrangChu />}></Route>
        <Route path="/register" element={<DangKi />}></Route>
        <Route path="/login" element={<TrangChu />}></Route>
        <Route path="/dssanpham" element={<DanhSachSanPham />}></Route>
        <Route path="/dssanpham/:danhmuc" element={<DanhSachSanPham />}></Route>
        <Route path="/sanpham/:id" element={<SanPham />}></Route>
        <Route path="/giohang" element={<GioHang />}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
