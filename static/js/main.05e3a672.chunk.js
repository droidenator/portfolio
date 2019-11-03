(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,a){e.exports={project:"styles_project__eWirO",title:"styles_title__3eX6h",description:"styles_description__Tgjln",content:"styles_content__KFvv0",links:"styles_links__ObIU0"}},37:function(e,t,a){e.exports=a(55)},42:function(e,t,a){},43:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),o=a.n(i),s=(a(42),a(11)),l=a(7),c=(a(43),a(20)),d=a.n(c),m=a(32);function u(e){window.document.title=e}function p(){return h.apply(this,arguments)}function h(){return(h=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var t=JSON.parse(a.responseText).result;e(t)}},a.open("POST","http://colormind.io/api/",!0),a.send(JSON.stringify({model:"ui"}))}));case 2:v(e.sent.reverse());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){["--color-primary","--color-secondary","--color-background","--color-accent"].forEach((function(t,a){window.document.documentElement.style.setProperty(t,"rgb(".concat(e[a].toString(),")"))}))}var g=function(){var e=Object(l.f)({path:"/",exact:!0});return r.a.createElement("header",{className:"App-header ".concat(e?"App-header__home":"")},r.a.createElement("div",{className:"App-header-title"},"Sean Corrales"),r.a.createElement("div",{className:"App-links"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/projects"},"Projects"),r.a.createElement(s.b,{to:"/about"},"About"),r.a.createElement("button",{onClick:p},"Random Theme")))};function f(){return u("Home - Sean Corrales"),r.a.createElement("div",null,r.a.createElement("h1",null,"Hi! My name is Sean Corrales."),r.a.createElement("h4",null,"I'm a software developer building stuff with JavaScript, node.js, HTML, and CSS."))}function b(){return u("About - Sean Corrales"),r.a.createElement("div",{className:"page-container"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"I've been a web developer for almost 20 years. I started out in 2001 building sites using plain HTML. I quickly learned PHP and MySQL and started building dynamic web sites that could be managed by non-technical users. Since 2015, my primary focus has been Javascript and node.js with plenty of HTML and CSS as needed. Lately, I've been working with React, Koa, and MongoDB."),r.a.createElement("p",null,"Over the span of my career, I've worked with several talented designers who helped me develop strong CSS skills and an excellent eye for detail in design. I've developed custom e-commerce solutions, built and managed Linux servers, created custom modules for various CMSs, built custom montioring applications, mentored junior developers, and a ton of other stuff."),r.a.createElement("p",null,"I like fixing bugs and writing tests. I love building applications with great UX. My favorite things to build are things that will have a positive impact on my users."))}var w=[{name:"Explore LEVEL",description:'LEVEL wanted an immersive way for potential tenants to explore their apartments. After much brainstorming, it was decided to build an interactive exploded-view floorplan.\n\n    Users can click through each floor and view the details for specific apartments. Entering the data for the apartments was done with a custom Drupal component that allowed an admin to use a GUI interface to trace each apartment and enter the details.\n\n    The LEVEL website was built using Drupal 7. The admin tool for adding apartments is a custom Drupal module written in PHP and JavaScript. The floor plan explorer is built using jQuery, Raphael, and custom JavaScript.\n\n    This website won the 2012 "Best of Interactive" Addy award in Oklahoma.',video:[{url:"https://vimeo.com/369484760",image:"/probable-umbrella/images/level.png"}],technologies:"JavaScript, HTML, CSS, PHP",urls:[{url:"https://levelokc.com/the-space/level",text:"LEVEL"}]},{name:"Sundance Airport Automated Weather Observation Service (AWOS)",description:"Sundance Airport needed a new application to display AWOS information and replace the legacy flash version provided by the AWOS vendor.\n\n    Two versions were designed and built. The first version prioritized speed and ease of use for mobile and desktop users. The mobile version is built to be easy to use for pilots checking the current conditions from their phones.\n\n    The other version was developed for the large display behind the front desk of Sundance Airport. It includes real-time weather effects and up-to-date weather for frequent destinations.\n\n    The AWOS application is built in React. The animations are a result of my work with our UX designer who designed the application. I also built a Node.js server for fetching the AWOS and weather data. SSE is used to stream data from the server to the client in realtime.",video:[{url:"https://vimeo.com/369484922",image:"/probable-umbrella/images/sundance-tv.png"},{url:"https://vimeo.com/369484940",image:"/probable-umbrella/images/sundance-desktop.png"}],technologies:"Javascript, HTML, CSS, React, Server Sent Events, node.js",urls:[{url:"http://awos.sundanceairport.com/tv",text:"TV Version"},{url:"http://awos.sundanceairport.com",text:"Desktop/Mobile version"}]},{name:"Music Trail Itinerary and Homepage Map",description:"The Oklahoma Tourism department wanted to create an interactive way for visitors to learn more about Oklahoma's musical history.\n\n    The music trail homepage map is generated using HTML and JavaScript. Site administrators are able to place points on the map and add content for each popup.\n\n    The music trail itineraries section provides visitors with itineraries for various musical artists. Site administrators are able to create new itineraries and add and order various starts. The public itineraries pages features tight integration with Google Maps. Each location can easily be displayed via Google maps and driving directions are generated for the entire itinerary and also between each stop on the itinerary.",video:[{url:"https://vimeo.com/369484865",image:"/probable-umbrella/images/music-trail-map.png"},{url:"https://vimeo.com/369484803",image:"/probable-umbrella/images/music-trail-itenary.png"}],technologies:"JavaScript, HTML, CSS, PHP",urls:[{url:"https://www.travelok.com/music-trail/",text:"Music Trail Homepage"},{url:"https://www.travelok.com/music-trail/itineraries",text:"Music Trail Itineraries"}]},{name:"nJoy Vision Scheduling App",description:"nJoy Vision needed to allow patients to schedule appointments online using their appointment scheduling software.\n\n    I wrote a server to interface with the scheduling API. The front end is built using Angular and embedded in a Wordpress site.",video:[{url:"https://vimeo.com/369484879",image:"/probable-umbrella/images/njoy.png"}],technologies:"JavaScript, HTML, CSS, PHP, Angular",urls:[{url:"https://njoyvision.com/schedule/",text:"nJoy Appointment Scheduling"}]},{name:"PDC Productions Custom Slider",description:"I built a custom slider that animated the slider image, headline, and body text separately to help it standout from all the other sliders on the market.\n\n    The website also featured a unique expanding footer.",video:[{url:"https://vimeo.com/369484889",image:"/probable-umbrella/images/pdc.png"}],technologies:"JavaScript, HTML, CSS",urls:[]},{name:"Ruby Red 40 Parallax Effect",description:"The Ruby Red 40 was a simple one page application with some information about the event. I animated the clouds and flowers on the landing page using a custom parallax effect.",video:[{url:"https://vimeo.com/369484903",image:"/probable-umbrella/images/ruby-red.png"}],technologies:"JavaScript, HTML, CSS",urls:[]}],y=a(36),S=a(35),E=a.n(S),T=a(9),k=a.n(T);function _(e){var t=e.videos,a=t.length>1,i=Object(n.useState)(t[0].url),o=Object(y.a)(i,2),s=o[0],l=o[1];return r.a.createElement("div",{className:k.a.container},r.a.createElement("div",{className:k.a.fixedAspectContainer},r.a.createElement(E.a,{className:k.a.player,url:s,width:"100%",height:"100%"})),a&&r.a.createElement("div",{className:k.a.selector},t.map((function(e,t){return r.a.createElement("img",{key:t,src:e.image,onClick:function(){return l(e.url)},alt:"Video thumbnail",className:"".concat(k.a.image," ").concat(s===e.url?k.a.selected:"")})}))))}var x=a(12),A=a.n(x);function L(){return u("Projects - Sean Corrales"),r.a.createElement("div",{className:"page-container"},r.a.createElement("h2",null,"Projects"),w.map((function(e){return r.a.createElement("div",{key:e.name,className:A.a.project},r.a.createElement(_,{videos:e.video}),r.a.createElement("div",{className:A.a.content},r.a.createElement("h3",{className:A.a.title},e.name),r.a.createElement("div",{className:A.a.description},e.description),r.a.createElement("div",{className:A.a.links},e.urls.map((function(t,a){return r.a.createElement("span",{key:a},r.a.createElement("a",{href:t.url},t.text),a+1<e.urls.length&&" | ")})))))})))}var C=function(){return r.a.createElement(s.a,{basename:"/probable-umbrella"},r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/about",component:b}),r.a.createElement(l.a,{path:"/projects",component:L}),r.a.createElement(l.a,{path:"/",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports={container:"styles_container__2NkvX",selector:"styles_selector__32PR5",image:"styles_image__1DUZn",selected:"styles_selected__1zkL9",fixedAspectContainer:"styles_fixedAspectContainer__2UO3d",player:"styles_player__3T8J2"}}},[[37,1,2]]]);
//# sourceMappingURL=main.05e3a672.chunk.js.map