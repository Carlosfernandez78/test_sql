const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin1', // poné tu contraseña si tenés una
  database: 'clinica'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    return;
  }
  console.log('Conexión exitosa a la base de datos Clínica');
});

module.exports = conexion;
