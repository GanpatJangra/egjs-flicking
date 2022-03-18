"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6348],{6348:function(e,t,n){n.d(t,{Eh:function(){return S},VS:function(){return r},XS:function(){return L},fo:function(){return M},il:function(){return s},pT:function(){return o},tl:function(){return V}});var i=n(7302),r=function(){function e(e,t){var n=this;void 0===e&&(e=""),void 0===t&&(t=1),this.update=function(){n._onMove()},this._onMove=function(){var e=n._flicking;e&&e.visiblePanels.forEach((function(e){var t=e.outsetProgress,i=e.element,r=n._selector?i.querySelector(n._selector):i,o=r.parentNode,s=r.getBoundingClientRect(),a="translate(-50%) translate("+(o.getBoundingClientRect().width-s.width)/2*t*n._scale+"px)";r.style.cssText+="transform: "+a+";-webkit-transform: "+a+";-ms-transform:"+a}))},this._flicking=null,this._selector=e,this._scale=t}var t=e.prototype;return Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onMove),e.on(i.FP.AFTER_RESIZE,this.update),this._onMove()},t.destroy=function(){this._flicking&&(this._flicking.off(i.FP.MOVE,this._onMove),this._flicking.off(i.FP.AFTER_RESIZE,this.update),this._flicking=null)},e}(),o=function(){function e(e,t){var n=this;void 0===e&&(e=""),void 0===t&&(t=1),this.update=function(){n._onMove()},this._onMove=function(){var e=n._flicking,t=n._selector,i=n._scale;e&&e.visiblePanels.forEach((function(e){var n=e.outsetProgress,r=e.element,o=t?r.querySelector(t):r,s=Math.min(1,Math.max(0,1-Math.abs(n*i)));o.style.opacity=""+s}))},this._flicking=null,this._selector=e,this._scale=t}var t=e.prototype;return Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onMove),e.on(i.FP.AFTER_RESIZE,this.update),this._onMove()},t.destroy=function(){this._flicking&&(this._flicking.off(i.FP.MOVE,this._onMove),this._flicking.off(i.FP.AFTER_RESIZE,this.update),this._flicking=null)},e}(),s=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.duration,o=void 0===r?2e3:r,s=n.direction,a=void 0===s?i.JR.NEXT:s,c=n.stopOnHover,l=void 0!==c&&c;this._flicking=null,this._timerId=0,this._mouseEntered=!1,this.play=function(){var e=t._flicking,n=t._direction;e&&(t.stop(),t._mouseEntered||e.animating||(t._timerId=window.setTimeout((function(){n===i.JR.NEXT?e.next().catch((function(){})):e.prev().catch((function(){})),t.play()}),t._duration)))},this.stop=function(){clearTimeout(t._timerId)},this._onMouseEnter=function(){t._mouseEntered=!0,t.stop()},this._onMouseLeave=function(){t._mouseEntered=!1,t.play()},this._duration=o,this._direction=a,this._stopOnHover=l}var t=e.prototype;return Object.defineProperty(t,"duration",{get:function(){return this._duration},set:function(e){this._duration=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"direction",{get:function(){return this._direction},set:function(e){this._direction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"stopOnHover",{get:function(){return this._stopOnHover},set:function(e){this._stopOnHover=e},enumerable:!1,configurable:!0}),t.init=function(e){var t;if(this._flicking&&this.destroy(),e.on(((t={})[i.FP.MOVE_START]=this.stop,t[i.FP.HOLD_START]=this.stop,t[i.FP.MOVE_END]=this.play,t[i.FP.SELECT]=this.play,t)),this._flicking=e,this._stopOnHover){var n=this._flicking.element;n.addEventListener("mouseenter",this._onMouseEnter,!1),n.addEventListener("mouseleave",this._onMouseLeave,!1)}this.play()},t.destroy=function(){var e=this._flicking;if(this._mouseEntered=!1,this.stop(),e){e.off(i.FP.MOVE_START,this.stop),e.off(i.FP.HOLD_START,this.stop),e.off(i.FP.MOVE_END,this.play),e.off(i.FP.SELECT,this.play);var t=e.element;t.removeEventListener("mouseenter",this._onMouseEnter,!1),t.removeEventListener("mouseleave",this._onMouseLeave,!1),this._flicking=null}},t.update=function(){},e}(),a={CLICK:"click",MOUSE_DOWN:"mousedown",TOUCH_START:"touchstart"},c=".flicking-arrow-prev",l=".flicking-arrow-next",u="flicking-arrow-disabled",f=".flicking-pagination",h="flicking-pagination",_="bullets",p="bullet",d="bullet-active",v="fraction",g="fraction-current",E="fraction-total",m="uninitialized",b="scroll",y="slider",P="bullet-prev",C="bullet-next",k={BULLET:"bullet",FRACTION:"fraction",SCROLL:"scroll"},O={CAMERA:"camera",INDEX:"index"},x=function(e,t){e&&(e.classList?e.classList.add(t):e.className.split(" ").indexOf(t)<0&&(e.className=e.className+" "+t))},T=function(e,t){if(e)if(e.classList)e.classList.remove(t);else{var n=new RegExp("( |^)"+t+"( |$)","g");e.className.replace(n," ")}},F=function(e,t,n){var i=t.querySelector(e);if(!i)throw new Error("[Flicking-"+n+"] Couldn't find element with the given selector: "+e);return i},S=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.parentEl,o=void 0===r?null:r,s=n.prevElSelector,a=void 0===s?c:s,f=n.nextElSelector,h=void 0===f?l:f,_=n.disabledClass,p=void 0===_?u:_,d=n.moveCount,v=void 0===d?1:d,g=n.moveByViewportSize,E=void 0!==g&&g;this._flicking=null,this._preventInputPropagation=function(e){e.stopPropagation()},this._onPrevClick=function(){var e=t._flicking,n=e.camera,i=n.anchorPoints;if(!(e.animating||i.length<=0)){var r=i[0],o=t._moveCount;if(t._moveByViewportSize)e.control.moveToPosition(n.position-n.size,e.duration).catch(t._onCatch);else if(e.circularEnabled){for(var s=e.currentPanel,a=0;a<o;a++)s=s.prev();s.focus().catch(t._onCatch)}else e.index>r.panel.index?e.moveTo(Math.max(e.index-o,r.panel.index)).catch(t._onCatch):n.position>n.range.min&&e.moveTo(e.index).catch(t._onCatch)}},this._onNextClick=function(){var e=t._flicking,n=e.camera,i=n.anchorPoints;if(!(e.animating||i.length<=0)){var r=i[i.length-1],o=t._moveCount;if(t._moveByViewportSize)e.control.moveToPosition(n.position+n.size,e.duration).catch(t._onCatch);else if(e.circularEnabled){for(var s=e.currentPanel,a=0;a<o;a++)s=s.next();s.focus().catch(t._onCatch)}else e.index<r.panel.index?e.moveTo(Math.min(e.index+o,r.panel.index)).catch(t._onCatch):n.position>n.range.min&&e.moveTo(e.index).catch(t._onCatch)}},this._onAnimation=function(){var e=t._flicking,n=e.camera,i=e.control.controller;e.holding?t._updateClass(n.position):t._updateClass(i.animatingContext.end)},this._onCatch=function(e){if(!(e instanceof i.wb))throw e},this._parentEl=o,this._prevElSelector=a,this._nextElSelector=h,this._disabledClass=p,this._moveCount=v,this._moveByViewportSize=E}var t=e.prototype;return Object.defineProperty(t,"prevEl",{get:function(){return this._prevEl},enumerable:!1,configurable:!0}),Object.defineProperty(t,"nextEl",{get:function(){return this._nextEl},enumerable:!1,configurable:!0}),Object.defineProperty(t,"parentEl",{get:function(){return this._parentEl},set:function(e){this._parentEl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"prevElSelector",{get:function(){return this._prevElSelector},set:function(e){this._prevElSelector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"nextElSelector",{get:function(){return this._nextElSelector},set:function(e){this._nextElSelector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"disabledClass",{get:function(){return this._disabledClass},set:function(e){this._disabledClass=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"moveCount",{get:function(){return this._moveCount},set:function(e){this._moveCount=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"moveByViewportSize",{get:function(){return this._moveByViewportSize},set:function(e){this._moveByViewportSize=e},enumerable:!1,configurable:!0}),t.init=function(e){var t=this;this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onAnimation);var n=this._parentEl?this._parentEl:e.element,r=F(this._prevElSelector,n,"Arrow"),o=F(this._nextElSelector,n,"Arrow");[a.MOUSE_DOWN,a.TOUCH_START].forEach((function(e){r.addEventListener(e,t._preventInputPropagation,{passive:!0}),o.addEventListener(e,t._preventInputPropagation,{passive:!0})})),r.addEventListener(a.CLICK,this._onPrevClick),o.addEventListener(a.CLICK,this._onNextClick),this._prevEl=r,this._nextEl=o,this.update()},t.destroy=function(){var e=this,t=this._flicking;if(t){t.off(i.FP.MOVE,this._onAnimation);var n=this._prevEl,r=this._nextEl;[a.MOUSE_DOWN,a.TOUCH_START].forEach((function(t){n.removeEventListener(t,e._preventInputPropagation),r.removeEventListener(t,e._preventInputPropagation)})),n.removeEventListener(a.CLICK,this._onPrevClick),r.removeEventListener(a.CLICK,this._onNextClick),this._flicking=null}},t.update=function(){this._updateClass(this._flicking.camera.position)},t._updateClass=function(e){var t=this._flicking,n=this._disabledClass,i=this._prevEl,r=this._nextEl,o=t.camera.range,s=!t.circularEnabled&&e<=o.min,a=!t.circularEnabled&&e>=o.max;s?x(i,n):T(i,n),a?x(r,n):T(r,n)},e}(),M=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.type,o=void 0===r?O.CAMERA:r,s=n.synchronizedFlickingOptions,a=void 0===s?[]:s;this._flicking=null,this._addEvents=function(){var e=t._type;t._synchronizedFlickingOptions.forEach((function(n){var r=n.flicking,o=n.isSlidable,s=n.isClickable;e===O.CAMERA&&(r.on(i.FP.MOVE,t._onMove),r.on(i.FP.MOVE_START,t._onMoveStart),r.on(i.FP.MOVE_END,t._onMoveEnd)),e===O.INDEX&&o&&(r.on(i.FP.WILL_CHANGE,t._onIndexChange),r.on(i.FP.WILL_RESTORE,t._onIndexChange)),s&&r.on(i.FP.SELECT,t._onSelect)}))},this._removeEvents=function(){var e=t._type;t._synchronizedFlickingOptions.forEach((function(n){var r=n.flicking,o=n.isSlidable,s=n.isClickable;e===O.CAMERA&&(r.off(i.FP.MOVE,t._onMove),r.off(i.FP.MOVE_START,t._onMoveStart),r.off(i.FP.MOVE_END,t._onMoveEnd)),e===O.INDEX&&o&&(r.off(i.FP.WILL_CHANGE,t._onIndexChange),r.off(i.FP.WILL_RESTORE,t._onIndexChange)),s&&r.off(i.FP.SELECT,t._onSelect)}))},this._onIndexChange=function(e){var n=e.currentTarget;n.initialized&&t._synchronizeByIndex(n,e.index)},this._onMove=function(e){var n=e.currentTarget.camera,i=(n.position-n.range.min)/n.rangeDiff;t._synchronizedFlickingOptions.forEach((function(t){var r=t.flicking;if(r!==e.currentTarget){var o=0;o=n.position<n.range.min?n.position:n.position>n.range.max?r.camera.range.max+n.position-n.range.max:r.camera.range.min+r.camera.rangeDiff*i,r.camera.lookAt(o)}}))},this._onMoveStart=function(e){t._synchronizedFlickingOptions.forEach((function(t){var n=t.flicking;n!==e.currentTarget&&n.disableInput()}))},this._onMoveEnd=function(e){t._synchronizedFlickingOptions.forEach((function(t){var n=t.flicking;n!==e.currentTarget&&(n.enableInput(),n.control.updateInput())}))},this._onSelect=function(e){e.currentTarget.moveTo(e.index).catch((function(){})),t._synchronizeByIndex(e.currentTarget,e.index)},this._synchronizeByIndex=function(e,n){var r=t._synchronizedFlickingOptions;t._preventEvent((function(){r.forEach((function(r){t._updateClass(r,n);var o=r.flicking;if(o!==e){var s=(0,i.uZ)(n,0,o.panels.length);o.animating?o.once(i.FP.MOVE_END,(function(){o.moveTo(s).catch((function(){}))})):o.moveTo(s)}}))}))},this._updateClass=function(e,t){var n=e.flicking,i=e.activeClass;i&&n.panels.forEach((function(e){e.index===t?x(e.element,i):T(e.element,i)}))},this._type=o,this._synchronizedFlickingOptions=a}var t=e.prototype;return Object.defineProperty(t,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"synchronizedFlickingOptions",{get:function(){return this._synchronizedFlickingOptions},set:function(e){this._synchronizedFlickingOptions=e},enumerable:!1,configurable:!0}),t.init=function(e){var t=this,n=this._synchronizedFlickingOptions;this._flicking&&this.destroy(),this._flicking=e,this._addEvents(),n.forEach((function(e){var n=e.flicking;t._updateClass(e,n.defaultIndex)}))},t.destroy=function(){this._flicking&&(this._removeEvents(),this._flicking=null)},t.update=function(){var e=this;this._synchronizedFlickingOptions.forEach((function(t){e._updateClass(t,t.flicking.index)}))},t._preventEvent=function(e){this._removeEvents(),e(),this._addEvents()},e}(),L=function(){function e(e){var t=this,n=void 0===e?{}:e,i=n.selector,r=void 0===i?"":i,o=n.scale,s=void 0===o?1:o,a=n.rotate,c=void 0===a?1:a,l=n.perspective,u=void 0===l?1e3:l;this.update=function(){t._onMove()},this._onMove=function(){var e=t._flicking,n=t._selector,i=t._scale,r=t._rotate,o=t._perspective;if(e){var s=e.horizontal;e.visiblePanels.forEach((function(e){var t=e.outsetProgress,a=e.element,c=n?a.querySelector(n):a,l=1/(Math.abs(t*i)+1),u=t>0?Math.min(90,100*t*r):Math.max(-90,100*t*r),f=s?[0,u]:[u,0],h=f[0],_=f[1];c.style.transform="perspective("+o+"px) rotateX("+h+"deg) rotateY("+_+"deg) scale("+l+")"}))}},this._flicking=null,this._selector=r,this._scale=s,this._rotate=c,this._perspective=u}var t=e.prototype;return Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"rotate",{get:function(){return this._rotate},set:function(e){this._rotate=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"perspective",{get:function(){return this._perspective},set:function(e){this._perspective=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onMove),e.on(i.FP.AFTER_RESIZE,this.update),this._onMove()},t.destroy=function(){this._flicking&&(this._flicking.off(i.FP.MOVE,this._onMove),this._flicking.off(i.FP.AFTER_RESIZE,this.update),this._flicking=null)},e}(),w=function(e,t){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},w(e,t)};function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function R(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||t)}var A=function(){return function(e){var t=e.flicking,n=e.pagination,i=e.wrapper;this._flicking=t,this._pagination=n,this._wrapper=i}}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childs=[],t}I(t,e);var n=t.prototype;return n.render=function(){var e=this._flicking,t=this._pagination,n=t.renderBullet,r=t.classPrefix+"-"+_,o=t.classPrefix+"-"+p,s=t.classPrefix+"-"+d,c=e.camera.anchorPoints,l=this._wrapper;x(l,r),l.innerHTML=c.map((function(e,t){return n(o,t)})).join("\n");var u=[].slice.call(l.children);u.forEach((function(t,n){var r=c[n];r.panel.index===e.index&&x(t,s),t.addEventListener(a.MOUSE_DOWN,(function(e){e.stopPropagation()})),t.addEventListener(a.TOUCH_START,(function(e){e.stopPropagation()}),{passive:!0}),t.addEventListener(a.CLICK,(function(){e.moveTo(r.panel.index).catch((function(e){if(!(e instanceof i.wb))throw e}))}))})),this._childs=u},n.update=function(e){var t=this._flicking,n=this._pagination,i=this._childs,r=n.classPrefix+"-"+d,o=t.camera.anchorPoints;if(!(o.length<=0)){i.forEach((function(e){T(e,r)}));var s=i[e-o[0].panel.index];x(s,r)}},t}(A),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}I(t,e);var n=t.prototype;return n.render=function(){var e=this._flicking,t=this._wrapper,n=this._pagination,i=n.classPrefix+"-"+v,r=n.classPrefix+"-"+g,o=n.classPrefix+"-"+E;x(t,i),t.innerHTML=n.renderFraction(r,o),this.update(e.index)},n.update=function(e){var t=this._flicking,n=this._wrapper,i=this._pagination,r=i.classPrefix+"-"+g,o=i.classPrefix+"-"+E,s=n.querySelector("."+r),a=n.querySelector("."+o),c=t.camera.anchorPoints,l=c.length>0?e-c[0].panel.index+1:0;s.innerHTML=i.fractionCurrentFormat(l),a.innerHTML=i.fractionTotalFormat(c.length)},t}(A),z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._bullets=[],t._bulletSize=0,t._previousIndex=-1,t._sliderIndex=-1,t.moveTo=function(e){var n=t._pagination,i=t._wrapper.firstElementChild,r=t._bulletSize,o=r*n.bulletCount;i.style.transform="translate("+(o/2-(e+.5)*r)+"px)",t._sliderIndex=e},t}I(t,e);var n=t.prototype;return n.render=function(){var e=this._wrapper,t=this._flicking,n=this._pagination,r=n.renderBullet,o=t.camera.anchorPoints,s=n.classPrefix+"-"+b,c=n.classPrefix+"-"+p,l=n.classPrefix+"-"+y,u=n.classPrefix+"-"+m,f=document.createElement("div");x(f,l),x(e,u),x(e,s),e.appendChild(f),f.innerHTML=o.map((function(e,t){return r(c,t)})).join("\n");var h=[].slice.call(f.children);if(h.forEach((function(e,n){var r=o[n];e.addEventListener(a.MOUSE_DOWN,(function(e){e.stopPropagation()})),e.addEventListener(a.TOUCH_START,(function(e){e.stopPropagation()}),{passive:!0}),e.addEventListener(a.CLICK,(function(){t.moveTo(r.panel.index).catch((function(e){if(!(e instanceof i.wb))throw e}))}))})),!(h.length<=0)){var _=getComputedStyle(h[0]),d=h[0].clientWidth+parseFloat(_.marginLeft)+parseFloat(_.marginRight);e.style.width=d*n.bulletCount+"px",this._bullets=h,this._bulletSize=d,this.update(this._flicking.index),window.requestAnimationFrame((function(){T(e,u)}))}},n.update=function(e){var t=this._pagination,n=this._flicking,r=this._bullets,o=this._previousIndex,s=n.camera.anchorPoints,a=e-s[0].panel.index;if(!(s.length<=0)){var c=t.classPrefix+"-"+d,l=t.classPrefix+"-"+P,u=t.classPrefix+"-"+C,f=new RegExp("^"+l),h=new RegExp("^"+u);r.forEach((function(e,t){for(var n,i=t-a,r=0,o=e.className.split(" ");r<o.length;r++){var s=o[r];(s===c||f.test(s)||h.test(s))&&T(e,s)}x(e,0===i?c:i>0?(n=Math.abs(i),""+u+(n>1?n:"")):function(e){return""+l+(e>1?e:"")}(Math.abs(i)))})),t.scrollOnChange(a,{total:r.length,prevIndex:o,sliderIndex:this._sliderIndex,direction:a>o?i.JR.NEXT:i.JR.PREV,bullets:R([],r),moveTo:this.moveTo}),this._previousIndex=a}},t}(A),V=function(){function e(e){var t=this,n=void 0===e?{}:e,i=n.parentEl,r=void 0===i?null:i,o=n.selector,s=void 0===o?f:o,a=n.type,c=void 0===a?k.BULLET:a,l=n.classPrefix,u=void 0===l?h:l,_=n.bulletCount,p=void 0===_?5:_,d=n.renderBullet,v=void 0===d?function(e){return'<span class="'+e+'"></span>'}:d,g=n.renderFraction,E=void 0===g?function(e,t){return'<span class="'+e+'"></span>/<span class="'+t+'"></span>'}:g,m=n.fractionCurrentFormat,b=void 0===m?function(e){return e.toString()}:m,y=n.fractionTotalFormat,P=void 0===y?function(e){return e.toString()}:y,C=n.scrollOnChange,O=void 0===C?function(e,t){return t.moveTo(e)}:C;this._flicking=null,this.update=function(){t._removeAllChilds(),t._renderer.render()},this._onIndexChange=function(e){t._renderer.update(e.index)},this._parentEl=r,this._selector=s,this._type=c,this._classPrefix=u,this._bulletCount=p,this._renderBullet=v,this._renderFraction=E,this._fractionCurrentFormat=b,this._fractionTotalFormat=P,this._scrollOnChange=O}var t=e.prototype;return Object.defineProperty(t,"parentEl",{get:function(){return this._parentEl},set:function(e){this._parentEl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"classPrefix",{get:function(){return this._classPrefix},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulletCount",{get:function(){return this._bulletCount},set:function(e){this._bulletCount=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderBullet",{get:function(){return this._renderBullet},set:function(e){this._renderBullet=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderFraction",{get:function(){return this._renderFraction},set:function(e){this._renderFraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"fractionCurrentFormat",{get:function(){return this._fractionCurrentFormat},set:function(e){this._fractionCurrentFormat=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"fractionTotalFormat",{get:function(){return this._fractionTotalFormat},set:function(e){this._fractionTotalFormat=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scrollOnChange",{get:function(){return this._scrollOnChange},set:function(e){this._scrollOnChange=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulletWrapperclassPrefixClass",{set:function(e){this._classPrefix=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e;var t=this._type,n=this._selector,r=(this._parentEl?this._parentEl:e.element).querySelector(n);if(!r)throw new Error("[Flicking-Pagination] Couldn't find element with the given selector: "+n);this._wrapper=r,this._renderer=this._createRenderer(t),e.on(i.FP.WILL_CHANGE,this._onIndexChange),e.on(i.FP.WILL_RESTORE,this._onIndexChange),e.on(i.FP.PANEL_CHANGE,this.update),this.update()},t.destroy=function(){var e=this._flicking;e&&(e.off(i.FP.WILL_CHANGE,this._onIndexChange),e.off(i.FP.WILL_RESTORE,this._onIndexChange),e.off(i.FP.PANEL_CHANGE,this.update),this._removeAllChilds(),this._flicking=null)},t._createRenderer=function(e){var t={flicking:this._flicking,pagination:this,wrapper:this._wrapper};switch(e){case k.BULLET:return new j(t);case k.FRACTION:return new N(t);case k.SCROLL:return new z(t);default:throw new Error('[Flicking-Pagination] type "'+e+'" is not supported.')}},t._removeAllChilds=function(){for(var e=this._wrapper;e.firstChild;)e.removeChild(e.firstChild)},e}()}}]);