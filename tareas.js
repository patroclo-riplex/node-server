const readline = require('readline-sync');

const tareas = [];

function agregarTarea() {
  const indicador = tareas.length + 1;
  const descripcion = readline.question('Introduce la descripcion de la tarea: ');
  const estado = 'No completada';

  tareas.push({ indicador, descripcion, estado });
  console.log('Tarea añadida correctamente.');
}

function eliminarTarea() {
  console.log('Lista de tareas:');
  mostrarTareas();

  const tareaAEliminar = parseInt(readline.question('Introduce el indicador de la tarea a eliminar: '));

  const index = tareas.findIndex(tarea => tarea.indicador === tareaAEliminar);
  if (index !== -1) {
    tareas.splice(index, 1);
    console.log('Tarea eliminada correctamente.');
  } else {
    console.log('Indicador de tarea no valido.');
  }
}

function completarTarea() {
  console.log('Lista de tareas:');
  mostrarTareas();

  const tareaACompletar = parseInt(readline.question('Introduce el indicador de la tarea a completar: '));

  const tarea = tareas.find(tarea => tarea.indicador === tareaACompletar);
  if (tarea) {
    tarea.estado = 'Completada';
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Indicador de tarea no valido.');
  }
}

function mostrarTareas() {
  tareas.forEach(tarea => {
    console.log(`[${tarea.indicador}] ${tarea.descripcion} - Estado: ${tarea.estado}`);
  });
}

while (true) {
  console.log('\nOpciones:');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  const opcion = parseInt(readline.question('Elige una opcion: '));

  switch (opcion) {
    case 1:
      agregarTarea();
      break;
    case 2:
      eliminarTarea();
      break;
    case 3:
      completarTarea();
      break;
    case 4:
      mostrarTareas();
      break;
    case 5:
      process.exit(0);
    default:
      console.log('Opcion no valida. Intentalo de nuevo.');
  }
}
