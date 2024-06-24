// index.js
const express = require("express");
const Master = require('./src/routers/router.js');
const { syncDatabase } = require('./src/db/sequelize.js');
const  cors  = require ('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use('/', Master);

app.get("/", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

syncDatabase()

app.listen(PORT, () => {console.log(`Server listening on ${PORT}`);
});