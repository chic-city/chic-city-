const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  addArticle,
  modifyArticle,
  deleteArticle,
  allArticles,
  myArticles,
  PostArticle,
} = require("../controllers/productController");

router.post("/add", addArticle);
router.put("/:id", authMiddleware, modifyArticle);
router.delete("/:id", authMiddleware, deleteArticle);
router.get("/", allArticles);
router.post("/my", authMiddleware, myArticles);
router.post("/post",PostArticle),
module.exports = router;
