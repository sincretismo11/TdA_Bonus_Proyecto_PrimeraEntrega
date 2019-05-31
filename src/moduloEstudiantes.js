//IMPORTANCIÓN DEL MÓDULO DE LECTURA/ESCRITURA DE ARCHIVOS
//const fs = require('fs');

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	}

};

/*--------------------------------------------------------------------------------------------
LÍNEAS PARA GENERAR EL TEXTO EN EL DIRECTORIO LOCAL POR MEDIO DEL MÓDULO FS:
HACE PARTE DE LA PRIMERA PARTE DE LA ENTREGA Y SE CONSERVA SOLO COMO EVIDENCIA DOCUMENTAL
----------------------------------------------------------------------------------------------

//FUNCION PARA GENERAR EL TEXTO CON LOS DATOS DE LA INSCRIPCIÓN

var date=new Date();
function generarArchivo(curso,nombre,cedula){
		fs.writeFile('PreInscripción al curso '+curso.nombre+'.txt',texto,(err)=>{
		if (err) throw (err);
		console.log('El archivo de inscipción ha sido generado exitosamente');
	});
	
};
----------------------------------------------------------------------------------------------*/

//EXPORTACIÓN DE INFORMACIÓN Y FUNCIONES
module.exports = {
	opciones,
	//generarArchivo
}