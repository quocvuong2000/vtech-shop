import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateProduct, getBrands } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function LinearProgressWithLabel(props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>

      {props.value === 100 ? (
        <Typography variant="h5" color="teal">
          THÀNH CÔNG ĐANG CHUYỂN HƯỚNG
        </Typography>
      ) : null}
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
export default function Product() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = [
    { name: "Văn Phòng", char: "vanphong" },
    { name: "Gaming", char: "gaming" },
    { name: "Sinh Viên", char: "sinhvien" },
  ];
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getBrands(dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const [checkedState, setCheckedState] = useState(
    new Array(category.length).fill(false)
  );
  const product = useSelector((state) => {
    return state.product.products.find((product) => product._id === productId);
  });

  const brands = useSelector((state) => state.brand.brands);

  // checkbox
  const handleOnChange = (e, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    let catUpdate = [];
    updatedCheckedState.map((item, index) => {
      if (item === true) {
        catUpdate.push(category[index].char);
      }
    });
    setCat(catUpdate);
  };

  useEffect(() => {
    let updateChecked = [];
    //cap nhat checkbox
    category.map(({ name, char }, index) => {
      if (product.danhmuc.find((el) => el == char)) {
        updateChecked.push(true);
      } else {
        updateChecked.push(false);
      }
    });
    // cap nhat category
    let catUpdate = [];
    updateChecked.map((item, index) => {
      if (item === true) {
        catUpdate.push(category[index].char);
      }
    });

    setInputs(product);

    setCat(catUpdate);
    setCheckedState(updateChecked);
  }, [0]);

  const handleClick = (e) => {
    const id = product._id;
    e.preventDefault();
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const productUpdate = {
              ...inputs,
              hinhsp: downloadURL,
              danhmuc: cat,
            };
            updateProduct(productUpdate._id, productUpdate, dispatch);
            navigate("/products");
          });
        }
      );
    } else {
      const productUpdate = { ...inputs, danhmuc: cat };
      updateProduct(productUpdate._id, productUpdate, dispatch);
      navigate("/products");
    }
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Thông tin sản phẩm</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Tạo mới</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.hinhsp} alt="" className="productInfoImg" />
            <span className="productName">{product.tensp}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Mã sp:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Giá:</span>
              <span className="productInfoValue">{product.giasp}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Còn hàng:</span>
              <span className="productInfoValue">
                {product.trangthai ? "Còn hàng" : "Hết hàng"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {progress > 0 ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      ) : null}

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Tên Sản Phẩm</label>
            <input
              type="text"
              name="tensp"
              placeholder={product.tensp}
              onChange={handleChange}
            />
            <label>Mô Tả Sản Phẩm</label>
            <textarea
              rows={5}
              name="motasp"
              type="text"
              placeholder={product.motasp}
              onChange={handleChange}
            />
            <label>Giá Sản Phẩm</label>
            <input
              type="number"
              name="giasp"
              placeholder={product.giasp}
              onChange={handleChange}
            />
            <div className="addProductItem">
              <label>Danh mục</label>
              {category.map(({ name, char }, index) => {
                return (
                  <label key={name}>
                    <input
                      type="checkbox"
                      name={name}
                      value={char}
                      checked={checkedState[index]}
                      onChange={(e) => handleOnChange(e, index)}
                    />
                    {name}
                  </label>
                );
              })}
            </div>
            <label>Còn hàng? </label>
            <select name="trangthai" id="idStock" onChange={handleChange}>
              <option value="true">Còn hàng</option>
              <option value="false">Hết hàng</option>
            </select>
            <label>Hãng laptop </label>
            <select name="hang" id="" onChange={handleChange}>
              {brands.map((brand) => {
                const id = brand._id.toString();
                return (
                  <option
                    value={id}
                    selected={id === product.hang}
                  >
                    {brand.tenhang}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.hinhsp} alt="" className="productUploadImg" />
              <label for="file">
                <Publish style={{ cursor: "pointer" }} />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button onClick={handleClick} className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
