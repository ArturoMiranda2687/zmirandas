const prodcatal = document.querySelector('.catalogol')

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

const lence1 = new Lenceria({
    modelo:"Alguno",
    esLenceria:true,
    imagen:"https://pbs.twimg.com/media/EIUk1YzX0AA25qE.jpg",
    imagen2:"./media/prendas/lenceria/conjuntos/c.jpg",
})
const lence2 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a1.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a2.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a3.png",
    esDanza:false,
    esLenceria:true,
})
const lence3 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a4.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a5.png",
    esDanza:false,
    esLenceria:true,
})
const lence4 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a6.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a7.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a8.png",
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
    imagen2:"./media/prendas/lenceria/conjuntos/c11.png",
    imagen3:"./media/prendas/lenceria/conjuntos/c31.png",
    imagen3:"./media/prendas/lenceria/conjuntos/c49.png",
    imagen3:"./media/prendas/lenceria/conjuntos/c48.png",
    esDanza:false,
    esLenceria:true,
})
const lence13 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c12.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c13.png",
    imagen3:"./media/prendas/lenceria/conjuntos/c14.png",
    imagen4:"./media/prendas/lenceria/conjuntos/c15.png",
    imagen5:"",
    esDanza:false,
    esLenceria:true,
})
const lence14 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c16.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c17.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c18.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/c19.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c20.png",
    esDanza:false,
    esLenceria:true,
})
const lence17 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c21.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c22.png",
    esDanza:false,
    esLenceria:true,
})
const lence18 = new Lenceria({
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
const lence19 = new Lenceria({
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
const lence20 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c25.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c26.png",
    imagen3:"./media/prendas/lenceria/conjuntos/c27.png",
    esDanza:false,
    esLenceria:true,
})
const lence21 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c28.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c29.png",
    esDanza:false,
    esLenceria:true,
})
const lence22 = new Lenceria({
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
const lence23 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c33.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c34.png",
    imagen3:"./media/prendas/lenceria/conjuntos/c35.png",
    imagen4:"./media/prendas/lenceria/conjuntos/c36.png",
    imagen5:"",
    esDanza:false,
    esLenceria:true,
})
const lence24 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/c37.png",
    imagen2:"./media/prendas/lenceria/conjuntos/c38.png",
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



