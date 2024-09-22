const express = require("express");
const router = express.Router();
const con = require("../controller/main");

router.get("/", con.main);
router.get("/shop", con.shop);
router.get("/tracking", con.tracking);
router.get("/blog", con.blog);
router.get("/contact", con.contact);

module.exports = router;
