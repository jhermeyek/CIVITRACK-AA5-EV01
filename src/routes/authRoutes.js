const express = require("express");
const {
  register,
  login
} = require("../controllers/authController");

const router = express.Router();

// Registra un nuevo usuario.
router.post("/register", register);

// Valida las credenciales de inicio de sesión.
router.post("/login", login);

module.exports = router;