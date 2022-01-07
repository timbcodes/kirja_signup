const express = require("express");
const router = express.Router();
const dbConnect = require("../src/email_builder");

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});

router.get("/success", (req, res) => {
    res.render("success");
});

router.get("/email_add", (req, res) => {
    let email = req.query.email;
    dbConnect(email);
    res.redirect("/success");
});

module.exports = router;