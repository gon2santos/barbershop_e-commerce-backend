import { Router } from "express";
import Category from "../../models/categories";
import Product from "../../models/products";
import { verifyToken, isAdmin } from "../../middlewares/auth";
import { uploadImage } from "../../libs/cloudinary";

const router = Router();

router.post("/create", verifyToken, isAdmin, async (req: any, res: any) => {
  let { name, description, price, stock, available, favorite, categories } =
    req.body;

  if (typeof name === "string") name = name.toLocaleLowerCase();

  const image: Object = await uploadImage(req.files.image.tempFilePath);
  try {
    const product = new Product({
      name: name,
      description: description,
      price: price,
      stock: stock,
      image: image["secure_url"],
      available: available,
      favorite: favorite,
      categories: categories,
    });

    if (categories) {
      const foundCategory = await Category.find({
        name: { $in: categories },
      });
      product.categories = foundCategory.map((el) => el._id);
    }
    product.populate("categories", "name -_id");

    const savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
