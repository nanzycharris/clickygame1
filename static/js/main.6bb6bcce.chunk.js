(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"name":"Apu","image":"../images/ApuIcon.jpg"},{"id":2,"name":"Bart","image":"../images/BartIcon.jpg"},{"id":3,"name":"Burns","image":"../images/BurnsIcon.jpg"},{"id":4,"name":"Grampa","image":"../images/GrampaIcon.jpg"},{"id":5,"name":"Homer","image":"../images/HomerIcon.jpg"},{"id":6,"name":"Krusty","image":"../images/KrustyIcon.jpg"},{"id":7,"name":"Lisa","image":"../images/LisaIcon.jpg"},{"id":8,"name":"Maggie","image":"../images/MaggieIcon.jpg"},{"id":9,"name":"Marge","image":"../images/MargeIcon.jpg"},{"id":10,"name":"Milhouse","image":"../images/MilhouseIcon.jpg"},{"id":11,"name":"Moe","image":"../images/MoeIcon.jpg"},{"id":12,"name":"Ned","image":"../images/NedIcon.jpg"}]')},24:function(e,a,t){e.exports=t(35)},29:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),c=t.n(i),o=(t(29),t(15)),s=t(16),l=t(9),m=t(17),g=t(18),u=t(21),d=t(50),h=function(e){return r.a.createElement(d.a,e,e.children)},p=t(36),f=function(e){return r.a.createElement(p.a,null,e.children)},k=(t(32),function(e){var a=e.id,t=e.name,n=e.image,i=e.handlePicked;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:a,"data-id":a,name:t,style:{backgroundImage:"url(".concat(n,")")},onClick:i}))}),v=(t(33),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),y=(t(34),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",{className:"default-msg black"},"Click on an image to earn points, but don't click on any more than once!"))}),E=t(51),w=t(52),j=t(53),b=function(e){return r.a.createElement("div",null,r.a.createElement(E.a,Object.assign({position:"static"},e),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"headline",color:"inherit",align:"center"},"The Simpsons Clicky Game"))))},M=t(20),C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={characters:M,pickedChars:[],topScore:0,alertMessage:""},t.handlePicked=function(e){var a=e.target.attributes.getNamedItem("name").value;t.shuffleCharacters(),t.checkGuess(a,t.updateTopScore)},t.shuffleCharacters=function(){t.setState({characters:t.shuffleArray(t.state.characters)})},t.shuffleArray=function(e){var a,t,n;for(n=e.length-1;n>0;n--)a=Math.floor(Math.random()*(n+1)),t=e[n],e[n]=e[a],e[a]=t;return e},t.checkGuess=function(e,a){var n=Object(o.a)({},t.state);n.pickedChars.includes(e)?(n.alertMessage="D'oh! You already picked ".concat(e,"!"),n.pickedChars=[],t.setState(n)):(n.pickedChars.push(e),n.alertMessage="Hi-diddly-ho! Excellent choice!",t.setState(n)),a(n,t.alertWinner)},t.updateTopScore=function(e,a){e.pickedChars.length>e.topScore&&(e.topScore++,t.setState(e)),a(e)},t.alertWinner=function(e){12===e.pickedChars.length&&(e.alertMessage="Winner!",e.pickedChars=[],t.setState(e))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{style:{background:"#313133",marginBottom:"5px"}}),r.a.createElement(h,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(h,{item:!0,lg:12},r.a.createElement(f,null,"Excellent choice!"===this.state.alertMessage?r.a.createElement(y,{message:this.state.alertMessage,style:{color:"green"}}):r.a.createElement(y,{message:this.state.alertMessage,style:{color:"red"}}))),r.a.createElement(h,{container:!0,justify:"space-between"},r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(v,{type:"Score",score:this.state.pickedChars.length}))),r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(v,{type:"Top Score",score:this.state.topScore}))))),r.a.createElement(h,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.characters.map((function(a){return r.a.createElement(h,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(k,{id:a.id,name:a.name,image:a.image,key:a.id,handlePicked:e.handlePicked}))}))))}}]),a}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clickygame1",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/clickygame1","/service-worker.js");S?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.6bb6bcce.chunk.js.map