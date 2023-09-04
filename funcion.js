const menunav = document.querySelector('.menudenavegacion')
const cabecera = document.querySelector('.cabecera')
const prodcata = document.querySelector('.catalogo')
const prodcatal = document.querySelector('.catalogol')
const prodcatadanza = document.querySelector('.catalogodanza')
const prodcatelas = document.querySelector('.catalogoelas')
const footer = document.querySelector('footer')


menunav.innerHTML +=`<nav><ul>    <li><a href="./lenceria.html">Lenceria</a></li> <li><a href="./danza.html">Danza</a></li> <li><a href="./elastano.html">Deportiva</a></li>  <li>Pijamas</li>    <li>Conjuntos</li></ul></nav>`
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
       esDeportiva,
   }){
       this.modelo= modelo,
       this.talla=talla,
       this.tela= tela,
       this.color = color,
       this.descripcion= descripcion,
       this.imagen=imagen,
       this.imagen2 = imagen2,
       this.esDanza= esDanza,
       this.esLenceria=esLenceria,
       this.esDeportiva = esDeportiva
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



const lence1 = new Lenceria({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"https://pbs.twimg.com/media/EIUk1YzX0AA25qE.jpg",
})
const lence2 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence3 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c1.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence4 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c2.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence5 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c3.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence6 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c4.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence7 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c5.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence8 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c6.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence9 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c7.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence10 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c8.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence11 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c9.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence12 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c10.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence13 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c11.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence14 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c12.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence15 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c13.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence16 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c14.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence17 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c15.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence18 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c16.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence19 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c17.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence20 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c18.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence21 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c19.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence22 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c20.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence23 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c21.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence24 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c22.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence25 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c23.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence26 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c24.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence27 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c25.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence28 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c26.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence29 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c27.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence30 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c28.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence31 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c29.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence32 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c30.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence33 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c31.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence34 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c32.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence35 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c33.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence36 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c34.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence37 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c35.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence38 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c36.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence39 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c37.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence40 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c38.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence41 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c39.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence42 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c40.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence43 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c41.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence44 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c42.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence45 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c43.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence46 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c44.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence47 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c45.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence48 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c46.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence49 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c47.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence50 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c48.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence51 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c49.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence52 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c50.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence53 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c51.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence54 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c52.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence55 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c53.jpg",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence56 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c54.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence57 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c55.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence58 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c56.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence59 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c57.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence60 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c58.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence61 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c59.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence62 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c60.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence63 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c61.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence64 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c62.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence65 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c63.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence66 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c64.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence67 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c65.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence68 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c66.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence69 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c67.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence70 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c68.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence71 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c69.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence72 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c70.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence73 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c71.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence74 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c72.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence75 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c73.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence76 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c74.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence77 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c75.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence78 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c76.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence79 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c77.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence80 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c78.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence81 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c79.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence82 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c80.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence83 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c81.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence84 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c82.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence85 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c83.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence86 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c84.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence87 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c85.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence88 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c86.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence89 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c87.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence90 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c88.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence91 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c89.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence92 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c90.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence93 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c91.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence94 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c92.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
})
const lence95 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c93.png",
    imagen2:"",
    esDanza:false,
    esLenceria:true,
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
    imagen:"./media/prendas/baile/bl22.png",
})
const danza23 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl23.png",
})
const danza24 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl24.png",
})
const danza25 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl25.png",
})
const danza26 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl26.png",
})
const danza27 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl27.png",
})
const danza28 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl28.png",
})






