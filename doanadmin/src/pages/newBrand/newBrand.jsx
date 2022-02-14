import React from "react";
import "./newBrand.css";
import { addBrand } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBrand = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const brand = { ...inputs };
    addBrand(brand, dispatch);
    navigate("/brands");
  };
  return (
    <div className="newBrand">
      <h1 className="addBrandTitle">Tạo hãng laptop</h1>
      <form className="addBrandForm">
        <div className="addBrandItem">
          <label>Tên hãng laptop</label>
          <input
            name="tenhang"
            type="text"
            placeholder="Hãng..."
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addBrandButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewBrand;
