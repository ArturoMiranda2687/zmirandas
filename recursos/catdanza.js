const prodcatadanza = document.querySelector('.catalogodanza')


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



prodcatadanza.innerHTML += `<h4>${danza1.modelo}</h4><div class="galeria"><img src="${danza1.imagen}" alt=""><img src="${danza1.imagen2}" alt=""><img src="${danza1.imagen3}" alt=""></div><div class="contenedorVistaPrevia"><img src="${danza1.imagen2}" alt=""><img src="${danza1.imagen3}" alt=""></div><p>Tallas disponibles: ${danza1.talla}</p><p>Tela: ${danza1.tela}</p><p>${danza1.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>
${danza2.modelo}</h4><div class="galeria"><img src="
${danza2.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza2.imagen2}" alt=""><img src="
${danza2.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza2.talla}</p><p>Tela: 
${danza2.tela}</p><p>
${danza2.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza3.modelo}</h4><div class="galeria"><img src="
${danza3.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza3.imagen2}" alt=""><img src="
${danza3.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza3.talla}</p><p>Tela: 
${danza3.tela}</p><p>
${danza3.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza4.modelo}</h4><div class="galeria"><img src="
${danza4.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza4.imagen2}" alt=""><img src="
${danza4.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza4.talla}</p><p>Tela: 
${danza4.tela}</p><p>
${danza4.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza5.modelo}</h4><div class="galeria"><img src="
${danza5.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza5.imagen2}" alt=""><img src="
${danza5.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza5.talla}</p><p>Tela: 
${danza5.tela}</p><p>
${danza5.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza6.modelo}</h4><div class="galeria"><img src="
${danza6.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza6.imagen2}" alt=""><img src="
${danza6.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza6.talla}</p><p>Tela: 
${danza6.tela}</p><p>
${danza6.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza7.modelo}</h4><div class="galeria"><img src="
${danza7.imagen}" alt=""><img src="
${danza7.imagen2}" alt=""><img src="
${danza7.imagen3}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza7.imagen2}" alt=""><img src="
${danza7.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza7.talla}</p><p>Tela: 
${danza7.tela}</p><p>
${danza7.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza8.modelo}</h4><div class="galeria"><img src="
${danza8.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza8.imagen2}" alt=""><img src="
${danza8.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza8.talla}</p><p>Tela: 
${danza8.tela}</p><p>
${danza8.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza9.modelo}</h4><div class="galeria"><img src="
${danza9.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza9.imagen2}" alt=""><img src="
${danza9.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza9.talla}</p><p>Tela: 
${danza9.tela}</p><p>
${danza9.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza10.modelo}</h4><div class="galeria"><img src="
${danza10.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza10.imagen2}" alt=""><img src="
${danza10.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza10.talla}</p><p>Tela: 
${danza10.tela}</p><p>
${danza10.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza11.modelo}</h4><div class="galeria"><img src="
${danza11.imagen}" alt=""><img src="
${danza11.imagen2}" alt=""><img src="
${danza11.imagen3}" alt=""><img src="
${danza11.imagen4}" alt=""><img src="
${danza11.imagen5}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza11.imagen2}" alt=""><img src="
${danza11.imagen3}" alt=""><img src="
${danza11.imagen4}" alt=""><img src="
${danza11.imagen5}" alt=""></div><p>Tallas disponibles: 
${danza11.talla}</p><p>Tela: 
${danza11.tela}</p><p>
${danza11.descripcion}</p>`
prodcatadanza.innerHTML += `<h4>
${danza12.modelo}</h4><div class="galeria"><img src="
${danza12.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza12.imagen2}" alt=""><img src="
${danza12.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza12.talla}</p><p>Tela: 
${danza12.tela}</p><p>
${danza12.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza13.modelo}</h4><div class="galeria"><img src="
${danza13.imagen}" alt=""><img src="
${danza13.imagen2}" alt=""><img src="
${danza13.imagen3}" alt=""><img src="
${danza13.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza13.imagen2}" alt=""><img src="
${danza13.imagen3}" alt=""><img src="
${danza13.imagen4}" alt=""></div><p>Tallas disponibles: 
${danza13.talla}</p><p>Tela: 
${danza13.tela}</p><p>
${danza13.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza14.modelo}</h4><div class="galeria"><img src="
${danza14.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza14.imagen2}" alt=""><img src="
${danza14.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza14.talla}</p><p>Tela: 
${danza14.tela}</p><p>
${danza14.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza15.modelo}</h4><div class="galeria"><img src="
${danza15.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza15.imagen2}" alt=""><img src="
${danza15.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza15.talla}</p><p>Tela: 
${danza15.tela}</p><p>
${danza15.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza16.modelo}</h4><div class="galeria"><img src="
${danza16.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza16.imagen2}" alt=""><img src="
${danza16.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza16.talla}</p><p>Tela: 
${danza16.tela}</p><p>
${danza16.descripcion}</p>`
//
//prodcatadanza.innerHTML += `<h4>
//${danza17.modelo}</h4><div class="galeria"><img src="
//${danza17.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
//${danza17.imagen2}" alt=""><img src="
//${danza17.imagen3}" alt=""></div><p>Tallas disponibles: 
//${danza17.talla}</p><p>Tela: 
//${danza17.tela}</p><p>
//${danza17.descripcion}</p>`
//
//prodcatadanza.innerHTML += `<h4>
//${danza18.modelo}</h4><div class="galeria"><img src="
//${danza18.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
//${danza18.imagen2}" alt=""><img src="
//${danza18.imagen3}" alt=""></div><p>Tallas disponibles: 
//${danza18.talla}</p><p>Tela: 
//${danza18.tela}</p><p>
//${danza18.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza19.modelo}</h4><div class="galeria"><img src="
${danza19.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza19.imagen2}" alt=""><img src="
${danza19.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza19.talla}</p><p>Tela: 
${danza19.tela}</p><p>
${danza19.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza20.modelo}</h4><div class="galeria"><img src="
${danza20.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza20.imagen2}" alt=""><img src="
${danza20.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza20.talla}</p><p>Tela: 
${danza20.tela}</p><p>
${danza20.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza21.modelo}</h4><div class="galeria"><img src="
${danza21.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza21.imagen2}" alt=""><img src="
${danza21.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza21.talla}</p><p>Tela: 
${danza21.tela}</p><p>
${danza21.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza22.modelo}</h4><div class="galeria"><img src="
${danza22.imagen}" alt=""><img src="
${danza22.imagen2}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza22.imagen2}" alt=""><img src="
${danza22.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza22.talla}</p><p>Tela: 
${danza22.tela}</p><p>
${danza22.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza23.modelo}</h4><div class="galeria"><img src="
${danza23.imagen}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza23.imagen2}" alt=""><img src="
${danza23.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza23.talla}</p><p>Tela: 
${danza23.tela}</p><p>
${danza23.descripcion}</p>`

prodcatadanza.innerHTML += `<h4>
${danza24.modelo}</h4><div class="galeria"><img src="
${danza24.imagen}" alt=""><img src="
${danza24.imagen2}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${danza24.imagen2}" alt=""><img src="
${danza24.imagen3}" alt=""></div><p>Tallas disponibles: 
${danza24.talla}</p><p>Tela: 
${danza24.tela}</p><p>
${danza24.descripcion}</p>`