(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(n,e,r){n.exports=r(56)},30:function(n,e,r){},33:function(n,e,r){},56:function(n,e,r){"use strict";r.r(e);var t,o=r(0),a=r.n(o),c=r(7),i=r.n(c),u=(r(30),r(22)),l=r(4),f=r.n(l),s=r(8),b=r(6),p=(r(33),r(5)),d=r.n(p),g=[{type:"AAAAA",bcgColor:"#8b59be",borderColor:"#7240a4"},{type:"AAAA",bcgColor:"#596abe",borderColor:"#4051a4"},{type:"AAA",bcgColor:"#599ebe",borderColor:"#4084a4"},{type:"AA",bcgColor:"#67cd75",borderColor:"#41c052"},{type:"A",bcgColor:"#cebe5a",borderColor:"#bdab38"},{type:"B",bcgColor:"#d7954b",borderColor:"#d7954b"},{type:"C",bcgColor:"#e75637",borderColor:"#d23a19"},{type:"D",bcgColor:"#d12f2f",borderColor:"#a82525"}],v=function(n){return n.reduce(function(n,e){return n+e.amount},0)/n.length},m=function(){var n=new URL(window.location.href).searchParams.get("sample_size")||"";return parseInt(n,10)||1e3},C=function(){var n=Object(s.a)(f.a.mark(function n(e){var r;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.chosenRating,t=null,n.abrupt("return",d.a.get("".concat("https://api.zonky.cz","/loans/marketplace?rating__in=").concat(JSON.stringify(r),"&fields=amount%2Cid%2Crating"),{cancelToken:new d.a.CancelToken(function(n){t=n}),headers:{"x-size":m(),"x-order":"-datePublished"}}));case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),h=r(2),w=r(3);function y(){var n=Object(h.a)(["\n  margin-top: 8px;\n  display: inline-block;\n  padding: 8px 0;\n  min-width: 56px;\n  line-height: 14px;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  background-color: ",";\n  color: ",";\n  border: 1px solid\n    ",";\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n    border: 1px solid ",";\n    color: #fff;\n  }\n"]);return y=function(){return n},n}function x(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return x=function(){return n},n}var k=w.a.div(x()),j=w.a.div(y(),function(n){var e=n.active,r=n.bcgColor;return e?r:"#fff"},function(n){var e=n.active,r=n.bcgColor;return e?"#fff":r},function(n){var e=n.active,r=n.borderColor;return e?r:"#e7e7e7"},function(n){return n.bcgColor},function(n){return n.borderColor});function O(n){var e=n.toggleRating,r=n.ratings;return a.a.createElement(k,null,g.map(function(n){return a.a.createElement(j,{active:r.includes(n.type),bcgColor:n.bcgColor,borderColor:n.borderColor,key:n.type,onClick:function(){return e(n.type)}},n.type)}))}function A(){var n=Object(h.a)(["\n  font-size: 32px;\n  font-weight: 400;\n  text-align: center;\n  color: #37b1bf;\n"]);return A=function(){return n},n}var E=w.a.h1(A()),z=function(){return o.createElement(E,null,"Kalkula\u010dka pr\u016fm\u011brn\xe9 v\xfd\u0161e ",m()," p\u016fj\u010dek")};function R(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: 24px;\n"]);return R=function(){return n},n}var S=w.a.div(R()),N=function(n){var e=n.loadingError,r=n.loadingLoans,t=n.averageAmount;return o.createElement(S,null,o.createElement("p",null,e),o.createElement("p",null,r?"Na\u010d\xedt\xe1n\xed...":"".concat(t?"Pr\u016fm\u011brn\xe1 v\xfd\u0161e p\u016fj\u010dek je ".concat(new Intl.NumberFormat("cs-CZ",{style:"currency",currency:"CZK"}).format(Math.round(100*t)/100),"."):"Vyberte rating")))};function P(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: 10px;\n"]);return P=function(){return n},n}var _=w.a.p(P()),B=function(){return o.createElement(_,null,"*Pro zm\u011bnu velikosti vzorku m\u016f\u017eete pou\u017e\xedt ?sample_size url parametr.")};var I=function(){var n=Object(o.useState)([]),e=Object(b.a)(n,2),r=e[0],c=e[1],i=Object(o.useState)(null),l=Object(b.a)(i,2),p=l[0],g=l[1],m=Object(o.useState)(!1),h=Object(b.a)(m,2),w=h[0],y=h[1],x=Object(o.useState)(""),k=Object(b.a)(x,2),j=k[0],A=k[1],E=function(){var n=Object(s.a)(f.a.mark(function n(e){var r;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t&&t(),0!==e.length){n.next=6;break}return g(null),y(!1),n.abrupt("return");case 6:return y(!0),n.next=9,C({chosenRating:e});case 9:r=n.sent,g(v(r.data)),A(""),y(!1),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),d.a.isCancel(n.t0)||(A("Nic jsme nena\u0161li."),y(!1));case 18:case"end":return n.stop()}},n,null,[[0,15]])}));return function(e){return n.apply(this,arguments)}}();return Object(o.useEffect)(function(){E(r)},[r]),a.a.createElement("div",null,a.a.createElement(z,null),a.a.createElement(O,{ratings:r,toggleRating:function(n){r.includes(n)?c(r.filter(function(e){return n!==e})):c([].concat(Object(u.a)(r),[n]))}}),a.a.createElement(N,{averageAmount:p,loadingError:j,loadingLoans:w}),a.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.659ef07b.chunk.js.map