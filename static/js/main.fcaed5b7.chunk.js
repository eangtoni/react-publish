(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{58:function(e,t,a){e.exports=a(92)},63:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/rosetta1.676b68bd.png"},89:function(e,t,a){e.exports=a.p+"static/media/rosetta2.08ba3dce.png"},90:function(e,t,a){e.exports=a.p+"static/media/tulip1.37ca3b60.png"},91:function(e,t,a){e.exports=a.p+"static/media/tulip2.501cdcd7.png"},92:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(24),l=a.n(c),s=(a(63),a(17)),i=a(18),r=a(12),m=a(21),u=a(20),d=a(93),p=a(94),g=a(95),h=a(96),f=a(97),x=a(106),E=a(107),y=a(108),b=a(98),v=a(99),N=a(100),T=a(22),w=(n.Component,a(10)),O=a(35),I=a(57),j=a(101),M=a(102),k=a(103),C=a(104),S=a(105),A=a(54);var L=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).next=function(){e.state.animating||e.setState({activeIndex:e.state.activeIndex===e.state.items.length-1?0:e.state.activeIndex+1})},e.prev=function(){e.state.animating||e.setState({activeIndex:0===e.state.activeIndex?e.state.items.length-1:e.state.activeIndex-1})},e.goToIndex=function(t){e.state.animating||e.setState({activeIndex:t})},e.toggleModal=function(){e.setState({modalIsOpen:!e.state.modalIsOpen})},e.openModal=function(t){var a=t.target;e.setState({modalIsOpen:!0,modalSource:a.src,modalAltText:a.alt}),console.log(e.state.modalIsOpen)},e.state={activeIndex:0,animating:!1,items:[{src:a(88),altText:"rosetta1",captionTitle:"Rosetta",captionText:"Rosetta 1"},{src:a(89),altText:"rosetta2",captionTitle:"Rosetta",captionText:"Rosetta 2"},{src:a(90),altText:"Tulip1",captionTitle:"Tulip",captionText:"Tulip 1"},{src:a(91),altText:"Tulip2",captionTitle:"Tulip",captionText:"Tulip 2"}],modalIsOpen:!1,modalSource:"",modalAltText:""},e.next=e.next.bind(Object(r.a)(e)),e.prev=e.prev.bind(Object(r.a)(e)),e.goToIndex=e.goToIndex.bind(Object(r.a)(e)),e.toggleModal=e.toggleModal.bind(Object(r.a)(e)),e.openModal=e.openModal.bind(Object(r.a)(e)),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return o.a.createElement(I.a,{className:"w-100 btn",onExiting:function(){return e.setState({animating:!0})},onExited:function(){return e.setState({animating:!1})},key:t.src},o.a.createElement("img",{className:"w-100",src:t.src,alt:t.altText,onClick:e.openModal}),o.a.createElement(j.a,{className:"carousel-caption",captionText:t.captionText,captionHeader:t.captionTitle}))}));return o.a.createElement("article",{id:"coffee-page",className:"coffee-page"},o.a.createElement("section",{className:"carousel-container container py-5"},o.a.createElement("h1",{className:"carousel-title text-center py-2 text-secondary display-2"},"My Latte Art Gallery"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(M.a,{className:"col-lg-6 col-md-6 col-sm-8 ",activeIndex:this.state.activeIndex,next:this.next,previous:this.prev},o.a.createElement(k.a,{className:"carousel-indicator",items:this.state.items,activeIndex:this.state.activeIndex,onClickHandler:this.goToIndex}),t,o.a.createElement(C.a,{className:"carousel-control",direction:"next",directionText:"Next",onClickHandler:this.next}),o.a.createElement(C.a,{className:"carousel-control",direction:"prev",directionText:"Previous",onClickHandler:this.prev})),o.a.createElement("section",{className:"text-container col-lg-4 col-md-6 col-sm-8 px-5 py-2 text-justify"},o.a.createElement("h5",{className:"layout-title text-secondary font-weight-bold display-4"},"Latte Art"),o.a.createElement("p",{className:"layout-quote"},o.a.createElement(O.a,{className:"quote-left"}),"We eat with our eyes first",o.a.createElement(O.b,{className:"quote-right"}))))),o.a.createElement("section",{className:"coffee-content py-2"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-10 col-sm-8 "},o.a.createElement("h4",{className:"layout-title text-justify"},"What's better than a great Latte Art on your daily cup of Latte or Cappuccino?"),o.a.createElement("p",{className:"layout-text text-justify"},"There are various pattern that you could put on top of your coffee. The only limit is your imagination. I have been practicing Latte Art for one and a half year. It was not easy but it was so fun brewing your own coffee and drawing a love, flower or even swan on it.",o.a.createElement("br",null),"Sometimes, I would fail and some weird shapes would appear. But that does not stop me to keep on practicing and crafting my own cup of Cappuccino."))))),o.a.createElement(S.a,{id:"open-modal",isOpen:this.state.modalIsOpen,toggle:this.toggleModal},o.a.createElement("img",{className:"layout-modal w-100",src:this.state.modalSource,alt:this.state.modalAltText}),o.a.createElement(A.a,{className:"bg-danger",type:"button",onClick:this.toggleModal},"Close")))}}]),n}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).openModal=function(t){var a=t.target;e.setState({isOpen:!0,source:a.src,altText:a.alt})},e.toggleModal=function(){e.setState({isOpen:!e.state.isOpen})},e.state={isOpen:!1,source:"",altText:"",imageItem:{source:"",altText:"main"}},e.toggleModal=e.toggleModal.bind(Object(r.a)(e)),e.openModal=e.openModal.bind(Object(r.a)(e)),e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{id:"about-page",className:"about-page"},o.a.createElement("div",{className:"layout-about container py-5 mt-2"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("section",{className:"col-10 text-center"},o.a.createElement("img",{className:"layout-image py-5 col-8 w-50",src:this.state.imageItem.source,alt:this.state.imageItem.altText,onClick:this.openModal,style:{cursor:"pointer"}})))),o.a.createElement(S.a,{id:"open-modal",isOpen:this.state.isOpen,toggle:this.toggleModal},o.a.createElement("img",{className:"layout-modal w-100",src:this.state.source,alt:this.state.alt}),o.a.createElement(A.a,{className:"bg-danger",type:"button",onClick:this.toggleModal},"Close")))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"bg-warning",style:{height:"100vw"}},o.a.createElement("section",{id:"layout-404",className:"layout-404 py-5 my-5 bg-warning h-50"},o.a.createElement("div",{className:"container h-100"},o.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},o.a.createElement("section",{className:"col-8"},o.a.createElement("h1",{className:"layout-header"},"Error 404: Requested Page is Not Found"),o.a.createElement("p",null,"The page you requested is not found. Please check the URL or contact the administrator. Thank you."))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement("div",null,o.a.createElement(T.a,{basename:"/",history:w.g},o.a.createElement(w.d,null,o.a.createElement(w.b,{exact:!0,path:"/",component:L}),o.a.createElement(w.b,{path:"/coffee"},o.a.createElement(w.d,null,o.a.createElement(w.b,{exact:!0,path:"/coffee",component:L}),o.a.createElement(w.b,{path:"/coffee/:styleName?"},o.a.createElement(w.d,null,o.a.createElement(w.b,{exact:!0,path:"/coffee/:styleName?",component:function(){var e=Object(w.h)().styleName;return o.a.createElement("h3",{className:"mt-5 py-5"},e)}}),o.a.createElement(w.b,{path:"*"},o.a.createElement(w.a,{to:"/404"})))))),o.a.createElement(w.b,{path:"/about"},o.a.createElement(R,null)),o.a.createElement(w.b,{path:"/404"},o.a.createElement(q,null)),o.a.createElement(w.b,{path:"*"},o.a.createElement(w.a,{to:"/404"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.fcaed5b7.chunk.js.map