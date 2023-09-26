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
    imagen:"./media/prendas/lenceria/conjuntos/a9.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a10.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a11.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a12.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a13.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a14.png",
    esDanza:false,
    esLenceria:true,
})
const lence10 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a15.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a16.png",
    esDanza:false,
    esLenceria:true,
})
const lence11 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a18.jpg",
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
    imagen:"./media/prendas/lenceria/conjuntos/a19.png",
    esDanza:false,
    esLenceria:true,
})
const lence13 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a20.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a21.jpg",
    imagen2:"./media/prendas/lenceria/conjuntos/a22.png",
    imagen3:"",
    esDanza:false,
    esLenceria:true,
})
const lence15 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a23.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a24.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a25.jpg",
    esDanza:false,
    esLenceria:true,
})
const lence16 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a26.jpg",
    imagen2:"./media/prendas/lenceria/conjuntos/a27.png",
    esDanza:false,
    esLenceria:true,
})
const lence17 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a28.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a29.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a30.png",
    esDanza:false,
    esLenceria:true,
})
const lence18 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a31.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a32.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a33.png",
    esDanza:false,
    esLenceria:true,
})
const lence19 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a34.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a35.png",
    esDanza:false,
    esLenceria:true,
})
const lence20 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a36.png",
    esDanza:false,
    esLenceria:true,
})
const lence21 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a38.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a39.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a40.png",
    esDanza:false,
    esLenceria:true,
})
const lence22 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a41.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a42.png",
    esDanza:false,
    esLenceria:true,
})
const lence23 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a43.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a44.png",
    imagen3:"",
    imagen4:"",
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
    imagen:"./media/prendas/lenceria/conjuntos/a45.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a46.png",
    esDanza:false,
    esLenceria:true,
})
const lence25 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a47.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a48.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a49.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a50.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a51.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a52.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a53.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a54.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a55.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a56.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a57.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a58.png",
    esDanza:false,
    esLenceria:true,
})
const lence36 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a59.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a60.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a61.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a62.png",
    esDanza:false,
    esLenceria:true,
})
const lence37 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a63.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a64.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a65.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a66.png",
    esDanza:false,
    esLenceria:true,
})
const lence38 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a67.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a68.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a69.png",
    esDanza:false,
    esLenceria:true,
})
const lence39 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a70.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a71.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a72.png",
    esDanza:false,
    esLenceria:true,
})
const lence40 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a73.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a74.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a75.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a76.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a77.png",
    imagen5:"./media/prendas/lenceria/conjuntos/a78.png",
    imagen6:"./media/prendas/lenceria/conjuntos/a79.png",
    esDanza:false,
    esLenceria:true,
})
const lence42 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a80.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a81.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a82.png",
    esDanza:false,
    esLenceria:true,
})
const lence43 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a83.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a84.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a85.png",
    esDanza:false,
    esLenceria:true,
})
const lence44 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a86.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a87.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a88.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a89.png",
    imagen5:"./media/prendas/lenceria/conjuntos/a90.png",
    esDanza:false,
    esLenceria:true,
})
const lence45 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a91.png",
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
    imagen:"./media/prendas/lenceria/conjuntos/a92.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a93.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a94.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a95.png",
    esDanza:false,
    esLenceria:true,
})
const lence47 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a96.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a97.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a98.png",
    esDanza:false,
    esLenceria:true,
})
const lence48 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a99.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a100.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a101.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a102.png",
    esDanza:false,
    esLenceria:true,
})
const lence49 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a103.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a104.png",
    esDanza:false,
    esLenceria:true,
})
const lence50 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a105.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a106.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a107.png",
    esDanza:false,
    esLenceria:true,
})
const lence51 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a108.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a109.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a110.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a111.png",
    imagen5:"./media/prendas/lenceria/conjuntos/a112.png",
    imagen6:"./media/prendas/lenceria/conjuntos/a113.png",
    esDanza:false,
    esLenceria:true,
})
const lence52 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a114.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a115.png",
    esDanza:false,
    esLenceria:true,
})
const lence53 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a116.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a117.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a118.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a119.png",
    esDanza:false,
    esLenceria:true,
})
const lence54 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a120.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a121.png",
    esDanza:false,
    esLenceria:true,
})
const lence55 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a122.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a123.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a124.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a125.png",
    esDanza:false,
    esLenceria:true,
})
const lence56 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a126.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a127.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a128.png",
    esDanza:false,
    esLenceria:true,
})
const lence57 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a129.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a130.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a131.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a132.png",
    imagen5:"./media/prendas/lenceria/conjuntos/a133.png",
    imagen6:"./media/prendas/lenceria/conjuntos/a134.png",
    esDanza:false,
    esLenceria:true,
})
const lence58 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a135.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a136.png",
    esDanza:false,
    esLenceria:true,
})
const lence59 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a137.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a138.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a139.png",
    esDanza:false,
    esLenceria:true,
})
const lence60 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a140.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a141.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a17.png",
    esDanza:false,
    esLenceria:true,
})
const lence61 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a142.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a143.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a144.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a145.png",
    esDanza:false,
    esLenceria:true,
})
const lence62 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a146.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a147.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a148.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a149.png",
    esDanza:false,
    esLenceria:true,
})
const lence63 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a150.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a151.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a152.png",
    esDanza:false,
    esLenceria:true,
})
const lence64 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a153.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a154.png",
    imagen3:"",
    esDanza:false,
    esLenceria:true,
})
const lence65 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a156.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a157.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a158.png",
    esDanza:false,
    esLenceria:true,
})
const lence66 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a159.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a160.png",
    imagen3:"",
    esDanza:false,
    esLenceria:true,
})
const lence67 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a161.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a162.png",
    imagen3:"",
    esDanza:false,
    esLenceria:true,
})
const lence68 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a163.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a164.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a165.png",
    esDanza:false,
    esLenceria:true,
})
const lence69 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a166.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a167.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a168.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a169.png",
    esDanza:false,
    esLenceria:true,
})
const lence70 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a170.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a171.png",
    esDanza:false,
    esLenceria:true,
})
const lence71 = new Lenceria({
    modelo: "",
    talla:"L | M | S",
    tela:"",
    color:"",
    descripcion:"",
    imagen:"./media/prendas/lenceria/conjuntos/a172.png",
    imagen2:"./media/prendas/lenceria/conjuntos/a173.png",
    imagen3:"./media/prendas/lenceria/conjuntos/a174.png",
    imagen4:"./media/prendas/lenceria/conjuntos/a175.png",
    imagen5:"./media/prendas/lenceria/conjuntos/a176.png",
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
${lence11.modelo}</h4><div class="galeria"><img src="
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
prodcatal.innerHTML += `<h4>
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
prodcatal.innerHTML += `<h4>
${lence20.modelo}</h4><div class="galeria"><img src="
${lence20.imagen}" alt=""><img src="
${lence20.imagen2}" alt=""><img src="
${lence20.imagen3}" alt=""><img src="
${lence20.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence20.imagen2}" alt=""><img src="
${lence20.imagen3}" alt=""><img src="
${lence20.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence20.talla}</p><p>Tela: 
${lence20.tela}</p><p>
${lence20.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence21.modelo}</h4><div class="galeria"><img src="
${lence21.imagen}" alt=""><img src="
${lence21.imagen2}" alt=""><img src="
${lence21.imagen3}" alt=""><img src="
${lence21.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence21.imagen2}" alt=""><img src="
${lence21.imagen3}" alt=""><img src="
${lence21.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence21.talla}</p><p>Tela: 
${lence21.tela}</p><p>
${lence21.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence22.modelo}</h4><div class="galeria"><img src="
${lence22.imagen}" alt=""><img src="
${lence22.imagen2}" alt=""><img src="
${lence22.imagen3}" alt=""><img src="
${lence22.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence22.imagen2}" alt=""><img src="
${lence22.imagen3}" alt=""><img src="
${lence22.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence22.talla}</p><p>Tela: 
${lence22.tela}</p><p>
${lence22.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence23.modelo}</h4><div class="galeria"><img src="
${lence23.imagen}" alt=""><img src="
${lence23.imagen2}" alt=""><img src="
${lence23.imagen3}" alt=""><img src="
${lence23.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence23.imagen2}" alt=""><img src="
${lence23.imagen3}" alt=""><img src="
${lence23.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence23.talla}</p><p>Tela: 
${lence23.tela}</p><p>
${lence23.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence24.modelo}</h4><div class="galeria"><img src="
${lence24.imagen}" alt=""><img src="
${lence24.imagen2}" alt=""><img src="
${lence24.imagen3}" alt=""><img src="
${lence24.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence24.imagen2}" alt=""><img src="
${lence24.imagen3}" alt=""><img src="
${lence24.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence24.talla}</p><p>Tela: 
${lence24.tela}</p><p>
${lence24.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence25.modelo}</h4><div class="galeria"><img src="
${lence25.imagen}" alt=""><img src="
${lence25.imagen2}" alt=""><img src="
${lence25.imagen3}" alt=""><img src="
${lence25.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence25.imagen2}" alt=""><img src="
${lence25.imagen3}" alt=""><img src="
${lence25.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence25.talla}</p><p>Tela: 
${lence25.tela}</p><p>
${lence25.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence26.modelo}</h4><div class="galeria"><img src="
${lence26.imagen}" alt=""><img src="
${lence26.imagen2}" alt=""><img src="
${lence26.imagen3}" alt=""><img src="
${lence26.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence26.imagen2}" alt=""><img src="
${lence26.imagen3}" alt=""><img src="
${lence26.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence26.talla}</p><p>Tela: 
${lence26.tela}</p><p>
${lence26.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence27.modelo}</h4><div class="galeria"><img src="
${lence27.imagen}" alt=""><img src="
${lence27.imagen2}" alt=""><img src="
${lence27.imagen3}" alt=""><img src="
${lence27.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence27.imagen2}" alt=""><img src="
${lence27.imagen3}" alt=""><img src="
${lence27.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence27.talla}</p><p>Tela: 
${lence27.tela}</p><p>
${lence27.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence28.modelo}</h4><div class="galeria"><img src="
${lence28.imagen}" alt=""><img src="
${lence28.imagen2}" alt=""><img src="
${lence28.imagen3}" alt=""><img src="
${lence28.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence28.imagen2}" alt=""><img src="
${lence28.imagen3}" alt=""><img src="
${lence28.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence28.talla}</p><p>Tela: 
${lence28.tela}</p><p>
${lence28.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence29.modelo}</h4><div class="galeria"><img src="
${lence29.imagen}" alt=""><img src="
${lence29.imagen2}" alt=""><img src="
${lence29.imagen3}" alt=""><img src="
${lence29.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence29.imagen2}" alt=""><img src="
${lence29.imagen3}" alt=""><img src="
${lence29.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence29.talla}</p><p>Tela: 
${lence29.tela}</p><p>
${lence29.descripcion}</p></div>`

prodcatal.innerHTML += `<h4>
${lence30.modelo}</h4><div class="galeria"><img src="
${lence30.imagen}" alt=""><img src="
${lence30.imagen2}" alt=""><img src="
${lence30.imagen3}" alt=""><img src="
${lence30.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence30.imagen2}" alt=""><img src="
${lence30.imagen3}" alt=""><img src="
${lence30.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence30.talla}</p><p>Tela: 
${lence30.tela}</p><p>
${lence30.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence31.modelo}</h4><div class="galeria"><img src="
${lence31.imagen}" alt=""><img src="
${lence31.imagen2}" alt=""><img src="
${lence31.imagen3}" alt=""><img src="
${lence31.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence31.imagen2}" alt=""><img src="
${lence31.imagen3}" alt=""><img src="
${lence31.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence31.talla}</p><p>Tela: 
${lence31.tela}</p><p>
${lence31.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence32.modelo}</h4><div class="galeria"><img src="
${lence32.imagen}" alt=""><img src="
${lence32.imagen2}" alt=""><img src="
${lence32.imagen3}" alt=""><img src="
${lence32.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence32.imagen2}" alt=""><img src="
${lence32.imagen3}" alt=""><img src="
${lence32.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence32.talla}</p><p>Tela: 
${lence32.tela}</p><p>
${lence32.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence33.modelo}</h4><div class="galeria"><img src="
${lence33.imagen}" alt=""><img src="
${lence33.imagen2}" alt=""><img src="
${lence33.imagen3}" alt=""><img src="
${lence33.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence33.imagen2}" alt=""><img src="
${lence33.imagen3}" alt=""><img src="
${lence33.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence33.talla}</p><p>Tela: 
${lence33.tela}</p><p>
${lence33.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence34.modelo}</h4><div class="galeria"><img src="
${lence34.imagen}" alt=""><img src="
${lence34.imagen2}" alt=""><img src="
${lence34.imagen3}" alt=""><img src="
${lence34.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence34.imagen2}" alt=""><img src="
${lence34.imagen3}" alt=""><img src="
${lence34.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence34.talla}</p><p>Tela: 
${lence34.tela}</p><p>
${lence34.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence35.modelo}</h4><div class="galeria"><img src="
${lence35.imagen}" alt=""><img src="
${lence35.imagen2}" alt=""><img src="
${lence35.imagen3}" alt=""><img src="
${lence35.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence35.imagen2}" alt=""><img src="
${lence35.imagen3}" alt=""><img src="
${lence35.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence35.talla}</p><p>Tela: 
${lence35.tela}</p><p>
${lence35.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence36.modelo}</h4><div class="galeria"><img src="
${lence36.imagen}" alt=""><img src="
${lence36.imagen2}" alt=""><img src="
${lence36.imagen3}" alt=""><img src="
${lence36.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence36.imagen2}" alt=""><img src="
${lence36.imagen3}" alt=""><img src="
${lence36.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence36.talla}</p><p>Tela: 
${lence36.tela}</p><p>
${lence36.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence37.modelo}</h4><div class="galeria"><img src="
${lence37.imagen}" alt=""><img src="
${lence37.imagen2}" alt=""><img src="
${lence37.imagen3}" alt=""><img src="
${lence37.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence37.imagen2}" alt=""><img src="
${lence37.imagen3}" alt=""><img src="
${lence37.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence37.talla}</p><p>Tela: 
${lence37.tela}</p><p>
${lence37.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence38.modelo}</h4><div class="galeria"><img src="
${lence38.imagen}" alt=""><img src="
${lence38.imagen2}" alt=""><img src="
${lence38.imagen3}" alt=""><img src="
${lence38.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence38.imagen2}" alt=""><img src="
${lence38.imagen3}" alt=""><img src="
${lence38.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence38.talla}</p><p>Tela: 
${lence38.tela}</p><p>
${lence38.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence39.modelo}</h4><div class="galeria"><img src="
${lence39.imagen}" alt=""><img src="
${lence39.imagen2}" alt=""><img src="
${lence39.imagen3}" alt=""><img src="
${lence39.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence39.imagen2}" alt=""><img src="
${lence39.imagen3}" alt=""><img src="
${lence39.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence39.talla}</p><p>Tela: 
${lence39.tela}</p><p>
${lence39.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence40.modelo}</h4><div class="galeria"><img src="
${lence40.imagen}" alt=""><img src="
${lence40.imagen2}" alt=""><img src="
${lence40.imagen3}" alt=""><img src="
${lence40.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence40.imagen2}" alt=""><img src="
${lence40.imagen3}" alt=""><img src="
${lence40.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence40.talla}</p><p>Tela: 
${lence40.tela}</p><p>
${lence40.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence41.modelo}</h4><div class="galeria"><img src="
${lence41.imagen}" alt=""><img src="
${lence41.imagen2}" alt=""><img src="
${lence41.imagen3}" alt=""><img src="
${lence41.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence41.imagen2}" alt=""><img src="
${lence41.imagen3}" alt=""><img src="
${lence41.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence41.talla}</p><p>Tela: 
${lence41.tela}</p><p>
${lence41.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence42.modelo}</h4><div class="galeria"><img src="
${lence42.imagen}" alt=""><img src="
${lence42.imagen2}" alt=""><img src="
${lence42.imagen3}" alt=""><img src="
${lence42.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence42.imagen2}" alt=""><img src="
${lence42.imagen3}" alt=""><img src="
${lence42.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence42.talla}</p><p>Tela: 
${lence42.tela}</p><p>
${lence42.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence43.modelo}</h4><div class="galeria"><img src="
${lence43.imagen}" alt=""><img src="
${lence43.imagen2}" alt=""><img src="
${lence43.imagen3}" alt=""><img src="
${lence43.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence43.imagen2}" alt=""><img src="
${lence43.imagen3}" alt=""><img src="
${lence43.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence43.talla}</p><p>Tela: 
${lence43.tela}</p><p>
${lence43.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence44.modelo}</h4><div class="galeria"><img src="
${lence44.imagen}" alt=""><img src="
${lence44.imagen2}" alt=""><img src="
${lence44.imagen3}" alt=""><img src="
${lence44.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence44.imagen2}" alt=""><img src="
${lence44.imagen3}" alt=""><img src="
${lence44.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence44.talla}</p><p>Tela: 
${lence44.tela}</p><p>
${lence44.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence45.modelo}</h4><div class="galeria"><img src="
${lence45.imagen}" alt=""><img src="
${lence45.imagen2}" alt=""><img src="
${lence45.imagen3}" alt=""><img src="
${lence45.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence45.imagen2}" alt=""><img src="
${lence45.imagen3}" alt=""><img src="
${lence45.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence45.talla}</p><p>Tela: 
${lence45.tela}</p><p>
${lence45.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence46.modelo}</h4><div class="galeria"><img src="
${lence46.imagen}" alt=""><img src="
${lence46.imagen2}" alt=""><img src="
${lence46.imagen3}" alt=""><img src="
${lence46.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence46.imagen2}" alt=""><img src="
${lence46.imagen3}" alt=""><img src="
${lence46.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence46.talla}</p><p>Tela: 
${lence46.tela}</p><p>
${lence46.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence47.modelo}</h4><div class="galeria"><img src="
${lence47.imagen}" alt=""><img src="
${lence47.imagen2}" alt=""><img src="
${lence47.imagen3}" alt=""><img src="
${lence47.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence47.imagen2}" alt=""><img src="
${lence47.imagen3}" alt=""><img src="
${lence47.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence47.talla}</p><p>Tela: 
${lence47.tela}</p><p>
${lence47.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence48.modelo}</h4><div class="galeria"><img src="
${lence48.imagen}" alt=""><img src="
${lence48.imagen2}" alt=""><img src="
${lence48.imagen3}" alt=""><img src="
${lence48.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence48.imagen2}" alt=""><img src="
${lence48.imagen3}" alt=""><img src="
${lence48.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence48.talla}</p><p>Tela: 
${lence48.tela}</p><p>
${lence48.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence49.modelo}</h4><div class="galeria"><img src="
${lence49.imagen}" alt=""><img src="
${lence49.imagen2}" alt=""><img src="
${lence49.imagen3}" alt=""><img src="
${lence49.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence49.imagen2}" alt=""><img src="
${lence49.imagen3}" alt=""><img src="
${lence49.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence49.talla}</p><p>Tela: 
${lence49.tela}</p><p>
${lence49.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence50.modelo}</h4><div class="galeria"><img src="
${lence50.imagen}" alt=""><img src="
${lence50.imagen2}" alt=""><img src="
${lence50.imagen3}" alt=""><img src="
${lence50.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence50.imagen2}" alt=""><img src="
${lence50.imagen3}" alt=""><img src="
${lence50.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence50.talla}</p><p>Tela: 
${lence50.tela}</p><p>
${lence50.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence51.modelo}</h4><div class="galeria"><img src="
${lence51.imagen}" alt=""><img src="
${lence51.imagen2}" alt=""><img src="
${lence51.imagen3}" alt=""><img src="
${lence51.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence51.imagen2}" alt=""><img src="
${lence51.imagen3}" alt=""><img src="
${lence51.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence51.talla}</p><p>Tela: 
${lence51.tela}</p><p>
${lence51.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence52.modelo}</h4><div class="galeria"><img src="
${lence52.imagen}" alt=""><img src="
${lence52.imagen2}" alt=""><img src="
${lence52.imagen3}" alt=""><img src="
${lence52.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence52.imagen2}" alt=""><img src="
${lence52.imagen3}" alt=""><img src="
${lence52.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence52.talla}</p><p>Tela: 
${lence52.tela}</p><p>
${lence52.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence53.modelo}</h4><div class="galeria"><img src="
${lence53.imagen}" alt=""><img src="
${lence53.imagen2}" alt=""><img src="
${lence53.imagen3}" alt=""><img src="
${lence53.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence53.imagen2}" alt=""><img src="
${lence53.imagen3}" alt=""><img src="
${lence53.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence53.talla}</p><p>Tela: 
${lence53.tela}</p><p>
${lence53.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence54.modelo}</h4><div class="galeria"><img src="
${lence54.imagen}" alt=""><img src="
${lence54.imagen2}" alt=""><img src="
${lence54.imagen3}" alt=""><img src="
${lence54.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence54.imagen2}" alt=""><img src="
${lence54.imagen3}" alt=""><img src="
${lence54.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence54.talla}</p><p>Tela: 
${lence54.tela}</p><p>
${lence54.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence55.modelo}</h4><div class="galeria"><img src="
${lence55.imagen}" alt=""><img src="
${lence55.imagen2}" alt=""><img src="
${lence55.imagen3}" alt=""><img src="
${lence55.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence55.imagen2}" alt=""><img src="
${lence55.imagen3}" alt=""><img src="
${lence55.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence55.talla}</p><p>Tela: 
${lence55.tela}</p><p>
${lence55.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence56.modelo}</h4><div class="galeria"><img src="
${lence56.imagen}" alt=""><img src="
${lence56.imagen2}" alt=""><img src="
${lence56.imagen3}" alt=""><img src="
${lence56.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence56.imagen2}" alt=""><img src="
${lence56.imagen3}" alt=""><img src="
${lence56.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence56.talla}</p><p>Tela: 
${lence56.tela}</p><p>
${lence56.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence57.modelo}</h4><div class="galeria"><img src="
${lence57.imagen}" alt=""><img src="
${lence57.imagen2}" alt=""><img src="
${lence57.imagen3}" alt=""><img src="
${lence57.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence57.imagen2}" alt=""><img src="
${lence57.imagen3}" alt=""><img src="
${lence57.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence57.talla}</p><p>Tela: 
${lence57.tela}</p><p>
${lence57.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence58.modelo}</h4><div class="galeria"><img src="
${lence58.imagen}" alt=""><img src="
${lence58.imagen2}" alt=""><img src="
${lence58.imagen3}" alt=""><img src="
${lence58.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence58.imagen2}" alt=""><img src="
${lence58.imagen3}" alt=""><img src="
${lence58.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence58.talla}</p><p>Tela: 
${lence58.tela}</p><p>
${lence58.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence59.modelo}</h4><div class="galeria"><img src="
${lence59.imagen}" alt=""><img src="
${lence59.imagen2}" alt=""><img src="
${lence59.imagen3}" alt=""><img src="
${lence59.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence59.imagen2}" alt=""><img src="
${lence59.imagen3}" alt=""><img src="
${lence59.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence59.talla}</p><p>Tela: 
${lence59.tela}</p><p>
${lence59.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence60.modelo}</h4><div class="galeria"><img src="
${lence60.imagen}" alt=""><img src="
${lence60.imagen2}" alt=""><img src="
${lence60.imagen3}" alt=""><img src="
${lence60.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence60.imagen2}" alt=""><img src="
${lence60.imagen3}" alt=""><img src="
${lence60.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence60.talla}</p><p>Tela: 
${lence60.tela}</p><p>
${lence60.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence61.modelo}</h4><div class="galeria"><img src="
${lence61.imagen}" alt=""><img src="
${lence61.imagen2}" alt=""><img src="
${lence61.imagen3}" alt=""><img src="
${lence61.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence61.imagen2}" alt=""><img src="
${lence61.imagen3}" alt=""><img src="
${lence61.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence61.talla}</p><p>Tela: 
${lence61.tela}</p><p>
${lence61.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence62.modelo}</h4><div class="galeria"><img src="
${lence62.imagen}" alt=""><img src="
${lence62.imagen2}" alt=""><img src="
${lence62.imagen3}" alt=""><img src="
${lence62.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence62.imagen2}" alt=""><img src="
${lence62.imagen3}" alt=""><img src="
${lence62.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence62.talla}</p><p>Tela: 
${lence62.tela}</p><p>
${lence62.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence63.modelo}</h4><div class="galeria"><img src="
${lence63.imagen}" alt=""><img src="
${lence63.imagen2}" alt=""><img src="
${lence63.imagen3}" alt=""><img src="
${lence63.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence63.imagen2}" alt=""><img src="
${lence63.imagen3}" alt=""><img src="
${lence63.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence63.talla}</p><p>Tela: 
${lence63.tela}</p><p>
${lence63.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence64.modelo}</h4><div class="galeria"><img src="
${lence64.imagen}" alt=""><img src="
${lence64.imagen2}" alt=""><img src="
${lence64.imagen3}" alt=""><img src="
${lence64.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence64.imagen2}" alt=""><img src="
${lence64.imagen3}" alt=""><img src="
${lence64.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence64.talla}</p><p>Tela: 
${lence64.tela}</p><p>
${lence64.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence65.modelo}</h4><div class="galeria"><img src="
${lence65.imagen}" alt=""><img src="
${lence65.imagen2}" alt=""><img src="
${lence65.imagen3}" alt=""><img src="
${lence65.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence65.imagen2}" alt=""><img src="
${lence65.imagen3}" alt=""><img src="
${lence65.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence65.talla}</p><p>Tela: 
${lence65.tela}</p><p>
${lence65.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence66.modelo}</h4><div class="galeria"><img src="
${lence66.imagen}" alt=""><img src="
${lence66.imagen2}" alt=""><img src="
${lence66.imagen3}" alt=""><img src="
${lence66.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence66.imagen2}" alt=""><img src="
${lence66.imagen3}" alt=""><img src="
${lence66.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence66.talla}</p><p>Tela: 
${lence66.tela}</p><p>
${lence66.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence67.modelo}</h4><div class="galeria"><img src="
${lence67.imagen}" alt=""><img src="
${lence67.imagen2}" alt=""><img src="
${lence67.imagen3}" alt=""><img src="
${lence67.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence67.imagen2}" alt=""><img src="
${lence67.imagen3}" alt=""><img src="
${lence67.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence67.talla}</p><p>Tela: 
${lence67.tela}</p><p>
${lence67.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence68.modelo}</h4><div class="galeria"><img src="
${lence68.imagen}" alt=""><img src="
${lence68.imagen2}" alt=""><img src="
${lence68.imagen3}" alt=""><img src="
${lence68.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence68.imagen2}" alt=""><img src="
${lence68.imagen3}" alt=""><img src="
${lence68.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence68.talla}</p><p>Tela: 
${lence68.tela}</p><p>
${lence68.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence69.modelo}</h4><div class="galeria"><img src="
${lence69.imagen}" alt=""><img src="
${lence69.imagen2}" alt=""><img src="
${lence69.imagen3}" alt=""><img src="
${lence69.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence69.imagen2}" alt=""><img src="
${lence69.imagen3}" alt=""><img src="
${lence69.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence69.talla}</p><p>Tela: 
${lence69.tela}</p><p>
${lence69.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence70.modelo}</h4><div class="galeria"><img src="
${lence70.imagen}" alt=""><img src="
${lence70.imagen2}" alt=""><img src="
${lence70.imagen3}" alt=""><img src="
${lence70.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence70.imagen2}" alt=""><img src="
${lence70.imagen3}" alt=""><img src="
${lence70.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence70.talla}</p><p>Tela: 
${lence70.tela}</p><p>
${lence70.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence71.modelo}</h4><div class="galeria"><img src="
${lence71.imagen}" alt=""><img src="
${lence71.imagen2}" alt=""><img src="
${lence71.imagen3}" alt=""><img src="
${lence71.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence71.imagen2}" alt=""><img src="
${lence71.imagen3}" alt=""><img src="
${lence71.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence71.talla}</p><p>Tela: 
${lence71.tela}</p><p>
${lence71.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence72.modelo}</h4><div class="galeria"><img src="
${lence72.imagen}" alt=""><img src="
${lence72.imagen2}" alt=""><img src="
${lence72.imagen3}" alt=""><img src="
${lence72.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence72.imagen2}" alt=""><img src="
${lence72.imagen3}" alt=""><img src="
${lence72.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence72.talla}</p><p>Tela: 
${lence72.tela}</p><p>
${lence72.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence73.modelo}</h4><div class="galeria"><img src="
${lence73.imagen}" alt=""><img src="
${lence73.imagen2}" alt=""><img src="
${lence73.imagen3}" alt=""><img src="
${lence73.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence73.imagen2}" alt=""><img src="
${lence73.imagen3}" alt=""><img src="
${lence73.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence73.talla}</p><p>Tela: 
${lence73.tela}</p><p>
${lence73.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence74.modelo}</h4><div class="galeria"><img src="
${lence74.imagen}" alt=""><img src="
${lence74.imagen2}" alt=""><img src="
${lence74.imagen3}" alt=""><img src="
${lence74.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence74.imagen2}" alt=""><img src="
${lence74.imagen3}" alt=""><img src="
${lence74.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence74.talla}</p><p>Tela: 
${lence74.tela}</p><p>
${lence74.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence75.modelo}</h4><div class="galeria"><img src="
${lence75.imagen}" alt=""><img src="
${lence75.imagen2}" alt=""><img src="
${lence75.imagen3}" alt=""><img src="
${lence75.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence75.imagen2}" alt=""><img src="
${lence75.imagen3}" alt=""><img src="
${lence75.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence75.talla}</p><p>Tela: 
${lence75.tela}</p><p>
${lence75.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence76.modelo}</h4><div class="galeria"><img src="
${lence76.imagen}" alt=""><img src="
${lence76.imagen2}" alt=""><img src="
${lence76.imagen3}" alt=""><img src="
${lence76.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence76.imagen2}" alt=""><img src="
${lence76.imagen3}" alt=""><img src="
${lence76.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence76.talla}</p><p>Tela: 
${lence76.tela}</p><p>
${lence76.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence77.modelo}</h4><div class="galeria"><img src="
${lence77.imagen}" alt=""><img src="
${lence77.imagen2}" alt=""><img src="
${lence77.imagen3}" alt=""><img src="
${lence77.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence77.imagen2}" alt=""><img src="
${lence77.imagen3}" alt=""><img src="
${lence77.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence77.talla}</p><p>Tela: 
${lence77.tela}</p><p>
${lence77.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence78.modelo}</h4><div class="galeria"><img src="
${lence78.imagen}" alt=""><img src="
${lence78.imagen2}" alt=""><img src="
${lence78.imagen3}" alt=""><img src="
${lence78.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence78.imagen2}" alt=""><img src="
${lence78.imagen3}" alt=""><img src="
${lence78.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence78.talla}</p><p>Tela: 
${lence78.tela}</p><p>
${lence78.descripcion}</p></div>`
prodcatal.innerHTML += `<h4>
${lence79.modelo}</h4><div class="galeria"><img src="
${lence79.imagen}" alt=""><img src="
${lence79.imagen2}" alt=""><img src="
${lence79.imagen3}" alt=""><img src="
${lence79.imagen4}" alt=""></div><div class="contenedorVistaPrevia"><img src="
${lence79.imagen2}" alt=""><img src="
${lence79.imagen3}" alt=""><img src="
${lence79.imagen4}" alt=""></div><div class="parrafos"><p>Tallas disponibles: 
${lence79.talla}</p><p>Tela: 
${lence79.tela}</p><p>
${lence79.descripcion}</p></div>`