(this.webpackJsonpphotographyportfolio=this.webpackJsonpphotographyportfolio||[]).push([[0],[,,,function(t,e,a){},function(t,e,a){t.exports=a.p+"static/media/KIT5.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG1.2c8cdfbc.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG2.eb29f65c.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG3.73754e7f.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG4.ab11468b.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG5.ac179aef.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG6.440fdc36.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG7.0863ebd5.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG8.b148c1ca.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG9.ab11468b.jpg"},function(t,e,a){t.exports=a.p+"static/media/BG10.fa2b3467.jpg"},,,,,,function(t,e,a){t.exports=a.p+"static/media/KIT1.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/KIT2.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/KIT3.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/KIT4.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/KIT7.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/KIT8.1a057e83.jpg"},function(t,e,a){t.exports=a.p+"static/media/logo.85a2a146.png"},,,function(t,e,a){t.exports=a(35)},,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(16),c=a.n(i),l=a(2),m=a(17),s=a(18),r=a(27),u=a(19),p=a(28),h=(a(3),a(5)),d=a.n(h),b=a(6),f=a.n(b),w=a(7),g=a.n(w),S=a(8),E=a.n(S),O=a(9),k=a.n(O),x=a(10),v=a.n(x),j=a(11),B=a.n(j),N=a(12),y=a.n(N),C=a(13),I=a.n(C),W=a(14),T=a.n(W),H=a(1),G=a.n(H),K=a(20),M=a.n(K),F=a(21),A=a.n(F),J=a(22),L=a.n(J),D=a(23),P=a.n(D),$=a(4),q=a.n($),z=a(24),Q=a.n(z),R=a(25),U=a.n(R),V=function(t){var e=[M.a,A.a,L.a,P.a,q.a,q.a,Q.a,U.a];return o.a.createElement("div",{className:"kitBox",style:t.kitShow&&!t.albumOpen?{minWidth:"610px"}:{minWidth:"0"}},t.kitShow&&e.map((function(t,e){return o.a.createElement(G.a,{delay:0==e?500:500+200*e},o.a.createElement("img",{className:"kitPics",src:t}))})))},X=function(t){return o.a.createElement("div",{className:"aboutBox",style:t.aboutShow&&!t.albumOpen?{minWidth:"510px"}:{minWidth:"0"}},t.aboutShow&&o.a.createElement(G.a,{delay:200}," ",o.a.createElement("p",null,"Hello World!")," "))},Y=function(t){return o.a.createElement("div",{className:"contactBox",style:t.contactShow&&!t.albumOpen?{minWidth:"510px"}:{minWidth:"0"}},t.contactShow&&o.a.createElement(G.a,{delay:200}," ",o.a.createElement("p",null,"Hello World!")," "))},Z=function(t){var e={All:[d.a,f.a,g.a,E.a,k.a,v.a,B.a,y.a,I.a,T.a],Jungle:[d.a,f.a,g.a],Desert:[E.a,k.a],England:[v.a,B.a,y.a],Tundra:[I.a,T.a]};return o.a.createElement("div",{className:"photosMainBox",id:"photoMainBox"},o.a.createElement(V,{albumOpen:t.albumOpen,kitShow:t.kitShow}),o.a.createElement(X,{albumOpen:t.albumOpen,aboutShow:t.aboutShow}),o.a.createElement(Y,{albumOpen:t.albumOpen,contactShow:t.contactShow}),e[t.albumFilter].map((function(t,e){return o.a.createElement("img",{src:t,class:"photoMain"})})))},_=function(t){return o.a.createElement("div",{className:"albumsBox",style:t.albumOpen?{minWidth:"200px"}:{minWidth:"0"}},o.a.createElement("div",{className:"albums",style:t.albumOpen?{minWidth:"200px"}:{minWidth:"0"}},t.albumOpen&&["All","Jungle","Desert","England","Tundra"].map((function(e,a){return o.a.createElement(G.a,{delay:200*a},o.a.createElement("a",{className:"menuItem menuHover",name:"albumFilter",onClick:t.handleClick},e))}))))},tt=a(26),et=a.n(tt),at=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(t){if("album"==t.target.name&&a.setState((function(t){return{albumOpen:!t.albumOpen,aboutShow:!1,kitShow:!1,contactShow:!1}})),"Kit"==t.target.name&&a.setState((function(t){return{kitShow:!t.kitShow,aboutShow:!1,albumOpen:!1,contactShow:!1}})),"About"==t.target.name&&a.setState((function(t){return{aboutShow:!t.aboutShow,kitShow:!1,albumOpen:!1,contactShow:!1}})),"Contact"==t.target.name&&a.setState((function(t){return{contactShow:!t.contactShow,kitShow:!1,albumOpen:!1,aboutShow:!1}})),"albumFilter"==t.target.name){var e=t.target.innerHTML;if(console.log(e),a.state.albumFilter!=t.target.innerHTML){for(var n=document.getElementsByClassName("photoMain"),o=0;o<n.length;o++)n[o].style.opacity=0;setTimeout((function(){document.getElementById("photoMainBox").scrollLeft=0,a.setState({albumFilter:[e]})}),300),setTimeout((function(){for(var t=document.getElementsByClassName("photoMain"),e=0;e<t.length;e++)t[e].style.opacity=1}),350,e)}}},a.state={albumOpen:!1,albumFilter:"All",kitShow:!1,aboutShow:!1,contactShow:!1},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e;return o.a.createElement("section",null,o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"mainMenu"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:et.a,width:"200"})),o.a.createElement("div",{className:"menuItems"},o.a.createElement("a",(t={name:"album",className:"menuItem"},Object(l.a)(t,"className",this.state.albumOpen?"unselected":"menuHover"),Object(l.a)(t,"onClick",this.handleClick),t),"Albums"),o.a.createElement("a",(e={name:"Kit",className:"menuItem"},Object(l.a)(e,"className",this.state.kitShow?"unselected":"menuHover"),Object(l.a)(e,"onClick",this.handleClick),e),"Kit"),o.a.createElement("a",Object(l.a)({name:"About",className:"menuItem menuHover",onClick:this.handleClick},"className",this.state.aboutShow?"unselected":"menuHover"),"About"),o.a.createElement("a",Object(l.a)({name:"Contact",className:"menuItem menuHover",onClick:this.handleClick},"className",this.state.contactShow?"unselected":"menuHover"),"Contact"))),o.a.createElement(_,{albumOpen:this.state.albumOpen,handleClick:this.handleClick}),o.a.createElement(Z,{albumOpen:this.state.albumOpen,albumFilter:this.state.albumFilter,kitShow:this.state.kitShow,aboutShow:this.state.aboutShow,contactShow:this.state.contactShow})))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[29,1,2]]]);
//# sourceMappingURL=main.1d6fa0c6.chunk.js.map