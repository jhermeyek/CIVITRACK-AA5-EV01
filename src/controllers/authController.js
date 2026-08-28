const {
  createUser,
  authenticateUser
} = require("../services/authService");

// Atiende la solicitud de registro.
async function register(req, res) {
  try {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({
        mensaje: "El usuario y la contraseña son obligatorios"
      });
    }

    const result = await createUser(usuario, password);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      mensaje: error.message || "Error interno del servidor"
    });
  }
}

// Atiende la solicitud de inicio de sesión.
async function login(req, res) {
  try {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({
        mensaje: "El usuario y la contraseña son obligatorios"
      });
    }

    const authenticated = await authenticateUser(usuario, password);

    if (!authenticated) {
      return res.status(401).json({
        mensaje: "Error en la autenticación"
      });
    }

    return res.status(200).json({
      mensaje: "Autenticación satisfactoria"
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error interno del servidor"
    });
  }
}

module.exports = {
  register,
  login
};