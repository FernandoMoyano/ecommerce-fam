
const products = [
        { 
            id: 1, 
            name: 'MONITOR 19 LED PHILIPS 193V5LHSB2/55 HDMI', 
            price: 20699, 
            category: 'monitores', 
            img:'https://www.venex.com.ar/products_images/thumb/1585889887_monitor_19_led_philips_193v5lhsb2_55_hdmi.jpg', 
            stock: 25, 
            description:'Tipo de retroiluminación Sistema W-LED'
        },

        { id: 2, 
            name: 'MONITOR 20 HP P204V HDMI 5RD66AA', 
            price: 23099, 
            category: 'monitores', 
            img:'https://www.venex.com.ar/products_images/thumb/1645044944_fghfghj.jpg', 
            stock: 16, 
            description:'Diagonal de la pantalla 49,5 cm (19.5").'
        },


        { 
            id: 3, 
            name: 'MONITOR 20 LED LG 20MK400H-B HDMI HD 75HZ', 
            price: 23299, 
            category: 'monitores', 
            img:'https://www.venex.com.ar/products_images/thumb/1602012560_1572276238_fyl8.jpg', 
            stock: 10, 
            description:'Tamaño (Pulgada) 19.5" / 49.4cm '
        },

        { 
            id: 4, 
            name: 'PLACA DE VIDEO MSI GEFORCE GT 710 1GB DDR3', 
            price: 8799, 
            category: 'placas de video', 
            img:'https://www.venex.com.ar/products_images/thumb/1477928102_gt710msi.jpg', 
            stock: 25, 
            description:'Temperaturas más bajas y mayor eficiencia, Extrema baja ESR.'
        },

        { id: 5, 
            name: 'PLACA DE VIDEO PALIT NVIDIA GEFORCE GT 710 2GB DDR3', 
            price: 9239, 
            category: 'placas de video', 
            img:'https://www.venex.com.ar/products_images/thumb/1600086910_p03387_bigimage_15905d53855e324fb.jpg', 
            stock: 16, 
            description:'Memory Amount 2048MB, Memory Interface 64bit'
        },
    
        { 
            id: 6, 
            name: 'PLACA DE VIDEO POWERCOLOR RX550 LOW PROFILE 4GB GDDR5', 
            price: 15800, 
            category: 'placas de video', 
            img:'https://www.venex.com.ar/products_images/thumb/1645545226_2112161734340.jpg', 
            stock: 10, 
            description:'Descripcion de Ipad'
        },
        { 
            id: 7, 
            name: 'SILLA GAMER AEROCOOL ADMIRAL CHAMPION RED', 
            price: 44400, 
            category: 'butacas', 
            img:'https://www.venex.com.ar/products_images/thumb/1648830906_ghgh.jpg', 
            stock: 25, 
            description:'Peso máximo: <150 kg, Peso recomendado: <125 kg'
        },

        { id: 8, 
            name: 'SILLA GAMER AEROCOOL ADMIRAL SMOOKY BLACK', 
            price: 48000, 
            category: 'butacas', 
            img:'https://www.venex.com.ar/products_images/thumb/1648829712_silla.jpg', 
            stock: 16, 
            description:'Peso máximo: <150 kg, Peso recomendado: <125 kg'
        },
    
        { 
            id: 9, 
            name: 'SILLA GAMER AEROCOOL GUARDION CHAMPION RED', 
            price: 52000, 
            category: 'butacas', 
            img:'https://www.venex.com.ar/products_images/thumb/1641236068_8.jpg', 
            stock: 10, 
            description:'Peso máximo: <150 kg / 330 libras, Peso recomendado: <125 kg / 275 libras'
        }
]



export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 1000)
    })
}