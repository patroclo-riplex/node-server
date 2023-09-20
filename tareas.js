const readline = require('readline-sync');

const tareas = [];

function agregarTarea() {
  return new Promise((resolve, reject) => {
    const indicador = tareas.length + 1;
    const descripcion = readline.question('Introduce la descripcion de la tarea: ');
    const estado = 'No completada';

    tareas.push({ indicador, descripcion, estado });
    console.log('Tarea añadida correctamente.');
    resolve();
  });
}

function eliminarTarea() {
  return new Promise((resolve, reject) => {
    console.log('Lista de tareas:');
    mostrarTareas();

    const tareaAEliminar = parseInt(readline.question('Introduce el indicador de la tarea a eliminar: '));

    const index = tareas.findIndex(tarea => tarea.indicador === tareaAEliminar);
    if (index !== -1) {
      tareas.splice(index, 1);
      console.log('Tarea eliminada correctamente.');
      resolve();
    } else {
      console.log('Indicador de tarea no valido.');
      reject();
    }
  });
}

function completarTarea() {
  return new Promise((resolve, reject) => {
    console.log('Lista de tareas:');
    mostrarTareas();

    const tareaACompletar = parseInt(readline.question('Introduce el indicador de la tarea a completar: '));

    const tarea = tareas.find(tarea => tarea.indicador === tareaACompletar);
    if (tarea) {
      tarea.estado = 'Completada';
      console.log('Tarea marcada como completada.');
      resolve();
    } else {
      console.log('Indicador de tarea no válido.');
      reject();
    }
  });
}

function mostrarTareas() {
  tareas.forEach(tarea => {
    console.log(`[${tarea.indicador}] ${tarea.descripcion} - Estado: ${tarea.estado}`);
  });
}

async function main() {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const opcion = parseInt(readline.question('Elige una opcion: '));

    try {
      switch (opcion) {
        case 1:
          await agregarTarea();
          break;
        case 2:
          await eliminarTarea();
          break;
        case 3:
          await completarTarea();
          break;
        case 4:
          mostrarTareas();
          break;
        case 5:
          process.exit(0);
        default:
          console.log('Opción no valida. Intentalo de nuevo.');
      }
    } catch (error) {
      console.error('Ocurrio un error:', error);
    }
  }
}

main();


//Probando implementando then

// async function main() {
//   while (true) {
//     console.log('\nOpciones:');
//     console.log('1. Agregar tarea');
//     console.log('2. Eliminar tarea');
//     console.log('3. Completar tarea');
//     console.log('4. Mostrar tareas');
//     console.log('5. Salir');

//     const opcion = parseInt(readline.question('Elige una opción: '));

//     try {
//       switch (opcion) {
//         case 1:
//           agregarTarea().then(() => {
//             console.log('Operación de agregar tarea completada.');
//           }).catch(error => {
//             console.error('Ocurrió un error:', error);
//           });
//           break;
//         case 2:
//           eliminarTarea().then(() => {
//             console.log('Operación de eliminar tarea completada.');
//           }).catch(error => {
//             console.error('Ocurrió un error:', error);
//           });
//           break;
//         case 3:
//           completarTarea().then(() => {
//             console.log('Operación de completar tarea completada.');
//           }).catch(error => {
//             console.error('Ocurrió un error:', error);
//           });
//           break;
//         case 4:
//           mostrarTareas();
//           break;
//         case 5:
//           process.exit(0);
//         default:
//           console.log('Opción no válida. Inténtalo de nuevo.');
//       }
//     } catch (error) {
//       console.error('Ocurrió un error:', error);
//     }
//   }
// }

// main();
