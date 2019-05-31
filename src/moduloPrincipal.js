//IMPORTACIÓN DEL FICHERO CON LA INFORMACIÓN DE LOS CURSOS (REQUIRE INTERNO)
//IMPORTACIÓN DEL MÓDULO YARGS (REQUIRE EXTERNO) Y DECLARACIÓN DE COMANDOS Y OPCIONES
//IMPORTACIÓN DEL MÓDULO PATH PARA GENERAR LAS RUTAS DENTRO DEL PROYECTO
//IMPORTACIÓN DEL MÓDULO HBS PARA EL MANEJO DE LOS CONTENIDOS DINÁMICOS

const alumno = require('./moduloEstudiantes');
const cursos = require ('./database');
const path = require('path');
const hbs = require('hbs');
const arg = require ('yargs')
			.command ('inscribir', 'Inscripcion del aspirante', alumno.opciones)
			.argv;

//DECLARACIÓN DE LAS VARIABLES QUE USARÁ EL MÓDULO EXPRESS PARA USAR EL SERVIDOR LOCAL
const express = require('express')
const app = express()
const directorioPublico = path.join(__dirname, '../public');

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
	/*----------------------------------------------------------------------------------------------------
	LÍNEAS PARA INVOCAR A LA FUNCIÓN ENCARGADA DE GENERAR EL TEXTO EN EL DIRECTORIO LOCAL. 
	HACE PARTE DE LA PRIMERA PARTE DE LA ENTREGA Y SE CONSERVA SOLO COMO EVIDENCIA DOCUMENTAL
	------------------------------------------------------------------------------------------------------

	INVOCACIÓN A LA FUNCIÓN DE INSCRIPCIÓN DE CURSOS
	var texto = validarCurso(arg.i, arg.n, arg.c);
	-----------------------------------------------------------------------------------------------------*/

	console.log('\nServidor corriendo exitosamente en el puerto: 3000\n');
	console.log('- Para visualizar el contenido, diríjase a localhost:3000 en su browser');
	console.log('- Para detener el servidor, oprima ctrl + c en la consola de comandos');
	console.log('\nMás información a jopenara@unal.edu.co');

	//DECLARACIÓN DE UNA VARIABLE QUE RECOGERÁ LA FECHA ACTUAL PARA PRESENTARLA AL USUARIO
	var date=new Date();
	var actual=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

	//FUNCIÓN QUE SE COMUNICA CON EL SERVIDOR

	app.use(express.static(directorioPublico)); 
	app.listen(3000);

	//DECLARACIÓN DE LA UBICACIÓN DE LOS ARCHIVOS VISTA
	app.set('views', path.join(__dirname, "../views"));
	app.set('view engine', 'hbs');
	//GENERACIÓN DE LA VISTA CON LA INFORMACIÓN DE LA PREINSCRIPCIÓN DEL ESTUDIANTE
	app.get('/',(req,res)=>{
		res.render('index', { 
			nombre: arg.n,
			idEstudiante: arg.c,
			curso: curso[arg.i - 1].nombre,
			idCurso: curso[arg.i - 1].id,
			precio: curso[arg.i - 1].precio,
			fecha: actual
			});
	});
}

