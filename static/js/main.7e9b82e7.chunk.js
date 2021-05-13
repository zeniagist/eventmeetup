(this.webpackJsonpeventmeetup=this.webpackJsonpeventmeetup||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},221:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),i=n.n(o),c=(n(200),n(23)),s=n.n(c),l=n(51),u=n(25),d=n(26),h=n(27),p=n(28),f=n(357),m=n(361),v=n(362),b=n(185),g=n(186),j=n(78),w=n(190),y=(n(202),n(3));var x=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{children:"Welcome to the Meet app"}),Object(y.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers "}),Object(y.jsx)("div",{className:"button_cont",align:"center",children:Object(y.jsxs)("div",{class:"google-btn",children:[Object(y.jsx)("div",{class:"google-icon-wrapper",children:Object(y.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/G\r oogle_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(y.jsx)("a",{href:"THE URL RETURNED FROM YOUR getAuth\r ENDPOINT HERE",rel:"nofollow noopener",class:"btn-text",children:Object(y.jsx)("b",{children:"Sign in with google"})})]})}),Object(y.jsx)("a",{href:"https://zeniagist.github.io/eventmeetup/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]})},O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showHideDetails:!1},e.handleShowButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(y.jsxs)("div",{className:"event",onClick:function(){return e.handleShowButton()},children:[Object(y.jsx)("h1",{className:"eventName",children:t.summary}),Object(y.jsx)("p",{className:"eventLocation",children:t.location}),this.state.showHideDetails&&Object(y.jsxs)("div",{className:"eventDetails",children:[Object(y.jsx)("h2",{children:"About event:"}),Object(y.jsx)("p",{children:t.description})]}),Object(y.jsx)("button",{className:"showDetailsButton",onClick:function(){return e.handleShowButton()},children:this.state.showHideDetails?"Hide Details":"Show Details"})]})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(y.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(y.jsx)("li",{className:"eventItem",children:Object(y.jsx)(O,{event:e})},e.id)}))})}}]),n}(a.Component),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color="yellow",a}return Object(d.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"Alert",children:Object(y.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,0)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"CitySearch",children:[Object(y.jsx)("label",{children:"Choose your nearest city"}),Object(y.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Search for a city",onFocus:function(){e.setState({showSuggestions:!0})},onClick:function(){e.setState({showSuggestions:!0})}}),Object(y.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(y.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(y.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(y.jsx)("b",{children:"See all cities"})})]}),Object(y.jsx)(S,{text:this.state.infoText})]})}}]),n}(a.Component),Z=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color="red",a}return Object(d.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"Alert",children:Object(y.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventCount:32},e.handleEventInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({eventCount:"",errorText:"Select number between 1 and 32"}):(e.setState({eventCount:n,errorText:""}),void e.props.updateEvents("",n))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"numberOfEvents",children:[Object(y.jsx)("label",{children:"Number of Events"}),Object(y.jsx)("input",{type:"number",name:"numberOfEvents",className:"numberOfEventsInput",value:this.state.eventCount,onChange:this.handleEventInputChanged}),Object(y.jsx)(Z,{text:this.state.errorText})]})}}]),n}(a.Component),E=n(189),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],D=n(117),A=n.n(D),W=n(75),M=n.n(W),R=(n(221),function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))}),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,A.a.get("https://1up91ommwh.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&q(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.a.start(),navigator.onLine){e.next=5;break}return t=localStorage.getItem("lastEvents"),M.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:R(JSON.parse(t).events)});case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return M.a.done(),e.abrupt("return",N);case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return B(),a="https://1up91ommwh.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,A.a.get(a);case 16:return(r=e.sent).data&&(o=R(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),M.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),n=encodeURIComponent(t),e.next=4,fetch("https://1up91ommwh.execute-api.ca-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=n(18),U=n(364),F=n(180),z=n(93),Y=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(H.a)(n,2),o=r[0],i=r[1];Object(a.useEffect)((function(){i((function(){return c()}))}),[t]);var c=function(){var e=t.map((function(e){return{eventSummary:e.summary}}));return["React","JavaScript","Node","jQuery","AngularJS"].map((function(t){var n=t,a=e.filter((function(e){return e.eventSummary.split(" ").includes(n)})).length;return{name:n,value:a}})).filter((function(e){return e.value>=1}))},s=["#160302","#552c0c","#7f4514","#b98f68","#e0b686"];return Object(y.jsx)(f.a,{height:400,width:"90%",children:Object(y.jsx)(U.a,{width:400,height:400,children:Object(y.jsx)(F.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#632c21",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(y.jsx)(z.a,{fill:s[t]},"cell-".concat(t))}))})})})},_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],tokenCheck:!1},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.updateEvents=function(t,n){var a;L().then((function(r){a=r,"all"===t&&0===n?a=r:"all"!==t&&0===n?a=r.filter((function(e){return e.location===t})):""===t&&n>0&&(a=r.slice(0,n)),e.setState({events:a,eventCount:n})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,J(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents()),this.mounted=!0,navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date."}),L().then((function(e){o.mounted&&o.setState({events:e,locations:R(e)})}));case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events;return!1===this.state.tokenCheck?Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(x,{})}):Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(S,{text:this.state.infoText}),Object(y.jsx)("h1",{className:"eventTitle",children:"Event Meetup App"}),Object(y.jsx)(T,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(y.jsx)(C,{updateEvents:this.updateEvents}),Object(y.jsx)("h1",{className:"chartLabel",children:"Events in each city"}),Object(y.jsxs)("div",{className:"data-vis-wrapper",children:[Object(y.jsx)(Y,{events:e}),Object(y.jsx)(f.a,{height:400,children:Object(y.jsxs)(m.a,{margin:{top:30,right:30,bottom:5,left:0},children:[Object(y.jsx)(v.a,{}),Object(y.jsx)(b.a,{type:"category",dataKey:"city",name:"city"}),Object(y.jsx)(g.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(y.jsx)(j.a,{cursor:{strokeDasharray:"3 3"}}),Object(y.jsx)(w.a,{data:this.getData(),fill:"#632c21"})]})})]}),Object(y.jsx)(k,{events:this.state.events})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},X=n(187);i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/eventmeetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/eventmeetup","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),X.config("e36665c8623b4b22a6de75bdff23169a").install(),V()}},[[356,1,2]]]);
//# sourceMappingURL=main.7e9b82e7.chunk.js.map