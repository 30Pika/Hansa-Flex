import express from "express";
import VerifyToken from "../Middleware/JWTVerifyToken.js"
import RegisterCon from "../Controller/RegisterCon.js";
import LoginCon from "../Controller/LoginCon.js";
import ProductsCon from "../Controller/ProductsCon.js";
import ProductListCon from "../Controller/ProductListCon.js";
import ProductUpdateCon from "../Controller/ProductUpdateCon.js";
import ProductDeleteCon from "../Controller/ProductDeleteCon.js";
import ProductSearchCon from "../Controller/ProductSearchCon.js";
import ConfirmBuyCon from "../Controller/ConfirmBuyCon.js";
import BuyProductQutCon from "../Controller/BuyProductQutCon.js";
import CartBuyProductCon from "../Controller/CartBuyProductCon.js";
import AllOrderCon from "../Controller/AllOrderCon.js";
import ChangeStatusCon from "../Controller/ChangeStatusCon.js";
import FetchCategory from "../Controller/FetchCategory.js";
import FetchSubCategory from "../Controller/FetchSubCategory.js";
import FetchProduct from "../Controller/FetchProduct.js";
import upload from "../Middleware/FileMulter.js";

//Router Object
const router = express.Router();

//Project api Routing
//Register Route Api
router.post("/register", RegisterCon);

//Login Route Api
router.post("/login", LoginCon);

// Product Storing Api
router.post("/product", VerifyToken, upload.single('image'), ProductsCon);

//Product List Fetching Api
router.get("/product", VerifyToken, ProductListCon);

//Product List Update Api
router.put("/product/:id", VerifyToken, ProductUpdateCon);

//Product List Delete Api
router.delete("/product/:id", VerifyToken, ProductDeleteCon);

//Product List Search Api
router.get("/product/search/:key", ProductSearchCon);

//Show Product List For Buy Api
router.get("/buyproduct", ProductListCon);

//Confirm Buy Product List Api
router.post("/buyproduct", VerifyToken, ConfirmBuyCon);

//Buy Product Update Quntity Api
router.put("/buyproduct/updatequt/:id", VerifyToken, BuyProductQutCon);

//Show Product List For Buy Api
router.get("/buyproduct/cart/:id", VerifyToken, CartBuyProductCon);

//Show All Order Product List For Buy Api
router.get("/buyproduct/status", VerifyToken, AllOrderCon);

//Update Status Order Product  Api
router.put("/buyproduct/update_status/:id", VerifyToken, ChangeStatusCon);

//Fetch Subcategorys Api
router.get("/buyproduct/category/:key", FetchCategory);

//Fetch Companys Api
router.get("/buyproduct/subcategory/:key", FetchSubCategory);

//Fetch Companys after product Api
router.get("/buyproduct/product/:key", FetchProduct);

export default router;