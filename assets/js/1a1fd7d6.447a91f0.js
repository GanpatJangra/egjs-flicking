"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6075],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),N=p(n),u=a,g=N["".concat(c,".").concat(u)]||N[u]||d[u]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=N;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={custom_edit_url:null},c=void 0,p={unversionedId:"api/EVENTS",id:"version-4.4.2/api/EVENTS",title:"EVENTS",description:"EVENTS",source:"@site/versioned_docs/version-4.4.2/api/EVENTS.mdx",sourceDirName:"api",slug:"/api/EVENTS",permalink:"/egjs-flicking/docs/4.4.2/api/EVENTS",editUrl:null,tags:[],version:"4.4.2",frontMatter:{custom_edit_url:null},sidebar:"version-4.4.2/api",previous:{title:"ERROR_CODE",permalink:"/egjs-flicking/docs/4.4.2/api/ERROR_CODE"},next:{title:"ALIGN",permalink:"/egjs-flicking/docs/4.4.2/api/ALIGN"}},m={},d=[{value:"EVENTS",id:"EVENTS",level:3}],N={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const EVENTS\n")),(0,i.kt)("h3",{id:"EVENTS"},"EVENTS"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,"Event type object with event name strings of ",(0,i.kt)("a",{parentName:"p",href:"Flicking"},"Flicking")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": object"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"HOLD_START"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"holdStart"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"holdStart event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"HOLD_END"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"holdEnd"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"holdEnd event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"MOVE_START"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"moveStart"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"moveStart event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"MOVE"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"move"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"move event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"MOVE_END"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"moveEnd"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"moveEnd event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"WILL_CHANGE"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"willChange"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"willChange event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"CHANGED"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"changed"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"changed event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"WILL_RESTORE"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"willRestore"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"willRestore event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"RESTORED"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"restored"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"restored event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SELECT"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"select"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"select event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"NEED_PANEL"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"needPanel"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"needPanel event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"PANEL_CHANGE"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"panelChange"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"panelChange event")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { EVENTS } from "@egjs/flicking";\nEVENTS.MOVE_START; // "moveStart"\n')))}u.isMDXComponent=!0}}]);