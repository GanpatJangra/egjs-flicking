"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2697],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=a.createContext({}),m=function(t){var e=a.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),o=m(n),s=r,u=o["".concat(k,".").concat(s)]||o[s]||d[s]||l;return n?a.createElement(u,i(i({ref:e},c),{},{components:n})):a.createElement(u,i({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},9929:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return k},default:function(){return s},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={custom_edit_url:null},k=void 0,m={unversionedId:"api/Renderer",id:"version-4.5.1/api/Renderer",title:"Renderer",description:"Panel\uacfc \uadf8 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.5.1/api/Renderer.mdx",sourceDirName:"api",slug:"/api/Renderer",permalink:"/egjs-flicking/ko/docs/api/Renderer",editUrl:null,tags:[],version:"4.5.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ExternalRenderer",permalink:"/egjs-flicking/ko/docs/api/ExternalRenderer"},next:{title:"VanillaRenderer",permalink:"/egjs-flicking/ko/docs/api/VanillaRenderer"}},c={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"panels",id:"panels",level:3},{value:"panelCount",id:"panelCount",level:3},{value:"strategy",id:"strategy",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"getPanel",id:"getPanel",level:3},{value:"updatePanelSize",id:"updatePanelSize",level:3},{value:"batchInsert",id:"batchInsert",level:3},{value:"batchRemove",id:"batchRemove",level:3},{value:"checkPanelContentsReady",id:"checkPanelContentsReady",level:3}],o={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Renderer\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uacfc \uadf8 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#panels"},"panels"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#panelCount"},"panelCount"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#strategy"},"strategy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#align"},"align")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#render"},"render"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getPanel"},"getPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updatePanelSize"},"updatePanelSize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchInsert"},"batchInsert"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchRemove"},"batchRemove"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#checkPanelContentsReady"},"checkPanelContentsReady")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new Renderer(options, options.align, options.strategy)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options.align"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"center"'),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc804\uccb4 \ud328\ub110\uc5d0 \uc801\uc6a9\ub420 ",(0,l.kt)("a",{parentName:"td",href:"Flicking#align"},"align")," \uac12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options.strategy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"RenderingStrategy\uc758 \uc778\uc2a4\ud134\uc2a4(\ub0b4\ubd80 \ubaa8\ub4c8)")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"panels"},"panels"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uc804\uccb4 \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,l.kt)("h3",{id:"panelCount"},"panelCount"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uc804\uccb4 \ud328\ub110\uc758 \uac1c\uc218"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"strategy"},"strategy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"align"},"align"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ud560 ",(0,l.kt)("a",{parentName:"p",href:"Panel#align"},"align")," \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"render"},"render"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Renderer\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Renderer\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"getPanel"},"getPanel"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud328\ub110\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud328\ub110")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,l.kt)("h3",{id:"updatePanelSize"},"updatePanelSize"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ubaa8\ub4e0 \ud328\ub110\uc758 \ud06c\uae30\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"batchInsert"},"batchInsert"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \uc0c8\ub85c\uc6b4 \ud328\ub110\ub4e4\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uc778\ub371\uc2a4\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc778\ub371\uc2a4\ub97c \uac00\uc9c4 \uae30\uc874 \ud328\ub110\ub4e4\uc740 \ucd94\uac00\ud55c \ud328\ub110\uc758 \uac1c\uc218\ub9cc\ud07c \uc778\ub371\uc2a4\uac00 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucd94\uac00\ub41c \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ucd94\uac00\ud560 \uc544\uc774\ud15c\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc0c8\ub85c \ud328\ub110\ub4e4\uc744 \ucd94\uac00\ud560 \uc778\ub371\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.elements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ubc30\uc5f4 \ud639\uc740 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3ec\ud568\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub0b4\ubd80\uc5d0 \uc2e4\uc81c DOM \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub294\uc9c0 \uc5ec\ubd80. true\ub85c \uc124\uc815\ud560 \uacbd\uc6b0, \ub80c\ub354\ub7ec\ub294 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4")))),(0,l.kt)("h3",{id:"batchRemove"},"batchRemove"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc758 \ud328\ub110\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uc778\ub371\uc2a4\ubcf4\ub2e4 \ud070 \uc778\ub371\uc2a4\ub97c \uac00\uc9c4 \uae30\uc874 \ud328\ub110\ub4e4\uc740 \uc81c\uac70\ud55c \ud328\ub110\uc758 \uac1c\uc218\ub9cc\ud07c \uc778\ub371\uc2a4\uac00 \uac10\uc18c\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc81c\uac70\ub41c \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc81c\uac70\ud560 \uc544\uc774\ud15c\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc81c\uac70\ud560 \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.deleteCount"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"index")," \uc774\ud6c4\ub85c \uc81c\uac70\ud560 \ud328\ub110\uc758 \uac1c\uc218")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub0b4\ubd80\uc5d0 \uc2e4\uc81c DOM \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub294\uc9c0 \uc5ec\ubd80. true\ub85c \uc124\uc815\ud560 \uacbd\uc6b0, \ub80c\ub354\ub7ec\ub294 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \uc81c\uac70\ud569\ub2c8\ub2e4")))),(0,l.kt)("h3",{id:"checkPanelContentsReady"},"checkPanelContentsReady"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"checkingPanels"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."))}s.isMDXComponent=!0}}]);