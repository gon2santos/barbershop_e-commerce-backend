import { Router } from "express";

import Office from "../../models/office";
import { isAdmin } from "../../middlewares/auth";

const router = Router();

router.post("/create", isAdmin, async (req, res) => {
  const { lat, long, location } = req.body;

  try {
    const office = new Office({
      lat,
      long,
      location,
    });

    office.save().then((savedOffice) => res.status(200).send(savedOffice));
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
