import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import {
  getBrandFailure,
  getBrandStart,
  getBrandSuccess,
  deleteBrandFailure,
  deleteBrandStart,
  deleteBrandSuccess,
  updateBrandFailure,
  updateBrandStart,
  updateBrandSuccess,
  addBrandFailure,
  addBrandStart,
  addBrandSuccess,
  findBrandSuccess,
  findBrandFailure,
  findBrandStart,
} from "./brandRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/sanpham");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await publicRequest.delete(`/sanpham/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await publicRequest.put(`/sanpham/find/${id}`, product);
    dispatch(updateProductSuccess(id, res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await publicRequest.post(`/sanpham`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//BRAND

export const getBrands = async (dispatch) => {
  dispatch(getBrandStart());
  try {
    const res = await publicRequest.get("/hang");
    dispatch(getBrandSuccess(res.data));
  } catch (err) {
    dispatch(getBrandFailure());
  }
};
export const findBrand = async (id, dispatch) => {
  dispatch(findBrandStart());
  try {
    const res = await publicRequest.get(`/hang/${id}`);
    dispatch(findBrandSuccess(res.data));
  } catch (err) {
    dispatch(findBrandFailure());
  }
};
export const deleteBrand = async (id, dispatch) => {
  dispatch(deleteBrandStart());
  try {
    const res = await publicRequest.delete(`/hang/${id}`);
    dispatch(deleteBrandSuccess(id));
  } catch (err) {
    dispatch(deleteBrandFailure());
  }
};

export const updateBrand = async (id, brand, dispatch) => {
  dispatch(updateBrandStart());
  try {
    // update
    const res = await publicRequest.put(`/hang/${id}`, brand);
    dispatch(updateBrandSuccess(id, res.data));
  } catch (err) {
    dispatch(updateBrandFailure());
  }
};

export const addBrand = async (brand, dispatch) => {
  dispatch(addBrandStart());
  try {
    const res = await publicRequest.post(`/hang`, brand);
    dispatch(addBrandSuccess(res.data));
  } catch (err) {
    dispatch(addBrandFailure());
  }
};
