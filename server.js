// Punto de entrada del servicio web.
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servicio web ejecutándose en http://localhost:${PORT}`);
});