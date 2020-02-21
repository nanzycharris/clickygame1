(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"name":"Apu","image":"../images/ApuIcon.jpg"},{"id":2,"name":"Bart","image":"../images/BartIcon.jpg"},{"id":3,"name":"Burns","image":"../images/BurnsIcon.jpg"},{"id":4,"name":"Grampa","image":"../images/GrampaIcon.jpg"},{"id":5,"name":"Homer","image":"../images/HomerIcon.jpg"},{"id":6,"name":"Krusty","image":"../images/KrustyIcon.jpg"},{"id":7,"name":"Lisa","image":"../images/LisaIcon.jpg"},{"id":8,"name":"Maggie","image":"../images/MaggieIcon.jpg"},{"id":9,"name":"Marge","image":"../images/MargeIcon.jpg"},{"id":10,"name":"Milhouse","image":"../images/MilhouseIcon.jpg"},{"id":11,"name":"Moe","image":"../images/MoeIcon.jpg"},{"id":12,"name":"Ned","image":"../images/NedIcon.jpg"}]')},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),o=(a(29),a(15)),s=a(16),l=a(9),m=a(17),g=a(18),u=a(21),d=a(50),h=function(e){return r.a.createElement(d.a,e,e.children)},p=a(36),f=function(e){return r.a.createElement(p.a,null,e.children)},k=(a(32),function(e){var t=e.id,a=e.name,n=e.image,i=e.handlePicked;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t,"data-id":t,name:a,style:{backgroundImage:"url(".concat(n,")")},onClick:i}))}),v=(a(33),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),y=(a(34),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",{className:"default-msg black"},"Click on an image to earn points, but don't click on any more than once!"))}),E=a(51),w=a(52),j=a(53),b=function(e){return r.a.createElement("div",null,r.a.createElement(E.a,Object.assign({position:"static"},e),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"headline",color:"inherit",align:"center"},"The Simpsons Clicky Game"))))},M=a(20),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={characters:M,pickedChars:[],topScore:0,alertMessage:""},a.handlePicked=function(e){var t=e.target.attributes.getNamedItem("name").value;a.shuffleCharacters(),a.checkGuess(t,a.updateTopScore)},a.shuffleCharacters=function(){a.setState(a.state.characters=a.shuffleArray(a.state.characters))},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.checkGuess=function(e,t){var n=Object(o.a)({},a.state);n.pickedChars.includes(e)?(n.alertMessage="D'oh! You already picked ".concat(e,"!"),n.pickedChars=[],a.setState(a.state=n)):(n.pickedChars.push(e),n.alertMessage="Hi-diddly-ho! Excellent choice!",a.setState(a.state=n)),t(n,a.alertWinner)},a.updateTopScore=function(e,t){e.pickedChars.length>e.topScore&&(e.topScore++,a.setState(a.state=e)),t(e)},a.alertWinner=function(e){12===e.pickedChars.length&&(e.alertMessage="Winner!",e.pickedChars=[],a.setState(a.state=e))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{style:{background:"#313133",marginBottom:"5px"}}),r.a.createElement(h,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(h,{item:!0,lg:12},r.a.createElement(f,null,"Excellent choice!"===this.state.alertMessage?r.a.createElement(y,{message:this.state.alertMessage,style:{color:"green"}}):r.a.createElement(y,{message:this.state.alertMessage,style:{color:"red"}}))),r.a.createElement(h,{container:!0,justify:"space-between"},r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(v,{type:"Score",score:this.state.pickedChars.length}))),r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(v,{type:"Top Score",score:this.state.topScore}))))),r.a.createElement(h,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.characters.map((function(t){return r.a.createElement(h,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(k,{id:t.id,name:t.name,image:t.image,key:t.id,handlePicked:e.handlePicked}))}))))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clickygame1",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/clickygame1","/service-worker.js");S?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.d69ee7a4.chunk.js.map