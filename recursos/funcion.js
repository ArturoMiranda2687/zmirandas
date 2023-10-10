const menunav = document.querySelector('.menudenavegacion')
const cabecera = document.querySelector('.cabecera')
const bienvenida = document.querySelector('.bienvenida')
const footer = document.querySelector('footer')

menunav.innerHTML +=`<nav><ul> <li class="inactivo"><a href="./index.html">Inicio</a></li>   <li><a href="./lenceria.html">Lenceria</a></li> <li><a href="./danza.html">Danza</a></li> <li><a href="./elastano.html">Deportiva</a></li>  <li><a href="">Pijamas</a></li>    <li><a href="./trajesBaño.html">Traje de baño</a></li></ul></nav>`
cabecera.innerHTML += `<h1>Mir and Da</h1>`
bienvenida.innerHTML = `<h2>Bienvenidos a nuestra tienda</h2><p>Esperamos que tengas muchos modelos que elegir y los puedas catalogar según tus gustos</p>`
footer.innerHTML += `<p>Mir & Da a tus órdenes</p><p>55245874 25</p>`