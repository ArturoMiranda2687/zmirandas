const menunav = document.querySelector('.menudenavegacion')
const cabecera = document.querySelector('.cabecera')
const bienvenida = document.querySelector('.bienvenida')
const saludos = document.querySelector('.saludos')
const footer = document.querySelector('footer')

menunav.innerHTML +=`<nav><ul> <li><a href="#inicio">Inicio</a></li>   <li><a href="#lenceria">Lenceria</a></li> <li><a href="#danza">Danza</a></li> <li><a href="#elastano">Deportiva</a></li>  <li><a href="">Pijamas</a></li>    <li><a href="#trajesdebaño">Traje de baño</a></li></ul></nav>`
cabecera.innerHTML += `<h1>Mir and Da</h1>`
footer.innerHTML += `<p>Mir & Da a tus órdenes</p><p>55245874 25</p>`


const titulo = document.createElement("h2")
const intro = document.createElement("p")

titulo.innerHTML += `<div id = "inicio"> Bienvenidos a nuestra tienda</div>`
intro.innerHTML += `Porfavor, visita cada una de nustras secciones para que conozas bien nuestros productos.`

saludos.appendChild(titulo)
saludos.appendChild(intro)