const elas1 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e.jpg",
    imagen2:"",
    esDeportiva: "true",
})
const elas2 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e1.jpg",
    imagen2:"",
    esDeportiva: "true",
})
const elas3 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e2.jpg",
    imagen2:"",
    esDeportiva: "true",
})
const elas4 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e3.png",
    imagen2:"",
    esDeportiva: "true",
})
const elas5 = new Deportiva({
    modelo: "e4jpg",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e4.jpg",
    imagen2:"",
    esDeportiva: "true",
})
const elas6 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e5.png",
    imagen2:"",
    esDeportiva: "true",
})
const elas7 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e6.png",
    imagen2:"",
    esDeportiva: "true",
})
const elas8 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e7.jpg",
    imagen2:"",
    esDeportiva: "true",
})
const elas9 = new Deportiva({
    modelo: "",
    talla:"L | M | S",
    tela:"Elastano",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/elastano/e8.jpg",
    imagen2:"",
    esDeportiva: "true",
})
const elas10 = new Deportiva({
    modelo: "",
    talla:"L | M | S",
    tela:"Elastano",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/elastano/e9.png.jpg",
    imagen2:"",
    esDeportiva: "true",
})
////const elas7 = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (7).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas8 = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (8).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})
////const elas = new Deportiva({
////    modelo: "Greta",
////    talla:"L | M | S",
////    tela:"Lycra | Algodón",
////    color:"Negro | Turqueza",
////    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
////    imagen:"./media/prendas/elastano/e (2).png",
////    imagen2:"",
////    esDeportiva: "true",
////})



 prodcata.innerHTML += `<h4>${m002.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m002.imagen}" alt=""></div><p>Tallas disponibles: ${m002.talla}</p><p>Tela: ${m002.tela}</p><p>${m002.descripcion}</p>`
 prodcata.innerHTML += `<h4>${m003.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m003.imagen}" alt=""></div><p>Tallas disponibles: ${m003.talla}</p><p>Tela: ${m003.tela}</p><p>${m003.descripcion}</p>`
 prodcata.innerHTML += `<h4>${m004.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${m004.imagen}" alt=""></div><p>Tallas disponibles: ${m004.talla}</p><p>Tela: ${m004.tela}</p><p>${m004.descripcion}</p>`
 prodcata.innerHTML += `<h4>${lence1.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence1.imagen}" alt=""></div><p>Tallas disponibles: ${lence1.talla}</p><p>Tela: ${lence1.tela}</p><p>${lence1.descripcion}</p>`


