(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[0],{58:function(e,t,a){e.exports=a(92)},63:function(e,t,a){},86:function(e,t,a){e.exports=a.p+"static/media/rosetta1.676b68bd.png"},87:function(e,t,a){e.exports=a.p+"static/media/rosetta2.08ba3dce.png"},88:function(e,t,a){e.exports=a.p+"static/media/tulip1.37ca3b60.png"},89:function(e,t,a){e.exports=a.p+"static/media/tulip2.501cdcd7.png"},92:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(23),l=a.n(o),s=(a(63),a(17)),r=a(18),i=a(12),m=a(21),u=a(20),d=a(93),p=a(94),g=a(95),h=a(96),E=a(97),f=a(106),b=a(107),y=a(108),x=a(98),v=a(99),N=a(100),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).toggle=function(){e.setState({isOpen:!e.state.isOpen})},e.state={isOpen:!1},e.toggle=e.toggle.bind(Object(i.a)(e)),e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(d.a,{className:"bg-secondary fixed-top",dark:!0,expand:"md"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(p.a,{href:"/"},"Home"),c.a.createElement(g.a,{onClick:this.toggle}),c.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(E.a,{className:"ml-auto",navbar:!0},c.a.createElement(f.a,{nav:!0,inNavbar:!0},c.a.createElement(b.a,{className:"dropdown-toggle",nav:!0,caret:!0},"Skills"),c.a.createElement(y.a,{right:!0},c.a.createElement(x.a,{href:"/"},"Dummy"),c.a.createElement(x.a,{href:"/"},"Dummy2"))),c.a.createElement(v.a,null,c.a.createElement(N.a,{href:"/coffee"},"Coffee")),c.a.createElement(v.a,null,c.a.createElement(N.a,{href:"/about"},"About")),c.a.createElement(v.a,null,c.a.createElement(N.a,{href:"/"},"Contact")))))))}}]),a}(n.Component),T=a(10),w=a(35),j=a(56),I=a(101),k=a(102),M=a(103),C=a(104),S=a(105),A=a(53);var L=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).next=function(){e.state.animating||e.setState({activeIndex:e.state.activeIndex===e.state.items.length-1?0:e.state.activeIndex+1})},e.prev=function(){e.state.animating||e.setState({activeIndex:0===e.state.activeIndex?e.state.items.length-1:e.state.activeIndex-1})},e.goToIndex=function(t){e.state.animating||e.setState({activeIndex:t})},e.toggleModal=function(){e.setState({modalIsOpen:!e.state.modalIsOpen})},e.openModal=function(t){var a=t.target;e.setState({modalIsOpen:!0,modalSource:a.src,modalAltText:a.alt}),console.log(e.state.modalIsOpen)},e.state={activeIndex:0,animating:!1,items:[{src:a(86),altText:"rosetta1",captionTitle:"Rosetta",captionText:"Rosetta 1"},{src:a(87),altText:"rosetta2",captionTitle:"Rosetta",captionText:"Rosetta 2"},{src:a(88),altText:"Tulip1",captionTitle:"Tulip",captionText:"Tulip 1"},{src:a(89),altText:"Tulip2",captionTitle:"Tulip",captionText:"Tulip 2"}],modalIsOpen:!1,modalSource:"",modalAltText:""},e.next=e.next.bind(Object(i.a)(e)),e.prev=e.prev.bind(Object(i.a)(e)),e.goToIndex=e.goToIndex.bind(Object(i.a)(e)),e.toggleModal=e.toggleModal.bind(Object(i.a)(e)),e.openModal=e.openModal.bind(Object(i.a)(e)),e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(t){return c.a.createElement(j.a,{className:"w-100 btn",onExiting:function(){return e.setState({animating:!0})},onExited:function(){return e.setState({animating:!1})},key:t.src},c.a.createElement("img",{className:"w-100",src:t.src,alt:t.altText,onClick:e.openModal}),c.a.createElement(I.a,{className:"carousel-caption",captionText:t.captionText,captionHeader:t.captionTitle}))}));return c.a.createElement("article",{id:"coffee-page",className:"coffee-page"},c.a.createElement("section",{className:"carousel-container container py-5"},c.a.createElement("h1",{className:"carousel-title text-center py-2 text-secondary display-2"},"My Latte Art Gallery"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement(k.a,{className:"col-lg-6 col-md-6 col-sm-8 ",activeIndex:this.state.activeIndex,next:this.next,previous:this.prev},c.a.createElement(M.a,{className:"carousel-indicator",items:this.state.items,activeIndex:this.state.activeIndex,onClickHandler:this.goToIndex}),t,c.a.createElement(C.a,{className:"carousel-control",direction:"next",directionText:"Next",onClickHandler:this.next}),c.a.createElement(C.a,{className:"carousel-control",direction:"prev",directionText:"Previous",onClickHandler:this.prev})),c.a.createElement("section",{className:"text-container col-lg-4 col-md-6 col-sm-8 px-5 py-2 text-justify"},c.a.createElement("h5",{className:"layout-title text-secondary font-weight-bold display-4"},"Latte Art"),c.a.createElement("p",{className:"layout-quote"},c.a.createElement(w.a,{className:"quote-left"}),"We eat with our eyes first",c.a.createElement(w.b,{className:"quote-right"}))))),c.a.createElement("section",{className:"coffee-content py-2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-10 col-sm-8 "},c.a.createElement("h4",{className:"layout-title text-justify"},"What's better than a great Latte Art on your daily cup of Latte or Cappuccino?"),c.a.createElement("p",{className:"layout-text text-justify"},"There are various pattern that you could put on top of your coffee. The only limit is your imagination. I have been practicing Latte Art for one and a half year. It was not easy but it was so fun brewing your own coffee and drawing a love, flower or even swan on it.",c.a.createElement("br",null),"Sometimes, I would fail and some weird shapes would appear. But that does not stop me to keep on practicing and crafting my own cup of Cappuccino."))))),c.a.createElement(S.a,{id:"open-modal",isOpen:this.state.modalIsOpen,toggle:this.toggleModal},c.a.createElement("img",{className:"layout-modal w-100",src:this.state.modalSource,alt:this.state.modalAltText}),c.a.createElement(A.a,{className:"bg-danger",type:"button",onClick:this.toggleModal},"Close")))}}]),n}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).openModal=function(t){var a=t.target;e.setState({isOpen:!0,source:a.src,altText:a.alt})},e.toggleModal=function(){e.setState({isOpen:!e.state.isOpen})},e.state={isOpen:!1,source:"",altText:"",imageItem:{source:"",altText:"main"}},e.toggleModal=e.toggleModal.bind(Object(i.a)(e)),e.openModal=e.openModal.bind(Object(i.a)(e)),e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"about-page",className:"about-page"},c.a.createElement("div",{className:"layout-about container py-5 mt-2"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("section",{className:"col-10 text-center"},c.a.createElement("img",{className:"layout-image py-5 col-8 w-50",src:this.state.imageItem.source,alt:this.state.imageItem.altText,onClick:this.openModal,style:{cursor:"pointer"}})))),c.a.createElement(S.a,{id:"open-modal",isOpen:this.state.isOpen,toggle:this.toggleModal},c.a.createElement("img",{className:"layout-modal w-100",src:this.state.source,alt:this.state.alt}),c.a.createElement(A.a,{className:"bg-danger",type:"button",onClick:this.toggleModal},"Close")))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"bg-warning",style:{height:"100vw"}},c.a.createElement("section",{id:"layout-404",className:"layout-404 py-5 my-5 bg-warning h-50"},c.a.createElement("div",{className:"container h-100"},c.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},c.a.createElement("section",{className:"col-8"},c.a.createElement("h1",{className:"layout-header"},"Error 404: Requested Page is Not Found"),c.a.createElement("p",null,"The page you requested is not found. Please check the URL or contact the administrator. Thank you."))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(30);l.a.render(c.a.createElement("div",null,c.a.createElement(O,null),c.a.createElement("p",{className:"py5 my-5"}," test"),c.a.createElement(H.a,{basename:"/react-publish",history:T.g},c.a.createElement(T.d,null,c.a.createElement(T.b,{exact:!0,path:"/",component:L}),c.a.createElement(T.b,{path:"/coffee"},c.a.createElement(T.d,null,c.a.createElement(T.b,{exact:!0,path:"/coffee",component:L}),c.a.createElement(T.b,{path:"/coffee/:styleName?"},c.a.createElement(T.d,null,c.a.createElement(T.b,{exact:!0,path:"/coffee/:styleName?",component:function(){var e=Object(T.h)().styleName;return c.a.createElement("h3",{className:"mt-5 py-5"},e)}}),c.a.createElement(T.b,{path:"*"},c.a.createElement(T.a,{to:"/404"})))))),c.a.createElement(T.b,{path:"/about"},c.a.createElement(R,null)),c.a.createElement(T.b,{path:"/404"},c.a.createElement(q,null)),c.a.createElement(T.b,{path:"*"},c.a.createElement(T.a,{to:"/404"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.2d104592.chunk.js.map