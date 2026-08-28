const fs = require("fs/promises");
const path = require("path");

const dataDirectory = path.join(__dirname, "../../data");
const usersFile = path.join(dataDirectory, "users.json");

// Crea el archivo de usuarios si todavía no existe.
async function ensureUsersFile() {
  await fs.mkdir(dataDirectory, { recursive: true });

  try {
    await fs.access(usersFile);
  } catch {
    await fs.writeFile(usersFile, "[]", "utf8");
  }
}

// Lee los usuarios registrados.
async function readUsers() {
  await ensureUsersFile();

  const content = await fs.readFile(usersFile, "utf8");
  return JSON.parse(content);
}

// Guarda los usuarios registrados.
async function writeUsers(users) {
  await ensureUsersFile();

  await fs.writeFile(
    usersFile,
    JSON.stringify(users, null, 2),
    "utf8"
  );
}

module.exports = {
  readUsers,
  writeUsers
};