const express = require("express");
const router = express.Router();
const dbConnect = require("../src/email_builder");
const nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});

router.get("/email_add", (req, res) => {
    let email = req.query.email;
    dbConnect(email);
});

router.get("/success", (req, res) => {
    res.render("success");
});

router.get("/investors", (req, res) => {
    res.render("investors");
});

router.post("/message", (req, res) => {
    let mailOptions = {
        from: req.body.email,
        to: "tim@timb.codes",
        subject: `Investor Email: ${req.body.email}`,
        text: `Name: ${req.body.name}; Company: ${req.body.company};`,
    };
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "timbcodes@gmail.com",
            pass: "$mokeyJoe86",
        },
    });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
    setTimeout(() => {
        res.redirect("/");
    }, 2000);
});

module.exports = router;