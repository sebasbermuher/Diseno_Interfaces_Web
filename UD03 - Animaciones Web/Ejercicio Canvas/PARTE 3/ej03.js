console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;

//-- Contador para contar los rebotes
let contador = 0;

//-- Funcion principal de animacion
function update() {
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

  //-- Condicion de rebote en extremos verticales del canvas
  if (x < 0 || x >= canvas.width - 20) {
    velx = -velx;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 0 || y > canvas.height - 20) {
    vely = -vely;
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
  ctx.rect(x, y, 20, 20);

  //-- Funcion para obtener el color aleatorio
  function colorAleatorio() {
    var simbolos = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //-- Dibujar y cambiar los colores
  if (y <= 0 || y > canvas.height - 20 || x < 0 || x >= canvas.width - 20) {
    ctx.fillStyle = colorAleatorio();
    contador++;

    //-- Cuando haya 5 rebotes la velocidad de x disminuye 2 valores.
    if (
      (velx < 0 && vely < 0) ||
      (velx > 0 && vely > 0) ||
      (velx < 0 && vely > 0) ||
      (velx < 0 && vely > 0)
    ) {
      if (contador == 5) {
        velx = velx - 2;
      }
    }
  }

  //-- Rellenar
  ctx.fill();

  //-- Dibujar el trazo
  ctx.stroke();
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();