prodcatal.innerHTML += `<h4>${lence1.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence1.imagen}" alt=""></div><p>Tallas disponibles: ${lence1.talla}</p><p>Tela: ${lence1.tela}</p><p>${lence1.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence2.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence2.imagen}" alt=""></div><p>Tallas disponibles: ${lence2.talla}</p><p>Tela: ${lence2.tela}</p><p>${lence2.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence3.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence3.imagen}" alt=""></div><p>Tallas disponibles: ${lence3.talla}</p><p>Tela: ${lence3.tela}</p><p>${lence3.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence4.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence4.imagen}" alt=""></div><p>Tallas disponibles: ${lence4.talla}</p><p>Tela: ${lence4.tela}</p><p>${lence4.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence5.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence5.imagen}" alt=""></div><p>Tallas disponibles: ${lence5.talla}</p><p>Tela: ${lence5.tela}</p><p>${lence5.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence6.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence6.imagen}" alt=""></div><p>Tallas disponibles: ${lence6.talla}</p><p>Tela: ${lence6.tela}</p><p>${lence6.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence7.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence7.imagen}" alt=""></div><p>Tallas disponibles: ${lence7.talla}</p><p>Tela: ${lence7.tela}</p><p>${lence7.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence8.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence8.imagen}" alt=""></div><p>Tallas disponibles: ${lence8.talla}</p><p>Tela: ${lence8.tela}</p><p>${lence8.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence9.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence9.imagen}" alt=""></div><p>Tallas disponibles: ${lence9.talla}</p><p>Tela: ${lence9.tela}</p><p>${lence9.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence10.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence10.imagen}" alt=""></div><p>Tallas disponibles: ${lence10.talla}</p><p>Tela: ${lence10.tela}</p><p>${lence10.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence11.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence11.imagen}" alt=""></div><p>Tallas disponibles: ${lence11.talla}</p><p>Tela: ${lence11.tela}</p><p>${lence11.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence12.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence12.imagen}" alt=""></div><p>Tallas disponibles: ${lence12.talla}</p><p>Tela: ${lence12.tela}</p><p>${lence12.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence13.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence13.imagen}" alt=""></div><p>Tallas disponibles: ${lence13.talla}</p><p>Tela: ${lence13.tela}</p><p>${lence13.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence14.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence14.imagen}" alt=""></div><p>Tallas disponibles: ${lence14.talla}</p><p>Tela: ${lence14.tela}</p><p>${lence14.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence15.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence15.imagen}" alt=""></div><p>Tallas disponibles: ${lence15.talla}</p><p>Tela: ${lence15.tela}</p><p>${lence15.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence16.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence16.imagen}" alt=""></div><p>Tallas disponibles: ${lence16.talla}</p><p>Tela: ${lence16.tela}</p><p>${lence16.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence17.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence17.imagen}" alt=""></div><p>Tallas disponibles: ${lence17.talla}</p><p>Tela: ${lence17.tela}</p><p>${lence17.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence18.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence18.imagen}" alt=""></div><p>Tallas disponibles: ${lence18.talla}</p><p>Tela: ${lence18.tela}</p><p>${lence18.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence19.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence19.imagen}" alt=""></div><p>Tallas disponibles: ${lence19.talla}</p><p>Tela: ${lence19.tela}</p><p>${lence19.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence20.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence20.imagen}" alt=""></div><p>Tallas disponibles: ${lence20.talla}</p><p>Tela: ${lence20.tela}</p><p>${lence20.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence21.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence21.imagen}" alt=""></div><p>Tallas disponibles: ${lence21.talla}</p><p>Tela: ${lence21.tela}</p><p>${lence21.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence22.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence22.imagen}" alt=""></div><p>Tallas disponibles: ${lence22.talla}</p><p>Tela: ${lence22.tela}</p><p>${lence22.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence23.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence23.imagen}" alt=""></div><p>Tallas disponibles: ${lence23.talla}</p><p>Tela: ${lence23.tela}</p><p>${lence23.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence24.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence24.imagen}" alt=""></div><p>Tallas disponibles: ${lence24.talla}</p><p>Tela: ${lence24.tela}</p><p>${lence24.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence25.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence25.imagen}" alt=""></div><p>Tallas disponibles: ${lence25.talla}</p><p>Tela: ${lence25.tela}</p><p>${lence25.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence26.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence26.imagen}" alt=""></div><p>Tallas disponibles: ${lence26.talla}</p><p>Tela: ${lence26.tela}</p><p>${lence26.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence27.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence27.imagen}" alt=""></div><p>Tallas disponibles: ${lence27.talla}</p><p>Tela: ${lence27.tela}</p><p>${lence27.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence28.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence28.imagen}" alt=""></div><p>Tallas disponibles: ${lence28.talla}</p><p>Tela: ${lence28.tela}</p><p>${lence28.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence29.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence29.imagen}" alt=""></div><p>Tallas disponibles: ${lence29.talla}</p><p>Tela: ${lence29.tela}</p><p>${lence29.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence30.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence30.imagen}" alt=""></div><p>Tallas disponibles: ${lence30.talla}</p><p>Tela: ${lence30.tela}</p><p>${lence30.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence31.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence31.imagen}" alt=""></div><p>Tallas disponibles: ${lence31.talla}</p><p>Tela: ${lence31.tela}</p><p>${lence31.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence32.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence32.imagen}" alt=""></div><p>Tallas disponibles: ${lence32.talla}</p><p>Tela: ${lence32.tela}</p><p>${lence32.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence33.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence33.imagen}" alt=""></div><p>Tallas disponibles: ${lence33.talla}</p><p>Tela: ${lence33.tela}</p><p>${lence33.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence34.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence34.imagen}" alt=""></div><p>Tallas disponibles: ${lence34.talla}</p><p>Tela: ${lence34.tela}</p><p>${lence34.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence35.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence35.imagen}" alt=""></div><p>Tallas disponibles: ${lence35.talla}</p><p>Tela: ${lence35.tela}</p><p>${lence35.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence36.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence36.imagen}" alt=""></div><p>Tallas disponibles: ${lence36.talla}</p><p>Tela: ${lence36.tela}</p><p>${lence36.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence37.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence37.imagen}" alt=""></div><p>Tallas disponibles: ${lence37.talla}</p><p>Tela: ${lence37.tela}</p><p>${lence37.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence38.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence38.imagen}" alt=""></div><p>Tallas disponibles: ${lence38.talla}</p><p>Tela: ${lence38.tela}</p><p>${lence38.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence39.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence39.imagen}" alt=""></div><p>Tallas disponibles: ${lence39.talla}</p><p>Tela: ${lence39.tela}</p><p>${lence39.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence40.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence40.imagen}" alt=""></div><p>Tallas disponibles: ${lence40.talla}</p><p>Tela: ${lence40.tela}</p><p>${lence40.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence41.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence41.imagen}" alt=""></div><p>Tallas disponibles: ${lence41.talla}</p><p>Tela: ${lence41.tela}</p><p>${lence41.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence42.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence42.imagen}" alt=""></div><p>Tallas disponibles: ${lence42.talla}</p><p>Tela: ${lence42.tela}</p><p>${lence42.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence43.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence43.imagen}" alt=""></div><p>Tallas disponibles: ${lence43.talla}</p><p>Tela: ${lence43.tela}</p><p>${lence43.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence44.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence44.imagen}" alt=""></div><p>Tallas disponibles: ${lence44.talla}</p><p>Tela: ${lence44.tela}</p><p>${lence44.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence45.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence45.imagen}" alt=""></div><p>Tallas disponibles: ${lence45.talla}</p><p>Tela: ${lence45.tela}</p><p>${lence45.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence46.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence46.imagen}" alt=""></div><p>Tallas disponibles: ${lence46.talla}</p><p>Tela: ${lence46.tela}</p><p>${lence46.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence47.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence47.imagen}" alt=""></div><p>Tallas disponibles: ${lence47.talla}</p><p>Tela: ${lence47.tela}</p><p>${lence47.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence48.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence48.imagen}" alt=""></div><p>Tallas disponibles: ${lence48.talla}</p><p>Tela: ${lence48.tela}</p><p>${lence48.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence49.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence49.imagen}" alt=""></div><p>Tallas disponibles: ${lence49.talla}</p><p>Tela: ${lence49.tela}</p><p>${lence49.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence50.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence50.imagen}" alt=""></div><p>Tallas disponibles: ${lence50.talla}</p><p>Tela: ${lence50.tela}</p><p>${lence50.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence51.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence51.imagen}" alt=""></div><p>Tallas disponibles: ${lence51.talla}</p><p>Tela: ${lence51.tela}</p><p>${lence51.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence52.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence52.imagen}" alt=""></div><p>Tallas disponibles: ${lence52.talla}</p><p>Tela: ${lence52.tela}</p><p>${lence52.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence53.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence53.imagen}" alt=""></div><p>Tallas disponibles: ${lence53.talla}</p><p>Tela: ${lence53.tela}</p><p>${lence53.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence54.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence54.imagen}" alt=""></div><p>Tallas disponibles: ${lence54.talla}</p><p>Tela: ${lence54.tela}</p><p>${lence54.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence55.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence55.imagen}" alt=""></div><p>Tallas disponibles: ${lence55.talla}</p><p>Tela: ${lence55.tela}</p><p>${lence55.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence56.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence56.imagen}" alt=""></div><p>Tallas disponibles: ${lence56.talla}</p><p>Tela: ${lence56.tela}</p><p>${lence56.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence57.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence57.imagen}" alt=""></div><p>Tallas disponibles: ${lence57.talla}</p><p>Tela: ${lence57.tela}</p><p>${lence57.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence58.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence58.imagen}" alt=""></div><p>Tallas disponibles: ${lence58.talla}</p><p>Tela: ${lence58.tela}</p><p>${lence58.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence59.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence59.imagen}" alt=""></div><p>Tallas disponibles: ${lence59.talla}</p><p>Tela: ${lence59.tela}</p><p>${lence59.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence60.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence60.imagen}" alt=""></div><p>Tallas disponibles: ${lence60.talla}</p><p>Tela: ${lence60.tela}</p><p>${lence60.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence61.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence61.imagen}" alt=""></div><p>Tallas disponibles: ${lence61.talla}</p><p>Tela: ${lence61.tela}</p><p>${lence61.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence62.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence62.imagen}" alt=""></div><p>Tallas disponibles: ${lence62.talla}</p><p>Tela: ${lence62.tela}</p><p>${lence62.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence63.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence63.imagen}" alt=""></div><p>Tallas disponibles: ${lence63.talla}</p><p>Tela: ${lence63.tela}</p><p>${lence63.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence64.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence64.imagen}" alt=""></div><p>Tallas disponibles: ${lence64.talla}</p><p>Tela: ${lence64.tela}</p><p>${lence64.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence65.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence65.imagen}" alt=""></div><p>Tallas disponibles: ${lence65.talla}</p><p>Tela: ${lence65.tela}</p><p>${lence65.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence66.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence66.imagen}" alt=""></div><p>Tallas disponibles: ${lence66.talla}</p><p>Tela: ${lence66.tela}</p><p>${lence66.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence67.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence67.imagen}" alt=""></div><p>Tallas disponibles: ${lence67.talla}</p><p>Tela: ${lence67.tela}</p><p>${lence67.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence68.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence68.imagen}" alt=""></div><p>Tallas disponibles: ${lence68.talla}</p><p>Tela: ${lence68.tela}</p><p>${lence68.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence69.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence69.imagen}" alt=""></div><p>Tallas disponibles: ${lence69.talla}</p><p>Tela: ${lence69.tela}</p><p>${lence69.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence70.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence70.imagen}" alt=""></div><p>Tallas disponibles: ${lence70.talla}</p><p>Tela: ${lence70.tela}</p><p>${lence70.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence71.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence71.imagen}" alt=""></div><p>Tallas disponibles: ${lence71.talla}</p><p>Tela: ${lence71.tela}</p><p>${lence71.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence72.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence72.imagen}" alt=""></div><p>Tallas disponibles: ${lence72.talla}</p><p>Tela: ${lence72.tela}</p><p>${lence72.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence73.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence73.imagen}" alt=""></div><p>Tallas disponibles: ${lence73.talla}</p><p>Tela: ${lence73.tela}</p><p>${lence73.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence74.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence74.imagen}" alt=""></div><p>Tallas disponibles: ${lence74.talla}</p><p>Tela: ${lence74.tela}</p><p>${lence74.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence75.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence75.imagen}" alt=""></div><p>Tallas disponibles: ${lence75.talla}</p><p>Tela: ${lence75.tela}</p><p>${lence75.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence76.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence76.imagen}" alt=""></div><p>Tallas disponibles: ${lence76.talla}</p><p>Tela: ${lence76.tela}</p><p>${lence76.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence77.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence77.imagen}" alt=""></div><p>Tallas disponibles: ${lence77.talla}</p><p>Tela: ${lence77.tela}</p><p>${lence77.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence78.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence78.imagen}" alt=""></div><p>Tallas disponibles: ${lence78.talla}</p><p>Tela: ${lence78.tela}</p><p>${lence78.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence79.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence79.imagen}" alt=""></div><p>Tallas disponibles: ${lence79.talla}</p><p>Tela: ${lence79.tela}</p><p>${lence79.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence80.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence80.imagen}" alt=""></div><p>Tallas disponibles: ${lence80.talla}</p><p>Tela: ${lence80.tela}</p><p>${lence80.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence81.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence81.imagen}" alt=""></div><p>Tallas disponibles: ${lence81.talla}</p><p>Tela: ${lence81.tela}</p><p>${lence81.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence82.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence82.imagen}" alt=""></div><p>Tallas disponibles: ${lence82.talla}</p><p>Tela: ${lence82.tela}</p><p>${lence82.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence83.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence83.imagen}" alt=""></div><p>Tallas disponibles: ${lence83.talla}</p><p>Tela: ${lence83.tela}</p><p>${lence83.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence84.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence84.imagen}" alt=""></div><p>Tallas disponibles: ${lence84.talla}</p><p>Tela: ${lence84.tela}</p><p>${lence84.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence85.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence85.imagen}" alt=""></div><p>Tallas disponibles: ${lence85.talla}</p><p>Tela: ${lence85.tela}</p><p>${lence85.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence86.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence86.imagen}" alt=""></div><p>Tallas disponibles: ${lence86.talla}</p><p>Tela: ${lence86.tela}</p><p>${lence86.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence87.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence87.imagen}" alt=""></div><p>Tallas disponibles: ${lence87.talla}</p><p>Tela: ${lence87.tela}</p><p>${lence87.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence88.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence88.imagen}" alt=""></div><p>Tallas disponibles: ${lence88.talla}</p><p>Tela: ${lence88.tela}</p><p>${lence88.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence89.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence89.imagen}" alt=""></div><p>Tallas disponibles: ${lence89.talla}</p><p>Tela: ${lence89.tela}</p><p>${lence89.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence90.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence90.imagen}" alt=""></div><p>Tallas disponibles: ${lence90.talla}</p><p>Tela: ${lence90.tela}</p><p>${lence90.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence91.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence91.imagen}" alt=""></div><p>Tallas disponibles: ${lence91.talla}</p><p>Tela: ${lence91.tela}</p><p>${lence91.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence92.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence92.imagen}" alt=""></div><p>Tallas disponibles: ${lence92.talla}</p><p>Tela: ${lence92.tela}</p><p>${lence92.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence93.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence93.imagen}" alt=""></div><p>Tallas disponibles: ${lence93.talla}</p><p>Tela: ${lence93.tela}</p><p>${lence93.descripcion}</p>`
prodcatal.innerHTML += `<h4>${lence94.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${lence94.imagen}" alt=""></div><p>Tallas disponibles: ${lence94.talla}</p><p>Tela: ${lence94.tela}</p><p>${lence94.descripcion}</p>`



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




