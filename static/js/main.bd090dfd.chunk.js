(this.webpackJsonpeventmeetup=this.webpackJsonpeventmeetup||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),o=n(7),c=n.n(o),i=(n(12),n(13),n(2)),r=n(3),l=n(5),h=n(4),d=n(0),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showHideDetails:!1},e.handleShowButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h1",{className:"eventName",children:t.summary}),Object(d.jsx)("p",{className:"eventLocation",children:t.location}),this.state.showHideDetails&&Object(d.jsxs)("div",{className:"eventDetails",children:[Object(d.jsx)("h2",{children:"About event:"}),Object(d.jsx)("p",{children:t.description})]}),Object(d.jsx)("button",{className:"showDetailsButton",onClick:function(){return e.handleShowButton()},children:this.state.showHideDetails?"Hide Details":"Show Details"})]})}}]),n}(s.Component);s.Component,s.Component;var u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.bd090dfd.chunk.js.map