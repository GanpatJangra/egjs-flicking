"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4875],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=s(n),g=r,k=m["".concat(o,".").concat(g)]||m[g]||d[g]||i;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3353:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],c={custom_edit_url:null},o=void 0,s={unversionedId:"api/HoldingState",id:"version-4.0.0/api/HoldingState",title:"HoldingState",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.0.0/api/HoldingState.mdx",sourceDirName:"api",slug:"/api/HoldingState",permalink:"/egjs-flicking/docs/4.0.0/api/HoldingState",editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"DraggingState",permalink:"/egjs-flicking/docs/4.0.0/api/DraggingState"},next:{title:"IdleState",permalink:"/egjs-flicking/docs/4.0.0/api/IdleState"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"Methods",id:"methods",level:2},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],m={toc:d};function g(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,i.kt)("strong",null,"internal")," use only."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class HoldingState extends State\n")),(0,i.kt)("p",null,"A state that activates when user's holding the Flicking area, but not moved a single pixel yet"),(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row mb-2"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("strong",null,"Properties")),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("strong",null,"Methods"))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("a",{href:"#holding"},"holding"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#animating"},"animating")),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("a",{href:"#onHold"},"onHold"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#onChange"},"onChange"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#onRelease"},"onRelease"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#onFinish"},"onFinish")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"holding"},"holding"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,i.kt)("p",null,"Whether user is clicking or touching"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": true"),(0,i.kt)("h3",{id:"animating"},"animating"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,i.kt)("p",null,"Whether Flicking's animating"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": false"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"onHold"},"onHold"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,i.kt)("p",null,"An event handler for Axes's ",(0,i.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Event context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A ",(0,i.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event of Axes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,i.kt)("h3",{id:"onChange"},"onChange"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,i.kt)("p",null,"An event handler for Axes's ",(0,i.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Event context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A ",(0,i.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event of Axes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,i.kt)("h3",{id:"onRelease"},"onRelease"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,i.kt)("p",null,"An event handler for Axes's ",(0,i.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Event context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A ",(0,i.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of Axes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,i.kt)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,i.kt)("p",null,"An event handler for Axes's ",(0,i.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Event context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A ",(0,i.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event of Axes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,i.kt)("h3",{id:"onFinish"},"onFinish"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,i.kt)("p",null,"An event handler for Axes's ",(0,i.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"Event context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A ",(0,i.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event of Axes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))))}g.isMDXComponent=!0}}]);