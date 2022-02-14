import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import styled from "styled-components";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getBrands } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "10px",
  })}
`;

const FillterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    fontSize: "18px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const DanhSachSanPham = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSorts] = useState("newest");
  const dispatch = useDispatch();
  const search = location.state?location.state.value : "" ;
  const brands = useSelector((state) => state.brand.brands);
  useEffect(() => {
    getBrands(dispatch);
  }, []);
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      [e.target.value]: value,
    });
  };




  return (
    <Container>
      <Navbar></Navbar>
      <Annoucement></Annoucement>
      <Title>LAPTOP</Title>
      <FilterContainer>
        <Filter>
          <FillterText>Lọc sản phẩm:</FillterText>
          <Select name="hang" onChange={handleFilters}>
            <Option value={" "}>Tất cả</Option>
            {brands.map((brand) => {
              return (
                <Option value={brand._id.toString()} key={brand._id}>
                  {brand.tenhang}
                </Option>
              );
            })}
          </Select>
        </Filter>
        <Filter>
          <FillterText>Sắp xếp</FillterText>
          <Select name="price" onChange={(e) => setSorts(e.target.value)}>
            <Option value="newest">Mới nhất</Option>
            <Option value="asc">Giá tăng dần</Option>
            <Option value="dsc">Giá giảm dần</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product cat={cat} filters={filters} sort={sort} search={search} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default DanhSachSanPham;
