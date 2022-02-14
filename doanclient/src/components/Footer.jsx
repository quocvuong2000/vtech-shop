import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import payment from '../assets/image/footer/payment.png';
import {mobile} from '../responsive';

const Container = styled.div`
display: flex;
${mobile({
    flexDirection:"column"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 10px 0;

`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
//---------
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none"
  })}
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

//---------
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;
const Payment = styled.img`
width: 50%;
cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>COTECH.</Logo>
        <Desc>
          CÔNG TY TNHH THƯƠNG MẠI COTECH. <br/>COTECH. là doanh nghiệp chuyên cung
          cấp thiết bị, giải pháp về máy tính, thiết bị chơi game, thiết bị công
          nghệ cao cấp hàng đầu Việt Nam.
          <hr style={{marginTop:"10px"}}/>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
    <Title>Chuyển hướng</Title>
<List>
  <ListItem>Trang Chủ</ListItem>
  <ListItem>Linh Kiện</ListItem>
  <ListItem>Đơn Hàng</ListItem>
  <ListItem>Liên Hệ</ListItem>
  <ListItem>Yêu thích</ListItem>
  <ListItem>Giỏ Hàng</ListItem>
  <ListItem>Tài Khoản</ListItem>
  <ListItem>Chính Sách</ListItem>
</List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><RoomIcon style={{marginRight:"10px"}}/>367 Hong Bang P11 Q5</ContactItem>
        <ContactItem><LocalPhoneIcon style={{marginRight:"10px"}} /> +84 0707000449</ContactItem>
        <ContactItem> 
          <MailOutlineIcon style={{marginRight:"10px"}}/>
          vuongdepzai@gmail.com</ContactItem>
        <Payment src={payment}></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
