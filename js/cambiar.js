

function dia(){

//El switch recoje los dias de la semana 
switch (new Date().getDay() ) {
    //Si es lunes imprimira la siguiente informacion
   case 1:
       document.write("Hoy es Lunes comunista");
       document.body.style.backgroundColor = "red";
       break;
           //Si es martes imprimira la siguiente informacion
   case 2:
        document.write("Hoy es Martes espacial");
        document.body.style.backgroundColor = "blue";
        break;
    //Si es miercoles imprimira la siguiente informacion
    case 3:
        document.write("Hoy es Miercoles de linterna verde");
        document.body.style.backgroundColor = "green";
        break;
        //Si es jueves imprimira la siguiente informacion

        case 4:
        document.write("Hoy es Jueves amarillo como el solo");
        document.body.style.backgroundColor = "yellow";

        break;
      //Si es viernes imprimira la siguiente informacion

        case 5:
        document.write("Hoy es Black Friday");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        break;
        //Si es sabado imprimira la siguiente informacion

        case 6:
        document.write("Hoy es Sabado gris");
        document.body.style.backgroundColor = "grey";

        break;
     //Si es domingo imprimira la siguiente informacion

        case 7:
        document.write("Hoy es Domingo blanco");
        document.body.style.backgroundColor = "blacno";
        document.body.style.color = "black";

        break;
      //Si hay error imprimira lo siguiente
      default:
          document.write("No hay nada");
        
}

}

dia();


