import React from "react";
import styled from "styled-components";
import { category } from "../data";
import CategoryItem from "./CategoryItem";
import {mobile} from '../responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({
    padding: "0",
    flexDirection: "column",
    justifyContent: "space-between"
  })}
`;

const Categories = () => {
  return (
    <Container>
      {category.map((item) => {
        return <CategoryItem item={item} key={item.id}/>;
      })}
    </Container>
  );
};

export default Categories;
