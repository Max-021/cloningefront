(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-074d89b5"],{"245d":function(t,e,a){},"47aa":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("product-template",{scopedSlots:t._u([{key:"productInfo",fn:function(){return[o("caracteristicas",{attrs:{datos:t.producto.caracteristicas}}),o("especificaciones",{attrs:{datos:t.producto.especificaciones}}),o("div",{staticClass:"mb-20 mt-8 banner-marcas"},[o("titles",{attrs:{fontSize:25,lineHeight:20,subtitle:"Nuestras Marcas"}}),o("titles",{attrs:{fontSize:20,title:"Los mejores modelos del mercado"}}),o("img",{staticClass:"bg-white absolute left-0 mt-4 mb-8",attrs:{src:a("bc55"),alt:"Banner Mamografia",width:"100%"}})],1),o("documentos",{attrs:{brochures:t.producto.brochures}})]},proxy:!0}])},[t.showModal?o("modal",{attrs:{header:!1},scopedSlots:t._u([{key:"content",fn:function(){return[o("contact-form",{attrs:{producto:t.producto.nombreCompleto},on:{closeModal:function(e){t.showModal=!1}}})]},proxy:!0}],null,!1,3767326897)}):t._e()],1)},s=[],c=a("1477"),n=a("5807"),i=a("e85c"),r=a("c8dfe"),l=a("6efe"),u=a("1d71"),d=a("b993"),p=a("2d0e"),f={props:["slug"],mixins:[c["a"]],components:{"product-template":u["a"],caracteristicas:n["a"],documentos:i["a"],especificaciones:r["a"],"galeria-productos":l["a"],"banner-contacto":d["default"],"contact-form":p["a"]},data(){return{producto:"",showModal:!1}},beforeMount(){this.producto=this.getProductEquipment(this.slug)}},m=f,g=(a("926d"),a("2877")),b=Object(g["a"])(m,o,s,!1,null,"47e89b7e",null);e["default"]=b.exports},"5e49":function(t,e,a){},"6efe":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"galeria flex flex-col py-4 gap-4"},[a("titles",{attrs:{subtitle:"Galería",fontSize:25}}),a("div",{staticClass:"opcion-imagen opcion-activa",staticStyle:{"font-family":"'IngeTextBold', Arial, Helvetica, sans-serif"}},[t._v(" Imágenes Clínicas ")]),a("div",{staticClass:"imagenes-galeria flex gap-4 flex-wrap justify-around"},t._l(t.datos.slice(0,6),(function(t,e){return a("div",{key:e},[a("img",{attrs:{src:t.productImage,alt:t.productName,width:"125"}})])})),0),a("small",{staticClass:"mb-4"},[t._v("Las imágenes de los equipos son ilustrativas. Póngase en contacto y solicite un presupuesto personalizado para recibir información e imágenes actualizadas")]),a("button",{staticClass:"contact-outline",on:{click:function(e){t.showModal=!0}}},[t._v("Ver Más")]),t.showModal?a("Modal",{attrs:{header:!0},on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"title blue"},[t._v("Imágenes de los equipos")])]},proxy:!0},{key:"content",fn:function(){return[a("div",{staticClass:"images-container overflow-y-scroll"},[a("div",{staticClass:"images"},t._l(t.datos,(function(t,e){return a("img",{key:e,attrs:{src:t.productImage,alt:t.productName}})})),0)])]},proxy:!0}],null,!1,3984173224)}):t._e()],1)},s=[],c=a("4169"),n={components:{Modal:c["default"]},props:["datos"],data(){return{showModal:!1,productosGaleria:[]}},created:function(){this.productosGaleria=this.datos.map(t=>{t.productImage=a("edce")("./"+t.productImage)})}},i=n,r=(a("eab2"),a("2877")),l=Object(r["a"])(i,o,s,!1,null,"161d0e00",null);e["a"]=l.exports},"926d":function(t,e,a){"use strict";var o=a("245d"),s=a.n(o);s.a},eab2:function(t,e,a){"use strict";var o=a("5e49"),s=a.n(o);s.a}}]);
//# sourceMappingURL=chunk-074d89b5.a8c20b33.js.map