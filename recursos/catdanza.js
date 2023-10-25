const prodcatadanza = document.querySelector('.danza')


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

const danza1 = new Danza({
    modelo: "Rosa",
    talla:"L | M | S",
    tela:"Lycra",
    color:"Rosa",
    descripcion:"Este body está diseñado con un aspecto conservador, pero funcional para resaltar la figura del cuerpo mientras haces tu entrenamiento o montaje. Apto para los largos tiempos de ensayo. Sin mangas",
    imagen:"./media/prendas/baile/bl1.png",
    imagen2:"./media/prendas/baile/bl2.jpg",
    imagen3:"./media/prendas/baile/bl3.png",
    esDanza:"true",
    esLenceria:"",
})

const danza2 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl4.png",
})
const danza3 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl5.jpg",
})
const danza4 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl6.jpg",
})
const danza5 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl7.png",
})
const danza6 = new Danza({
    modelo:"Alguno",
    imagen:"./media/prendas/baile/bl8.png",
})
const danza7 = new Danza({
    modelo:"Algunas cuantas",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl9.png",
    imagen2:"./media/prendas/baile/bl10.png",
    imagen3:"./media/prendas/baile/bl42.jpg"
})
const danza8 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl11.png",
})
const danza9 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl12.png",
})
const danza10 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl13.png",
})
const danza11 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl14.jpg",
    imagen2:"./media/prendas/baile/bl15.jpg",
    imagen3:"./media/prendas/baile/bl16.jpg",
    imagen4:"./media/prendas/baile/bl17.jpg",
    imagen5:"./media/prendas/baile/bl18.jpg",
})
const danza12 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl26.png",
})
const danza13 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl27.png",
    imagen2:"./media/prendas/baile/bl28.png",
    imagen3:"./media/prendas/baile/bl29.png",
    imagen4:"./media/prendas/baile/bl30.jpg",
})
const danza14 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl40.png",
})
const danza15 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl41.png",
})
const danza16 = new Danza({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"./media/prendas/baile/bl43.png",
})
const danza19 = new Danza({
    modelo:"Alguno",
    esLenceria:"false",
    imagen:"./media/prendas/baile/bl31.jpg",
})
const danza20 = new Danza({
    modelo:"Alguno",
    esLenceria:"false",
    imagen:"./media/prendas/baile/bl32.png",
})
const danza21 = new Danza({
    modelo:"Alguno",
    esLenceria:"false",
    imagen:"./media/prendas/baile/bl33.png",
})
const danza22 = new Danza({
    modelo:"Alguno",
    esLenceria:"false",
    imagen:"./media/prendas/baile/bl34.png",
    imagen2:"./media/prendas/baile/bl35.png",
})

const danza23 = new Danza({
    modelo:"Alguno",
    esLenceria:"false",
    imagen:"./media/prendas/baile/bl36.jpg",
})
const danza24 = new Danza({
    modelo:"Alguno",
    esLenceria:"false",
    imagen:"./media/prendas/baile/bl37.png",
    imagen2:"./media/prendas/baile/bl38.png",
})

var productos = [
    danza1,danza2,danza3,danza4,danza5,danza6,danza7,danza8,danza9,danza10,danza11,danza12,danza13,danza14,danza15,danza16,/*danza17,danza18*/,danza19,danza20,danza21,danza22,danza23,danza24
]


productos.forEach(function(producto)
{
    var productoElement = document.createElement("div")

    productoElement.innerHTML = `<h4>
    ${producto.modelo}</h4><div class="galeria"><img src="
    ${producto.imagen}" alt=""><img src="
    ${producto.imagen2}" alt=""><img src="
    ${producto.imagen3}" alt=""><img src="
    ${producto.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
    ${producto.imagen2}" alt=""><img src="
    ${producto.imagen3}" alt=""><img src="
    ${producto.imagen4}" alt=""></div><div class: "parrafos"> <p>Tallas disponibles: 
    ${producto.talla}</p><p>Tela: 
    ${producto.tela}</p><p>
    ${producto.descripcion}</p></div>`

    prodcatadanza.appendChild(productoElement)
})
