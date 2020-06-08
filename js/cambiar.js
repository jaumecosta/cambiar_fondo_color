
var dia = new Date();
var dia_semana = dia.getDate();

switch (dia){
   case 0:
       document.write("Hoy es Lunes");
       break;
   case 1:
       document.write("Hoy es Martes");
       break;
    case 2:
       document.write("Hoy es Miercoles");
       break;
    case 3:
       document.write("Hoy es Jueves");
       break;
    case 4:
       document.write("Hoy es Viernes");
       break;
    case 5:
        document.write("Hoy es S");
        break;
    case 6:
       document.write("Hoy es Martes");
       break;
          


    
}


document.write(
    `Dia: ${d.getDate()}, <br>Dia de la semana(0 al 6): ${d.getDay
        ()}, Mes(0 - 11) ${d.getMonth()}, <br>Hora: ${d.getFullYear()}, <br>Hora: ${d.getHours()}, <br>Minutos: ${d.getMinutes()}, <br> ${d.getSeconds()}`
)

var fecharHora = new Date();
var mes = fecharHora.getMonth() + 1;

var dia = fechaHora.getDate();
fecharHora.getDate();
var mes = m < 10 ? "0" + m : n;

document.write(`FECHA: ${dia}/${mes}/${fecharHora.getFullYear()}`);
