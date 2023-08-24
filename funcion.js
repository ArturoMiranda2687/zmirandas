const menunav = document.querySelector('.menudenavegacion')
const cabecera = document.querySelector('.cabecera')
const prodcata = document.querySelector('.catalogo')
const prodcatal = document.querySelector('.catalogol')
const prodcatadanza = document.querySelector('.catalogodanza')
const footer = document.querySelector('footer')


menunav.innerHTML +=`<nav><ul>    <li><a href="./lenceria.html">Lenceria</a></li> <li><a href="./danza.html">Danza</a></li>   <li>Pijamas</li>    <li>Conjuntos</li></ul></nav>`
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
       esDanza,
       esLenceria,
   }){
       this.modelo= modelo,
       this.talla=talla,
       this.tela= tela,
       this.color = color,
       this.descripcion= descripcion,
       this.imagen=imagen,
       this.imagen2 = imagen2,
       this.esDanza= esDanza,
       this.esLenceria=esLenceria
   }
}

class Danza extends Producto{
    constructor(props){
        super(props)
    }
    tipoprenda(estiloprenda){
        if(estiloprenda.esDanza){
            this.tipo.push(estiloprenda)
        }
    }
}

class Lenceria extends Producto{
    constructor(props){
        super(props)
    }
    tipoprenda(estiloprenda){
        if(estiloprenda.esLenceria){
            this.tipo.push(estiloprenda)
        }
    }
}

class Deportiva extends Producto{
    constructor(props){
        super(props)
    }
}

const lence1 = new Lenceria({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"https://pbs.twimg.com/media/EIUk1YzX0AA25qE.jpg",
})
const m001 = new Producto({
    modelo:"M001",
    talla:"L|M|S",
    tela:"Lycra",
    descripcion:"Prenda súper cómoda y acogedora",
    imagen:"https://pbs.twimg.com/media/FJPm9lWXEAUxHbO?format=jpg&name=large",
})
const m002 = new Producto({
    modelo:"M002",
    talla:"L|M|S",
    tela:"Lycra",
    descripcion:"Todo más relax",
    imagen:"https://pbs.twimg.com/media/ESzCc59VAAEjycZ?format=jpg&name=large",
})
 const m003 = new Producto({
    modelo:"M003",
    talla:"L|M|S",
    tela:"Blonda",
    descripcion:"A ver que onda pasa cuando metemos más",
    imagen:"https://pbs.twimg.com/media/ECQ8ipfX4AICwcb.jpg:large",
    imagen2:"https://pbs.twimg.com/media/F2f37jWXcAMmd9p?format=jpg&name=large"
})
const m004 = new Producto({
    modelo:"este es len",
    talla:"L|M|S",
    tela:"Blonda",
    descripcion:"A ver que onda pasa cuando metemos más",
    imagen:"https://pbs.twimg.com/media/F2f37jWXcAMmd9p?format=jpg&name=large",
})
const m005 = new Producto({
    modelo:"M005",
    talla:"L|M|S",
    tela:"Blonda",
    descripcion:"A ver que onda pasa cuando metemos más",
    imagen:"https://pbs.twimg.com/media/F2f37jWXcAMmd9p?format=jpg&name=large",
})


const danza1 = new Danza({
    modelo: "Rosa",
    talla:"L | M | S",
    tela:"Lycra",
    color:"Rosa",
    descripcion:"Este body está diseñado con un aspecto conservador, pero funcional para resaltar la figura del cuerpo mientras haces tu entrenamiento o montaje. Apto para los largos tiempos de ensayo. Sin mangas",
    imagen:"./media/prendas/baile/bl1.png",
    imagen2:"",
    esDanza:"true",
    esLenceria:"",
})
const danza2 = new Danza({
    modelo: "Alexa",
    talla:"L | M | S",
    tela:"Lycra | Mesh",
    color:"Negro | Verde",
    descripcion:"Idoneo para presentaciones, cuenta con cobertura de brazos completa y pedrería",
    imagen:"./media/prendas/baile/bl2.png",
    imagen2:"",
    esDanza:"true",
    esLenceria:"",
})
const danza3 = new Danza({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/baile/bl3.png",
    imagen2:"",
    esDanza:"true",
    esLenceria:"",
})
const danza4 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl4.jpg",
})
const danza5 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl5.jpg",
})
const danza6 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl6.jpg",
})
const danza7 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl7.jpg",
})
const danza8 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl8.png",
})
const danza9 = new Danza({
    modelo:"Algunas cuantas",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl9.png",
})
const danza10 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl10.jpg",
})
const danza11 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl11.jpg",
})
const danza12 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl12.jpg",
})
const danza13 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl13.jpg",
})
const danza14 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl14.jpg",
})
const danza15 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl15.jpg",
})
const danza16 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl16.jpg",
})
const danza17 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl17.jpg",
})
const danza18 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl18.jpg",
})
const danza19 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl19.jpg",
})
const danza20 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl20.jpg",
})
const danza21 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl21.jpg",
})
const danza22 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl22.jpg",
})
const danza23 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl23.jpg",
})
const danza24 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl24.jpg",
})
const danza25 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl25.png",
})
const danza26 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl26.jpg",
})
const danza27 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl27.jpg",
})
const danza28 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl28.jpg",
})


