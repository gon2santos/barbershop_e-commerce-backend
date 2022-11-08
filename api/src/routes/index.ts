import { Router } from "express";
/* ============PRODUCTS FILES============ */
import postProducts from "./Products/postProducts";
import getAllProducts from "./Products/getAllProducts";
import getSearchedProducts from "./Products/getSearchedProducts";
import deleteProducts from "./Products/deleteProducts";
import getProduct from "./Products/getProduct";
import filterProducts from "./Products/filterProducts";
import editProducts from "./Products/editProduct";
import populatedProducts from "./Products/postPopulateProducts";
import addToFavorite from "./Products/addToFavorite";
import removeFromFavorite from "./Products/removeFromFavorite";
import getAllFavorites from "./Products/getAllFavorites";
import addToFavotiteBulk from "./Products/addToFavoriteBulk";
/* ============USERS FILES============ */
import signUp from "./User/signup";
import login from "./User/signin";
import changeToAdmin from "./User/changeToAdmin";
import { isAdmin } from "../middlewares/auth";
import changeToCommon from "./User/changeToCommon";
import banUser from "./User/banUser";
import desbanearUser from "./User/desbanearUser";
import getAllUsers from "./User/getAllUsers";
import getOneUser from "./User/getOneUser";
import sendPwdRstEmail from "./User/resetPwd";
import patchPwd from "./User/patchPwd";
import editUsr from "./User/editUser";
/* ============CATEGORIES============ */
import postCategories from "./Admin/postCategories";
import deleteCategory from "./Admin/deleteCategory";
import getCategories from "./Categories/getAllCategories";
/* ============REVIEWS============ */
import postReview from "./Reviews/postReview";
import deleteReview from "./Reviews/deleteReview";
import editReview from "./Reviews/editReview";
/* ============APPOINTMENTS============ */
import postAppointment from "./Appointments/postAppointment";
import getAppointments from "./Appointments/getAppontments";
import deleteAppointment from "./Appointments/deleteAppointment";
import getAllAppointments from "./Appointments/getAllAppointments";
/* ============BARBERS============ */
import postbarber from "./Admin/postbarber";
import getbarbers from "./Barbers/getbarbers";
/* ============OFFICES============ */
import postOffice from "./Admin/postOffice";
import getOffices from "./Offices/getOffices";
import editOffices from "./Admin/patchOffice";
import deleteOffice from "./Admin/deleteOffice";
/* ============PAYMENTS============*/
import captureOrder from "./Payments/captureOrder";
import cancelOrder from "./Payments/cancelOrder";
import createOrder from "./Payments/createOrder";
/*============ORDERS=============*/
import getOrder from "./Orders/getOrder";
import confirmOrder from "./Orders/completeOrder";
import cancelOrders from "./Orders/cancelOrders";
import deleteOrders from "./Orders/deleteAllOrders";
import getUserOrders from "./Orders/getUserOrders";
import getPurchaseOrders from "./Orders/getPurchaseOrders";
import searchOrder from "./Orders/searchOrder";
import changeStateOrder from "./Orders/changeStateOrder";
import filterOrders from "./Orders/filterOrders";
import deliverOrder from "./Orders/deliverOrder";
import getProductOrders from "./Orders/getProductOrders";
const router = Router();

/* ============PRODUCTS============ */
router.use("/products", postProducts);
router.use("/products", getAllProducts);
router.use("/products", getSearchedProducts);
router.use("/products", getProduct);
router.use("/products", deleteProducts);
router.use("/products", filterProducts);
router.use("/products", editProducts);
router.use("/products", populatedProducts);
router.use("/products", addToFavorite);
router.use("/products", removeFromFavorite);
router.use("/products", getAllFavorites);
router.use("/products", addToFavotiteBulk);

/* ============USERS============ */
router.use("/users", signUp);
router.use("/users", login);
router.use("/users", getOneUser);
// router.use("/users", isAdmin);
router.use("/users", changeToAdmin);
router.use("/users", changeToCommon);
router.use("/users", banUser);
router.use("/users", desbanearUser);
router.use("/users", getAllUsers);

router.use("/users", sendPwdRstEmail);
router.use("/users", patchPwd);

router.use("/users", editUsr);
router.use("/users", sendPwdRstEmail);
router.use("/users", patchPwd);

/* ============CATEGORIES============ */
router.use("/categories", postCategories);
router.use("/categories", getCategories);
router.use("/categories", deleteCategory);

/* ============REVIEWS============ */
router.use("/reviews", postReview);
router.use("/reviews", deleteReview);
router.use("/reviews", editReview);

/* ============APPOINTMENTS============ */
router.use("/agenda/", postAppointment);
router.use("/agenda/", deleteAppointment);
router.use("/agenda/", getAppointments);
router.use("/agenda/", getAllAppointments);

/* ============OFFICES============ */
router.use("/office/", postOffice);
router.use("/office/", getOffices);
router.use("/office/", editOffices);
router.use("/office/", deleteOffice);

/* ============BARBERS============ */
router.use("/barber/", postbarber);
router.use("/barber/", getbarbers);

/* ============PAYMENTS============*/
router.use("/payments", captureOrder);
router.use("/payments", cancelOrder);
router.use("/payments", createOrder);

/*============ORDERS=============*/
router.use("/orders", getPurchaseOrders);
router.use("/orders", searchOrder);
router.use("/orders", filterOrders);
router.use("/orders", changeStateOrder);
router.use("/orders", getOrder);
router.use("/orders", confirmOrder);
router.use("/orders", cancelOrders);
router.use("/orders", deleteOrders);
router.use("/orders", getUserOrders);
router.use("/orders", deliverOrder);
router.use("/orders", getProductOrders);
export default router;
