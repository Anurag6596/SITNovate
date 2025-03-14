const express = require("express");
const router = express.Router();

const { signUp, login, logout } = require("../Controllers/user.controller");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
