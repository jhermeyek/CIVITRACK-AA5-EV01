const bcrypt = require("bcryptjs");
const { readUsers, writeUsers } = require("../data/userRepository");

// Registra un usuario y almacena la contraseña mediante un hash.
async function createUser(usuario, password) {
  const users = await readUsers();

  const exists = users.some(
    (user) => user.usuario.toLowerCase() === usuario.toLowerCase()
  );

  if (exists) {
    const error = new Error("El usuario ya está registrado");
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  users.push({
    usuario,
    passwordHash
  });

  await writeUsers(users);

  return {
    mensaje: "Usuario registrado correctamente"
  };
}

// Comprueba que el usuario exista y que la contraseña coincida.
async function authenticateUser(usuario, password) {
  const users = await readUsers();

  const user = users.find(
    (item) => item.usuario.toLowerCase() === usuario.toLowerCase()
  );

  if (!user) {
    return false;
  }

  return bcrypt.compare(password, user.passwordHash);
}

module.exports = {
  createUser,
  authenticateUser
};