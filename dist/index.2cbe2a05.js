function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire2c90;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire2c90=r),(0,r.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["dHgyn","index.2cbe2a05.js","3piFS","memorytile-beep.80d5ed15.mp3","b857U","applause-sound.db1c2c2e.mp3","5flMN","applause-1.6fb96cce.gif","bf4xo","applause-2.1cb0fbb3.gif","nfRbc","applause-3.4ebe40a3.gif","a9697","applause-4.3e0e6d2f.gif"]'));var i={};i=new URL("applause-1.6fb96cce.gif",import.meta.url).toString();var l={};l=new URL("applause-2.1cb0fbb3.gif",import.meta.url).toString();var c={};c=new URL("applause-3.4ebe40a3.gif",import.meta.url).toString();var a={};a=new URL("applause-4.3e0e6d2f.gif",import.meta.url).toString();var s={};s=new URL("memorytile-beep.80d5ed15.mp3",import.meta.url).toString();const u=new URL(s);var m={};m=new URL("applause-sound.db1c2c2e.mp3",import.meta.url).toString();const d=new URL(m),g=new Audio(u);g.volume=.2;const f=new Audio(d);f.volume=.5;const p=document.querySelector(".start-game"),y=document.querySelector(".btn-quit"),b=document.querySelector(".btn-previous"),L=document.querySelector(".memory-block-area");document.getElementsByClassName("memory-block");const h=document.querySelector(".high-score-number"),v=document.querySelector(".current-score-number"),H=document.querySelector(".message-text"),E=document.querySelector(".high-score-text"),w=document.getElementById("high-score-modal"),S=document.querySelector(".high-score-number-modal"),k=document.querySelector(".high-score-applause-gif"),T=document.getElementsByClassName("grid-col"),_=document.getElementById("easy"),R=document.getElementById("medium"),M=document.getElementById("hard"),q=document.getElementById("custom"),F=document.getElementById("difficulty-select-menu"),$=document.getElementById("custom-difficulty"),A=document.getElementById("game-area"),N=document.getElementById("amount-custom-difficulty"),U=document.querySelector(".custom-difficulty-next"),C=document.querySelector(".message-custom-tiles");let x=screen.width,B=6,I=[],O=[],P=[],J=0,j=0,D=!1,X=!1,Y=!1,z=!1;function G(){(function(){for(let e=1;e<=B;++e){let t=document.createElement("div");L.appendChild(t),B<=21&&t.classList.add("memory-block","memory-block-height--10",`memory-block--${e}`),B<=70&&21<B&&t.classList.add("memory-block","memory-block-height--5",`memory-block--${e}`),B<=100&&70<B&&t.classList.add("memory-block","memory-block-height--3",`memory-block--${e}`)}})(),function(){for(let e=1;e<=B;++e)P[e]=document.querySelector(`.memory-block--${e}`)}(),function(){for(let e=1;e<=B;++e)P[e].addEventListener("click",function(){!0===D&&(O.push(e),console.log(` player input is ${O} `),H.innerHTML=`Repeat the sequence (${I.length-O.length} remaining)`,function(){if(O.length===I.length&&(D=!1,X=!0,JSON.stringify(O)===JSON.stringify(I)?(H.innerHTML="You are correct!",J++,ee(),J>j&&(j=J,et(),Y=!0,E.innerHTML="New high score!"),O=[]):Z()),O.length!==I.length)for(let e=0;e<O.length;e++)I[e]!==O[e]&&Z()}(),V(e),g.play(),setTimeout(function(){V(e)},300))})}(),function(){B<=6&&(L.className="memory-block-area margin--30 gap--3 grid-col",T[0].style.gridTemplateColumns="repeat(2, 1fr)");for(let e=2;e<7;e++)B<=3*e+3&&3*e<B&&(L.className=`memory-block-area margin--${40-5*e} gap--3 grid-col`,T[0].style.gridTemplateColumns=`repeat(${e+1}, 1fr)`);B<=25&&21<B&&(L.className="memory-block-area margin--30 gap--2 grid-col",T[0].style.gridTemplateColumns="repeat(5, 1fr)");for(let e=1;e<10;e++)B<=25+5*e&&20+5*e<B&&(L.className="memory-block-area gap--2 grid-col",T[0].style.gridTemplateColumns=`repeat(${e+5}, 1fr)`,B<=35&&25<B&&L.classList.add("margin--30"),B<=50&&35<B&&L.classList.add("margin--20"),B<=60&&50<B&&L.classList.add("margin--15"),B<=70&&60<B&&L.classList.add("margin--10"));for(let e=1;e<4;e++)B<=70+10*e&&60+10*e<B&&(L.className=`memory-block-area margin--${40-10*e} gap--1 grid-col`,T[0].style.gridTemplateColumns=`repeat(${5+5*e}, 1fr)`)}(),D=!1,X=!0,z=!0}function K(){A.classList.toggle("active-window"),F.classList.toggle("active-window")}function Q(){F.classList.toggle("active-window"),$.classList.toggle("active-window")}function V(e){P[e].classList.toggle("active")}function W(){if(!1===D&&!0===X){let e=Math.floor(Math.random()*B)+1;I.push(e),console.log(`generated number is ${e}`),X=!1;for(let e=0;e<=I.length;e++)setTimeout(function(){H.innerHTML="";for(let t=1;t<=B;++t)I[e]===t&&(V(t),g.play(),setTimeout(function(){V(t)},700))},1e3*e),e===I.length&&setTimeout(function(){D=!0,H.innerHTML=`Repeat the sequence (${I.length-O.length} remaining)`,console.log(`i is ${e}`),console.log(`player's turn is ${D}`),console.log(`computer's turn is ${X}`)},1e3*e),console.log(`generated number sequence is ${I}`)}}function Z(){if(H.innerHTML="You are incorrect... try again",E.innerHTML="",!0===Y&&1<j){en(),S.innerHTML=j;let t=Math.floor(4*Math.random())+1;console.log(t),1===t&&(k.src=e(i)),2===t&&(k.src=e(l)),3===t&&(k.src=e(c)),4===t&&(k.src=e(a)),f.play(),f.loop=!0,Y=!1}J=0,ee(),D=!1,X=!0,O=[],I=[]}function ee(){v.innerHTML=J}function et(){h.innerHTML=j}function en(){w.classList.toggle("active-window"),f.pause(),f.currentTime=0}console.log(x),_.addEventListener("click",function(){B=4,G(),K()}),R.addEventListener("click",function(){B=9,G(),K()}),M.addEventListener("click",function(){B=15,G(),K()}),q.addEventListener("click",function(){Q()}),b.addEventListener("click",function(){C.innerHTML="",Q()}),U.addEventListener("click",function(){N.value<2&&(C.innerHTML="Please select more tiles"),100<N.value&&581<x&&(C.innerHTML="Please select less tiles"),2<=N.value&&N.value<=100&&581<x&&(B=N.value,C.innerHTML="",G(),$.classList.toggle("active-window"),A.classList.toggle("active-window")),50<N.value&&581>=x&&(C.innerHTML="Please select less tiles"),2<=N.value&&N.value<=50&&581>=x&&(B=N.value,C.innerHTML="",G(),$.classList.toggle("active-window"),A.classList.toggle("active-window"))}),p.addEventListener("click",function(e){W()}),document.body.onkeyup=function(e){32==e.keyCode&&!0===z&&W()},w.addEventListener("click",function(){en()}),y.addEventListener("click",function(){(function(){for(let e=1;e<=B;++e)L.removeChild(L.lastElementChild)})(),J=0,ee(),j=0,et(),I=[],O=[],E.innerHTML="",H.innerHTML="Press start or spacebar to begin the game",z=!1,K()});
//# sourceMappingURL=index.2cbe2a05.js.map