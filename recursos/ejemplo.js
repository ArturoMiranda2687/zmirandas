const ejemplop = document.querySelector('.ejemplo')

class Deportiva extends Producto{
    constructor(props){
        super(props)
    }
}



const elas1 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"Un atuendo más relajado. Ideal para ensayos cotidianos. Viene acompañad de pareo de danza",
    imagen:"./media/prendas/elastano/e.png",
    imagen2:"./media/prendas/elastano/e1.png",
    imagen3:"./media/prendas/elastano/e2.png",
    imagen4:"./media/prendas/elastano/e3.png",
    esDeportiva: "true",
})
const elas2 = new Deportiva({
    modelo: "Greta",
    talla:"L | M | S",
    tela:"Lycra | Algodón",
    color:"Negro | Turqueza",
    descripcion:"El mejor de los atuendos para la mejor de las bailarinas",
    imagen:"./media/prendas/elastano/e4.png",
    imagen2:"",
    esDeportiva: "true",
})


var productos = [
    elas1,elas2
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

    ejemplop.appendChild(productoElement)
})

