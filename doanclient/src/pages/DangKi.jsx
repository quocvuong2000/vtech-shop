import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
    center, linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({
    width: "75%"
  })}

`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
border: solid 1px rgba(0,0,0,0.3);
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 50%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const DangKi = () => {
  const [inputs, setInputs] = useState();
  const handleChange = (e) => {
    setInputs((prev)=> {
      return {...prev,[e.target.name] : e.target.value}
    })
  }
  console.log(inputs);

  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG KÍ</Title>
        <Form>
          <Input placeholder="name" name="name" onChange={handleChange}></Input>
          <Input placeholder="last name" name="lastname" onChange={handleChange}></Input>
          <Input placeholder="username" name="username" onChange={handleChange}></Input>
          <Input placeholder="email" name="email" onChange={handleChange}></Input>
          <Input placeholder="password" name="password" onChange={handleChange}></Input>
          <Input placeholder="confirm password" onChange={handleChange}></Input>
          <Agreement>Tôi đồng ý với điều khoản, và tuân thủ theo các quy định của website</Agreement>
          <Button>Tạo tài khoản</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default DangKi;
