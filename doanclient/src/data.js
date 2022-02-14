import mainbgImage from './assets/image/background/mainbg.jpg';
import legionbgImage from './assets/image/background/Legionbg.jpg';
import salebgImage from './assets/image/background/salebg.png';
//---------------- import category---------
import business from './assets/image/category/business.jpg';
import college from './assets/image/category/collegelaptop.jpg';
import gaming from './assets/image/category/gaminglaptop.jpg';
//---------------- import products---------
// import game from './assets/image/products/Laptop ASUS TUF Gaming F15 FX506LH HN002T.png';
// import game1 from './assets/image/products/Laptop Gaming Asus ROG Strix G15 G513IH HN015T.png';
// import game2 from './assets/image/products/Laptop Gaming MSI Bravo 15 B5DD 027VN.png';
// import game3 from './assets/image/products/Laptop Gaming Asus TUF Dash F15 FX516PC HN002T.png';
// import sv from './assets/image/products/Laptop Acer Aspire 3 A315 58 3939.jpg';
// import sv1 from './assets/image/products/Laptop ASUS D515DA EJ711T.jpg';
// import dn from './assets/image/products/Laptop MSI Modern 15 A5M 047VN.jpg';
// import dn1 from './assets/image/products/Laptop Asus Vivobook A515EA BQ489T.jpg';



export const slideItems = [
    {
        id: 1,
        img: mainbgImage,
        title: "BACK TO SCHOOL",
        desc: "GIẢM GIÁ 30% CHO HỌC SINH, SINH VIÊN NGÀY TỰU TRƯỜNG",
    },
    {
        id: 2,
        img: legionbgImage,
        title: "ĐỒNG HÀNH CÙNG LEGION",
        desc: "KHUYẾN MÃI KHỦNG VỚI LAPTOP LEGION",
    },
    {
        id: 3,
        img: salebgImage,
        title: "SẮM LAPTOP THẢ GA",
        desc: "TRẢ GÓP 0% - ƯU ĐÃI LỚN - QUÀ TẶNG KHỦNG",
    },
];

export const category = [
    {
        id: 1,
        img: college,
        title: "SINH VIÊN",
        cat : "sinhvien"
    },
    {
        id: 2,
        img: business,
        title: "VĂN PHÒNG",
        cat:"vanphong"
    },
    {
        id: 3,
        img: gaming,
        title: "GAMING",
        cat: "gaming"
    },
];

// //list of product -----------------
// export const popularProducts = [
//     {
//       id:1,
//       img:game,
//       title: "Laptop ASUS TUF Gaming F15 FX506LH HN002T",
//       price: "21,490,000₫"
//     },
//     {
//       id:2,
//       img:game1,
//       title: "Laptop Gaming Asus ROG Strix G15 G513IH HN015T",
//       price: "23,290,000₫"
//     },
//     {
//       id:3,
//       img:game2,
//       title: "Laptop Gaming MSI Bravo 15 B5DD 027VN",
//       price: "21,990,000₫"
//     },
//     {
//       id:4,
//       img:game3,
//       title: "Laptop Gaming Asus TUF Dash F15 FX516PC HN002T",
//       price: "25,990,000₫"
//     },
//     {
//       id:5,
//       img:sv,
//       title: "Laptop Acer Aspire 3 A315 58 3939",
//       price: "11,990,000₫"
//     },
//     {
//       id:6,
//       img:sv1,
//       title: "Laptop ASUS D515DA EJ711T",
//       price: "11,990,000₫"
//     },
//     {
//       id:7,
//       img:dn,
//       title: "Laptop MSI Modern 15 A5M 047VN",
//       price: "19,490,000₫"
//     },
//     {
//       id:8,
//       img:dn1,
//       title: "Laptop Asus Vivobook A515EA BQ489T",
//       price: "14,990,000₫"
//     },
//   ]