const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./POUCM/BD/sequelize');
const Master = require('./POUCM/routers/routerMaster');
const Usuario = require('./POUCM/BD/models/usuario');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/', Master);

// Ruta de inicio de sesión
app.post('/usuario/login', async (req, res) => {
    const { rut, password } = req.body;
  
    try {
      // Buscar el usuario en la base de datos por el rut y la contraseña
      const usuario = await  Usuario.findOne({
        where: {
          rut: rut,
          password: password,
        },
      });
  
      if (usuario) {
        return res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      return res.status(500).json({ error: 'Error interno al iniciar sesión' });
    }
  });


  app.get('/estadisticas/archivos-por-carrera', async (req, res) => {
    try {
      // Lógica para obtener estadísticas desde la base de datos
      const estadisticas = await obtenerEstadisticasArchivosPorCarrera();
      res.status(200).json({ estadisticas });
    } catch (error) {
      console.error('Error al obtener estadísticas:', error);
      res.status(500).json({ error: 'Error al obtener estadísticas' });
    }
  });
  
  

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos MySQL');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Los modelos se han sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar o sincronizar con la base de datos:', error);
  });

module.exports = sequelize;
