(this["webpackJsonpbuscador-productos-cenabast"]=this["webpackJsonpbuscador-productos-cenabast"]||[]).push([[0],{44:function(e,t,a){e.exports=a(84)},58:function(e,t){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(25),c=a.n(o),l=a(29),s=a.n(l),i=a(37),u=a(6),d=a(8),p=a(86),m=a(85),b=a(26),h=a(88),g=a(87),E=function(e){return n.a.createElement(r.Fragment,null,n.a.createElement("h1",null,"Buscador productos CENABAST"),n.a.createElement(m.a,{direction:"row",gap:"size-100",alignItems:"end",justifyContent:"center",width:"100%",wrap:"wrap"},n.a.createElement(b.b,{maxWidth:"800px",width:"100%"},n.a.createElement("p",null,"Este buscador tiene el proposito de lograr una mejor ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://www.interaction-design.org/literature/topics/ux-design",rel:"noopener noreferrer",target:"_blank"},"Experiencia de Usuario"))," al buscar de productos disponibles en farmacias adheridas a ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://www.cenabast.cl/",rel:"noopener noreferrer",target:"_blank"},"CENABAST")),"."),n.a.createElement("p",null,"Puedes ingresar buscar por nombre (o parte del nombre), c\xf3digo de producto, o por t\xe9rminos presentes en la descripci\xf3n del producto.")),n.a.createElement(g.a,{label:"Ingresa el nombre de un producto para realizar la b\xfasqueda",placeholder:"Ingresa el producto que deseas buscar",onChange:e.setTxtbusqueda,width:"100%",maxWidth:"800px",id:"buscadorproductos",inputMode:"search",type:"search",autoFocus:"true",size:""})))},f=(a(82),Object(r.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,104))}))),w=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!0),l=Object(u.a)(c,2),g=l[0],w=l[1],j=Object(r.useState)([]),k=Object(u.a)(j,2),C=k[0],x=k[1],v=Object(r.useState)(""),O=Object(u.a)(v,2),S=O[0],A=O[1],y=Object(r.useState)({tipoProducto:null,tipoCanasta:null,tipoBases:null,inicioAbasteimiento:null}),z=Object(u.a)(y,2),B=z[0],P=(z[1],Object(r.useState)(0)),_=Object(u.a)(P,2),T=_[0],q=_[1],I=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.text().catch((function(e){console.error(e)}));case 5:r=e.sent,n=[];try{for(c=r.split("\n"),l=1;l<c.length;l++)i=c[l].split("\t"),n.push({codigo:i[0],descCorta:i[1],descLarga:i[2],tipoProducto:i[3],tipoCanasta:i[4],inicioAbastecimiento:i[5],tipoBases:i[6]});o(n)}catch(s){}case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){switch(g){case!0:I("./data/Listado.tsv"),w(!1);break;case!1:var e=[];S.trim().length>4&&a.forEach((function(t){try{(t.descCorta.includes(S.toUpperCase())||t.descLarga.includes(S.toUpperCase())||t.codigo.includes(S.toUpperCase()))&&e.push(t)}catch(a){}})),q(e.length),x(e)}}),[a,B,S]),n.a.createElement(d.a,{theme:p.a,minHeight:"100vh"},n.a.createElement(m.a,{direction:"column",gap:"size-100",alignItems:"center",marginX:"1rem"},n.a.createElement(E,{setTxtbusqueda:A}),n.a.createElement("p",null,0===S.trim().length?null:0===T?"No se encontraron productos":"Hemos encontrado ".concat(T," ").concat(1===T?"producto":"productos",". ")),T>0?n.a.createElement("strong",null,"Para ver la descripci\xf3n completa haz click sobre el nombre del producto"):null,n.a.createElement(r.Suspense,{fallback:"<p>Cargando...</p>"},n.a.createElement(f,{resultadobusqueda:C})),n.a.createElement(b.b,{maxWidth:"800px",width:"100%",marginTop:"2rem"},n.a.createElement("p",null,"El documento con datos fue descargado desde la p\xe1gina ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://www.cenabast.cl/documentos/canasta-de-productos-cenabast/",rel:"noopener noreferrer",target:"_blank"},"Canasta de Productos"))," el d\xeda 29 de Agosto de 2020, donde esta disponible de forma p\xfablica.  Para descargar la fuente de datos actualizada por favor dirigete a ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://www.cenabast.cl/documentos/canasta-de-productos-cenabast/",rel:"noopener noreferrer",target:"_blank"},"Canasta de Productos de CENABAST")),"."),n.a.createElement("p",null,"El proyecto se ha realizado con fines educativos, para poner en practica conocimientos de ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://www.interaction-design.org/literature/topics/ux-design",rel:"noopener noreferrer",target:"_blank"},"UX")),", ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://es.reactjs.org/",rel:"noopener noreferrer",target:"_blank"},"Programaci\xf3n(React)"))," y probar ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://react-spectrum.adobe.com/",rel:"noopener noreferrer",target:"_blank"},"React Spectrum")),". El autor no tiene ninguna relaci\xf3n con ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://www.cenabast.cl/",rel:"noopener noreferrer",target:"_blank"},"CENABAST"))," o el Gobierno de Chile."),n.a.createElement("p",null,"Buscador dise\xf1ado y desarrollado por ",n.a.createElement(h.a,null,n.a.createElement("a",{href:"https://antunez.design",rel:"noopener noreferrer",target:"_blank"},"Mauricio Ant\xfanez")),"."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.f9fa65a4.chunk.js.map