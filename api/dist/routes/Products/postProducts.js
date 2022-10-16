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
const express_1 = require("express");
const products_1 = __importDefault(require("../../models/products"));
const middlewares_1 = require("../Auth/middlewares");
const router = (0, express_1.Router)();
router.post("/create", middlewares_1.verifyToken, middlewares_1.isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, stock, available, favorite, categories } = req.body;
    try {
        const response = yield products_1.default.create({
            name: name,
            description: description,
            price: price,
            stock: stock,
            available: available,
            categories: categories,
        });
        res.status(200).send(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}));
exports.default = router;
