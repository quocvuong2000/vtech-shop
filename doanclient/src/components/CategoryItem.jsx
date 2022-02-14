import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 50vh;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;
const Info = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  background-color: rgba(231, 76, 60, 0.8);
  /* color:#c44569; */
  margin-bottom: 20px;
  font-size: 40px;
  padding: 10px;
  text-shadow: 1px 1px;
  border-radius: 10px;
  ${mobile({
    fontSize: "24px",
  })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`dssanpham/${item.cat}`}>
        <Img src={item.img}></Img>
        <Info>
          <Title>{item.title}</Title>
          <Button>MUA NGAY</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
