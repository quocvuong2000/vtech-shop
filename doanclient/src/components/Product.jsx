import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { mobile } from "../responsive";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    padding: "0",
  })}
`;

const Product = ({ cat, filters, sort, trangchu, search }) => {
  //console.log(cat, filters, sort);
  const [dsSanpham, setDsSanpham] = useState(null);
  const [filteredSanpham, setFilteredSanpham] = useState();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    setDsSanpham(products);
  }, []);

  useEffect(() => {
    (cat || filters) &&
      setFilteredSanpham(
        dsSanpham
          ? dsSanpham.filter((item) =>
              Object.entries(filters).every(
                ([key, value]) => item.hang === key.toString()
              )
            )
          : null
      );
    if (filters) {
      if (Object.keys(filters)[0] === " ") {
        setFilteredSanpham(dsSanpham);
      }
    }
  }, [dsSanpham, cat, filters]);

  useEffect(() => {
    if (search) {
      console.log(search);
      const searchProdcuts = products?.map((product) => {
        if (product.tensp.toLowerCase().indexOf(search.toString()) !== -1)
          return product;
      });
      const sp = searchProdcuts.filter((item) => item !== undefined);
      setDsSanpham(sp);
    } else if (cat) {
      const test = products?.map((product) => {
        // console.log(cat);
        // console.log(product.danhmuc);
        // console.log(product.danhmuc.indexOf(cat.toString()) !== -1);
        if (product.danhmuc.indexOf(cat.toString()) !== -1) return product;
      });
      // console.log(test.filter(item => item !== undefined));
      const sp = test.filter((item) => item !== undefined);
      setDsSanpham(sp);
    } else setDsSanpham(products);
  }, [cat, search]);

  useEffect(() => {
    if (filteredSanpham) {
      if (sort === "newest") {
        setFilteredSanpham((dsSanpham) => {
          return [...dsSanpham].sort((a, b) => a.createdAt - b.createdAt);
        });
      } else if (sort === "asc") {
        setFilteredSanpham((dsSanpham) => {
          return [...dsSanpham].sort((a, b) => a.giasp - b.giasp);
        });
      } else {
        setFilteredSanpham((dsSanpham) => {
          return [...dsSanpham].sort((a, b) => b.giasp - a.giasp);
        });
      }
    }
    if (dsSanpham) {
      if (sort === "newest") {
        setDsSanpham((dsSanpham) => {
          return [...dsSanpham].sort((a, b) => a.createdAt - b.createdAt);
        });
      } else if (sort === "asc") {
        setDsSanpham((dsSanpham) => {
          return [...dsSanpham].sort((a, b) => a.giasp - b.giasp);
        });
      } else {
        setDsSanpham((dsSanpham) => {
          return [...dsSanpham].sort((a, b) => b.giasp - a.giasp);
        });
      }
    }
  }, [sort]);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const hienThiDanhSachSPFilter = () => {
    if(filteredSanpham) {
      return filteredSanpham.map((item) => {
        return <ProductItem item={item} key={item._id}></ProductItem>;
      });
    }else {
      return "Loading";
    }
  }

  const hienThiDanhSachSP = () => {
    if(dsSanpham) {
      if(trangchu) {
       return dsSanpham.slice(0, 6).map((item) => {
          return <ProductItem item={item} key={item._id}></ProductItem>;
        })
      }else {
        return  dsSanpham.map((item) => {
          return <ProductItem item={item} key={item._id}></ProductItem>;
        })
      }
    }else {
      return "Loading";
    }
  }
  return (
    <Container>
      {(cat || filters) ? hienThiDanhSachSPFilter() : hienThiDanhSachSP()}
    </Container>
  );
};

export default Product;
