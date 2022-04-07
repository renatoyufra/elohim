
const messages = {
    es: {
        menu: {
            home: 'INICIO',
            about: '¿QUIÉNES SOMOS?',
            contact: 'ENCUÉNTRANOS',
            products: 'CATÁLOGO',
            blog: 'NOVEDADES',
            world: 'MUNDO',
            history: 'Historia',
            mission: 'Misión',
            vision: 'Visión',
            medals: 'Presencia Internacional'
        },
        web: {
            features1: 'Estándar de calidad',
            sub1: 'La calidad que mereces',
            features2: 'Productos Frescos',
            sub2: '100% Natural',
            title3: 'Nuestros Productos',
            contact: 'MANTÉNTE EN CONTACTO DE NOSOTROS',
            location: 'Encuéntranos',
            office: 'Oficinas',
            plants: 'Plantas',
            mail: 'Correo',
            subtitle: 'CONOCE NUESTRA PLANTA',
            subtitle2: 'Agricultura natural y de calidad'
        },
        slider: {
            slider1: 'Elohim<br>calidad en tu mesa',
            slider2: 'Aceitunas<br>Enteras, en rodajas y rellenas',
            slider3: '¡Tacna<br>exportando al mundo!',
            slider4: 'Encuentra las mejores recetas<br>y comidas tipicas',
        },
        contact: {
            numbers: 'Nuestros Números'
        },
        products: {
            product1: 'Aceituna Negra Entera',
            product2: '',
            product3: '',
            product4: '',
            product5: '',
            product6: '',
            product7: '',
            product8: '',
            product9: '',
            product10: '',
            product11: '',
            product12: '',
            category1: 'Aceituna',
            category2: 'Sandía',
            category3: 'Especias',
            presentation: 'Bidones :  60 kg<br>Baldes :  3 kg / 15 kg<br>Frasco de vidrio  :  200 kg / 400 kg / 500 Kg<br>Sachet stand up : 150 Kg',
            aditional: 'Almacenar en un ambiente freso y ventilado, de preferencia a temperaturas no mayores a 25°C'

        },
        about: {
            history: 'Somos una empresa familiar peruana dedicada al procesamiento y comercialización de productos agrícolas, teniendo entre sus filas al producto de bandera regional, la Aceituna y derivados.<br><br>Nuestros centros de acopio se encuentran aledañas de donde se obtiene el producto, las fincas de la Yarada en la Región de Tacna y nuestra planta de procesamiento está ubicada en el Parque Industrial de la misma Región.<br><br>Creemos que para ofrecer un buen producto debemos reivindicar al agricultor con un justo precio que compense el sacrificio, esfuerzo y que le permita un crecimiento.',
            mission: 'Ofrecer productos de la más amplia variedad agrícola de calidad, que sobrepasen las expectativas requeridas por nuestros clientes.',
            vision: 'Ser una empresa reconocida por su alta calidad, creando bienestar y crecimiento socioeconómico entre sus agentes con responsabilidad social.'
        },
        world: {
            title: 'En donde te encuentres, te envíamos nuestros productos',
            item1: 'Feria Expoalimentaria 2019',
            description1: 'La Feria Expoalimentaria se ha convertido en la principal  plataforma de negocios en Latinoamérica que reúne a los sectores de alimentos, bebidas, maquinaria, servicios, envases y embalajes para la industria alimentaria. Es organizada por ADEX desde hace 11 años, en conjunto con Mincetur, Minagri, Ministerio de Relaciones Exteriores y Promperú. <br> En la edición 2019, los resultados obtenidos fueron bastante satisfactorios'
        }
    },
    en: {
        menu: {
            home: 'HOME',
            about: 'ABOUT US',
            contact: 'FIND US',
            products: 'PRODUCTS',
            blog: 'BLOG',
            world: 'WORLD',
            history: 'History',
            mission: 'Mission',
            vision: 'Vision',
            medals: 'Internacional Presence'
        },
        web: {
            features1: 'Quality standars',
            sub1: 'The quality you deserve',
            features2: 'Fresh Products',
            sub2: '100% Natural ',
            title3: 'Our Products',
            contact: 'KEEP IN TOUCH WITH US',
            location: 'Find us',
            office: 'Offices',
            plants: 'Plants',
            mail: 'Mails',
            subtitle: 'MEET OUR PLANTS',
            subtitle2: 'Natural and Quality agriculture'
        },
        slider: {
            slider1: 'Elohim<br>quality at your home',
            slider2: 'Olives <br> Whole, sliced ​​and stuffed',
            slider3: 'Tacna<br>exporting to the world!',
            slider4: 'Find the best recipes<br> and typical foods',
        },
        contact: {
            numbers: 'Our Numbers'
        },
        products: {
            product1: 'Olive Negra Entera',
            product2: '',
            product3: '',
            product4: '',
            product5: '',
            product6: '',
            product7: '',
            product8: '',
            product9: '',
            product10: '',
            product11: '',
            product12: '',
            category1: 'Olive',
            category2: 'Watermelon',
            category3: 'Spices',
            presentation: 'Drums :  60 kg <br> Pail :  3 kg / 15 kg<br>Glass bottle  :  200 kg / 400 kg / 500 Kg<br>Sachet stand up : 150 Kg',
            aditional: 'Store in a cool and ventilated environment, preferably at temperatures not exceeding 25 ° C'
        },
        about: {
            history: 'We are a Peruvian family business dedicated to the processing and modifications of agricultural products, having among its ranks the regional flag product, the Olive and derivatives.<br><br>Our collection centers are located nearby where the product is obtained, the Yarada farms in the Tacna Region and our processing plant is located in the Industrial Park of the same Region.<br><br>We believe that to offer a good product we must claim the farmer with a fair price that compensates for the sacrifice, effort and that allows him a growth',
            mission: 'Offer products of the widest quality agricultural variety, which exceed the expectations required by our customers.',
            vision: 'Being a company recognized for its high quality, creating welfare and socioeconomic growth among its agents with social responsibility.'
        },
        world: {
            title: 'Wherever you are, we send you our products',
            item1: 'Expoalimentaria Fair 2019',
            description1: 'The Expoalimentaria Fair has become the main business platform in Latin America that brings together the sectors of food, beverages, machinery, services, containers and packaging for the food industry. It has been organized by ADEX for 11 years, in conjunction with Mincetur, Minagri, Ministry of Foreign Affairs and Promperú. In the 2019 edition, the results obtained were quite satisfactory'
        }
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'es', // set locale
    messages, // set locale messages
})

