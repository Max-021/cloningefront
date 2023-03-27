(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff64fe7"],{"0806":function(e,a,i){"use strict";var o=i("4a9c"),t=i.n(o);t.a},"222f":function(e,a,i){"use strict";var o=i("c527"),t=i.n(o);t.a},"2fe3":function(e,a,i){"use strict";var o=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"flex flex-col gap-12 pb-16"},[i("banner-box",{attrs:{bannerName:e.serviceBanner},scopedSlots:e._u([{key:"title",fn:function(){return[e._t("serviceTitle")]},proxy:!0},{key:"stuff",fn:function(){return[i("p",{staticClass:"text-justify text-xl",domProps:{innerHTML:e._s(e.description)}})]},proxy:!0}],null,!0)}),i("div",{staticClass:"px-16"},[i("div",{staticClass:"pb-4"},[i("path-route")],1),e._t("serviceInfo")],2)],1)},t=[],s=i("d1d1"),n=i("5335"),r={props:["bannerName","description","slug"],components:{"banner-box":s["a"],"path-route":n["a"]},computed:{serviceBanner(){const e=this.$route.path.split("/")[2];return`${this.$imageCDN}/banner-servicio-${e}.jpg`}}},c=r,l=i("2877"),p=Object(l["a"])(c,o,t,!1,null,null,null);a["a"]=p.exports},"4a9c":function(e,a,i){},5335:function(e,a,i){"use strict";var o=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"flex"},e._l(e.pathArray,(function(a,o){return i("div",{key:o,staticClass:"flex",style:e.pathStyle},[i("p",[e._v(e._s(a))]),o<e.pathArray.length-1?i("p",{staticClass:"space-path"},[e._v(">")]):e._e()])})),0)},t=[],s={props:["slug"],data(){return{pathArray:[],pathStyle:{}}},created(){this.resetArray(),this.seteatPath(this.$router.currentRoute.path)},methods:{resetArray(){this.pathArray=[]},seteatPath(e){e=e.split("/"),e.includes("clientes")&&(this.pathArray=["Inicio","Diagnóstico por Imágenes","Clientes"],this.pathStyle={fontWeight:"bold"}),e.includes("veterinaria")?this.pathArray=["Inicio","Productos","División Veterinaria"]:e.includes("productos")&&(this.pathArray=["Inicio","Productos","Humanos"],this.pathArray.push(this.$router.currentRoute.name)),e.includes("servicios")&&(this.pathArray=["Inicio","Servicios"],this.pathArray.push(this.$router.currentRoute.name))}}},n=s,r=(i("0806"),i("2877")),c=Object(r["a"])(n,o,t,!1,null,null,null);a["a"]=c.exports},"6aa6":function(e,a,i){"use strict";i.r(a);var o=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("service-template",{attrs:{bannerName:e.servicio.banner,description:e.servicio.descripcion},scopedSlots:e._u([{key:"serviceTitle",fn:function(){return[o("titles",{attrs:{title:e.servicio.titulo,subtitle:e.servicio.subtitulo,fontSize:31}})]},proxy:!0},{key:"serviceInfo",fn:function(){return[o("div",{staticClass:"flex flex-col"},[o("titles",{attrs:{title:"Conozca las posibilidades de",subtitle:"Integración Tecnológica",fontSize:31}}),o("p",{staticClass:"text-justify mt-4 text-xl",staticStyle:{columns:"250px 2"}},[e._v(" Instalamos también en forma local o remota software dedicado y sistemas de redes y servidores PACS (sistema de almacenamiento y transmisión de imágenes) para que todas la imágenes en formato DICOM que se generen en una locación o grupo, tanto provengan de equipos de DR radiología digital directa, CR, Tomografía Computada, Resonancia Magnética, Ecografía, etcétera. Se centralicen en un Web Server (servidor en línea) de forma que se pueda acceder en tiempo real a los archivos de imágenes de pacientes tanto dentro de la locación como para realizar los informes médicos a distancia. Por otro lado, proveemos de Sistemas de Video Digitales para equipos de radiología intervencionista basados en intensificador de imágenes a los cuales se les renueva tanto con tecnología de chips captores de alta resolución de tecnología astronómica con ordenador industrial de altísima velocidad de procesamiento que posibilita imágenes dinámicas de alta resolución en tiempo real como con Flat Panel para radioscopía. ")]),o("titles",{staticClass:"mt-10",attrs:{subtitle:"Variedad de Configuraciones",fontSize:31}}),o("span",{staticClass:"-mt-1",attrs:{id:"little-subtitle"}},[e._v("Diseños adaptables a las necesidades específicas de cada Cliente")]),o("img",{staticClass:"mt-1",attrs:{src:i("fd9d"),alt:"diagrama de instalacion de ejemplo"}})],1)]},proxy:!0}])})},t=[],s=i("d58e"),n=i("2fe3"),r={props:["slug"],mixins:[s["a"]],components:{"service-template":n["a"]},data(){return{servicio:""}},beforeMount(){this.servicio=this.getServiceInfo(this.slug)},methods:{convertToLink(){return"<router-link to='/productos'>Flat Panel</router-link>"}}},c=r,l=(i("222f"),i("2877")),p=Object(l["a"])(c,o,t,!1,null,null,null);a["default"]=p.exports},"79bc":function(e,a,i){"use strict";var o=i("a920"),t=i.n(o);t.a},a920:function(e,a,i){},a9d6:function(e){e.exports=JSON.parse('{"rental_equipment":[{"rental_equipment_category":"Radiología Convencional","rental_equipment_name":"Equipos de Sala","rental_equipment_url":"equipos-de-sala","rental_equipment_dev":"equipos-de-sala","rental_equipment_carousel_description":"Ofrecemos instalar  en alquiler equipos radiológicos completos de diferentes características en lo que hace a tamaño, potencia, y precio para proyectos y necesidades  de mediano y largo plazo.","rental_equipment_carousel_images":["equipos-de-sala-img-1.jpg","equipos-de-sala-img-2.jpg","equipos-de-sala-img-3.jpg","equipos-de-sala-img-4.jpg","equipos-de-sala-img-5.jpg"],"rental_equipment_description":"Los equipos a instalar en las salas a designar por el cliente, serán pre-acondicionados a los efectos de la posterior instalación y también se ofrece todo el asesoramiento necesario para los profesionales de Arquitectura e Ingeniería Clínica a cargo del proyecto, en caso de obra nueva o reforma o de los encargados del Servicio de Imágenes para el caso de una incorporación o reemplazo temporario de equipamiento. Los equipos a proveer son de diversas características pero cuyo nivel de inicio es el necesario para la realización de toda la rutina de Radiología General, adaptando las prestaciones a, la carga de trabajo proyectada o en curso, condiciones ambientales, disposición de potencia eléctrica, necesidades especiales y presupuesto del cliente.","rental_equipment_technique_details":["equipos-de-sala.jpg"],"rental_equipment_galery_images":[{"basic_image":"equipos-de-sala-gal-1","extension":".png"},{"basic_image":"equipos-de-sala-gal-2","extension":".png"},{"basic_image":"equipos-de-sala-gal-3","extension":".png"},{"basic_image":"equipos-de-sala-gal-4","extension":".png"}]},{"rental_equipment_category":"Radiología Convencional","rental_equipment_name":"Equipos Moviles","rental_equipment_url":"equipos-moviles","rental_equipment_dev":"equipos-moviles","rental_equipment_carousel_description":"Inge Ray  provee en alquiler equipos móviles de diferentes características en lo que hace a tamaño, potencia, consumo, movilidad, precio tanto a corto como largo plazo.","rental_equipment_carousel_images":["equipos-moviles-img-1.jpg","equipos-moviles-img-2.jpg","equipos-moviles-img-3.jpg","equipos-moviles-img-4.jpg","equipos-moviles-img-5.jpg","equipos-moviles-img-6.jpg","equipos-moviles-img-7.jpg","equipos-moviles-img-8.jpg","equipos-moviles-img-9.jpg","equipos-moviles-img-10.jpg","equipos-moviles-img-11.jpg","equipos-moviles-img-12.jpg"],"rental_equipment_description":"La Línea Básica incluye Equipos rodantes livianos para uso en UTI, UCO, Terapia Pediátrica y habitaciones o salas con poca movilidad entre camas y tomas de corriente de potencia y fichas de potencia hasta 15 A. También podemos proveer Equipos rodantes de Línea Clásica con Mayor Potencia, puestos en valor, de frecuencia industrial con cabezal monoblock o tubo radiógeno independiente de hasta 10kW. Éstos están equipados con Pies rodantes de fabricación propia con accionamiento eléctrico del brazo portatubo, lo que hace de la operación de estos equipos medianos una tarea simple para el Técnico Radiólogo a la hora del posicionamiento para el disparo. La Gama Superior incluye Equipos móviles con fuentes de alta frecuencia y hasta 32kW  con tubos de ánodo giratorio y bajísimo consumo dado el sistema de fuentes de alimentación con carga capacitiva. Al igual que los equipos de la gama media, estos aparatos poseen pies rodantes de fácil desplazamiento y brazo cigüeña y pueden incluso llegar a reemplazar por un plazo necesario a un equipo de sala con desperfectos o con necesidad de reparación.","rental_equipment_technique_details":["equipos-moviles-basica.jpg","equipos-moviles-clasica.jpg","equipos-moviles-superior.jpg"],"rental_equipment_galery_images":[{"basic_image":"equipos-moviles-gal-1","extension":".jpg"},{"basic_image":"equipos-moviles-gal-2","extension":".jpg"},{"basic_image":"equipos-moviles-gal-3","extension":".jpg"}]},{"rental_equipment_category":"Radiología Intervensionista","rental_equipment_name":"Arcos en C","rental_equipment_url":"arcos-c","rental_equipment_dev":"arcos-c","rental_equipment_carousel_description":"Proveemos en alquiler equipos móviles de Arco en C para Radiología Intervencionista de diferentes características en lo que hace a tamaño, potencia, movilidad y precio, carga de trabajo proyectada para ser entregados  en períodos tanto de corto como  de largo plazo.","rental_equipment_carousel_images":["arcos-c-img-1.jpg","arcos-c-img-2.jpg","arcos-c-img-3.jpg","arcos-c-img-4.jpg","arcos-c-img-5.jpg","arcos-c-img-6.jpg","arcos-c-img-7.jpg","arcos-c-img-8.jpg"],"rental_equipment_description":"Inge Ray  provee en alquiler equipos móviles de diferentes características en lo que hace a tamaño, potencia, consumo, movilidad, precio tanto a corto como largo plazo. Hay a disposición desde Equipos de Arco Livianos para uso en Quirófanos con poca movilidad y baja exigencia radiante como cirugías de miembros superiores hasta Arcos en  C de Potencia con posibilidad de realizar cirugías traumatológicas de columna lumbosacra y cardiovascular.","rental_equipment_technique_details":["arcos-c.jpg"],"rental_equipment_galery_images":[]}]}')},c527:function(e,a,i){},d1d1:function(e,a,i){"use strict";var o=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"inge-shadow-down flex flex-col mt-4"},[i("img",{attrs:{src:e.bannerName,alt:"banner-contactos"}}),i("div",{staticClass:"banner-content flex flex-col gap-6 relative"},[i("div",{attrs:{id:"banner-section-title"}},[e._t("title")],2),i("div",{attrs:{id:"banner-section-stuff"}},[e._t("stuff")],2),i("button",{staticClass:"\n        bot-button\n        rounded-full\n        h-20\n        w-20\n        absolute\n        right-6\n        -bottom-12\n        cursor-pointer\n      ",on:{click:function(a){e.showModal=!0}}})]),e.showModal?i("modal",{attrs:{large:"sm"},on:{close:function(a){e.showModal=!1}},scopedSlots:e._u([{key:"content",fn:function(){return[i("simple-contact-form",{on:{close:function(a){e.showModal=!1}}})]},proxy:!0}],null,!1,4151273575)},[e._v(" >")]):e._e()],1)},t=[],s=i("f89e"),n={name:"banner-box",props:["bannerName"],components:{"simple-contact-form":s["a"]},data(){return{load:!1,showModal:!1}}},r=n,c=(i("79bc"),i("2877")),l=Object(c["a"])(r,o,t,!1,null,null,null);a["a"]=l.exports},d58e:function(e,a,i){"use strict";i.d(a,"a",(function(){return s}));var o=i("e3c1"),t=i("a9d6");const s={methods:{getServiceInfo:function(e){return o.servicios.find(a=>a.url===e)},getRentInfo:function(e){return t.rental_equipment.find(a=>a.rental_equipment_url===e)},getRentCarouselImages:function(e){const a=this.getRentInfo(e);return a.rental_equipment_carousel_images}}}}}]);
//# sourceMappingURL=chunk-7ff64fe7.ab31a0d5.js.map