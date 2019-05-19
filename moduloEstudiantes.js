//IMPORTANCIÓN DEL MÓDULO DE LECTURA/ESCRITURA DE ARCHIVOS
const fs = require('fs');

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

//FUNCION PARA GENERAR EL ARCHIVO DE TEXTO CON LOS DATOS DE LA INSCRIPCIÓN

var date=new Date();
function generarArchivo(curso,nombre,cedula){
	texto = 'El aspirante '+nombre+', identificado con la cédula '+cedula+
		    ' se ha pre inscrito al curso de '+curso.nombre+
		    ' ,con ID '+curso.id+' y un precio de $'+curso.precio+'. La solicitud fue realizada el '
		    + date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
	fs.writeFile('PreInscripción al curso '+curso.nombre+'.txt',texto,(err)=>{
		if (err) throw (err);
		console.log('El archivo de inscipción ha sido generado exitosamente');
	});

};

//EXPORTACIÓN DE INFORMACIÓN Y FUNCIONES
module.exports = {
	opciones,
	generarArchivo
}