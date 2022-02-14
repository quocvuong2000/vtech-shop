import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
    center, linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const DangNhap = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG NHẬP</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button onClick={handleClick} disabled={isFetching}>Đăng nhập</Button>
          {error && <Error>Hơi sai nha bạn, xem lại tài khoản, mật khẩu</Error>}
          <Link>Quên mật khẩu?</Link>
          <Link>Tạo một tài khoản mới</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default DangNhap;
