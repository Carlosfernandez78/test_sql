const db = require('./db/db'); // importa la conexión

//  1. Listar todos los nombres, apellidos y teléfonos
function getTelefonos() {
  const sql = 'SELECT nombre, apellido, telefono FROM paciente';

  db.query(sql, (err, resultados) => {
    if (err) return console.error('Error al obtener teléfonos:', err.message);
    console.log(' Lista de teléfonos de pacientes:');
    console.table(resultados);
  });
}

//  2. Obtener el teléfono de un paciente según número de historial
function getTelefonoPaciente(nro_historial_clinico) {
  const sql = 'SELECT telefono FROM paciente WHERE nro_historial_clinico = ?';

  db.query(sql, [nro_historial_clinico], (err, resultados) => {
    if (err) return console.error('Error al buscar teléfono:', err.message);
    if (resultados.length === 0) {
      console.log(' No se encontró el paciente con ese número de historial.');
    } else {
      console.log(` Teléfono del paciente: ${resultados[0].telefono}`);
    }
  });
}

//  3. Listar médicos que atendieron a un paciente (requiere INNER JOIN)
function getMedicosPaciente(nro_historial_clinico) {
  const sql = `
    SELECT m.nombre AS nombre_medico, m.apellido AS apellido_medico
    FROM ingreso i
    INNER JOIN medico m ON i.matricula_medico = m.matricula
    WHERE i.nro_historial_clinico = ?
  `;

  db.query(sql, [nro_historial_clinico], (err, resultados) => {
    if (err) return console.error('Error al obtener médicos:', err.message);
    if (resultados.length === 0) {
      console.log(' No se encontraron médicos para ese paciente.');
    } else {
      console.log(` Médicos que atendieron al paciente:`);
      console.table(resultados);
    }
  });
}

// Exportar funciones para usarlas desde otros archivos si querés
module.exports = {
  getTelefonos,
  getTelefonoPaciente,
  getMedicosPaciente
};


