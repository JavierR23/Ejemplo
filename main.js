var nombre="Juanito";
var altura="150";
const carerra="Info";

/*alert(nombre);

console.log("Saludos desde la consola" + " " + nombre);*/

var conc = nombre + " " + altura;
document.write(conc);

var datos = document.getElementById("datos");

datos.innerHTML = conc;

if(altura>=170)
{
    datos.innerHTML = "Eres una persona alta"; 
}
else
{
    datos.innerHTML = "Eres una persona bajita";
}

for(var i=0; i<=2022; i++)
{
    console.log("Año: " + i);
    datos.innerHTML = datos.innerHTML+"<h1>Año: "+i+"</h1>"; 
}