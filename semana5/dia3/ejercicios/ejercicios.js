// crearemos nuestra funcion
//1 al 5
function callMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el numero de ejercicio que quiere ejecutar: \r\n 1. Suma. \r\n 2. Promedio de exmamenes \r\n 3. Calcular el area de un rectangulo \r\n 4. Calcular el area de un triangulo \r\n 5. Calcular el area de una circunferencia "
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("hey!! por fvor ingresa valores ");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

//5 al 10
function callMenu2() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el # de ejercicio que quiere ejecutar: \r\n 6. Determinar el sueldo semanal de un trabajador en base a sus hrs trabajadas \r\n 7. Cuantas pulgadas de tela necesitara la modista ? \r\n 8. Cambiar soles a dolares \r\n 9. Edad del personal en base al año en que nacieron \r\n 10. Se tiene el nombre y edad de un grupo de 3 personas, se desea saber el nombre de la persona menor de edad"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("hey!! por fvor ingresa valores ");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

//10 al 15
function callMenu3() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el # de ejercicio que quiere ejecutar: \r\n 11. Bono por antiguedad a los trabajadores \r\n 12. Incremento salarial del profesor \r\n 13. Algoritmo para leer las calificaciones de N alumnos y saber el numero de aprobados y desaprobados \r\n 14. Contabilizar el lote de focos, y de cada color (verde, blanco, rojo) \r\n 15. La persona puede votar segun su edad?"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("hey!! por fvor ingresa valores ");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar "));
      let valor2 = parseFloat(prompt("ingresa el valor 2 a sumar "));
      alert(ej1_sumarValores(valor1, valor2));
      break;
    case 2:
      let ex1 = parseFloat(prompt("ingresa nota 1"));
      let ex2 = parseFloat(prompt("ingresa nota 2"));
      let ex3 = parseFloat(prompt("ingresa nota 3"));
      let ex4 = parseFloat(prompt("ingresa nota 4"));
      alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4));
      break;
    case 3:
      let base_rect = parseFloat(prompt("ingrese base"));
      let altura_rect = parseFloat(prompt("ingrese altura"));
      alert(ej3_calcularAreaRectangulo(base_rect, altura_rect));
      break;
    case 4:
      let base_triang = parseFloat(prompt("ingrese base"));
      let altura_triang = parseFloat(prompt("ingrese altura"));
      alert(ej4_calcularAreaTriangulo(base_triang, altura_triang));
      break;
    case 5:
      let radio = parseFloat(prompt("ingrese el radio del circulo"));
      alert(ej5_calcularAreaCircunferencia(radio));
      break;
    case 6:
      let hrworked = parseFloat(prompt("ingresa HORAS TRABAJADAS"));
      let hrsueldo = parseFloat(prompt("ingresa SALARIO X HORA"));
      alert(ej6_SueldoSemanal(hrworked, hrsueldo));
      break;
    case 7:
      let metros = parseFloat(
        prompt("Ingrese la cantidad de metros a convertir a Pulgadas")
      );
      alert(ej7_calcularPulgadas(metros));
      break;
    case 8:
      let soles = parseFloat(prompt("ingresar cantidad de S/. a cambiar"));
      let tc = parseFloat(prompt("ingresar tipo de cambio "));
      alert(ej8_tcSolaDol(soles, tc));
      break;
    case 9:
      let userAge = parseFloat(prompt("Ingresa tu año de nacimiento"));
      alert(ej9_userAge(userAge));
      break;
    case 10:
      let nombre1 = parseFloat(prompt("Ingrese nombre 1"));
      let edad1 = parseFloat(prompt("ingrese edad 1"));
      let nombre2 = parseFloat(prompt("ingrese nombre 2"));
      let edad2 = parseFloat(prompt("ingrese edad 2"));
      let nombre3 = parseFloat(prompt("ingrese nombre 3"));
      let edad3 = parseFloat(prompt("ingrese edad 3"));

      const datos = [
        {
          nombre: nombre1,
          edad: edad1,
        },
        {
          nombre: nombre2,
          edad: edad2,
        },
        {
          nombre: nombre3,
          edad: edad3,
        },
      ];
      alert(ej10_calcMenor(datos));
      break;
    case 11:
      let years = parseFloat(prompt("Indique cuantos años es empleado"));
      alert(ej11_yearsBounty(years));
      break;
    case 12:
      result = ej12_salaryYears();
      break;
  }
}
// funciones por ejercicios
//1 SUMA
function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "porfavor ingresa valores ";
  } else {
    return "El resultado de la suma es: " + (a + b);
  }
}
//2 PROMEDIO
function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "porfavor ingresa las notas";
  } else {
    return "el promedio es: " + (ex1 + ex2 + ex3 + ex4) / 4;
  }
}
//3 AREA RECTANGULO
function ej3_calcularAreaRectangulo(base_rect, altura_rect) {
  if (isNaN(base_rect) || isNaN(altura_rect)) {
    return "ingresa datos";
  } else {
    return "el area del rectangulo es : " + base_rect * +altura_rect;
  }
}
//3 AREA TRIANGULO
function ej4_calcularAreaTriangulo(base_triang, altura_triang) {
  if (isNaN(base_triang) || isNaN(altura_triang)) {
    return "ingresa datos";
  } else {
    return "el area del triangulo es : " + (+base_triang * +altura_triang) / 2;
  }
}
//5 AREA DE CIRCULO
function ej5_calcularAreaCircunferencia(radio) {
  if (isNaN(radio)) {
    return "ingresa dato";
  } else {
    return (
      "el area del circulo es : " + (Math.pow(+radio, 2) * 3.1416).toFixed(2)
    );
  }
}
//6 SUELDO SEMANAL TRABAJADOR
function ej6_SueldoSemanal(hrworked, hrsueldo) {
  if (isNaN(hrworked) || isNaN(hrsueldo)) {
    return "ingresa datos";
  } else {
    return "el sueldo semanal del trabajador es: " + hrworked * hrsueldo;
  }
}
//7
function ej7_calcularPulgadas(metros) {
  if (isNaN(metros)) {
    return "ingresa dato";
  } else {
    return metros + " metros es: " + (metros / 0.0254).toFixed(2) + " pulgadas";
  }
}
//8
function ej8_tcSolaDol(soles, tc) {
  if (isNaN(soles) || isNaN(tc)) {
    return "ingresa datos";
  } else {
    return "S/. " + soles + " a dolares es: $ " + (soles / tc).toFixed(2);
  }
}
//9
function ej9_userAge(userAge) {
  if (isNaN(userAge)) {
    return "ingresa datos";
  } else {
    return "Si naciste en el año" + userAge + " tu edad es " + (2022 - userAge);
  }
}
//10
function ej10_calcMenor(datos) {
  let oknombre = datos.nombre;
  let okedad = datos[00].edad;
  for (let m = 0; m < datos.length; m++) {
    if (datos[m].edad < okedad) {
      oknombre = datos[m].nombre;
      okedad = datos[m].edad;
    }
  }
  return oknombre + " la edad menor es de " + okedad;
}
//11
function ej11_yearsBounty(years) {
  if (years);
  let bounty = 0;
  switch (years) {
    case 1:
      bounty = 100;
      break;
    case 2:
      bounty = 200;
      break;
    case 3:
      bounty = 300;
      break;
    case 4:
      bounty = 400;
      break;
    case 5:
      bounty = 500;
      break;
    default:
      bounty = 1000;
  }
  return "le corresponde $ " + bounty;
}
//12
function ej12_salaryYears() {
  let salaryYears = "";
  let salary = 1500;
  for (s=1; s<7; s++){
    salary= salary*1.1
    salaryYears = salaryYears + "\n el sueldo del año $(s) es:" + salaryYears

  }
  return salary;
}
