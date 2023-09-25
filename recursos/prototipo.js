const menunav = document.querySelector('.menudenavegacion')
const cabecera = document.querySelector('.cabecera')
const footer = document.querySelector('footer')

menunav.innerHTML +=`<nav><ul> <li class="inactivo"><a href="./index.html">Inicio</a></li>   <li><a href="./lenceria.html">Lenceria</a></li> <li><a href="./danza.html">Danza</a></li> <li><a href="./elastano.html">Deportiva</a></li>  <li><a href="">Pijamas</a></li>    <li><a href="">Traje de baño</a></li></ul></nav>`
cabecera.innerHTML += `<h1>Mir and Da</h1>`
footer.innerHTML += `<p>Mir & Da a tus órdenes</p><p>55245874 25</p>`



//function isObject(subject) {
//    return typeof subject == "object";
//  }
//  
//  function isArray(subject) {
//    return Array.isArray(subject);
//  }
  
class Producto{
   constructor({
       modelo,
       talla,
       tela,
       color,
       descripcion,
       imagen,
       imagen2,
       imagen3,
       imagen4,
       imagen5,
       esDanza,
       esLenceria,
       esDeportiva,
   }){
       this.modelo= modelo,
       this.talla=talla,
       this.tela= tela,
       this.color = color,
       this.descripcion= descripcion,
       this.imagen=imagen,
       this.imagen2 = imagen2,
       this.imagen3 = imagen3,
       this.imagen4 = imagen4,
       this.imagen5 = imagen5,
       this.esDanza= esDanza,
       this.esLenceria=esLenceria,
       this.esDeportiva = esDeportiva
   }
}
