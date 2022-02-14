import React from "react";
import { Link, useLocation } from "react-router-dom";
import { updateBrand } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./brand.css";

const Brand = () => {
  const [inputs, setInputs] = useState({});
  const location = useLocation();
  const hangId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const brand = useSelector((state) => {
    return state.brand.brands.find((brand) => brand._id === hangId);
  });
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const brandUpdate = { ...inputs };
    updateBrand(brandUpdate._id, brandUpdate, dispatch);
    navigate("/brands");
  };

  useEffect(() => {
    setInputs(brand);
  }, []);
  return (
    <div className="brand">
      <div className="brandTitleContainer">
        <h1 className="brandTitle">Thông tin hãng</h1>
        <Link to="/newbrand">
          <button className="brandAddButton">Tạo mới</button>
        </Link>
      </div>
      <div className="brandTop">
        <div className="brandTopRight">
          <div className="brandInfoTop">
            <span className="brandName">{brand.tenhang}</span>
          </div>
          <div className="brandInfoBottom">
            <div className="brandInfoItem">
              <span className="brandInfoKey">Mã hãng:</span>
              <span className="brandInfoValue">{brand._id}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="brandBottom">
        <form className="brandForm">
          <div className="brandFormLeft">
            <label>Tên Hãng laptop</label>
            <input
              type="text"
              name="tenhang"
              placeholder={brand.tenhang}
              onChange={handleChange}
            />
          </div>
          <div className="brandFormRight">
            <button onClick={handleClick} className="brandButton">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Brand;
