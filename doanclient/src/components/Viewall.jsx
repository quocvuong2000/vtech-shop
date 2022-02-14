import React from "react";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const Title = styled.h3`
  font-size: 24px;
  margin: 2px 0;
  display: flex;
  align-items: center;
`;
const Horizon = styled.div`
  width: 25%;
  height: 5px;
  background-color: teal;
  padding: 0 20px;
`;
const Viewall = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <LaptopChromebookOutlinedIcon
            style={{ marginRight: "10px" }}
          ></LaptopChromebookOutlinedIcon>{" "}
          SẢN PHẨM TIÊU BIỂU
        </Title>
        <Link
          to={`/dssanpham`}
          style={{ display: "flex", alignItems: "center", textDecoration:"none",fontSize: "20px" }}
        >
          Xem tất cả <ArrowCircleRightOutlinedIcon style={{ marginLeft: "10px" }} />
        </Link>
      </TitleContainer>
      <Horizon></Horizon>
    </Container>
  );
};

export default Viewall;
