let estudiantes = [];

//crear constructor
let contador = 0;
class Estudiante{
    constructor(nombre, correo, genero, turno, campus, A, B, C) {
        this.nombre = nombre;
        this.correo = correo;
        this.genero = genero;
        this.turno = turno;
        this.campus = campus;
        this.califA = A;
        this.califB = B;
        this.califC = C;
        this.id=contador++;
    }
}

var ObjEstudiantes = [];
var alumno1 = new Estudiante("Miriam Yajhaira","lamorrilla@gmail.com","Mujer","M","Mexicali",80,90,100);


ObjEstudiantes.push(alumno1);



function validacion(alumno){
    inputnombre=document.getElementById("txtnombre");
    let valida=true

inputnombre.classlist.remove("error");
if(alumno.nombre==""){
    alert("Ingresa el nombre");
    return valida;
}
}
//crear funcion registrar

function Registrar() {

    //obtener los valores de los inputs
    console.log("Registrando nuevo alumno");
    let inputnombre = document.getElementById("txtNombre").value;
    let inputcorreo = document.getElementById("txtCorreo").value;
    let inputgenero = document.getElementById("txtGenero").value;
    let inputturno = document.getElementById("txtTurno").value;
    let inputcampus = document.getElementById("SelCampus").value;

    let inputcalifA = Number(document.getElementById("numCalifA").value);
    let inputcalifB = Number(document.getElementById("numCalifB").value);
    let inputcalifC = Number(document.getElementById("numCalifC").value);

    //crear objeto nuevo alumno
    let nuevoalumno = new Estudiante(inputnombre,inputcorreo,inputgenero,inputturno,inputcampus, inputcalifA, inputcalifB, inputcalifC);
    // console.log(nuevoalumno);

    if(inputnombre.trim()!="" && inputcorreo.trim()!="" && inputgenero.trim()!="" && inputturno.trim()!="" &&  inputcampus!=""  ){
        //agregar al alumno al arreglo
        ObjEstudiantes.push(nuevoalumno);
        limpiar();
    }
    else{
        alert("Hace falta información!!");
    }

    imprimirAlumnos(ObjEstudiantes);
    //P.S. ***agregar el evento onclick en el boton
}
function imprimirAlumnos(ObjArreglo) {

    console.log(ObjArreglo);

    let EStudiantes=ObjArreglo;
    let row ="";
    var alumnosTabla = document.getElementById("alumnosTabla");

    for (let i = 0; i < EStudiantes.length; i++) {
        let alumno = EStudiantes[i];

        console.log(EStudiantes[i]);
        let promedio = ((alumno.califA+alumno.califB+alumno.califC)/3);

        row+=`
                <tr id="${alumno.id}">
                <td> ${alumno.nombre}</td>
                <td> ${alumno.correo}</td>
                <td> ${alumno.turno}</td>
                <td> ${alumno.campus}</td>
                <td> ${alumno.califA}</td>
                <td> ${alumno.califB}</td>
                <td> ${alumno.califC}</td>
                <td>${promedio}</td>
                <td><button class="btn btn-danger btn-sm" 
                onclick= "borrarAlumno(${alumno.id});">Borrar</button></td> 
        </tr>
        `;
    }

    alumnosTabla.innerHTML=row;
}                                           


//Limpiar formulario
/* function limpiarform(){
    inputnombre.value="";
    inputcorreo.value="";
    inputturno.value="";
    inputgenero.value="";
    inputcampus.value="";
    inputcalifA.value="";
    inputcalifB.value="";
    inputcalifC.value="";

}*/

function limpiar(){
     document.getElementById("txtNombre").value="";
     document.getElementById("txtCorreo").value="";
     document.getElementById("txtTurno").value="";
     document.getElementById("txtGenero").value="";
     document.getElementById("SelCampus").value="";
     document.getElementById("numCalifA").value="";
     document.getElementById("numCalifB").value="";
     document.getElementById("numCalifC").value="";   
}

function borrarAlumno(identificador){
    document.getElementById(identificador).remove();    //borra de HTML 
    estudiantes.splice(identificador,1);  //borra del arreglo
}
  
//crear funcion init
function init(){
    //console.log("Register");
    //let alumno = new Estudiante("Mario","mariov15@gmail.com","M","Mexicali",80,90);
    //let alumno2=new Estudiante("Martin","martinnavarro@gmail.com", "M","Tijuana",95,80);
    //let alumno2 = new Estudiante("Pedro", "pedro@gmail.com","M","Mexicali",90,98)
    //console.log(alumno);
    //console.log(alumno2);
    //alumno.push();
    //console.log(ObjEstudiantes);
    imprimirAlumnos(ObjEstudiantes);
   //displayCards();
   

}

//ejecutar funcion init
window.onload = init; //ejecucion cuando renderiza el  HTML