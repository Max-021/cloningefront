(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a27447c"],{"333a":function(t,e,i){var s={"./alquileres.jpg":"c3f9","./ambientacion.jpg":"e0c2","./asistencia-remota.jpg":"4c8e","./atencion.jpg":"36b6","./calculo-de-blindaje.jpg":"8b57","./digitalizacion.jpg":"ab22","./equipamiento.jpg":"e63a","./mantenimiento.jpg":"aabb","./puesta-en-valor.jpg":"1cbe","./servicio-tecnico.jpg":"5865"};function o(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=n,t.exports=o,o.id="333a"},4090:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{class:t.cambiarFondo()},[i("router-view")],1),i("footer-menu")],1)},o=[],n=i("428a"),r={components:{"footer-menu":n["a"]},data:function(){return{fondoRosa:!1}},methods:{esMamo:function(){var t=window.location.href;t=t.split("/"),t=t[t.length-1],this.fondoRosa="mamografos"===t||"captores-digitales"===t},cambiarFondo:function(){return this.fondoRosa?"fondo-mamo padding-container":"padding-container"}},updated:function(){this.esMamo()},created:function(){this.esMamo()}},a=r,c=(i("d91a"),i("2877")),u=Object(c["a"])(a,s,o,!1,null,null,null);e["default"]=u.exports},"428a":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"padding-container py-10 flex flex-col gap-4",attrs:{id:"servicesFooter"}},[i("titles",{staticClass:"pl-4",attrs:{title:"Conozca más sobre nuestro",subtitle:"Prestaciones y servicios",fontSize:31}}),i("div",{staticClass:"grid grid-cols-4 grid-rows-2 gap-y-4 gap-8 mt-4"},t._l(9,(function(e){return i("router-link",{key:e,staticClass:"servicio-container flex flex-col",attrs:{to:t.servicios[e-1].url}},[i("span",{staticClass:"pl-4 footer-menu-title"},[t._v(" "+t._s(t.servicios[e-1].nombreCorto)+" ")]),i("img",{staticClass:"shadow-lg",attrs:{src:t.servicios[e-1].miniBanner}})])})),1)],1)},o=[],n=i("e3c1"),r={data(){return{servicios:[],supportIf:!0}},created(){this.showSupport(),this.setServices()},watch:{$route(t,e){this.show=!1,this.setServices()}},methods:{showSupport(){"servicios"!==this.$route.path.split("/")[1]?this.supportIf=!1:this.supportIf=!0},setServices(){if("servicios"===this.$route.path.split("/")[1]){let t=this.$route.path.split("/")[2],e=n.servicios.find(e=>e.url===t),s=e.exception,o=n.servicios.map(t=>({...t,miniBanner:i("333a")(`./${t.url}.jpg`)}));this.servicios=o.filter(t=>t.url!=s)}this.servicios=n.servicios.map(t=>({...t,miniBanner:i("333a")(`./${t.url}.jpg`)}))}}},a=r,c=(i("f869"),i("2877")),u=Object(c["a"])(a,s,o,!1,null,"6fa589cb",null);e["a"]=u.exports},d91a:function(t,e,i){"use strict";var s=i("e8ec"),o=i.n(s);o.a},e8d6:function(t,e,i){},e8ec:function(t,e,i){},f869:function(t,e,i){"use strict";var s=i("e8d6"),o=i.n(s);o.a}}]);
//# sourceMappingURL=chunk-7a27447c.7bb71a3a.js.map