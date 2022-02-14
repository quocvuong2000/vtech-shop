import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
`;

//'Info' was used before it was defined
const Container = styled.div`
  display: flex;
  width: 32%;
  height: 380px;
  margin: 5px;
  align-items: center;
  background-color: white;
  position: relative;
  justify-content: center;

  ${mobile({
    margin: "0",
    minWidth: "300px",
  })}
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(231, 76, 60, 0.2);
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  width: 70%;
  height: 300px;
  object-fit: cover;
  text-align: center;
`;
const Title = styled.h3`
  font-size: 15px;
  margin: 2px 0;
  width: 95%;
  text-align: center;
`;
const Price = styled.p`
  color: rgba(231, 76, 60, 1);
  font-weight: 700;
  font-size: 20px;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const ProductItem = ({ item }) => {
  return (
    <Container>
      <Product>
        <Image src={item.hinhsp}></Image>
        <Title>{item.tensp}</Title>
        <Price>{item.giasp.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</Price>
      </Product>
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
        </Icon>
        <Icon>
          <Link to={`/sanpham/${item._id}`}>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
