import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getBrands } from "../../redux/apiCalls";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();
  const category = [
    { name: "Văn Phòng", char: "vanphong" },
    { name: "Gaming", char: "gaming" },
    { name: "Sinh Viên", char: "sinhvien" },
  ];
  const [checkedState, setCheckedState] = useState(
    new Array(category.length).fill(false)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getBrands(dispatch);
  }, [dispatch]);

  const brands = useSelector((state) => state.brand.brands);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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
  const handleClick = (e) => {
    e.preventDefault();
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
        console.log("Upload is " + progress + "% done");
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
          const product = { ...inputs, hinhsp: downloadURL, danhmuc: cat };
          addProduct(product, dispatch);
          navigate("/products");
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Tạo sản phẩm</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Hình sản phẩm</label>
          <input
            required
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Tên sản phẩm</label>
          <input
            required
            name="tensp"
            type="text"
            placeholder="Laptop..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Mô tả</label>
          <textarea
            required
            rows={10}
            name="motasp"
            type="text"
            placeholder="mô tả..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Giá</label>
          <input
            required
            name="giasp"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Danh mục</label>
          {category.map(({ name, char }, index) => {
            return (
              <label key={name}>
                <input
                  type="checkbox"
                  name={name}
                  value={char}
                  required
                  checked={checkedState[index]}
                  onChange={(e) => handleOnChange(e, index)}
                />
                {name}
              </label>
            );
          })}
        </div>
        <div className="addProductItem">
          <label>Còn hàng ?</label>
          <select name="trangthai" onChange={handleChange}>
            <option value="true">Còn</option>
            <option value="false">Không</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Hãng laptop </label>
          <select name="hang" id="" onChange={handleChange}>
            {brands.map((brand) => {
              const id = brand._id.toString();
              return <option value={id}>{brand.tenhang}</option>;
            })}
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
