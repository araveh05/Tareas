
var precio_base = 2000;

var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

var obtenerRecargo = (edad) => {
  if (edad <= 24) {
    return precio_base * 0.1;
  }

  if (edad <= 49) {
    return precio_base * 0.2;
  }

  return precio_base * 0.3;
};

 var cotizacion = () => {
  const edad = parseInt(prompt('¿Ingrese su edad?'));

  if (edad < 18) {
    return alert('No tiene la edad suficiente');
  }

  let precio = 2000;
  let recargo = 0;

  recargo += obtenerRecargo(edad);

  const nombreAsegurado = prompt('¿Ingrese su Nombre?');

  const propiedades = prompt('¿Tiene propiedades?');

  if (propiedades.toLowerCase() == 'si') {
    const cantidadPropiedades = parseInt(prompt('¿Cuántas propiedades tiene?'));

    for (let contador = 1; contador <= cantidadPropiedades; contador++) {
      recargo += precio * 0.35;
    }
  }
  const empleo= prompt("Tiene empleo?")
  if(empleo.toLocaleLowerCase()=='si'){
  const sueldo = parseInt(prompt('¿Cuál es su salario?'));
  recargo += sueldo * 0.05;
}
  const pareja = prompt('¿Tiene Esposa/0?');

  if (pareja.toLowerCase() == 'si') {
    const edadPareja = parseInt(prompt('¿Cuál es la edad de su esposa/o?'));

    recargo += obtenerRecargo(edadPareja);
  }

  const hijos = prompt('¿Tiene hijos?');

  if (hijos.toLowerCase() == 'si') {
    const cantidadHijos = parseInt(prompt('¿Cuántos hijos tiene?'));

    for (let contador = 1; contador <= cantidadHijos; contador++) {
      recargo += precio * 0.2;
    }
  }

  const precioFianl = precio + recargo;

  alert(`${nombreAsegurado}, el precio final es: ${precioFianl}`);
};

let contadorWhile = 0;
while (true) {
  if (contadorWhile > 0) {
    const continuar = prompt('¿Desea hacer otra cotización?');

  }


  cotizacion();
  contadorWhile += 1;
}
