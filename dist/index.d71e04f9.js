!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire2c90;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire2c90=i);var a=i.register;a("iE7OH",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e});var r,o=new Map;r=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),a("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,o={};r=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),i("iE7OH").register(i("aNJCr").getBundleURL("4a7ff"),JSON.parse('["4a7ff","index.d71e04f9.js","hDqTj","applause-1.6fb96cce.gif","8GDtZ","memorytile-beep.80d5ed15.mp3","3S3uA","applause-sound.db1c2c2e.mp3","9phPv","applause-2.1cb0fbb3.gif","g4Bw2","applause-3.4ebe40a3.gif","7pRsM","applause-4.3e0e6d2f.gif"]'));var l={};l=i("aNJCr").getBundleURL("4a7ff")+"applause-1.6fb96cce.gif";var c={};c=i("aNJCr").getBundleURL("4a7ff")+"applause-2.1cb0fbb3.gif";var s={};s=i("aNJCr").getBundleURL("4a7ff")+"applause-3.4ebe40a3.gif";var u={};u=i("aNJCr").getBundleURL("4a7ff")+"applause-4.3e0e6d2f.gif";let d=new URL(i("aNJCr").getBundleURL("4a7ff")+"memorytile-beep.80d5ed15.mp3"),m=new URL(i("aNJCr").getBundleURL("4a7ff")+"applause-sound.db1c2c2e.mp3"),f=new Audio(d);f.volume=.2;let g=new Audio(m);g.volume=.5;let p=document.querySelector(".start-game"),y=document.querySelector(".btn-quit"),h=document.querySelector(".btn-previous"),L=document.querySelector(".memory-block-area");document.getElementsByClassName("memory-block");let v=document.querySelector(".high-score-number"),b=document.querySelector(".current-score-number"),H=document.querySelector(".message-text"),E=document.querySelector(".high-score-text"),w=document.getElementById("high-score-modal"),T=document.querySelector(".high-score-number-modal"),k=document.querySelector(".high-score-applause-gif"),S=document.getElementsByClassName("grid-col"),_=document.getElementById("easy"),R=document.getElementById("medium"),M=document.getElementById("hard"),N=document.getElementById("custom"),B=document.getElementById("difficulty-select-menu"),C=document.getElementById("custom-difficulty"),q=document.getElementById("game-area"),A=document.getElementById("amount-custom-difficulty"),F=document.querySelector(".custom-difficulty-next"),x=document.querySelector(".message-custom-tiles"),U=screen.width,$=6,J=[],I=[],O=[],P=0,D=0,j=!1,z=!1,Y=!1,G=!1;function Z(){(function(){for(let e=1;e<=$;++e){let t=document.createElement("div");L.appendChild(t),$<=21&&t.classList.add("memory-block","memory-block-height--10",`memory-block--${e}`),$<=70&&21<$&&t.classList.add("memory-block","memory-block-height--5",`memory-block--${e}`),$<=100&&70<$&&t.classList.add("memory-block","memory-block-height--3",`memory-block--${e}`)}})(),function(){for(let e=1;e<=$;++e)O[e]=document.querySelector(`.memory-block--${e}`)}(),function(){for(let e=1;e<=$;++e)O[e].addEventListener("click",function(){!0===j&&(I.push(e),H.innerHTML=`Repeat the sequence (${J.length-I.length} remaining)`,function(){if(I.length===J.length&&(j=!1,z=!0,JSON.stringify(I)===JSON.stringify(J)?(H.innerHTML="You are correct!",P++,ee(),P>D&&(D=P,et(),Y=!0,E.innerHTML="New high score!"),I=[]):X()),I.length!==J.length)for(let e=0;e<I.length;e++)J[e]!==I[e]&&X()}(),V(e),f.play(),setTimeout(function(){V(e)},300))})}(),function(){$<=6&&(L.className="memory-block-area margin--30 gap--3 grid-col",S[0].style.gridTemplateColumns="repeat(2, 1fr)");for(let e=2;e<7;e++)$<=3*e+3&&3*e<$&&(L.className=`memory-block-area margin--${40-5*e} gap--3 grid-col`,S[0].style.gridTemplateColumns=`repeat(${e+1}, 1fr)`);$<=25&&21<$&&(L.className="memory-block-area margin--30 gap--2 grid-col",S[0].style.gridTemplateColumns="repeat(5, 1fr)");for(let e=1;e<10;e++)$<=25+5*e&&20+5*e<$&&(L.className="memory-block-area gap--2 grid-col",S[0].style.gridTemplateColumns=`repeat(${e+5}, 1fr)`,$<=35&&25<$&&L.classList.add("margin--30"),$<=50&&35<$&&L.classList.add("margin--20"),$<=60&&50<$&&L.classList.add("margin--15"),$<=70&&60<$&&L.classList.add("margin--10"));for(let e=1;e<4;e++)$<=70+10*e&&60+10*e<$&&(L.className=`memory-block-area margin--${40-10*e} gap--1 grid-col`,S[0].style.gridTemplateColumns=`repeat(${5+5*e}, 1fr)`)}(),j=!1,z=!0,G=!0}function K(){q.classList.toggle("active-window"),B.classList.toggle("active-window")}function Q(){B.classList.toggle("active-window"),C.classList.toggle("active-window")}function V(e){O[e].classList.toggle("active")}function W(){if(!1===j&&!0===z){let e=Math.floor(Math.random()*$)+1;J.push(e),z=!1;for(let e=0;e<=J.length;e++)setTimeout(function(){H.innerHTML="";for(let t=1;t<=$;++t)J[e]===t&&(V(t),f.play(),setTimeout(function(){V(t)},700))},1e3*e),e===J.length&&setTimeout(function(){j=!0,H.innerHTML=`Repeat the sequence (${J.length-I.length} remaining)`},1e3*e)}}function X(){if(H.innerHTML="You are incorrect... try again",E.innerHTML="",!0===Y&&1<D){en(),T.innerHTML=D;let e=Math.floor(4*Math.random())+1;1===e&&(k.src=t(l)),2===e&&(k.src=t(c)),3===e&&(k.src=t(s)),4===e&&(k.src=t(u)),g.play(),g.loop=!0,Y=!1}P=0,ee(),j=!1,z=!0,I=[],J=[]}function ee(){b.innerHTML=P}function et(){v.innerHTML=D}function en(){w.classList.toggle("active-window"),g.pause(),g.currentTime=0}_.addEventListener("click",function(){$=4,Z(),K()}),R.addEventListener("click",function(){$=9,Z(),K()}),M.addEventListener("click",function(){$=15,Z(),K()}),N.addEventListener("click",function(){Q()}),h.addEventListener("click",function(){x.innerHTML="",Q()}),F.addEventListener("click",function(){A.value<2&&(x.innerHTML="Please select more tiles"),100<A.value&&581<U&&(x.innerHTML="Please select less tiles"),2<=A.value&&A.value<=100&&581<U&&($=A.value,x.innerHTML="",Z(),C.classList.toggle("active-window"),q.classList.toggle("active-window")),50<A.value&&581>=U&&(x.innerHTML="Please select less tiles"),2<=A.value&&A.value<=50&&581>=U&&($=A.value,x.innerHTML="",Z(),C.classList.toggle("active-window"),q.classList.toggle("active-window"))}),p.addEventListener("click",function(e){W()}),document.body.onkeyup=function(e){32==e.keyCode&&!0===G&&W()},w.addEventListener("click",function(){en()}),y.addEventListener("click",function(){(function(){for(let e=1;e<=$;++e)L.removeChild(L.lastElementChild)})(),P=0,ee(),D=0,et(),J=[],I=[],E.innerHTML="",H.innerHTML="Press start or spacebar to begin the game",G=!1,K()})}();
//# sourceMappingURL=index.d71e04f9.js.map
