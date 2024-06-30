// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ij908":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "69d3cca59127b19c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1vja3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/* imports gifs*/ var _applause1Gif = require("../gifs/applause-1.gif");
var _applause1GifDefault = parcelHelpers.interopDefault(_applause1Gif);
var _applause2Gif = require("../gifs/applause-2.gif");
var _applause2GifDefault = parcelHelpers.interopDefault(_applause2Gif);
var _applause3Gif = require("../gifs/applause-3.gif");
var _applause3GifDefault = parcelHelpers.interopDefault(_applause3Gif);
var _applause4Gif = require("../gifs/applause-4.gif");
var _applause4GifDefault = parcelHelpers.interopDefault(_applause4Gif);
"use strict";
/* imports sounds*/ const tileBeep = new URL(require("bd5b4e5bdb0604da"));
const applause = new URL(require("8aafb251d58063f8"));
/* sound effects */ const memoryTileBeep = new Audio(tileBeep);
memoryTileBeep.volume = 0.2;
const applauseSound = new Audio(applause);
applauseSound.volume = 0.5;
/* DOM variables */ /* ------------------------------------------------- */ const startGame = document.querySelector(".start-game");
const quitBtn = document.querySelector(".btn-quit");
const previousBtn = document.querySelector(".btn-previous");
const memoryBlockArea = document.querySelector(".memory-block-area");
const memoryBlock = document.getElementsByClassName("memory-block");
const highScoreEL = document.querySelector(".high-score-number");
const currentScoreEL = document.querySelector(".current-score-number");
const messageBox = document.querySelector(".message-text");
const highScoreMessage = document.querySelector(".high-score-text");
const highScoreModal = document.getElementById("high-score-modal");
const highScoreNumberModal = document.querySelector(".high-score-number-modal");
const highScoreModalGif = document.querySelector(".high-score-applause-gif");
const gridCol = document.getElementsByClassName("grid-col");
const easyDifficulty = document.getElementById("easy");
const mediumDifficulty = document.getElementById("medium");
const hardDifficulty = document.getElementById("hard");
const customDifficulty = document.getElementById("custom");
const difficultySelectMenu = document.getElementById("difficulty-select-menu");
const customDifficultyMenu = document.getElementById("custom-difficulty");
const gameArea = document.getElementById("game-area");
const amountCustomDifficulty = document.getElementById("amount-custom-difficulty");
const nextCustomDifficulty = document.querySelector(".custom-difficulty-next");
const messageBoxCustom = document.querySelector(".message-custom-tiles");
let screenWidth = screen.width;
let numberOfTiles = 6;
let generatedNumbersSequence = [];
let playerNumbersSequence = [];
let memoryTiles = [];
let currentScore = 0;
let highScore = 0;
let playerTurn = false;
let computerTurn = false;
let newHighScore = false;
let gameAreaActive = false;
console.log(screenWidth);
/* Difficulty select */ /* ------------------------------------------------- */ /* link the selected difficulty with the appropriate amount of memory tiles*/ easyDifficulty.addEventListener("click", function() {
    numberOfTiles = 4;
    prepareGame();
    toGameArea();
});
mediumDifficulty.addEventListener("click", function() {
    numberOfTiles = 9;
    prepareGame();
    toGameArea();
});
hardDifficulty.addEventListener("click", function() {
    numberOfTiles = 15;
    prepareGame();
    toGameArea();
});
customDifficulty.addEventListener("click", function() {
    toCustomDifficulty();
});
/* function that prepares the game by creating memory tiles in the html document, applies selectors to them,  creates the eventlistener event for when the players clicks the buttons and then moves to the game area */ function prepareGame() {
    createMemoryTilesHtml();
    createMemoryTilesSelector();
    createPlayerInputArray();
    styleColumnsGameArea();
    playerTurn = false;
    computerTurn = true;
    gameAreaActive = true;
}
/* function that navigates to the game area */ function toGameArea() {
    gameArea.classList.toggle("active-window");
    difficultySelectMenu.classList.toggle("active-window");
}
/* function that navigates between the  difficulty selection menu and custom difficulty  */ function toCustomDifficulty() {
    difficultySelectMenu.classList.toggle("active-window");
    customDifficultyMenu.classList.toggle("active-window");
}
/* return from custom difficulty to custom difficulty menu*/ previousBtn.addEventListener("click", function() {
    messageBoxCustom.innerHTML = "";
    toCustomDifficulty();
});
/* submit the amount of custom tiles the player wants to play with */ nextCustomDifficulty.addEventListener("click", function() {
    getCustomDifficultyInput();
});
/* validates the input and saves the player input to the numberOfTiles variable */ function getCustomDifficultyInput() {
    if (amountCustomDifficulty.value < 2) messageBoxCustom.innerHTML = "Please select more tiles";
    if (100 < amountCustomDifficulty.value && 581 < screenWidth) messageBoxCustom.innerHTML = "Please select less tiles";
    if (2 <= amountCustomDifficulty.value && amountCustomDifficulty.value <= 100 && 581 < screenWidth) {
        numberOfTiles = amountCustomDifficulty.value;
        messageBoxCustom.innerHTML = "";
        prepareGame();
        /* moves to the game area */ customDifficultyMenu.classList.toggle("active-window");
        gameArea.classList.toggle("active-window");
    }
    /* allow up 50 tiles tiles for a viewport width less than 581px */ if (50 < amountCustomDifficulty.value && 581 >= screenWidth) messageBoxCustom.innerHTML = "Please select less tiles";
    if (2 <= amountCustomDifficulty.value && amountCustomDifficulty.value <= 50 && 581 >= screenWidth) {
        numberOfTiles = amountCustomDifficulty.value;
        messageBoxCustom.innerHTML = "";
        prepareGame();
        /* moves to the game area */ customDifficultyMenu.classList.toggle("active-window");
        gameArea.classList.toggle("active-window");
    }
}
/* game area */ /* ------------------------------------------------- */ /* create a div in the html document with the memory tile properties. This is done an equal amount of times based on the requested amount of memory tiles by the player or selected difficulty setting  */ function createMemoryTilesHtml() {
    for(let i = 1; i <= numberOfTiles; ++i){
        const createMemoryTile = document.createElement("div");
        memoryBlockArea.appendChild(createMemoryTile);
        if (numberOfTiles <= 21) createMemoryTile.classList.add("memory-block", "memory-block-height--10", `memory-block--${i}`);
        if (numberOfTiles <= 70 && 21 < numberOfTiles) createMemoryTile.classList.add("memory-block", "memory-block-height--5", `memory-block--${i}`);
        if (numberOfTiles <= 100 && 70 < numberOfTiles) createMemoryTile.classList.add("memory-block", "memory-block-height--3", `memory-block--${i}`);
    /*
        const createMemoryTile = document.createElement('div');
        memoryBlockArea.appendChild(createMemoryTile);
        createMemoryTile.classList.add('memory-block', `memory-block--${i}`);
        */ }
}
/* loop that creates memory tiles based on the selected amount by the player */ function createMemoryTilesSelector() {
    for(let i = 1; i <= numberOfTiles; ++i)memoryTiles[i] = document.querySelector(`.memory-block--${i}`);
}
/* function that toggles the active memory tile */ function toggleMemoryTile(t) {
    memoryTiles[t].classList.toggle("active");
}
/* press the start button to start the game*/ startGame.addEventListener("click", function(number) {
    startGameSequence();
});
/* start the game by pressing the spacebar*/ document.body.onkeyup = function(e) {
    if (e.keyCode == 32 && gameAreaActive === true) startGameSequence();
};
function startGameSequence() {
    if (playerTurn === false && computerTurn === true) {
        /* generate a random rumber which will be used to select a random memory tile*/ const generatedNumber = Math.floor(Math.random() * numberOfTiles) + 1;
        generatedNumbersSequence.push(generatedNumber);
        console.log(`generated number is ${generatedNumber}`);
        /* disable the start buttons while the sequence is running*/ computerTurn = false;
        /* loop that starts the play sequence */ for(let i = 0; i <= generatedNumbersSequence.length; i++){
            /* function that starts the play sequence with a timer*/ setTimeout(function() {
                messageBox.innerHTML = "";
                for(let t = 1; t <= numberOfTiles; ++t)if (generatedNumbersSequence[i] === t) {
                    toggleMemoryTile(t);
                    memoryTileBeep.play();
                    setTimeout(function() {
                        toggleMemoryTile(t);
                    }, 700);
                }
            /* code that sets the time in ms before the next button is shown */ }, 1000 * i);
            /* activate the buttons for the player after the computer has shown the order sequence*/ if (i === generatedNumbersSequence.length) setTimeout(function() {
                playerTurn = true;
                /* message the player it's their turn */ messageBox.innerHTML = `Repeat the sequence (${generatedNumbersSequence.length - playerNumbersSequence.length} remaining)`;
                console.log(`i is ${i}`);
                console.log(`player's turn is ${playerTurn}`);
                console.log(`computer's turn is ${computerTurn}`);
            }, 1000 * i);
            console.log(`generated number sequence is ${generatedNumbersSequence}`);
        }
    }
}
/* function that to creates multiple events (depending on the selected amount of tiles) for when the player clicks the memory tile buttons to repeat the asked sequence*/ function createPlayerInputArray() {
    for(let t = 1; t <= numberOfTiles; ++t)memoryTiles[t].addEventListener("click", function() {
        if (playerTurn === true) {
            playerNumbersSequence.push(t);
            console.log(` player input is ${playerNumbersSequence} `);
            /* show the remaining amount of buttons that player has yet to press to complete the sequence*/ messageBox.innerHTML = `Repeat the sequence (${generatedNumbersSequence.length - playerNumbersSequence.length} remaining)`;
            winCheck();
            /* Highlights the memorytile after the player has pressed it*/ toggleMemoryTile(t);
            memoryTileBeep.play();
            setTimeout(function() {
                toggleMemoryTile(t);
            }, 300);
        }
    });
}
/* function to check if the player has succesfully input the correct sequence*/ function winCheck() {
    /* check if enough buttons have been pressed by the player to match the amount the computer has input */ if (playerNumbersSequence.length === generatedNumbersSequence.length) {
        /* prepare for next round */ playerTurn = false;
        computerTurn = true;
        /* compare arrays */ if (JSON.stringify(playerNumbersSequence) === JSON.stringify(generatedNumbersSequence)) {
            /* message player they are correct */ messageBox.innerHTML = "You are correct!";
            /* update score */ currentScore++;
            updateCurrentScore();
            /* check high score & update it if appropriate*/ if (currentScore > highScore) {
                highScore = currentScore;
                updateHighScore();
                newHighScore = true;
                /* message the player they got a new high score */ highScoreMessage.innerHTML = "New high score!";
            }
            /* reset playerInput */ playerNumbersSequence = [];
        } else lostTheGame();
    }
    if (playerNumbersSequence.length !== generatedNumbersSequence.length) {
        for(let i = 0; i < playerNumbersSequence.length; i++)if (generatedNumbersSequence[i] !== playerNumbersSequence[i]) lostTheGame();
    }
}
/* losing the game function*/ function lostTheGame() {
    /* message player they are incorrect */ messageBox.innerHTML = "You are incorrect... try again";
    /* reset high score text */ highScoreMessage.innerHTML = "";
    if (newHighScore === true && 1 < highScore) {
        /* show high score popup modal */ ShowHideHighScoreModal();
        highScoreNumberModal.innerHTML = highScore;
        /* select random gif via a number of 1 to 4*/ const randomGif = Math.floor(Math.random() * 4) + 1;
        console.log(randomGif);
        /* select the correct gif based on the randomly selected number*/ if (randomGif === 1) highScoreModalGif.src = (0, _applause1GifDefault.default);
        if (randomGif === 2) highScoreModalGif.src = (0, _applause2GifDefault.default);
        if (randomGif === 3) highScoreModalGif.src = (0, _applause3GifDefault.default);
        if (randomGif === 4) highScoreModalGif.src = (0, _applause4GifDefault.default);
        /* play applause sound effect */ applauseSound.play();
        applauseSound.loop = true;
        newHighScore = false;
    }
    /* update score */ currentScore = 0;
    updateCurrentScore();
    /* prepare for next round */ playerTurn = false;
    computerTurn = true;
    /* reset game*/ playerNumbersSequence = [];
    generatedNumbersSequence = [];
}
/* functions that updates the scores in the html document*/ /*  update the current score  */ function updateCurrentScore() {
    currentScoreEL.innerHTML = currentScore;
}
/*  update the high score  */ function updateHighScore() {
    highScoreEL.innerHTML = highScore;
}
/* high score modal */ /* hide the modal once the player clicked it*/ highScoreModal.addEventListener("click", function() {
    ShowHideHighScoreModal();
});
function ShowHideHighScoreModal() {
    highScoreModal.classList.toggle("active-window");
    applauseSound.pause();
    applauseSound.currentTime = 0;
}
/* style the columns so all the memory tiles fit on the screen */ function styleColumnsGameArea() {
    /* styling for 6 tiles or less */ if (numberOfTiles <= 6) {
        memoryBlockArea.className = "memory-block-area margin--30 gap--3 grid-col";
        gridCol[0].style.gridTemplateColumns = `repeat(2, 1fr)`;
    }
    /* styling for tiles between the numbers 6 and 21 */ for(let i = 2; i < 7; i++)if (numberOfTiles <= i * 3 + 3 && i * 3 < numberOfTiles) {
        memoryBlockArea.className = `memory-block-area margin--${40 - i * 5} gap--3 grid-col`;
        gridCol[0].style.gridTemplateColumns = `repeat(${i + 1}, 1fr)`;
    }
    /* styling for tiles between the numbers 22 and 25 */ if (numberOfTiles <= 25 && 21 < numberOfTiles) {
        memoryBlockArea.className = "memory-block-area margin--30 gap--2 grid-col";
        gridCol[0].style.gridTemplateColumns = `repeat(5, 1fr)`;
    }
    /* styling for tiles between the numbers 26 and 70*/ for(let i = 1; i < 10; i++)if (numberOfTiles <= 25 + i * 5 && 20 + i * 5 < numberOfTiles) {
        memoryBlockArea.className = `memory-block-area gap--2 grid-col`;
        gridCol[0].style.gridTemplateColumns = `repeat(${i + 5}, 1fr)`;
        /* select margin that's appriopriate for the number of tiles*/ if (numberOfTiles <= 35 && 25 < numberOfTiles) memoryBlockArea.classList.add("margin--30");
        if (numberOfTiles <= 50 && 35 < numberOfTiles) memoryBlockArea.classList.add("margin--20");
        if (numberOfTiles <= 60 && 50 < numberOfTiles) memoryBlockArea.classList.add("margin--15");
        if (numberOfTiles <= 70 && 60 < numberOfTiles) memoryBlockArea.classList.add("margin--10");
    }
    /* styling for tiles between the numbers 70 and 100*/ for(let i = 1; i < 4; i++)if (numberOfTiles <= 70 + i * 10 && 60 + i * 10 < numberOfTiles) {
        memoryBlockArea.className = `memory-block-area margin--${40 - i * 10} gap--1 grid-col`;
        gridCol[0].style.gridTemplateColumns = `repeat(${5 + i * 5}, 1fr)`;
    }
}
/* how to style css properties of a class
        document.getElementsByClassName('scores-box')[0].style.height = "5rem";
        */ /* quit the game */ /* ------------------------------------------------- */ /* quit te game, reset all setting to default and return to the difficult select screen */ quitBtn.addEventListener("click", function() {
    removeMemoryTilesHtml();
    currentScore = 0;
    updateCurrentScore();
    highScore = 0;
    updateHighScore();
    generatedNumbersSequence = [];
    playerNumbersSequence = [];
    highScoreMessage.innerHTML = "";
    messageBox.innerHTML = "Press start or spacebar to begin the game";
    gameAreaActive = false;
    toGameArea();
});
/* remove the generated memory tiles in the html document to reset the game */ function removeMemoryTilesHtml() {
    for(let i = 1; i <= numberOfTiles; ++i)memoryBlockArea.removeChild(memoryBlockArea.lastElementChild);
}

},{"../gifs/applause-1.gif":"9xLYd","../gifs/applause-2.gif":"j08xN","../gifs/applause-3.gif":"hxHJl","../gifs/applause-4.gif":"2ZECU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","bd5b4e5bdb0604da":"hPnly","8aafb251d58063f8":"14FlC"}],"9xLYd":[function(require,module,exports) {
module.exports = require("bef6622c68d4ed81").getBundleURL("95jCs") + "applause-1.b052839a.gif" + "?" + Date.now();

},{"bef6622c68d4ed81":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"j08xN":[function(require,module,exports) {
module.exports = require("872608a87a7697bd").getBundleURL("95jCs") + "applause-2.0840c6d1.gif" + "?" + Date.now();

},{"872608a87a7697bd":"lgJ39"}],"hxHJl":[function(require,module,exports) {
module.exports = require("68ee62169bfea07b").getBundleURL("95jCs") + "applause-3.eed959df.gif" + "?" + Date.now();

},{"68ee62169bfea07b":"lgJ39"}],"2ZECU":[function(require,module,exports) {
module.exports = require("3a4269b5020fe46b").getBundleURL("95jCs") + "applause-4.82a9248d.gif" + "?" + Date.now();

},{"3a4269b5020fe46b":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hPnly":[function(require,module,exports) {
module.exports = require("1ad59c2369e47039").getBundleURL("95jCs") + "memorytile-beep.2abbe8af.mp3" + "?" + Date.now();

},{"1ad59c2369e47039":"lgJ39"}],"14FlC":[function(require,module,exports) {
module.exports = require("1477227b577f37b7").getBundleURL("95jCs") + "applause-sound.a305c9fa.mp3" + "?" + Date.now();

},{"1477227b577f37b7":"lgJ39"}]},["ij908","1vja3"], "1vja3", "parcelRequire2c90")

//# sourceMappingURL=index.9127b19c.js.map