prodcatal.innerHTML += `<h4>${m001.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m001.imagen}" alt=""></div><p>Tallas disponibles: ${m001.talla}</p><p>Tela: ${m001.tela}</p><p>${m001.descripcion}</p>`
 prodcata.innerHTML += `<h4>${m002.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m002.imagen}" alt=""></div><p>Tallas disponibles: ${m002.talla}</p><p>Tela: ${m002.tela}</p><p>${m002.descripcion}</p>`
 prodcata.innerHTML += `<h4>${m003.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m003.imagen}" alt=""></div><p>Tallas disponibles: ${m003.talla}</p><p>Tela: ${m003.tela}</p><p>${m003.descripcion}</p>`
 prodcata.innerHTML += `<h4>${m004.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m004.imagen}" alt=""></div><p>Tallas disponibles: ${m004.talla}</p><p>Tela: ${m004.tela}</p><p>${m004.descripcion}</p>`
 prodcata.innerHTML += `<h4>${lence1.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence1.imagen}" alt=""></div><p>Tallas disponibles: ${lence1.talla}</p><p>Tela: ${lence1.tela}</p><p>${lence1.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>${danza1.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza1.imagen}" alt=""></div><p>Tallas disponibles: ${danza1.talla}</p><p>Tela: ${danza1.tela}</p><p>${danza1.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza2.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza2.imagen}" alt=""></div><p>Tallas disponibles: ${danza2.talla}</p><p>Tela: ${danza2.tela}</p><p>${danza2.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza3.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza3.imagen}" alt=""></div><p>Tallas disponibles: ${danza3.talla}</p><p>Tela: ${danza3.tela}</p><p>${danza3.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza4.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza4.imagen}" alt=""></div><p>Tallas disponibles: ${danza4.talla}</p><p>Tela: ${danza4.tela}</p><p>${danza4.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza5.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza5.imagen}" alt=""></div><p>Tallas disponibles: ${danza5.talla}</p><p>Tela: ${danza5.tela}</p><p>${danza5.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza6.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza6.imagen}" alt=""></div><p>Tallas disponibles: ${danza6.talla}</p><p>Tela: ${danza6.tela}</p><p>${danza6.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza7.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza7.imagen}" alt=""></div><p>Tallas disponibles: ${danza7.talla}</p><p>Tela: ${danza7.tela}</p><p>${danza7.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza8.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza8.imagen}" alt=""></div><p>Tallas disponibles: ${danza8.talla}</p><p>Tela: ${danza8.tela}</p><p>${danza8.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza9.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza9.imagen}" alt=""></div><p>Tallas disponibles: ${danza9.talla}</p><p>Tela: ${danza9.tela}</p><p>${danza9.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza10.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza10.imagen}" alt=""></div><p>Tallas disponibles: ${danza10.talla}</p><p>Tela: ${danza10.tela}</p><p>${danza10.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza11.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza11.imagen}" alt=""></div><p>Tallas disponibles: ${danza11.talla}</p><p>Tela: ${danza11.tela}</p><p>${danza11.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza12.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza12.imagen}" alt=""></div><p>Tallas disponibles: ${danza12.talla}</p><p>Tela: ${danza12.tela}</p><p>${danza12.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza13.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza13.imagen}" alt=""></div><p>Tallas disponibles: ${danza13.talla}</p><p>Tela: ${danza13.tela}</p><p>${danza13.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza14.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza14.imagen}" alt=""></div><p>Tallas disponibles: ${danza14.talla}</p><p>Tela: ${danza14.tela}</p><p>${danza14.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza15.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza15.imagen}" alt=""></div><p>Tallas disponibles: ${danza15.talla}</p><p>Tela: ${danza15.tela}</p><p>${danza15.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza16.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza16.imagen}" alt=""></div><p>Tallas disponibles: ${danza16.talla}</p><p>Tela: ${danza16.tela}</p><p>${danza16.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza17.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza17.imagen}" alt=""></div><p>Tallas disponibles: ${danza17.talla}</p><p>Tela: ${danza17.tela}</p><p>${danza17.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza18.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza18.imagen}" alt=""></div><p>Tallas disponibles: ${danza18.talla}</p><p>Tela: ${danza18.tela}</p><p>${danza18.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza19.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza19.imagen}" alt=""></div><p>Tallas disponibles: ${danza19.talla}</p><p>Tela: ${danza19.tela}</p><p>${danza19.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza20.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza20.imagen}" alt=""></div><p>Tallas disponibles: ${danza20.talla}</p><p>Tela: ${danza20.tela}</p><p>${danza20.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza21.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza21.imagen}" alt=""></div><p>Tallas disponibles: ${danza21.talla}</p><p>Tela: ${danza21.tela}</p><p>${danza21.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza22.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza22.imagen}" alt=""></div><p>Tallas disponibles: ${danza22.talla}</p><p>Tela: ${danza22.tela}</p><p>${danza22.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza23.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza23.imagen}" alt=""></div><p>Tallas disponibles: ${danza23.talla}</p><p>Tela: ${danza23.tela}</p><p>${danza23.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza24.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza24.imagen}" alt=""></div><p>Tallas disponibles: ${danza24.talla}</p><p>Tela: ${danza24.tela}</p><p>${danza24.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza25.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza25.imagen}" alt=""></div><p>Tallas disponibles: ${danza25.talla}</p><p>Tela: ${danza25.tela}</p><p>${danza25.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza26.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza26.imagen}" alt=""></div><p>Tallas disponibles: ${danza26.talla}</p><p>Tela: ${danza26.tela}</p><p>${danza26.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza27.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza27.imagen}" alt=""></div><p>Tallas disponibles: ${danza27.talla}</p><p>Tela: ${danza27.tela}</p><p>${danza27.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>${danza28.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${danza28.imagen}" alt=""></div><p>Tallas disponibles: ${danza28.talla}</p><p>Tela: ${danza28.tela}</p><p>${danza28.descripcion}</p>`

