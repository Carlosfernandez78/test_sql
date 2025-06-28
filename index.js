const db = require('./db/db');

db.query('SELECT 1', (err, result) => {
  if (err) {
    console.error('Error en la consulta:', err.message);
    return;
  }
  console.log('Consulta ejecutada correctamente:', result);
});

const {
  getTelefonos,
  getTelefonoPaciente,
  getMedicosPaciente
} = require('./consultas');

// Elegí UNA de estas líneas para probar, no todas juntas al principio:

//getTelefonos();
 getTelefonoPaciente(778);
 getMedicosPaciente(778);
