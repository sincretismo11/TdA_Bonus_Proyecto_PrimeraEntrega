//IMPORTACIÓN DEL MÓDULO PARA LA GENERACIÓN DEL ARCHIVO .txt
const alumno = require('./moduloEstudiantes');

//DESTRUCTURACIÓN DE LA FUNCIÓN GENERARARCHIVO DEL MÓDUCLO DE ESTUDIANTES
var generarArchivo = alumno.generarArchivo;

//DECLARACIÓN DE LOS CURSOS EN FORMATO JSON
let cursos = [
			{id: 0001,
			nombre: 'Cálculo en Varias Variables',
			duracion: 60,
			cupos: 40,
			precio: 250000
			},
			{id: 0002,
			nombre: 'Programación Lógica y Funcional',
			duracion: 50,
			cupos: 20,
			precio: 350000				
			},
			{id: 0003,
			nombre: 'Programación Orientada a Objetos',
			duracion: 70,
			cupos: 30,
			precio: 250000
			},
			{id: 0004,
			nombre: 'Geometría Vectorial y Analítica',
			duracion: 60,
			cupos: 30,
			precio: 150000				
			},
			{id: 0005,
			nombre: 'Diseño de Productos de Software',
			duracion: 80,
			cupos: 30,
			precio: 450000
			},
			{id: 0006,
			nombre: 'Investigación de Operaciones',
			duracion: 40,
			cupos: 20,
			precio: 300000
			},
			{id: 0007,
			nombre: 'Calidad de Productos de Software',
			duracion: 40,
			cupos: 30,
			precio: 300000
			}
		];

//FUNCIÓN PARA VALIDAR LA EXISTENCIA DE UN CURSO DE ACUERDO AL IDENTIFICADOR
function existeCurso(identificador){
	for (let i = 0; i<cursos.length; i++){
		if (cursos[i].id == identificador){
			return true;
			break;
		}
	validarCurso;
	}
};

//FUNCION PARA IMPRIMIR LA INFORMACION DE UN CURSO DE ACUERDO CON SU IDENTIFICADOR
function imprimirCurso(identificador){
	console.log('\nEl curso con id '+identificador+ ' es:\nNOMBRE: '+ cursos[(identificador-1)].nombre+'\nDURACIÓN: '+cursos[(identificador-1)].duracion+' horas \nCUPOS: '+cursos[(identificador-1)].cupos+' personas\nPRECIO: $'+cursos[(identificador-1)].precio);
};

//FUNCIÓN PARA VALIDAR LA EXISTENCIA DE UN CURSO DE ACUERDO CON SU IDENTIFICADOR
function validarCurso(identificador, nombre, cedula){
	if(existeCurso(identificador)){
		imprimirCurso(identificador);
		//EL TEXTO QUE RETORNA validarCurso() ES EL MISMO QUE RECIBIÓ generarArchivo() Y QUE SE IMPRIMIRÁ EN EL BROWSER
		//var texto = generarArchivo(cursos[(identificador-1)],nombre, cedula);
		//return texto;
	}
	else{
		console.log('\nNo existe el curso consultado. \nPor favor, verifique el ID que desea consultar');
	}
};

//EXPORTACIÓN DE INFORMACIÓN DE CURSOS Y FUNCIONES DE VALIDACIÓN
module.exports = {
	cursos,
	validarCurso
};