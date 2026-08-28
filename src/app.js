const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Permite recibir datos en formato JSON.
app.use(express.json());

// Ruta principal de autenticación.
app.use("/api/auth", authRoutes);

// Respuesta para rutas inexistentes.
app.use((req, res) => {
  res.status(404).json({
    mensaje: "Ruta no encontrada"
  });
});

module.exports = app;