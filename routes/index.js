import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  res.json({
    msg: "API started!!",
    success: true
  });
});

export default router;
