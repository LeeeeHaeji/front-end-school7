var express = require('express');
var router = express.Router();
const authRouter = require("./auth");
const postRouter = require("./posts");

router.get('/', (req, res) => {
  res.render('index', {postList: [] });
});

// use는 매소드에 상관이 없이 /auth라는 url로 접근을 하면 모든 요청을 authRouter로 보내도록 하겠다라는 의미를 뜻하고있다.
router.use("/auth", authRouter);
router.use("/posts", postRouter);

module.exports = router;
