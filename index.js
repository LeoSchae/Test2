!function(){var t={360:function(){MouseEvent.prototype.pointerId||(MouseEvent.prototype.pointerId=0),MouseEvent.prototype.pointerType||(MouseEvent.prototype.pointerType="mouse"),HTMLElement.prototype.releasePointerCapture||(console.log("Bad Polyfill HTMLElement.releasePointerCapture"),HTMLElement.prototype.releasePointerCapture=function(t){}),HTMLElement.prototype.setPointerCapture||(console.log("Bad Polyfill HTMLElement.releasePointerCapture"),HTMLElement.prototype.setPointerCapture=function(t){}),Number.isInteger||(console.log("Polyfill Number.isInteger"),Number.isInteger=function(t){return"number"==typeof t&&!(t!=t||t==1/0||t==-1/0)&&Math.floor(Math.abs(t))===Math.abs(t)}),Array.prototype.find||(console.log("Polyfill Array.find"),Array.prototype.find=function(t,e){if(!t||"function"!=typeof t)throw TypeError();for(var n=this.length,i=e||this,o=0;o<n;o++)try{if(t.apply(i,[this[o],o,this]))return this[o]}catch(t){return}}),Array.prototype.findIndex||(console.log("Polyfill Array.find"),Array.prototype.findIndex=function(t,e){if(!t||"function"!=typeof t)throw TypeError();for(var n=this.length,i=e||this,o=0;o<n;o++)try{if(t.apply(i,[this[o],o,this]))return o}catch(t){return-1}return-1}),window.requestAnimationFrame||(window.requestAnimationFrame=function(){console.log("Polyfill requestAnimationFrame");var t=Date.now(),e=t;return function(n){var i=Date.now(),o=Math.max(0,16.666666666666668-(i-e)),r=i+o;return e=r,window.setTimeout((function(){n(r-t)}),o)}}())}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}!function(){"use strict";n(360);var t,e=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};!function(t){t[1/0]="infinity",t.Complex="complex",t.Moebius="moebius"}(t||(t={}));var i,o={mathtype:t.Infinity},r=function(){function e(e,n){void 0===n&&(n=0),this.mathtype=t.Complex,this.real=e,this.imag=n}return e.prototype.abs2=function(){return this.real*this.real+this.imag*this.imag},e.prototype.abs=function(){return Math.sqrt(this.abs2())},e.prototype.add=function(t){return"number"==typeof t?new e(this.real+t,this.imag):new e(this.real+t.real,this.imag+t.imag)},e.prototype.sub=function(t){return"number"==typeof t?new e(this.real-t,this.imag):new e(this.real-t.real,this.imag-t.imag)},e.prototype.mul=function(t){return"number"==typeof t?new e(t*this.real,t*this.imag):new e(this.real*t.real-this.imag*t.imag,this.imag*t.real+this.real*t.imag)},e.prototype.div=function(t){return"number"==typeof t?new e(this.real/t,this.imag/t):this.mul(t.inv())},e.prototype.inv=function(){var t=this.abs2();return new e(this.real/t,-this.imag/t)},e.prototype.arg=function(){var t=this.real,e=this.imag;if(0==t)return e>0?.5*Math.PI:e<0?1.5*Math.PI:0;if(t>=0){var n=Math.atan(1*e/t);return n<0?2*Math.PI+n:n}return Math.atan(1*e/t)+Math.PI},e.prototype.toTeX=function(){return 0==this.imag?""+this.real:0==this.real?this.imag+"i":this.real+" + "+this.imag+"i"},e}(),a=function(){function e(t,e,n,i){this.m=[t,e,n,i]}return e.prototype.mul=function(t){var n=this.m,i=t.m;return new e(n[0]*i[0]+n[1]*i[2],n[0]*i[1]+n[1]*i[3],n[2]*i[0]+n[3]*i[2],n[2]*i[1]+n[3]*i[3])},e.prototype.inv=function(){var t=this.m;return new e(t[3],-t[1],-t[2],t[0])},e.prototype.transform=function(e){if("number"==typeof e)e=new r(e);else if(e.mathtype===t.Infinity)return 0==this.m[2]?o:new r(this.m[0]/this.m[2]);var n=this.m,i=e.mul(n[2]).add(n[3]);return 0==i.real&&0==i.imag?o:e.mul(n[0]).add(n[1]).div(i)},e.prototype.toTeX=function(){return"\\begin{pmatrix}"+this.m[0]+"&"+this.m[1]+"\\"+this.m[2]+"&"+this.m[3]+"\\end{pmatrix}"},e}();!function(t){var n=function(){function t(t,e){this.indicator=t,this.tex=e}return t.prototype.findCosetIndex=function(t,e,n){var i=n.inv(),o=this.indicator;return e.findIndex((function(e){return o(t,e.mul(i))}))},t.prototype.findCoset=function(t,e,n){var i=n.inv(),o=this.indicator;return e.find((function(e){return o(t,e.mul(i))}))},t.prototype.cosetRepresentatives=function(t){var n,i,o,r;if(!Number.isInteger(t)||t<=0)throw"Invalid Level";for(var s=[new a(0,-1,1,0),new a(1,1,0,1),new a(1,-1,0,1)],l=this,u=[new a(1,0,0,1)],h=[],p=[],c=[new a(1,0,0,1)];c.length>0;){h=p,p=c,c=[];try{for(var f=(n=void 0,e(p)),y=f.next();!y.done;y=f.next()){var m=y.value;try{for(var d=(o=void 0,e(s)),v=d.next();!v.done;v=d.next()){var g=v.value,x=m.mul(g);-1==l.findCosetIndex(t,h,x)&&-1==l.findCosetIndex(t,c,x)&&-1==l.findCosetIndex(t,p,x)&&(u.push(x),c.push(x))}}catch(t){o={error:t}}finally{try{v&&!v.done&&(r=d.return)&&r.call(d)}finally{if(o)throw o.error}}}}catch(t){n={error:t}}finally{try{y&&!y.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}return u},t.prototype.toTeX=function(){return this.tex},t}();function i(t,e,n){return(t-e)%n==0}t.Gamma_0=new n((function(t,e){return i(e.m[2],0,t)}),"\\Gamma_0"),t.Gamma_1=new n((function(t,e){return i(e.m[2],0,t)&&(i(e.m[0],1,t)||i(e.m[0],-1,t))}),"\\Gamma_1"),t.Gamma=new n((function(t,e){return i(e.m[2],0,t)&&i(e.m[1],0,t)&&(i(e.m[0],1,t)||i(e.m[0],-1,t))}),"\\Gamma");var s=new r(Math.cos(Math.PI/3),Math.sin(Math.PI/3));t.Domain1={corners:[o,s,new r(0,1),new r(-s.real,s.imag)],findCosetOf:function(t,e){if(void 0===e&&(e=100),t.imag<=0)return null;for(var n=new a(1,0,0,1),i=t,r=0;r<e;r++){if(i==o)return n.inv();var s=Math.floor(i.real+.5);if((i=(n=new a(1,-s,0,1).mul(n)).transform(t)).abs2()>=1)return n.inv();i=(n=new a(0,1,-1,0).mul(n)).transform(t)}return console.log("Max iterations in 'findMoebiousToFund' reached"),null}}}(i||(i={}));var s,l=(s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(t){o={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},h=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},p=function(){function t(){this.origin=[300,300],this.scale=100}return t.prototype.project=function(t){return[t.real*this.scale+this.origin[0],-t.imag*this.scale+this.origin[1]]},t.prototype.map=function(t,e){return new r((t-this.origin[0])/this.scale,-(e-this.origin[1])/this.scale)},t.prototype.translate=function(t,e){var n=u(this.origin,2),i=n[0],o=n[1];this.origin=[i+t,o+e]},t.prototype.zoom=function(t,e,n){var i=Math.exp(t),o=u(this.origin,2),r=o[0],a=o[1];this.origin=[r*i+e*(1-i),a*i+n*(1-i)],this.scale*=i},t}(),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.projection=new p,e.font="9px Sans-Serif",e}return l(e,t),e.prototype.axis=function(){this.context.save(),this.fillStyle="#000000",this.strokeStyle="#000000",this.context.lineWidth=1.25,this.context.textBaseline="top",this.context.font=this.font;var t=u(this.projection.origin,2),e=t[0],n=t[1],i=this.context.canvas,o=i.width,r=i.height;this.context.beginPath(),this.context.moveTo(e,6),this.context.lineTo(e,r),this.context.moveTo(6,n),this.context.lineTo(o-6,n),this.stroke(),this.context.beginPath(),this.context.moveTo(e-3,6),this.context.lineTo(e+3,6),this.context.lineTo(e,0),this.context.lineTo(e-3,6),this.context.fill(),this.context.beginPath(),this.context.moveTo(o-6,n-3),this.context.lineTo(o-6,n+3),this.context.lineTo(o,n),this.context.lineTo(o-6,n-3),this.context.fill();var a=this.context.measureText("Im");this.context.fillText("Im",e-a.width-6,2);var s=this.context.measureText("Re");this.context.fillText("Re",o-s.width-3,n+6),this.context.restore()},e.prototype.annotateFrac=function(t){for(var e,n,i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var a=this.context;if(a.save(),a.textBaseline="top",a.font=this.font,a.strokeStyle="#000000",a.fillStyle="#000000",a.lineWidth=1,"Re"==t)try{for(var s=h(i),l=s.next();!l.done;l=s.next()){var u=l.value,p=u[0],c=u[1],f=this._project(new r(1*p/c)),y=p.toString(),m=c.toString(),d=a.measureText(y),v=a.measureText(m),g=Math.max(d.width,v.width)/2+1,x=.3;a.fillText(y,f[0]-d.width/2,f[1]+2*d.actualBoundingBoxDescent*x),a.fillText(m,f[0]-v.width/2,f[1]+d.actualBoundingBoxDescent*(1+4*x)),a.beginPath(),a.moveTo(f[0]-g,f[1]+d.actualBoundingBoxDescent*(1+3*x)),a.lineTo(f[0]+g,f[1]+d.actualBoundingBoxDescent*(1+3*x)),a.stroke()}}catch(t){e={error:t}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}a.restore()},e.prototype._project=function(t){return t==o?null:this.projection.project(t)},e.prototype._drawLine=function(t,e){if(t==o){if(e==o)return;var n=this.projection.project(e);this.context.moveTo(n[0],-5),this.context.lineTo(n[0],n[1])}else{if(e==o)return void this.context.lineTo(this.projection.project(t)[0],-5);var i=t,a=e;if(Math.abs(i.real-a.real)<1e-10){var s=this.projection.project(a);return void this.context.lineTo(s[0],s[1])}var l=.5*(i.abs2()-a.abs2())/(i.real-a.real),u=this.projection.project(new r(l));i=i.sub(l),a=a.sub(l);var h=i.arg(),p=a.arg();this.context.arc(u[0],u[1],i.abs()*this.projection.scale,-h,-p,h<p)}},e}(function(){function t(t){this.shapeStart=null,this.position=null,this.context=t}return t.prototype.beginShape=function(t){void 0===t&&(t=null),this.context.beginPath(),this.position=null,this.shapeStart=null,null!=t&&this.moveTo(t)},t.prototype.closeShape=function(){this.lineTo(this.shapeStart),this.context.closePath()},t.prototype.moveTo=function(t){null==this.shapeStart&&(this.shapeStart=t);var e=this._project(t);null!=e&&this.context.moveTo(e[0],e[1]),this.position=t},t.prototype.lineTo=function(t){null==this.position?this.moveTo(t):(this._drawLine(this.position,t),this.position=t)},t.prototype.polyLine=function(t){var e,n;try{for(var i=h(t),o=i.next();!o.done;o=i.next()){var r=o.value;this.lineTo(r)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},Object.defineProperty(t.prototype,"strokeStyle",{set:function(t){this.context.strokeStyle=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fillStyle",{set:function(t){this.context.fillStyle=t},enumerable:!1,configurable:!0}),t.prototype.stroke=function(){this.context.stroke()},t.prototype.fill=function(){this.context.fill()},t}()),f=function(){function t(t,e){this.fgRepaint=!1,this.bgRepaint=!1,this.mousePos=null,this._group=i.Gamma.cosetRepresentatives(5),this._domain=i.Domain1,this.pixelRatio=window.devicePixelRatio,this._fg=t,this._bg=e,this.fgCanvas=new c(t.getContext("2d")),this.bgCanvas=new c(e.getContext("2d")),this.projection=this.bgCanvas.projection,this.fgCanvas.projection=this.projection;var n=Math.round(9*this.pixelRatio)+"px Sans-Serif";this.fgCanvas.font=n,this.bgCanvas.font=n,this._attachEvents(t),this._fixSize();var o=this,r=function(){o._fixSize(),window.setTimeout(r,1e3)};window.addEventListener("resize",(function(t){return o._fixSize()})),r()}return Object.defineProperty(t.prototype,"group",{get:function(){return this._group},set:function(t){this._group=t,this.requestRepaint()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"domain",{get:function(){return this._domain},set:function(t){this._domain=t,this.requestRepaint()},enumerable:!1,configurable:!0}),t.prototype.paintFg=function(){var t=this,e=t.fgCanvas,n=t._fg,i=n.width,o=n.height,r=t.projection,a=t.mousePos,s=t.domain;e.context.clearRect(0,0,i,o);var l=null;null!=a&&(l=s.findCosetOf(r.map.apply(r,function(t,e){for(var n=0,i=e.length,o=t.length;n<i;n++,o++)t[o]=e[n];return t}([],function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(t){o={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a}(a))))),null!=l&&(e.fillStyle="rgba(100,100,255,0.3)",e.beginShape(),e.polyLine(s.corners.map((function(t){return l.transform(t)}))),e.closeShape(),e.fill()),e.context.globalAlpha=1,e.axis(),e.annotateFrac("Re",[1,2])},t.prototype.paintBg=function(){var t,e,n=this,i=n.bgCanvas,o=n._bg,r=o.width,a=o.height,s=n.group,l=n.domain;i.context.clearRect(0,0,r,a),i.fillStyle="rgba(255,100,100,0.5)",i.strokeStyle="rgb(255,0,0)";var u=function(t){i.beginShape(),i.polyLine(l.corners.map((function(e){return t.transform(e)}))),i.closeShape(),i.fill(),i.stroke()};try{for(var h=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}(s),p=h.next();!p.done;p=h.next())u(p.value)}catch(e){t={error:e}}finally{try{p&&!p.done&&(e=h.return)&&e.call(h)}finally{if(t)throw t.error}}},t.prototype.zoom=function(t,e){this.projection.zoom(t,e[0]*this.pixelRatio,e[1]*this.pixelRatio),this.requestRepaint()},t.prototype.translate=function(t){this.projection.translate(t[0]*this.pixelRatio,t[1]*this.pixelRatio),this.requestRepaint()},t.prototype.requestRepaint=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=!0);var n=this.fgRepaint,i=this.bgRepaint;if(!n&&!i){var o=this;window.requestAnimationFrame((function(){return o._repaint()}))}this.fgRepaint=n||t,this.bgRepaint=i||e},t.prototype._hover=function(t){null!=t&&(t=[t[0]*this.pixelRatio,t[1]*this.pixelRatio]),this.mousePos=t,this.requestRepaint(!0,!1)},t.prototype._repaint=function(){this.fgRepaint&&this.paintFg(),this.bgRepaint&&this.paintBg(),this.fgRepaint=!1,this.bgRepaint=!1},t.prototype._attachEvents=function(t){var e=this,n=new Array,i=-1,o=null,r=[0,0],a=function(e){if("mouse"!=e.pointerType||0==e.button){for(var o=0;o<n.length;o++)if(n[o].pointerId==e.pointerId){n.splice(o,1),t.releasePointerCapture(e.pointerId),e.preventDefault();break}i=-1}},s=function(r){"mouse"==r.pointerType&&0!=r.button||(n.push(r),t.setPointerCapture(r.pointerId),o=null,i=-1,n.length<=1?e._hover([r.x,r.y]):e._hover(null),r.preventDefault())},l=function(t){for(var a=0;a<n.length;a++)if(n[a].pointerId==t.pointerId){n[a]=t;break}if(n.length<=1?e._hover([t.x,t.y]):e._hover(null),1==n.length){var s=[t.x,t.y];null!=o&&e.translate([s[0]-o[0],s[1]-o[1]]),o=s,t.preventDefault()}else if(2==n.length){var l=n[0],u=l.x,h=l.y,p=n[1],c=p.x,f=p.y,y=Math.sqrt((u-c)*(u-c)+(h-f)*(h-f)),m=[.5*(u+c),.5*(h+f)];if(i>0){var d=y/i;e.translate([m[0]-r[0],m[1]-r[1]]),e.zoom(Math.log(d),m)}r=m,i=y,t.preventDefault()}},u=function(t){"mouse"==t.pointerType&&e._hover(null)};window.PointerEvent?(t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),t.addEventListener("pointerdown",s),t.addEventListener("pointermove",l),t.addEventListener("pointerleave",u)):(window.addEventListener("mouseup",a),t.addEventListener("mousedown",s),t.addEventListener("mousemove",l),t.addEventListener("mouseout",u)),t.addEventListener("wheel",(function(t){e.zoom(-t.deltaY*(1==t.deltaMode?.03333:.001),[t.x,t.y]),t.preventDefault()}))},t.prototype._fixSize=function(){var t=this,e=t._bg,n=t._fg,i=t.pixelRatio,o=e.width,r=e.height,a=e.clientWidth,s=e.clientHeight,l=Math.round(a*i),u=Math.round(s*i);l==o&&u==r||(e.width=l,e.height=u,n.width=l,n.height=u,this.requestRepaint())},t}();window.addEventListener("load",(function(){new f(document.getElementById("fgcanvas"),document.getElementById("bgcanvas"));var t=document.getElementById("sidepanel"),e=document.getElementById("sidepanel-open"),n=document.getElementById("sidepanel-close");e.addEventListener("click",(function(){t.style.display="",e.style.display="none"})),n.addEventListener("click",(function(){t.style.display="none",e.style.display=""}))}))}()}();