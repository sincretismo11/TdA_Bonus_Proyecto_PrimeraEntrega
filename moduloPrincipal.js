//IMPORTACIÓN DEL FICHERO CON LA INFORMACIÓN DE LOS CURSOS (REQUIRE INTERNO)
//IMPORTACIÓN DEL MÓDULO YARGS (REQUIRE EXTERNO) Y DECLARACIÓN DE COMANDOS Y OPCIONES

const alumno = require('./moduloEstudiantes');
const cursos = require ('./database');
const arg = require ('yargs')
			.command ('inscribir', 'Inscripcion del aspirante', alumno.opciones)
			.argv;


//DESTRUCTURACIÓN DEL FICHERO DE INFORMACIÓN DE LOS CURSOS
var curso = cursos.cursos;
var id = cursos.cursos.id;
var nombre = cursos.cursos.nombre;
var duracion = cursos.cursos.duracion;
var cupos = cursos.cursos.cupos;
var precio = cursos.cursos.precio;
var validarCurso = cursos.validarCurso;
var indice = 0;

if(typeof(arg.i) ==='undefined'){

	//FUNCIÓN PARA EL DESPLIEGUE DE LOS CURSOS CON TEMPORIZADOR
	function alternarCurso(){		
		console.log('ID: '+ curso[indice].id+'\nNOMBRE: '+curso[indice].nombre+'\nCUPOS: '+curso[indice].cupos+'\nDURACIÓN: '+curso[indice].duracion+'\nPRECIO: '+curso[indice].precio+'\n');
		indice++;
		var timer = setTimeout(alternarCurso,2000);
		if (indice==curso.length){
			clearTimeout(timer);
		};

	};
	//FUNCIÓN DE INVOCACIÓN DEL SALUDO Y EL DESPLIEGUE DE CURSOS
	function principal(mensaje){
		console.log("\nBienvenido. Los cursos disponibles en este momento son: \n");
		setTimeout(function(){alternarCurso();},2000);
	};

	principal();

}else{
	//INVOCACIÓN A LA FUNCIÓN DE INSCRIPCIÓN DE CURSOS
	validarCurso(arg.i, arg.n, arg.c);
}