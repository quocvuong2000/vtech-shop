import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import {mobile} from '../responsive'
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
font-size: 45px;
margin-bottom: 20px;
${mobile({
    textAlign: "center",
    fontSize: "28px"
  })}
`;
const Description = styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({
    textAlign: "center",
    fontSize: "18px"
  })}
`;
const InputContainer = styled.div`
width: 50%;
background-color: white;
height: 40px;
display: flex;
justify-content: space-between;
${mobile({
    width: "80%"
  })}
`;
const Input = styled.input`
border:none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NHẬN THÔNG BÁO</Title>
      <Description>
        Nhận thông báo khi có khuyến mãi về sản phẩm yêu thích của bạn
      </Description>
      <InputContainer>
        <Input placeholder="Gmail của bạn"></Input>
        <Button>
          <SendIcon></SendIcon>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
