import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bai bala ni?");
});

export default router;