//prodcatelas.innerHTML += `<h4>${elas.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas.imagen}" alt=""></div><p>Tallas disponibles: ${elas.talla}</p><p>Tela: ${elas.tela}</p><p>${elas.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas1.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas1.imagen}" alt=""></div><p>Tallas disponibles: ${elas1.talla}</p><p>Tela: ${elas1.tela}</p><p>${elas1.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas2.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas2.imagen}" alt=""></div><p>Tallas disponibles: ${elas2.talla}</p><p>Tela: ${elas2.tela}</p><p>${elas2.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas3.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas3.imagen}" alt=""></div><p>Tallas disponibles: ${elas3.talla}</p><p>Tela: ${elas3.tela}</p><p>${elas3.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas4.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas4.imagen}" alt=""></div><p>Tallas disponibles: ${elas4.talla}</p><p>Tela: ${elas4.tela}</p><p>${elas4.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas5.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas5.imagen}" alt=""></div><p>Tallas disponibles: ${elas5.talla}</p><p>Tela: ${elas5.tela}</p><p>${elas5.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas6.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas6.imagen}" alt=""></div><p>Tallas disponibles: ${elas6.talla}</p><p>Tela: ${elas6.tela}</p><p>${elas6.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas7.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas7.imagen}" alt=""></div><p>Tallas disponibles: ${elas7.talla}</p><p>Tela: ${elas7.tela}</p><p>${elas7.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas8.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas8.imagen}" alt=""></div><p>Tallas disponibles: ${elas8.talla}</p><p>Tela: ${elas8.tela}</p><p>${elas8.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas9.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas9.imagen}" alt=""></div><p>Tallas disponibles: ${elas9.talla}</p><p>Tela: ${elas9.tela}</p><p>${elas9.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas10.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas10.imagen}" alt=""></div><p>Tallas disponibles: ${elas10.talla}</p><p>Tela: ${elas10.tela}</p><p>${elas10.descripcion}</p>`
prodcatelas.innerHTML += `<h4>${elas.modelo}</h4><div class="galeria"><div class="flechai"></div><div class="flechad"></div><img src="${elas.imagen}" alt=""></div><p>Tallas disponibles: ${elas.talla}</p><p>Tela: ${elas.tela}</p><p>${elas.descripcion}</p>`