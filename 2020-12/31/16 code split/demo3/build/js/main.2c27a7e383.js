!function(){var e,t={},n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return"js/test.70d7622478.js"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},r.l=function(t,n,o){if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==t){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.src=t),e[t]=[n];var f=function(n,r){i.onerror=i.onload=null,clearTimeout(s);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},s=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){var e={179:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=i);var u=r.p+r.u(t),c=new Error;r.l(u,(function(n){if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}}),"chunk-"+t)}};var t=function(t,n){for(var o,i,u=n[0],c=n[1],a=n[2],l=0,f=[];l<u.length;l++)i=u[l],r.o(e,i)&&e[i]&&f.push(e[i][0]),e[i]=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);for(a&&a(r),t&&t(n);f.length;)f.shift()()},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.e(43).then(r.bind(r,411)).then((({mul:e,count:t})=>{console.log(e(2,5))})).catch((()=>{console.log("文件加载失败~")})),console.log([1,2,3,4].reduce(((e,t)=>e+t),0))}();