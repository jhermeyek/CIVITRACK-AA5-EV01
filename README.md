# GA7-220501096-AA5-EV01 — Servicio web de autenticación

Servicio web desarrollado con Node.js y Express para cumplir el caso de registro e inicio de sesión.

## Requisitos

- Node.js instalado.

## Instalación

Desde esta carpeta ejecutar:

```bash
npm install
```

## Ejecución

```bash
npm start
```

El servicio queda disponible en:

```text
http://localhost:3000
```

## Registro

Método: `POST`

Ruta:

```text
http://localhost:3000/api/auth/register
```

Cuerpo JSON:

```json
{
  "usuario": "javier",
  "password": "123456"
}
```

Respuesta:

```json
{
  "mensaje": "Usuario registrado correctamente"
}
```

## Inicio de sesión

Método: `POST`

Ruta:

```text
http://localhost:3000/api/auth/login
```

Cuerpo JSON:

```json
{
  "usuario": "javier",
  "password": "123456"
}
```

Si las credenciales son correctas:

```json
{
  "mensaje": "Autenticación satisfactoria"
}
```

Si las credenciales son incorrectas:

```json
{
  "mensaje": "Error en la autenticación"
}
```

## Versionamiento

El proyecto se puede incorporar al repositorio GitHub indicado en `enlace_repositorio.txt` utilizando Git.