var vue = new Vue({
    i18n,
    el: "#app",
    data: {
        showDetail: false,
        gato: '',
        base_url: './content/',
        selectedProduct: [{
            id: 0,
            name: 'erorr',
            description: '',
            reg: "cuy", image: 'error.png'
        }],
        iso: 'N3454919NVAEOJM',
        email: '',
        mensaje: '',
        products: [
            { id: 1, name: "Aceituna Negra Entera", reg: "N3454919NVAEOJM", image: "NEGRA-ENTERA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_entera_E.pdf', description: "Productos elaborados con aceitunas negras que han obtenido un Índice de Madurez idóneo; las mismas son fermentadas naturalmente, controladas durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según el pedido, acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos para garantizar el despacho con calidad e inocuidad del producto." },
            { id: 2, name: "Aceituna Negra Rodajada", reg: "N3455119NVAEOJM", image: "NEGRA-RODAJADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_rodajada_E.pdf', description: "Productos elaborados a partir de aceitunas negras enteras que han obtenido un Índice de Madurez idóneo, las mismas han fermentadas naturalmente, controladas durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido y deshuesadas, las mismas han sido rodajeadas o anilladas y acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 3, name: "Aceituna Negra Deshuesada", reg: "N3455019NVAEOJM", image: "NEGRA-DESHUESADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_deshuesado_E.pdf', description: "Productos elaborados con aceitunas negras que han obtenido un Índice de Madurez idóneo, las mismas son fermentadas naturalmente, controladas durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido, y que han sido deshuesadas, acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 4, name: "Aceituna Verde Entera", reg: "N3455219NVAEOJM", image: "VERDE-ENTERA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_entera_E.pdf', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Indice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural  (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 5, name: "Aceituna Verde Rodajada", reg: "N3455419NVAEOJM", image: "VERDE-RODAJADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_rodajada_E.pdf', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Índice de madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas  y rodajeadas, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 6, name: "Aceituna Verde Deshuesada", reg: "N3455319NVAEOJM", image: "VERDE-DESHUESADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_deshuesada_E.pdf', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  han sido deshuesadas y envasadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos hasta su despacho." },
            { id: 7, name: "Aceituna Rellena Castaña", reg: "", image: "RELLENA-CASTANA.jpg", file: '', description: "Son aquellos productos elaborado con aceitunas  verdes  cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor propio de la aceituna (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas, rellenas de trozos de castaña previamente pelada e hidratada, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 8, name: "Aceituna Rellena Pimiento", reg: "", image: "ACEITUNA-RELLENA-PIMIENTO.jpg", file: '', description: "Son aquellos productos elaborado con aceitunas  verdes  cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas, rellenas de trozos de pimiento seleccionados y fermentado naturalmente, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 9, name: "Aceituna Rellena Rocoto", reg: "", image: "VERDE_RELLENASROCOTO.jpg", file: '', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural  (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas, rellenas de trozos de rocoto seleccionados y fermentado naturalmente, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." }
        ],
        esProducts: [
            { id: 1, name: "Aceituna Negra Entera", reg: "N3454919NVAEOJM", image: "NEGRA-ENTERA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_entera_E.pdf', description: "Productos elaborados con aceitunas negras que han obtenido un Índice de Madurez idóneo; las mismas son fermentadas naturalmente, controladas durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según el pedido, acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos para garantizar el despacho con calidad e inocuidad del producto." },
            { id: 2, name: "Aceituna Negra Rodajada", reg: "N3455119NVAEOJM", image: "NEGRA-RODAJADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_rodajada_E.pdf', description: "Productos elaborados a partir de aceitunas negras enteras que han obtenido un Índice de Madurez idóneo, las mismas han fermentadas naturalmente, controladas durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido y deshuesadas, las mismas han sido rodajeadas o anilladas y acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 3, name: "Aceituna Negra Deshuesada", reg: "N3455019NVAEOJM", image: "NEGRA-DESHUESADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_deshuesado_E.pdf', description: "Productos elaborados con aceitunas negras que han obtenido un Índice de Madurez idóneo, las mismas son fermentadas naturalmente, controladas durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido, y que han sido deshuesadas, acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 4, name: "Aceituna Verde Entera", reg: "N3455219NVAEOJM", image: "VERDE-ENTERA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_entera_E.pdf', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Indice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural  (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 5, name: "Aceituna Verde Rodajada", reg: "N3455419NVAEOJM", image: "VERDE-RODAJADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_rodajada_E.pdf', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Índice de madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas  y rodajeadas, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 6, name: "Aceituna Verde Deshuesada", reg: "N3455319NVAEOJM", image: "VERDE-DESHUESADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_deshuesada_E.pdf', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  han sido deshuesadas y envasadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos hasta su despacho." },
            { id: 7, name: "Aceituna Rellena Castaña", reg: "", image: "RELLENA-CASTANA.jpg", file: '', description: "Son aquellos productos elaborado con aceitunas  verdes  cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor propio de la aceituna (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas, rellenas de trozos de castaña previamente pelada e hidratada, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 8, name: "Aceituna Rellena Pimiento", reg: "", image: "ACEITUNA-RELLENA-PIMIENTO.jpg", file: '', description: "Son aquellos productos elaborado con aceitunas  verdes  cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas, rellenas de trozos de pimiento seleccionados y fermentado naturalmente, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." },
            { id: 9, name: "Aceituna Rellena Rocoto", reg: "", image: "VERDE_RELLENASROCOTO.jpg", file: '', description: "Son aquellos productos elaborado con aceitunas  verdes cosechadas sanas, con el Índice de Madurez adecuado  y procesadas por la misma empresa, cocidas con soda para eliminar el amargor natural  (oleuropeina) y con fermentación controlada durante todo el proceso para garantizar su calidad, seleccionadas minuciosamente y calibradas dentro del rango según pedido,  deshuesadas, rellenas de trozos de rocoto seleccionados y fermentado naturalmente, las mismas son acondicionadas en líquido de gobierno (salmuera con aditivos) para asegurar su vida útil, y realizándose muestreos y análisis fisicoquímicos hasta su despacho." }
        ],
        enProducts: [
            { id: 1, name: "Whole Black Olive", reg: "N3454919NVAEOJM", image: "NEGRA-ENTERA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_entera_I.pdf', description: "Products made from whole black olives that have obtained a suitable Maturity Index, they have fermented naturally, controlled throughout the process to guarantee their quality, carefully selected and calibrated within the range as ordered and deboned, they have been rolled or ringed and conditioned in governing liquid (brine with additives) to ensure their useful life, and physicochemical sampling and analysis carried out up to dispatch." },
            { id: 2, name: "Sliced Black Olive", reg: "N3455119NVAEOJM", image: "NEGRA-RODAJADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_rodajada_I.pdf', description: "Products made from whole black olives that have obtained a suitable Maturity Index, they have naturally fermented, controlled throughout the process to guarantee their quality, carefully selected and calibrated within the range according to order and boneless, they have been filmed or ringed and conditioned in government liquid (brine with additives) to ensure its useful life, and physical and chemical sampling and analysis are carried out until its dispatch." },
            { id: 3, name: "Boneless Black Olive", reg: "N3455019NVAEOJM", image: "NEGRA-DESHUESADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_negra_deshuesado_I.pdf', description: "Products made with black olives that have obtained a suitable Maturity Index, they are naturally fermented, controlled throughout the process to guarantee their quality, carefully selected and calibrated within the range as requested, and that have been boned, conditioned in liquid of government (brine with additives) to ensure its useful life, and physical and chemical sampling and analysis are carried out until its dispatch." },
            { id: 4, name: "Whole Green Olive", reg: "N3455219NVAEOJM", image: "VERDE-ENTERA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_entera_I.pdf', description: "Products made with healthy harvested green olives, with the appropriate Maturity Index and processed by the same company, cooked with soda to eliminate natural bitterness (oleuropein) and with controlled fermentation throughout the process to ensure its quality, carefully selected and calibrated within of the range according to order, conditioned in liquid of government (brine with additives) to assure its useful life, and carrying out samples and physicochemical analyzes until its dispatch." },
            { id: 5, name: "Sliced Green Olive", reg: "N3455419NVAEOJM", image: "VERDE-RODAJADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_rodajada_I.pdf', description: "Products made with healthy harvested green olives, with the appropriate maturity index and processed by the same company, cooked with soda to eliminate natural bitterness (oleuropein) and with controlled fermentation throughout the process to guarantee its quality, carefully selected and calibrated within of the range according to order, boned and rolled, they are conditioned in liquid of government (brine with additives) to assure its useful life, and carrying out samples and physicochemical analyzes until its dispatch." },
            { id: 6, name: "Boneless Green Olive", reg: "N3455319NVAEOJM", image: "VERDE-DESHUESADA.jpg", file: './content/' + 'Ficha_tecnica_-_Aceituna_verde_deshuesada_I.pdf', description: "Products made with healthy harvested green olives, with the appropriate Maturity Index and processed by the same company, cooked with soda to eliminate natural bitterness (oleuropein) and with controlled fermentation throughout the process to guarantee its quality, carefully selected and calibrated within of the range as requested, they have been boned and packed in government liquid (brine with additives) to ensure its useful life, and sampling is carried out until its dispatch." },
            { id: 7, name: "Chestnut stuffed olive", reg: "", image: "RELLENA-CASTANA.jpg", file: '', description: "Products made with healthy harvested green olives, with the appropriate Maturity Index and processed by the same company, cooked with soda to eliminate the olive's own bitterness (oleuropein) and with controlled fermentation throughout the process to guarantee its quality, carefully selected and calibrated within the range as requested, boned, filled with pieces of chestnut previously peeled and hydrated, they are conditioned in government liquid (brine with additives) to ensure its useful life, and physical and chemical samples and analyzes are carried out until dispatch." },
            { id: 8, name: "Pepper Stuffed Olive", reg: "", image: "ACEITUNA-RELLENA-PIMIENTO.jpg", file: '', description: "Products made with healthy harvested green olives, with the appropriate Maturity Index and processed by the same company, cooked with soda to eliminate natural bitterness (oleuropein) and with controlled fermentation throughout the process to guarantee its quality, carefully selected and calibrated within from the range on request, boneless, stuffed with pieces of pepper selected and naturally fermented, they are conditioned in government liquid (brine with additives) to ensure its shelf life, and physical sampling and analysis are carried out until its dispatch." },
            { id: 9, name: "Rocoto Stuffed Olive", reg: "", image: "VERDE_RELLENASROCOTO.jpg", file: '', description: "Products made with healthy harvested green olives, with the appropriate Maturity Index and processed by the same company, cooked with soda to eliminate natural bitterness (oleuropein) and with controlled fermentation throughout the process to guarantee its quality, carefully selected and calibrated within of the range as requested, boneless, filled with selected rocoto pieces and naturally fermented, they are conditioned in government liquid (brine with additives) to ensure its useful life, and physical sampling and analysis are carried out until its dispatch." }
        ]
    },
    watch: {
        gato() {
            const search = this.gato;
            if (!search) {
                this.selectedProduct = ''
            }
            this.selectedProduct = this.products.filter(c => c.id == search);
        }
    },
    methods: {
        details: function (cuyo, imagen) {
            this.showDetail = true
            this.gato = cuyo
            this.foto = imagen

        },
        language: function (idioma) {
            i18n.locale = idioma
            if (idioma == 'en') {
                this.products = this.enProducts;
            } else {
                this.products = this.esProducts;
            }
        },
        close: function () {
            this.showDetail = false
            this.$refs.products.focus();
        },
        enviar: function () {
            var url = 'correo.php';
            let formulario = new FormData(document.getElementById("frmContacto"))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            })
            
            fetch(url, {
                method: 'POST',
                body: formulario,
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response))
                .then(Toast.fire({
                    type: 'success',
                    title: 'Correo enviado'
                }));
        }
    }
})

