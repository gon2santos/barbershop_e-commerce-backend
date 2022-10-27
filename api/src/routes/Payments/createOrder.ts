import axios from "axios";
import { Router } from "express";
import purchaseOrder from "../../models/purchaseOrder";
import { checkStock } from "../../middlewares/checkStock";
import { verifyToken } from "../../middlewares/auth";
import { deleteStock } from "../../middlewares/deleteStock";

const router = Router();

router.post("/create-order", async (req, res) => {
  const { user, compra } = req.body;
  console.log(req.body);
  /* let value: number = compra.reduce((acc: any, curr: any) => {
    return acc["price"] + curr["price"];
  }); */

  let productos = compra.map((obj: Object) => {
    return {
      name: obj["name"],
      quantity: obj["cantidad"],
      price: obj["price"],
    };
  });

  const newOrder = new purchaseOrder({
    user: user["email"],
    products: productos,
  });

  newOrder.save();
  const idOrder = newOrder["_id"];
  const id = idOrder.toString();
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: `${idOrder}`,
          amount: {
            currency_code: "USD",
            value: 100,
          },
        },
      ],
      application_context: {
        brand_name: "Henry BarberShop",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `http://localhost:5000/payments/capture-order`,
        cancel_url: `http://localhost:5000/payments/cancel-order/${id}`,
      },
    };
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      order,
      {
        auth: {
          username:
            "AVwlVSANTKRUrYDVQ0bmVEjUqaC9-RHw8qn3uRVp-xr4SzQae-1GmM4-B-V4y_bP2tCw7gKH2S8SfeKx",
          password:
            "EG_ZGG1BcPvJhGKbU0HafZRgg1mFMRGk0kZVULdRAL-ECDr5IYVzvA1aWNPXiWQHcSRHqxooNZnyoy6Z",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
