import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// nếu ta không dùng stytled-components sẽ bị conflict với trangchu.jsx khi thiết kế css
const Container = styled.div`
  height: 60px;
  /* @media only screen and (max-width:380px) {
    display: none;
  } */
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
`;

//---------- LEFT --------------
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    marginLeft: "0",
  })}
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;
//---------- END LEFT --------------
//---------- CENTER --------------
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({
    fontSize: "18px",
  })}
`;

//----------END CENTER --------------
//---------- RIGHT --------------

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: "2",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({
    fontSize: "10px",
    marginRight: "5px",
  })}
`;

//----------END RIGHT --------------

const Navbar = () => {
  const [inputs, setInputs] = useState({});
  const soLuong = useSelector((state) => state.cart.soLuong);
  const navigate = useNavigate();
  const handleChange = (e) => {

    setInputs(e.target.value?e.target.value : ' ');

  };
  const handleClick = (e) => {
    e.preventDefault();
    if(inputs) {
      navigate('/dssanpham',{state: {value: inputs}});
    }
  };

  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VI</Language>
          <SearchContainer>
            <Input placeholder="Search" onChange={handleChange} />
            <Search style={{ color: "gray", fontSize: 16,cursor:"pointer" }} onClick={handleClick}/>
          </SearchContainer>
        </Left>
        <Center>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <Logo>COTECH.</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
          <Link to={"/register"}>ĐĂNG KÍ</Link>
          </MenuItem>
          <MenuItem>ĐĂNG NHẬP</MenuItem>
          <Link to="/giohang">
            <Badge badgeContent={soLuong} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
