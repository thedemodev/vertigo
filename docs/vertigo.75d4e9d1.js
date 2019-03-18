parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RhqW":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.DOT_INCREMENT_STEP=6,exports.defaultOptions={resolution:25,minimumDotRadius:1,maximumDotRadius:5,distanceBetweenDots:2};
},{}],"GOHQ":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,o=1,s=arguments.length;o<s;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};exports.__esModule=!0;var e=require("./constants"),o=function(){function o(s){this.options=t({},e.defaultOptions,s),this.radiusGrowStep=2*this.options.maximumDotRadius+this.options.distanceBetweenDots;var i=2*this.options.resolution*this.radiusGrowStep+2*this.options.maximumDotRadius;this.svg=o.createSvg(i),this.generateDots()}return o.createSvg=function(t,e){void 0===e&&(e="Dots");var o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.setAttribute("class",e),o.setAttribute("viewBox",t/-2+" "+t/-2+" "+t+" "+t),o},o.createDot=function(t,e,o,s){void 0===s&&(s="Dots-dot");var i=document.createElementNS("http://www.w3.org/2000/svg","circle");return i.setAttribute("class",s),i.setAttribute("cx",t),i.setAttribute("cy",e),i.setAttribute("r",o.toString()),{element:i,x:t,y:e,scale:1}},o.prototype.generateDots=function(){var t=o.createDot("0","0",this.options.minimumDotRadius);this.dots=[[t]],this.svg.appendChild(t.element);for(var s=1;s<=this.options.resolution;s++){var i=s*this.radiusGrowStep,r=s*e.DOT_INCREMENT_STEP,n=360/r;this.dots[s]=[];for(var a=0;a<r;a++){var u=Math.PI*(n*a)/180,h=(i*Math.cos(u)).toFixed(3),c=(i*Math.sin(u)).toFixed(3),p=o.createDot(h,c,this.options.minimumDotRadius);this.dots[s].push(p),this.svg.appendChild(p.element)}}},o.prototype.drawImage=function(t){var e=this;t.forEach(function(t,o){t.forEach(function(t,s){var i=e.dots[o];if(i){var r=i[s];r.scale!==t&&(r.scale=t,r.element.setAttribute("r",t.toString()))}})})},o.prototype.removeDots=function(){this.dots.forEach(function(t){t.forEach(function(t){t.element.remove()})})},o.prototype.setOptions=function(o){this.options=t({},e.defaultOptions,o),this.radiusGrowStep=2*this.options.maximumDotRadius+this.options.distanceBetweenDots;var s=2*this.options.resolution*this.radiusGrowStep+2*this.options.maximumDotRadius;this.svg.setAttribute("viewBox",s/-2+" "+s/-2+" "+s+" "+s),this.removeDots(),this.generateDots()},o}();exports.default=o;
},{"./constants":"RhqW"}],"eAYL":[function(require,module,exports) {
"use strict";function e(e,t){return void 0===t&&(t=2),parseFloat(e.toFixed(t))}exports.__esModule=!0,exports.toFixed=e;
},{}],"tgnd":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var a,e=1,r=arguments.length;e<r;e++)for(var n in a=arguments[e])Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);return t}).apply(this,arguments)};exports.__esModule=!0;var a=require("./helpers"),e=require("./constants");function r(t,a,e,r){return t/a*(r-e)+e}function n(t,a,e,r){return{x:t*Math.cos(a)-e/2+r/2,y:t*Math.sin(a)-e/2+r/2}}function i(t,e,n,i,o,s){for(var u=t.getImageData(e,n,i,i),h=0,d=0;d<u.data.length;d+=4){var c=u.data[d],m=u.data[d+1],v=u.data[d+2];u.data[d+3];h+=.299*c+.587*m+.114*v}var f=r(h/=u.data.length/4,255,o,s);return a.toFixed(f,2)}function o(a,r,o){var s=document.createElement("canvas");s.width=500,s.height=500;var u=s.getContext("2d"),h=new Image,d=t({},e.defaultOptions,r);h.addEventListener("load",function(){var t,a=0,r=0;h.height>h.width?(a=(h.height-h.width)/2,t=h.width):(r=(h.width-h.height)/2,t=h.height),u.drawImage(h,r,a,t,t,0,0,500,500);var s=[[]],c=250/(d.resolution+.5),m=[],v=n(0,0,c,500),f=v.x,g=v.y;s[0][0]=i(u,f,g,c,d.minimumDotRadius,d.maximumDotRadius),m.push({x:f,y:g});for(var l=1;l<=d.resolution;l++){var x=l*c,p=l*e.DOT_INCREMENT_STEP,y=360/p;s[l]=[];for(var w=0;w<p;w++){var D=n(x,Math.PI*(y*w)/180,c,500),E=D.x,R=D.y;s[l][w]=i(u,E,R,c,d.minimumDotRadius,d.maximumDotRadius),m.push({x:E,y:R})}}o(s),u.strokeStyle="orange",m.forEach(function(t){u.strokeRect(t.x,t.y,c,c)})}),h.src=a}exports.default=o;
},{"./helpers":"eAYL","./constants":"RhqW"}],"7QCb":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var t=e(require("./src/vertigo")),a=e(require("./src/convert-image")),n=require("./src/constants"),r=document.querySelector(".SvgWrapper-svg"),o=document.querySelector(".TestImage--hello"),u=document.querySelector(".App-fileInput"),c=document.querySelector(".Button--download"),i={},s=[],l=null;function d(){return s.forEach(function(e){i[e.key]=parseInt(e.input.value,10)}),i}Object.keys(n.defaultOptions).forEach(function(e){var t=document.querySelector(".App-optionsInput--"+e);t.addEventListener("change",function(e){d(),f.setOptions(i),e.target.nextElementSibling.innerHTML=e.target.value,l&&a.default(l,i,function(e){f.drawImage(e),c.href="data:application/octet-stream;base64,"+btoa(r.innerHTML)})}),s.push({key:e,input:t})}),d(),document.querySelectorAll(".TestImageButton").forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(e.target.getAttribute("data-image")).getAttribute("src");a.default(t,i,function(e){f.drawImage(e),l=t,c.href="data:application/octet-stream;base64,"+btoa(r.innerHTML)})})});var f=new t.default(i);r.appendChild(f.svg),u.addEventListener("change",function(){var e=u.files[0],t=URL.createObjectURL(e);a.default(t,i,function(e){f.drawImage(e),l=t,c.href="data:application/octet-stream;base64,"+btoa(r.innerHTML)})});var p=o.getAttribute("src");a.default(p,i,function(e){f.drawImage(e),l=p,c.href="data:application/octet-stream;base64,"+btoa(r.innerHTML)});
},{"./src/vertigo":"GOHQ","./src/convert-image":"tgnd","./src/constants":"RhqW"}]},{},["7QCb"], null)
//# sourceMappingURL=/vertigo.75d4e9d1.js.map