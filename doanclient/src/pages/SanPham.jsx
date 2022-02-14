import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethod";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addSanPham } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh",
  })}
`;
const InforContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    width: "100%",
    padding: "0 10px",
    boxSizing: "border-box",
  })}
`;
const Title = styled.h1`
  font-weight: 700;
  ${mobile({
    fontSize: "24px",
  })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  ${mobile({
    fontSize: "18px",
    margin: "0",
  })}
`;
const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: red;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50%;
  justify-content: space-between;
  margin: 5px 0;
  flex-direction: column;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 10px 0;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  ${mobile({
    padding: "10px",
  })}

  &:hover {
    background-color: #f8f4f4;
  }
`;

const SanPham = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [sanpham, setSanpham] = useState({});
  const [soLuong, setSoLuong] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSanpham = async () => {
      try {
        const res = await publicRequest.get("/sanpham/find/" + id);
        setSanpham(res.data);
      } catch {}
    };
    getSanpham();
  }, [id]);

  const handleSoLuong = (type) => {
    if (type === "dec") {
      soLuong > 1 && setSoLuong(soLuong - 1);
    } else {
      setSoLuong(soLuong + 1);
    }
  };

  const handleClick = () => {
    // goi store action
    dispatch(addSanPham({...sanpham,soLuong}));
  };
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImgContainer>
          <Image src={sanpham.hinhsp}></Image>
        </ImgContainer>
        <InforContainer>
          <Title>{sanpham.tensp}</Title>
          <Desc>
            <strong> Thông tin chung: </strong>
            <br />
            
            Xuất xứ : Chính hãng
            <br />
            Bảo hành : 24 Tháng
            <br />
            Tình trạng : Mới
            <br />
            Kiểu dáng mạnh mẽ <br />
            Tỏa sáng với đèn LED RPG <br />
            Diện mạo thể thao cuốn hút
            <br />
            Kích cỡ nhỏ hơn
            <br />
          </Desc>
          <Desc>
          {sanpham.motasp}
          </Desc>
          <Price>{sanpham.giasp?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleSoLuong("dec")}
              />
              <Amount>{soLuong}</Amount>
              <AddIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleSoLuong("inc")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>THÊM VÀO GIỎ HÀNG</Button>
          </AddContainer>
        </InforContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SanPham;
