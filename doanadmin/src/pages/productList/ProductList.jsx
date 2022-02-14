import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts, getBrands } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const brands = useSelector((state) => state.brand.brands);
  useEffect(() => {
    getProducts(dispatch);
    getBrands(dispatch);
  }, [dispatch]);
 
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const getBrandName = (id) => {
    return brands.map((brand) => {
      if (brand._id.toString() === id) {
        return brand.tenhang;
      }
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Tên sản phẩm",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.hinhsp} alt="" />
            {params.row.tensp}
          </div>
        );
      },
    },
    { field: "trangthai", headerName: "Còn hàng", width: 150 },

    {
      field: "giasp",
      headerName: "Giá",
      type: "number",
      width: 150,
      renderCell: (params) => {
        return (
          <span>
            {params.row.giasp?.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        );
      },
    },
    {
      field: "hang",
      headerName: "Hãng",
      type: "string",
      width: 150,
      renderCell: (params) => {
        const ten = getBrandName(params.row.hang);
        return <span>{ten}</span>
      },
    },
    {
      field: "action",
      headerName: "Thao tác",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Sửa</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
        <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={20}
        checkboxSelection
      ></DataGrid>  
    </div>
  );
}
