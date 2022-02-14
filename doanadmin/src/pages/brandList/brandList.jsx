import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { deleteBrand, getBrands, getProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./brandList.css";



const BrandList = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brand.brands);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
    getBrands(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (products.find((product) => product.hang.toString() === id)) {
      alert("Có chứa sản phẩm không thể xóa");
    }else {
      deleteBrand(id, dispatch);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 280 },
    {
      field: "brand",
      headerName: "Tên hãng",
      width: 280,
      renderCell: (params) => {
        return <div className="brandListItem">{params.row.tenhang}</div>;
      },
    },
    {
      field: "action",
      headerName: "Thao tác",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/brands/" + params.row._id}>
              <button className="brandListEdit">Sửa</button>
            </Link>
            <DeleteOutline
              className="brandListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="brandList">
      <DataGrid
        rows={brands}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      ></DataGrid>
    </div>
  );
};

export default BrandList;
