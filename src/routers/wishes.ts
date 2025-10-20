import { Router } from "express";
import { getWishes, postWishes } from "../controllers/wishes.js";

const router = Router();

router.route("/")
    .post(postWishes)
    .get(getWishes);

export default router;