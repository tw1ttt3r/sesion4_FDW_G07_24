let respuesta = true;
const alumnos = [];
const promedios = [];

// do {
//     const nombre = prompt("Nombre del alumno: ");
//     alumnos.push(nombre);
//     const p = prompt("Desea agregar un nuevo registro: 1)Si 2)No ");
//     respuesta = p == '1';
// } while (respuesta)

while(respuesta) {
    const nombre = prompt("Nombre del alumno: ");
    const promedio = prompt("Promedio del alumno: ");
    alumnos.push(nombre);
    promedios.push(promedio);
    const p = prompt("Desea agregar un nuevo registro: 1)Si 2)No ");
    respuesta = p == '1';
}

let aprobados = 0;
let reprobados = 0;
let sumaPromedio = 0;

// 7,9,10

for (let promedio of promedios) {
    sumaPromedio = sumaPromedio + promedio;
    if (promedio < 7) {
        reprobados = reprobados + 1;
    } else {
        aprobados = aprobados + 1;
    }
}

alert(`Total de alumnos: ${alumnos.length} 
    de los cuales Alumnos reprobados: ${reprobados} 
    y alumnos aprobados: ${aprobados}
    Promedio total del grupo: ${sumaPromedio / alumnos.length}
`);