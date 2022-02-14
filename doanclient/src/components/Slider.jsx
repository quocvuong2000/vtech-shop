import React, { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../data";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
//------
import {mobile} from '../responsive'
//-----
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    display: "none"
  })}
`;

// chúng ta có thể sử dụng props trong styled component
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: 600px;
`;
const ImgContainer = styled.div`
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100vw;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translate(20%, 35%);
`;

const Title = styled.h1`
  font-size: 60px;
  color: #fff;
`;
const Description = styled.p`
  margin: 40px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #fff;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
`;

//truyen prop vao styled component
const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0)
  const arrowClickHandler = (direction) => {
    // định nghĩa cho slider => slideIndex * -100 view width
    if(direction === 'left') {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else {
      setslideIndex(slideIndex <2 ? slideIndex + 1: 0);
    }

  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => arrowClickHandler("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {slideItems.map((el) => {
          return (
            <Slide key={el.title}>
              <ImgContainer>
                <Image src={el.img}></Image>
                <InfoContainer>
                  <Title>{el.title}</Title>
                  <Description>{el.desc}</Description>
                  <Button>CHI TIẾT</Button>
                </InfoContainer>
              </ImgContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => arrowClickHandler("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
