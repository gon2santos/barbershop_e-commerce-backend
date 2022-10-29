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
exports.deleteStock = void 0;
const products_1 = __importDefault(require("../models/products"));
const deleteStock = (order) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(order);
    try {
        yield order["products"].forEach((obj) => __awaiter(void 0, void 0, void 0, function* () {
            const producto = yield products_1.default.findOne({ name: obj["name"] });
            console.log("PRODUCTO", producto);
            console.log(producto["stock"]);
            producto.stock -= obj["quantity"];
            yield producto.save();
        }));
        return order;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteStock = deleteStock;
