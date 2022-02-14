import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    height:"50px",
    textAlign: "center"
  })}
`;

function Annoucement() {
  return <Container>
      Khuyến Mãi! Lắp đặt miễn phí cho Đơn Hàng Trên 2 Triệu
  </Container>;
}

export default Annoucement;
