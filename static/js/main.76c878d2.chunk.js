(this.webpackJsonpdespegaa=this.webpackJsonpdespegaa||[]).push([[0],{49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var s=t(2),r=t.n(s),o=t(20),i=t.n(o),c=t(0);var n=function(e){var a=e.logo;return Object(c.jsx)("img",{className:"logo",src:a,alt:"logo"})},l=t(4),d=t(6),m=t(23),g=t(7),u=t.n(g),j=t(21),b=t(22),h=t.n(b),p=t(8),x=t.n(p);function f(){return(f=Object(j.a)(u.a.mark((function e(a,t){var s,r,o,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s=t.comments,r=t.contact,o=t.name,console.log(t),e.prev=5,e.next=8,h.a.post("/send-email",{comments:s,contact:r,name:o});case 8:i=e.sent,c=i.data,console.log(c),x()("Gracias","Nos prondremos en contacto con usted pronto","success"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0),x()("\xa1Oops...!","Occurrio un error, intentelo mas tarde","error");case 18:case"end":return e.stop()}}),e,null,[[5,14]])})))).apply(this,arguments)}var O=function(e,a){return f.apply(this,arguments)};var v=function(){var e=Object(s.useState)({comments:null,contact:null,name:null}),a=Object(m.a)(e,2),t=a[0],r=a[1];function o(e,a){r((function(){return Object(d.a)(Object(d.a)({},t),{},Object(l.a)({},a,e.target.value))}))}return Object(c.jsx)("section",{className:"form-contact headline",id:"contact",children:Object(c.jsxs)("form",{onSubmit:function(e){return O(e,t)},children:[Object(c.jsx)("h4",{children:"\xa1Contactanos!"}),Object(c.jsx)("label",{htmlFor:"fullname",children:"Nombre Completo"}),Object(c.jsx)("input",{required:!0,onChange:function(e){return o(e,"name")},className:"controls",type:"text",name:"fullname",id:"fullName",placeholder:"Ingresa tu nombre completo"}),Object(c.jsx)("label",{htmlFor:"contact",children:"Metodo de contacto"}),Object(c.jsx)("input",{required:!0,onChange:function(e){return o(e,"contact")},className:"controls",type:"text",name:"contact",id:"contact",placeholder:"Email, WhatsApp, Message, numero de telefono"}),Object(c.jsx)("label",{htmlFor:"comments",children:"Mensaje"}),Object(c.jsx)("textarea",{required:!0,onChange:function(e){return o(e,"comments")},className:"controls",rows:"5",placeholder:"Ingresa tu mensaje"}),Object(c.jsx)("input",{className:"botons",type:"submit",value:"Send"})]})})},N=[{backgroundImage:"/images/feature-icon-01.svg",alt:"Campa\xf1as de ADS",title:"Campa\xf1as de ADS",image:"http://despegaa.github.io/images/feature-01.svg",description:"Aprovecha el potencial y todos los beneficios de las campa\xf1as de publicidad digital. Creamos y optimizamos tus campa\xf1as de AdWords en distintas plataformas asegur\xe1ndonos de que tu inversi\xf3n genere prospectos de calidad."},{backgroundImage:"/images/feature-icon-02.svg",alt:"SEO",title:"SEO",image:"http://despegaa.github.io/images/feature-02.svg",description:"Nuestra misi\xf3n es posicionarte en Google. Creamos estrategias y un plan de contenido \xfanico de calidad para lograr que tus clientes potenciales te encuentren en los primeros lugares al buscar tu producto o servicio en Google."},{backgroundImage:"/images/feature-icon-03.svg",alt:"feature 03",title:"Estrategia Digital",image:"http://despegaa.github.io/images/feature-03.svg",description:"Te ayudamos a incrementar las ventas de tu producto o servicio a trav\xe9s de una estrategia digital global de posicionamiento en buscadores y redes sociales para que obtengas los mejores resultados."},{backgroundImage:"/images/feature-icon-04.svg",alt:"Social media manager",title:"Social media manager",image:"http://despegaa.github.io/images/feature-04.svg",description:"Te gestionamos tus redes sociales como solo nosotros sabemos hacerlo para generar la mejor reaccion de tu comunidad."},{backgroundImage:"/images/feature-icon-05.svg",alt:"Dise\xf1o y desarollo web",title:"Dise\xf1o y desarollo web",image:"http://despegaa.github.io/images/feature-05.svg",description:"Dise\xf1amos y configuramos tu desarrollo web con los lineamientos y caracter\xedsticas de tu empresa, con el mejor look and feel y user experience."},{backgroundImage:"/images/feature-icon-06.svg",alt:"Email marketing",title:"Email marketing",image:"http://despegaa.github.io/images/feature-06.svg",description:"Dise\xf1amos y optimizamos tus campa\xf1as de mailing para generar leads o ventas para tu empresa."}];var w=function(e){var a=e.title,t=e.description,s=e.image,r=e.alt,o=e.backgroundImage;return Object(c.jsx)("div",{className:"feature text-center is-revealing headline",children:Object(c.jsxs)("div",{className:"feature-inner",children:[Object(c.jsxs)("div",{className:"feature-icon feature-relative",children:[Object(c.jsx)("img",{className:"image-absolute",src:s,alt:r}),Object(c.jsx)("img",{className:"image-opacity",src:o,alt:r})]}),Object(c.jsx)("h4",{className:"feature-title mt-24",children:a}),Object(c.jsx)("p",{className:"text-sm mb-0",children:t})]})})},y=t(24),k=t(3),I=Object(y.a)();var E=function(){I.reveal(".headline",{duration:600,distance:"20px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:100}),k.a.timeline({targets:".hero-figure-box-05"}).add({duration:400,easing:"easeInOutExpo",scaleX:[.05,.05],scaleY:[0,1],perspective:"500px",delay:k.a.random(0,400)}).add({duration:400,easing:"easeInOutExpo",scaleX:1}).add({duration:800,rotateY:"-15deg",rotateX:"8deg",rotateZ:"-1deg"}),k.a.timeline({targets:".hero-figure-box-06, .hero-figure-box-07"}).add({duration:400,easing:"easeInOutExpo",scaleX:[.05,.05],scaleY:[0,1],perspective:"500px",delay:k.a.random(0,400)}).add({duration:400,easing:"easeInOutExpo",scaleX:1}).add({duration:800,rotateZ:"20deg"}),Object(k.a)({targets:".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",duration:k.a.random(600,800),delay:k.a.random(600,800),rotate:[k.a.random(-360,360),function(e){return e.getAttribute("data-rotation")}],scale:[.7,1],opacity:[0,1],easing:"easeInOutExpo"})};var S=function(){return Object(s.useEffect)((function(){"http://www.despegaa.com/"===window.location.href&&(window.location.href="https://www.despegaa.com/"),E()}),[]),Object(c.jsxs)("div",{className:"body-wrap",children:[Object(c.jsx)("header",{className:"site-header",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"site-header-inner",children:Object(c.jsx)("div",{className:"brand header-brand",children:Object(c.jsx)("h2",{className:"m-0",children:Object(c.jsxs)("div",{className:"logo-container",children:[Object(c.jsx)(n,{logo:"http://despegaa.github.io/images/logo.png"}),Object(c.jsx)("span",{children:"Despegaa"})]})})})})})}),Object(c.jsxs)("main",{children:[Object(c.jsx)("section",{className:"hero hero-margin ",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"hero-inner",children:[Object(c.jsxs)("div",{className:"hero-copy",children:[Object(c.jsx)("h1",{className:"hero-title mt-0",children:"\xa1Incrementa tus ventas en todos los canales!"}),Object(c.jsx)("p",{className:"hero-paragraph",children:"Somos una Agencia de Publicidad que orienta todos sus trabajos bajo los modernos perfiles dictados por los constantes avances tecnol\xf3gicos. Sabemos que el mundo digital es un desaf\xedo constante para todos. Es por eso que nuestro equipo cuenta con las mejores herramientas para desarrollar la estrategia que cada cliente necesita."}),Object(c.jsx)("div",{className:"hero-cta",children:Object(c.jsx)("a",{className:"button button-primary",href:"#contact",children:"\xa1Contactanos!"})})]}),Object(c.jsxs)("div",{className:"hero-figure anime-element hero-figure-relative",children:[Object(c.jsx)("img",{className:"hero-image headline",src:"/images/hero.svg",alt:"hero"}),Object(c.jsx)("svg",{className:"placeholder transparent",width:"528",height:"396",viewBox:"0 0 528 396",children:Object(c.jsx)("rect",{width:"528",height:"396"})}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-01","data-rotation":"45deg"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-02","data-rotation":"-45deg"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-03","data-rotation":"0deg"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-04","data-rotation":"-135deg"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-05"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-06"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-07"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-08","data-rotation":"-22deg"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-09","data-rotation":"-52deg"}),Object(c.jsx)("div",{className:"hero-figure-box hero-figure-box-10","data-rotation":"-50deg"})]})]})})}),Object(c.jsx)("section",{className:"features section",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"features-inner section-inner has-bottom-divider",children:Object(c.jsx)("div",{className:"features-wrap",children:N.map((function(e,a){return Object(c.jsx)(w,{title:e.title,image:e.image,alt:e.alt,description:e.description,backgroundImage:e.backgroundImage},a)}))})})})})]}),Object(c.jsx)("section",{className:"pricing section",children:Object(c.jsx)("div",{className:"container-sm",children:Object(c.jsx)("div",{className:"pricing-inner section-inner",children:Object(c.jsx)("div",{className:"pricing-tables-wrap",children:Object(c.jsx)("div",{className:"pricing-table",children:Object(c.jsx)("div",{className:" is-revealing",children:Object(c.jsx)(v,{})})})})})})}),Object(c.jsx)("footer",{className:"site-footer",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"site-footer-inner",children:[Object(c.jsx)("div",{className:"brand footer-brand",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)(n,{logo:"http://despegaa.github.io/images/logo.png"})})}),Object(c.jsxs)("ul",{className:"footer-links list-reset",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Contactanos"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Acerca de nosotros"})})]}),Object(c.jsxs)("ul",{class:"footer-social-links list-reset",children:[Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:"https://www.facebook.com/despegaa",target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("span",{class:"screen-reader-text",children:"Facebook"}),Object(c.jsx)("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z",fill:"#0270D7"})})]})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://instagram.com/despegaa_marketing_agency",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("i",{className:"fab fa-instagram color-icons"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://wa.me/526391886298",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("i",{className:"fab fa-whatsapp color-icons"})})})]}),Object(c.jsx)("div",{className:"footer-copyright",children:"\xa9 2021 Despegaa"})]})})})]})};t(49),t(50);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.76c878d2.chunk.js.map