prodcatal.innerHTML += `<h4>
${lence1.modelo}</h4><div class="galeria"><img src="
${lence1.imagen}" alt=""><img src="
${lence1.imagen2}" alt=""><img src="
${lence1.imagen3}" alt=""><img src="
${lence1.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence1.imagen2}" alt=""><img src="
${lence1.imagen3}" alt=""><img src="
${lence1.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence1.talla}</p><p>Tela: 
${lence1.tela}</p><p>
${lence1.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence2.modelo}</h4><div class="galeria"><img src="
${lence2.imagen}" alt=""><img src="
${lence2.imagen2}" alt=""><img src="
${lence2.imagen3}" alt=""><img src="
${lence2.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence2.imagen2}" alt=""><img src="
${lence2.imagen3}" alt=""><img src="
${lence2.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence2.talla}</p><p>Tela: 
${lence2.tela}</p><p>
${lence2.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence3.modelo}</h4><div class="galeria"><img src="
${lence3.imagen}" alt=""><img src="
${lence3.imagen2}" alt=""><img src="
${lence3.imagen3}" alt=""><img src="
${lence3.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence3.imagen2}" alt=""><img src="
${lence3.imagen3}" alt=""><img src="
${lence3.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence3.talla}</p><p>Tela: 
${lence3.tela}</p><p>
${lence3.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence4.modelo}</h4><div class="galeria"><img src="
${lence4.imagen}" alt=""><img src="
${lence4.imagen2}" alt=""><img src="
${lence4.imagen3}" alt=""><img src="
${lence4.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence4.imagen2}" alt=""><img src="
${lence4.imagen3}" alt=""><img src="
${lence4.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence4.talla}</p><p>Tela: 
${lence4.tela}</p><p>
${lence4.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence5.modelo}</h4><div class="galeria"><img src="
${lence5.imagen}" alt=""><img src="
${lence5.imagen2}" alt=""><img src="
${lence5.imagen3}" alt=""><img src="
${lence5.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence5.imagen2}" alt=""><img src="
${lence5.imagen3}" alt=""><img src="
${lence5.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence5.talla}</p><p>Tela: 
${lence5.tela}</p><p>
${lence5.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence6.modelo}</h4><div class="galeria"><img src="
${lence6.imagen}" alt=""><img src="
${lence6.imagen2}" alt=""><img src="
${lence6.imagen3}" alt=""><img src="
${lence6.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence6.imagen2}" alt=""><img src="
${lence6.imagen3}" alt=""><img src="
${lence6.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence6.talla}</p><p>Tela: 
${lence6.tela}</p><p>
${lence6.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence7.modelo}</h4><div class="galeria"><img src="
${lence7.imagen}" alt=""><img src="
${lence7.imagen2}" alt=""><img src="
${lence7.imagen3}" alt=""><img src="
${lence7.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence7.imagen2}" alt=""><img src="
${lence7.imagen3}" alt=""><img src="
${lence7.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence7.talla}</p><p>Tela: 
${lence7.tela}</p><p>
${lence7.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence8.modelo}</h4><div class="galeria"><img src="
${lence8.imagen}" alt=""><img src="
${lence8.imagen2}" alt=""><img src="
${lence8.imagen3}" alt=""><img src="
${lence8.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence8.imagen2}" alt=""><img src="
${lence8.imagen3}" alt=""><img src="
${lence8.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence8.talla}</p><p>Tela: 
${lence8.tela}</p><p>
${lence8.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence9.modelo}</h4><div class="galeria"><img src="
${lence9.imagen}" alt=""><img src="
${lence9.imagen2}" alt=""><img src="
${lence9.imagen3}" alt=""><img src="
${lence9.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence9.imagen2}" alt=""><img src="
${lence9.imagen3}" alt=""><img src="
${lence9.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence9.talla}</p><p>Tela: 
${lence9.tela}</p><p>
${lence9.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence10.modelo}</h4><div class="galeria"><img src="
${lence10.imagen}" alt=""><img src="
${lence10.imagen2}" alt=""><img src="
${lence10.imagen3}" alt=""><img src="
${lence10.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence10.imagen2}" alt=""><img src="
${lence10.imagen3}" alt=""><img src="
${lence10.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence10.talla}</p><p>Tela: 
${lence10.tela}</p><p>
${lence10.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence1.modelo}</h4><div class="galeria"><img src="
${lence11.imagen}" alt=""><img src="
${lence11.imagen2}" alt=""><img src="
${lence11.imagen3}" alt=""><img src="
${lence11.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence11.imagen2}" alt=""><img src="
${lence11.imagen3}" alt=""><img src="
${lence11.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence11.talla}</p><p>Tela: 
${lence11.tela}</p><p>
${lence11.descripcion}</p></div>`
prodcat1al.innerHTML += `<h4>
${lence12.modelo}</h4><div class="galeria"><img src="
${lence12.imagen}" alt=""><img src="
${lence12.imagen2}" alt=""><img src="
${lence12.imagen3}" alt=""><img src="
${lence12.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence12.imagen2}" alt=""><img src="
${lence12.imagen3}" alt=""><img src="
${lence12.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence12.talla}</p><p>Tela: 
${lence12.tela}</p><p>
${lence12.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence13.modelo}</h4><div class="galeria"><img src="
${lence13.imagen}" alt=""><img src="
${lence13.imagen2}" alt=""><img src="
${lence13.imagen3}" alt=""><img src="
${lence13.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence13.imagen2}" alt=""><img src="
${lence13.imagen3}" alt=""><img src="
${lence13.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence13.talla}</p><p>Tela: 
${lence13.tela}</p><p>
${lence13.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence14.modelo}</h4><div class="galeria"><img src="
${lence14.imagen}" alt=""><img src="
${lence14.imagen2}" alt=""><img src="
${lence14.imagen3}" alt=""><img src="
${lence14.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence14.imagen2}" alt=""><img src="
${lence14.imagen3}" alt=""><img src="
${lence14.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence14.talla}</p><p>Tela: 
${lence14.tela}</p><p>
${lence14.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence15.modelo}</h4><div class="galeria"><img src="
${lence15.imagen}" alt=""><img src="
${lence15.imagen2}" alt=""><img src="
${lence15.imagen3}" alt=""><img src="
${lence15.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence15.imagen2}" alt=""><img src="
${lence15.imagen3}" alt=""><img src="
${lence15.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence15.talla}</p><p>Tela: 
${lence15.tela}</p><p>
${lence15.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence16.modelo}</h4><div class="galeria"><img src="
${lence16.imagen}" alt=""><img src="
${lence16.imagen2}" alt=""><img src="
${lence16.imagen3}" alt=""><img src="
${lence16.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence16.imagen2}" alt=""><img src="
${lence16.imagen3}" alt=""><img src="
${lence16.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence16.talla}</p><p>Tela: 
${lence16.tela}</p><p>
${lence16.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence17.modelo}</h4><div class="galeria"><img src="
${lence17.imagen}" alt=""><img src="
${lence17.imagen2}" alt=""><img src="
${lence17.imagen3}" alt=""><img src="
${lence17.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence17.imagen2}" alt=""><img src="
${lence17.imagen3}" alt=""><img src="
${lence17.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence17.talla}</p><p>Tela: 
${lence17.tela}</p><p>
${lence17.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence18.modelo}</h4><div class="galeria"><img src="
${lence18.imagen}" alt=""><img src="
${lence18.imagen2}" alt=""><img src="
${lence18.imagen3}" alt=""><img src="
${lence18.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence18.imagen2}" alt=""><img src="
${lence18.imagen3}" alt=""><img src="
${lence18.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence18.talla}</p><p>Tela: 
${lence18.tela}</p><p>
${lence18.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence19.modelo}</h4><div class="galeria"><img src="
${lence19.imagen}" alt=""><img src="
${lence19.imagen2}" alt=""><img src="
${lence19.imagen3}" alt=""><img src="
${lence19.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence19.imagen2}" alt=""><img src="
${lence19.imagen3}" alt=""><img src="
${lence19.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence19.talla}</p><p>Tela: 
${lence19.tela}</p><p>
${lence19.descripcion}</p></div>`