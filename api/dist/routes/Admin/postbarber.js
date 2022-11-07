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
const barber_1 = __importDefault(require("../../models/barber"));
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
router.post("/create", auth_1.isAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, office, rating, image } = req.body;
    try {
        const brb = new barber_1.default({
            name: name,
            office: office,
            rating: rating,
            image: image,
        });
        brb.save().then((savedBarber) => res.status(200).send(savedBarber));
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
