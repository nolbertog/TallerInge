// index.js
const express = require("express");
const Master = require('./server/routers/routerMaster');
const { syncDatabase } = require('./server/BD/sequelize');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/', Master);
app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

// Sincroniza la base de datos al iniciar la aplicación
syncDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
});