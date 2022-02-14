import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";

import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const KEY = "pk_test_51K0LBnFjydqiWgwtTtGT2ONJJuo4TAWczmDWero4QwWVw7p6n93JvDHkkDe70u1XVF5cT0kCsJQC59DJmQdBGPys00B3LSLWLk";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
`;
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
//----------------------------
const Summary = styled.div`
  flex: 1;
  border: solid 3px #eee;
  border-radius: 10px;
  box-sizing: content-box;
  padding: 20px;
`;
const SummaryTitle = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
//----------------------------
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px #eee;
  height: 200px;
  ${mobile({
    flexDirection: "column",
    height: "250px",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 180px;
  object-fit: contain;
  ${mobile({
    width: "150px",
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  margin-bottom: 10px;
  font-weight: 700;
`;

const ProductId = styled.span`
  font-style: italic;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 200;
  ${mobile({
    fontSize: "18px",
  })}
`;

const GioHang = () => {
  const cart = useSelector((state) => state.cart);
  
  return (
    <Container>
      <Navbar></Navbar>
      <Annoucement></Annoucement>
      <Wrapper>
        <Title>SẢN PHẨM CỦA BẠN</Title>
        <Top>
          <TopButton>TIẾP TỤC MUA SẮM</TopButton>
          <TopTexts>
            <TopText>Giỏ Hàng ({cart.soLuong})</TopText>
            <TopText>Yêu Thích (0)</TopText>
          </TopTexts>
          <TopButton type="filled">THANH TOÁN</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart
              ? cart.dsSanPham.map((sp) => {
                  return (
                    <Product key={sp._id}>
                      <ProductDetail>
                        <Image src={sp.hinhsp} />
                        <Details>
                          <ProductName>{sp.tensp}</ProductName>
                          <ProductId>{sp._id}</ProductId>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <AddIcon></AddIcon>
                          <ProductAmount>{sp.soLuong} </ProductAmount>
                          <RemoveIcon></RemoveIcon>
                        </ProductAmountContainer>
                        <ProductPrice>{(sp.giasp*sp.soLuong)?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</ProductPrice>
                      </PriceDetail>
                    </Product>
                  );
                })
              : null}
          </Info>
          <Summary>
            <SummaryTitle>TỔNG KẾT ĐƠN HÀNG</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Tiền ship</SummaryItemText>
              <SummaryItemPrice>0,000₫</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Khuyến mãi</SummaryItemText>
              <SummaryItemPrice>0,000₫</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Tổng</SummaryItemText>
              <SummaryItemPrice>{cart.total?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="ShopDoAn"
              image="https://www.pinclipart.com/picdir/middle/550-5506338_pepe-the-frog-transparent-png-transparent-pepe-png.png"
              billingAddress
              shippingAddress
              description={`Tổng của bạn là ${cart.total?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`}
              amount={cart.total * 100}
              stripeKey={KEY}
            >
              <Button>MUA NGAY</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};

export default GioHang;
