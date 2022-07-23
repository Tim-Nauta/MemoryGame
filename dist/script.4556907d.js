parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V4D6":[function(require,module,exports) {
"use strict";var e=new Audio("sound-effects/memorytile-beep.mp3");e.volume=.2;var t=new Audio("sound-effects/applause-sound.mp3");t.volume=.5;var n=document.querySelector(".start-game"),o=document.querySelector(".btn-quit"),c=document.querySelector(".btn-previous"),r=document.querySelector(".memory-block-area"),i=document.getElementsByClassName("memory-block"),a=document.querySelector(".high-score-number"),l=document.querySelector(".current-score-number"),s=document.querySelector(".message-text"),m=document.querySelector(".high-score-text"),u=document.getElementById("high-score-modal"),d=document.querySelector(".high-score-number-modal"),g=document.querySelector(".high-score-applause-gif"),f=document.getElementsByClassName("grid-col"),y=document.getElementById("easy"),v=document.getElementById("medium"),h=document.getElementById("hard"),p=document.getElementById("custom"),L=document.getElementById("difficulty-select-menu"),k=document.getElementById("custom-difficulty"),b=document.getElementById("game-area"),T=document.getElementById("amount-custom-difficulty"),E=document.querySelector(".custom-difficulty-next"),M=document.querySelector(".message-custom-tiles"),q=6,w=[],H=[],S=[],B=0,C=0,N=!1,I=!1,x=!1,P=!1;function A(){Y(),j(),F(),W(),N=!1,I=!0,P=!0}function J(){b.classList.toggle("active-window"),L.classList.toggle("active-window")}function O(){L.classList.toggle("active-window"),k.classList.toggle("active-window")}function R(){T.value<2&&(M.innerHTML="Please select more tiles"),100<T.value&&(M.innerHTML="Please select less tiles"),2<=T.value&&T.value<=100&&(q=T.value,M.innerHTML="",A(),k.classList.toggle("active-window"),b.classList.toggle("active-window"))}function Y(){for(var e=1;e<=q;++e){var t=document.createElement("div");r.appendChild(t),q<=21&&t.classList.add("memory-block","memory-block-height--10","memory-block--".concat(e)),q<=70&&21<q&&t.classList.add("memory-block","memory-block-height--5","memory-block--".concat(e)),q<=100&&70<q&&t.classList.add("memory-block","memory-block-height--3","memory-block--".concat(e))}}function j(){for(var e=1;e<=q;++e)S[e]=document.querySelector(".memory-block--".concat(e))}function z(e){S[e].classList.toggle("active")}function D(){if(!1===N&&!0===I){var t=Math.floor(Math.random()*q)+1;w.push(t),console.log("generated number is ".concat(t)),I=!1;for(var n=function(t){setTimeout(function(){s.innerHTML="";for(var n=function(n){w[t]===n&&(z(n),e.play(),setTimeout(function(){z(n)},700))},o=1;o<=q;++o)n(o)},1e3*t),t===w.length&&setTimeout(function(){N=!0,s.innerHTML="Repeat the sequence (".concat(w.length-H.length," remaining)"),console.log("i is ".concat(t)),console.log("player's turn is ".concat(N)),console.log("computer's turn is ".concat(I))},1e3*t),console.log("generated number sequence is ".concat(w))},o=0;o<=w.length;o++)n(o)}}function F(){for(var t=function(t){S[t].addEventListener("click",function(){!0===N&&(H.push(t),console.log(" player input is ".concat(H," ")),s.innerHTML="Repeat the sequence (".concat(w.length-H.length," remaining)"),G(),z(t),e.play(),setTimeout(function(){z(t)},300))})},n=1;n<=q;++n)t(n)}function G(){if(H.length===w.length&&(N=!1,I=!0,JSON.stringify(H)===JSON.stringify(w)?(s.innerHTML="You are correct!",B++,Q(),B>C&&(C=B,U(),x=!0,m.innerHTML="New highscore!"),H=[]):K()),H.length!==w.length)for(var e=0;e<H.length;e++)w[e]!==H[e]&&K()}function K(){if(s.innerHTML="You are incorrect... try again",m.innerHTML="",!0===x&&1<C){V(),d.innerHTML=C;var e=Math.floor(4*Math.random())+1;console.log(e);for(var n=1;n<=4;n++)e===n&&(g.src="gifs/applause-".concat(n,".gif"));t.play(),t.loop=!0,x=!1}B=0,Q(),N=!1,I=!0,H=[],w=[]}function Q(){l.innerHTML=B}function U(){a.innerHTML=C}function V(){u.classList.toggle("active-window"),t.pause(),t.currentTime=0}function W(){q<=6&&(r.className="memory-block-area margin--30 gap--3 grid-col",f[0].style.gridTemplateColumns="repeat(2, 1fr)");for(var e=2;e<7;e++)q<=3*e+3&&3*e<q&&(r.className="memory-block-area margin--".concat(40-5*e," gap--3 grid-col"),f[0].style.gridTemplateColumns="repeat(".concat(e+1,", 1fr)"));q<=25&&21<q&&(r.className="memory-block-area margin--30 gap--2 grid-col",f[0].style.gridTemplateColumns="repeat(5, 1fr)");for(var t=1;t<10;t++)q<=25+5*t&&20+5*t<q&&(r.className="memory-block-area gap--2 grid-col",f[0].style.gridTemplateColumns="repeat(".concat(t+5,", 1fr)"),q<=35&&25<q&&r.classList.add("margin--30"),q<=50&&35<q&&r.classList.add("margin--20"),q<=60&&50<q&&r.classList.add("margin--15"),q<=70&&60<q&&r.classList.add("margin--10"));for(var n=1;n<4;n++)q<=70+10*n&&60+10*n<q&&(r.className="memory-block-area margin--".concat(40-10*n," gap--1 grid-col"),f[0].style.gridTemplateColumns="repeat(".concat(5+5*n,", 1fr)"))}function X(){for(var e=1;e<=q;++e)r.removeChild(r.lastElementChild)}y.addEventListener("click",function(){q=4,A(),J()}),v.addEventListener("click",function(){q=9,A(),J()}),h.addEventListener("click",function(){q=15,A(),J()}),p.addEventListener("click",function(){O()}),c.addEventListener("click",function(){M.innerHTML="",O()}),E.addEventListener("click",function(){R()}),n.addEventListener("click",function(e){D()}),document.body.onkeyup=function(e){32==e.keyCode&&!0===P&&D()},u.addEventListener("click",function(){V()}),o.addEventListener("click",function(){X(),B=0,Q(),C=0,U(),w=[],H=[],m.innerHTML="",s.innerHTML="Press start or spacebar to begin the game",P=!1,J()});
},{}]},{},["V4D6"], null)
//# sourceMappingURL=/script.4556907d.js.map