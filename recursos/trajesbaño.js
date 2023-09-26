const prodcatatb = document.querySelector('.catalogoTrajB')


class TrajesBano extends Producto{
    constructor(props){
        super(props)
    }
    tipoprenda(estiloprenda){
        if(estiloprenda.esTrajeB){
            this.tipo.push(estiloprenda)
        }
    }
}
const tb1 = new TrajesBano({
    modelo: "Anna",
    talla:"L | M | S",
    tela:"Lycra",
    color:"Rosa",
    descripcion:"Este body está diseñado con un aspecto conservador, pero funcional para resaltar la figura del cuerpo mientras haces tu entrenamiento o montaje. Apto para los largos tiempos de ensayo. Sin mangas",
    imagen:"../media/prendas/trajesBaño/tb1.png",
    imagen2:"../media/prendas/trajesBaño/tb2.png",
    imagen3:"",
    esDanza:"",
    esLenceria:"",
})

prodcatatb.innerHTML += `<h4>
${tb1.modelo}</h4><div class="galeria"><img src="
${tb1.imagen}" alt=""><img src="
${tb1.imagen2}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${tb1.imagen}" alt=""><img src="
${tb1.imagen2}" alt=""></div><div class = "parrafos"><p>Tallas disponibles: 
${tb1.talla}</p><p>Tela: 
${tb1.tela}</p><p>
${tb1.descripcion}</p></div>`