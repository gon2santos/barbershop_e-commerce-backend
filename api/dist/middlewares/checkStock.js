"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStock = void 0;
const products_1 = __importDefault(require("../models/products"));
const checkStock = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { products } = req.body;
    let error = 0;
    products.reduce((acc, prod) => __awaiter(void 0, void 0, void 0, function* () {
        const producto = yield products_1.default.findById(prod["productos"]["_id"]);
        if (prod["cantidad"] > producto.stock) {
            error++;
            return producto;
        }
    }), []);
    setTimeout(function () {
        if (error === 0) {
            next();
        }
        else {
            return res.status(500).send("No hay stock");
        }
    }, 1000);
});
exports.checkStock = checkStock;
