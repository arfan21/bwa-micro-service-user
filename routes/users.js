const express = require("express");
const router = express.Router();
const userController = require("./controllers/users");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.put("/:id", userController.update);
router.get("/:id", userController.getUser);
router.get("/", userController.getUsers);

module.exports = router;
