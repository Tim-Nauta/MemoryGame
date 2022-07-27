// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sound-effects/memorytile-beep.mp3":[function(require,module,exports) {
module.exports = "/memorytile-beep.560f390e.mp3";
},{}],"sound-effects/applause-sound.mp3":[function(require,module,exports) {
module.exports = "/applause-sound.54aa1351.mp3";
},{}],"gifs/applause-1.gif":[function(require,module,exports) {
module.exports = "/applause-1.9a9da4e1.gif";
},{}],"gifs/applause-2.gif":[function(require,module,exports) {
module.exports = "/applause-2.58e193f4.gif";
},{}],"gifs/applause-3.gif":[function(require,module,exports) {
module.exports = "/applause-3.caccfc48.gif";
},{}],"gifs/applause-4.gif":[function(require,module,exports) {
module.exports = "/applause-4.69d73ba9.gif";
},{}],"javascript/script.js":[function(require,module,exports) {
"use strict";
/* imports sounds*/

var _memorytileBeep = _interopRequireDefault(require("../sound-effects/memorytile-beep.mp3"));

var _applauseSound = _interopRequireDefault(require("../sound-effects/applause-sound.mp3"));

var _applause = _interopRequireDefault(require("../gifs/applause-1.gif"));

var _applause2 = _interopRequireDefault(require("../gifs/applause-2.gif"));

var _applause3 = _interopRequireDefault(require("../gifs/applause-3.gif"));

var _applause4 = _interopRequireDefault(require("../gifs/applause-4.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* imports gifs*/

/* sound effects */
var memoryTileBeep = new Audio(_memorytileBeep.default);
memoryTileBeep.volume = 0.2;
var applauseSound = new Audio(_applauseSound.default);
applauseSound.volume = 0.5;
/* DOM variables */

/* ------------------------------------------------- */

var startGame = document.querySelector('.start-game');
var quitBtn = document.querySelector('.btn-quit');
var previousBtn = document.querySelector('.btn-previous');
var memoryBlockArea = document.querySelector(".memory-block-area");
var memoryBlock = document.getElementsByClassName("memory-block");
var highScoreEL = document.querySelector('.high-score-number');
var currentScoreEL = document.querySelector('.current-score-number');
var messageBox = document.querySelector('.message-text');
var highScoreMessage = document.querySelector('.high-score-text');
var highScoreModal = document.getElementById('high-score-modal');
var highScoreNumberModal = document.querySelector('.high-score-number-modal');
var highScoreModalGif = document.querySelector('.high-score-applause-gif');
var gridCol = document.getElementsByClassName('grid-col');
var easyDifficulty = document.getElementById('easy');
var mediumDifficulty = document.getElementById('medium');
var hardDifficulty = document.getElementById('hard');
var customDifficulty = document.getElementById('custom');
var difficultySelectMenu = document.getElementById('difficulty-select-menu');
var customDifficultyMenu = document.getElementById('custom-difficulty');
var gameArea = document.getElementById('game-area');
var amountCustomDifficulty = document.getElementById('amount-custom-difficulty');
var nextCustomDifficulty = document.querySelector('.custom-difficulty-next');
var messageBoxCustom = document.querySelector('.message-custom-tiles');
var numberOfTiles = 6;
var generatedNumbersSequence = [];
var playerNumbersSequence = [];
var memoryTiles = [];
var currentScore = 0;
var highScore = 0;
var playerTurn = false;
var computerTurn = false;
var newHighScore = false;
var gameAreaActive = false;
/* Difficulty select */

/* ------------------------------------------------- */

/* link the selected difficulty with the appropriate amount of memory tiles*/

easyDifficulty.addEventListener('click', function () {
  numberOfTiles = 4;
  prepareGame();
  toGameArea();
});
mediumDifficulty.addEventListener('click', function () {
  numberOfTiles = 9;
  prepareGame();
  toGameArea();
});
hardDifficulty.addEventListener('click', function () {
  numberOfTiles = 15;
  prepareGame();
  toGameArea();
});
customDifficulty.addEventListener('click', function () {
  toCustomDifficulty();
});
/* function that prepares the game by creating memory tiles in the html document, applies selectors to them,  creates the eventlistener event for when the players clicks the buttons and then moves to the game area */

function prepareGame() {
  createMemoryTilesHtml();
  createMemoryTilesSelector();
  createPlayerInputArray();
  styleColumnsGameArea();
  playerTurn = false;
  computerTurn = true;
  gameAreaActive = true;
}
/* function that navigates to the game area */


function toGameArea() {
  gameArea.classList.toggle('active-window');
  difficultySelectMenu.classList.toggle('active-window');
}
/* function that navigates between the  difficulty selection menu and custom difficulty  */


function toCustomDifficulty() {
  difficultySelectMenu.classList.toggle('active-window');
  customDifficultyMenu.classList.toggle('active-window');
}
/* return from custom difficulty to custom difficulty menu*/


previousBtn.addEventListener('click', function () {
  messageBoxCustom.innerHTML = '';
  toCustomDifficulty();
});
/* submit the amount of custom tiles the player wants to play with */

nextCustomDifficulty.addEventListener('click', function () {
  getCustomDifficultyInput();
});
/* validates the input and saves the player input to the numberOfTiles variable */

function getCustomDifficultyInput() {
  if (amountCustomDifficulty.value < 2) {
    messageBoxCustom.innerHTML = 'Please select more tiles';
  }

  if (100 < amountCustomDifficulty.value) {
    messageBoxCustom.innerHTML = 'Please select less tiles';
  }

  if (2 <= amountCustomDifficulty.value && amountCustomDifficulty.value <= 100) {
    numberOfTiles = amountCustomDifficulty.value;
    messageBoxCustom.innerHTML = '';
    prepareGame();
    /* moves to the game area */

    customDifficultyMenu.classList.toggle('active-window');
    gameArea.classList.toggle('active-window');
  }
}
/* game area */

/* ------------------------------------------------- */

/* create a div in the html document with the memory tile properties. This is done an equal amount of times based on the requested amount of memory tiles by the player or selected difficulty setting  */


function createMemoryTilesHtml() {
  for (var i = 1; i <= numberOfTiles; ++i) {
    var createMemoryTile = document.createElement('div');
    memoryBlockArea.appendChild(createMemoryTile);

    if (numberOfTiles <= 21) {
      createMemoryTile.classList.add('memory-block', 'memory-block-height--10', "memory-block--".concat(i));
    }

    if (numberOfTiles <= 70 && 21 < numberOfTiles) {
      createMemoryTile.classList.add('memory-block', 'memory-block-height--5', "memory-block--".concat(i));
    }

    if (numberOfTiles <= 100 && 70 < numberOfTiles) {
      createMemoryTile.classList.add('memory-block', 'memory-block-height--3', "memory-block--".concat(i));
    }
    /*
    const createMemoryTile = document.createElement('div');
    memoryBlockArea.appendChild(createMemoryTile);
    createMemoryTile.classList.add('memory-block', `memory-block--${i}`);
    */

  }
}
/* loop that creates memory tiles based on the selected amount by the player */


function createMemoryTilesSelector() {
  for (var i = 1; i <= numberOfTiles; ++i) {
    memoryTiles[i] = document.querySelector(".memory-block--".concat(i));
  }
}
/* function that toggles the active memory tile */


function toggleMemoryTile(t) {
  memoryTiles[t].classList.toggle('active');
}
/* press the start button to start the game*/


startGame.addEventListener('click', function (number) {
  startGameSequence();
});
/* start the game by pressing the spacebar*/

document.body.onkeyup = function (e) {
  if (e.keyCode == 32 && gameAreaActive === true) {
    startGameSequence();
  }
};

function startGameSequence() {
  if (playerTurn === false && computerTurn === true) {
    /* generate a random rumber which will be used to select a random memory tile*/
    var generatedNumber = Math.floor(Math.random() * numberOfTiles) + 1;
    generatedNumbersSequence.push(generatedNumber);
    console.log("generated number is ".concat(generatedNumber));
    /* disable the start buttons while the sequence is running*/

    computerTurn = false;
    /* loop that starts the play sequence */

    var _loop = function _loop(i) {
      /* function that starts the play sequence with a timer*/
      setTimeout(function () {
        messageBox.innerHTML = '';

        var _loop2 = function _loop2(t) {
          if (generatedNumbersSequence[i] === t) {
            toggleMemoryTile(t);
            memoryTileBeep.play();
            setTimeout(function () {
              toggleMemoryTile(t);
            }, 700);
          }
        };

        for (var t = 1; t <= numberOfTiles; ++t) {
          _loop2(t);
        }

        ;
        /* code that sets the time in ms before the next button is shown */
      }, 1000 * i);
      /* activate the buttons for the player after the computer has shown the order sequence*/

      if (i === generatedNumbersSequence.length) {
        setTimeout(function () {
          playerTurn = true;
          /* message the player it's their turn */

          messageBox.innerHTML = "Repeat the sequence (".concat(generatedNumbersSequence.length - playerNumbersSequence.length, " remaining)");
          console.log("i is ".concat(i));
          console.log("player's turn is ".concat(playerTurn));
          console.log("computer's turn is ".concat(computerTurn));
        }, 1000 * i);
      }

      console.log("generated number sequence is ".concat(generatedNumbersSequence));
    };

    for (var i = 0; i <= generatedNumbersSequence.length; i++) {
      _loop(i);
    }
  }
}

;
/* function that to creates multiple events (depending on the selected amount of tiles) for when the player clicks the memory tile buttons to repeat the asked sequence*/

function createPlayerInputArray() {
  var _loop3 = function _loop3(t) {
    memoryTiles[t].addEventListener('click', function () {
      if (playerTurn === true) {
        playerNumbersSequence.push(t);
        console.log(" player input is ".concat(playerNumbersSequence, " "));
        /* show the remaining amount of buttons that player has yet to press to complete the sequence*/

        messageBox.innerHTML = "Repeat the sequence (".concat(generatedNumbersSequence.length - playerNumbersSequence.length, " remaining)");
        winCheck();
        /* Highlights the memorytile after the player has pressed it*/

        toggleMemoryTile(t);
        memoryTileBeep.play();
        setTimeout(function () {
          toggleMemoryTile(t);
        }, 300);
      }
    });
  };

  for (var t = 1; t <= numberOfTiles; ++t) {
    _loop3(t);
  }
}

;
/* function to check if the player has succesfully input the correct sequence*/

function winCheck() {
  /* check if enough buttons have been pressed by the player to match the amount the computer has input */
  if (playerNumbersSequence.length === generatedNumbersSequence.length) {
    /* prepare for next round */
    playerTurn = false;
    computerTurn = true;
    /* compare arrays */

    if (JSON.stringify(playerNumbersSequence) === JSON.stringify(generatedNumbersSequence)) {
      /* message player they are correct */
      messageBox.innerHTML = 'You are correct!';
      /* update score */

      currentScore++;
      updateCurrentScore();
      /* check high score & update it if appropriate*/

      if (currentScore > highScore) {
        highScore = currentScore;
        updateHighScore();
        newHighScore = true;
        /* message the player they got a new high score */

        highScoreMessage.innerHTML = 'New high score!';
      }
      /* reset playerInput */


      playerNumbersSequence = [];
    } else {
      lostTheGame();
    }
  }

  if (playerNumbersSequence.length !== generatedNumbersSequence.length) {
    for (var i = 0; i < playerNumbersSequence.length; i++) {
      if (generatedNumbersSequence[i] !== playerNumbersSequence[i]) {
        lostTheGame();
      }
    }
  }
}

;
/* losing the game function*/

function lostTheGame() {
  /* message player they are incorrect */
  messageBox.innerHTML = 'You are incorrect... try again';
  /* reset high score text */

  highScoreMessage.innerHTML = '';

  if (newHighScore === true && 1 < highScore) {
    /* show high score popup modal */
    ShowHideHighScoreModal();
    highScoreNumberModal.innerHTML = highScore;
    /* select random gif via a number of 1 to 4*/

    var randomGif = Math.floor(Math.random() * 4) + 1;
    console.log(randomGif);
    /* select the correct gif based on the randomly selected number*/

    if (randomGif === 1) {
      highScoreModalGif.src = _applause.default;
    }

    if (randomGif === 2) {
      highScoreModalGif.src = _applause2.default;
    }

    if (randomGif === 3) {
      highScoreModalGif.src = _applause3.default;
    }

    if (randomGif === 4) {
      highScoreModalGif.src = _applause4.default;
    }
    /* play applause sound effect */


    applauseSound.play();
    applauseSound.loop = true;
    newHighScore = false;
  }
  /* update score */


  currentScore = 0;
  updateCurrentScore();
  /* prepare for next round */

  playerTurn = false;
  computerTurn = true;
  /* reset game*/

  playerNumbersSequence = [];
  generatedNumbersSequence = [];
}

;
/* functions that updates the scores in the html document*/

/*  update the current score  */

function updateCurrentScore() {
  currentScoreEL.innerHTML = currentScore;
}
/*  update the high score  */


function updateHighScore() {
  highScoreEL.innerHTML = highScore;
}
/* high score modal */

/* hide the modal once the player clicked it*/


highScoreModal.addEventListener('click', function () {
  ShowHideHighScoreModal();
});

function ShowHideHighScoreModal() {
  highScoreModal.classList.toggle('active-window');
  applauseSound.pause();
  applauseSound.currentTime = 0;
}
/* style the columns so all the memory tiles fit on the screen */


function styleColumnsGameArea() {
  /* styling for 6 tiles or less */
  if (numberOfTiles <= 6) {
    memoryBlockArea.className = 'memory-block-area margin--30 gap--3 grid-col';
    gridCol[0].style.gridTemplateColumns = "repeat(2, 1fr)";
  }
  /* styling for tiles between the numbers 6 and 21 */


  for (var i = 2; i < 7; i++) {
    if (numberOfTiles <= i * 3 + 3 && i * 3 < numberOfTiles) {
      memoryBlockArea.className = "memory-block-area margin--".concat(40 - i * 5, " gap--3 grid-col");
      gridCol[0].style.gridTemplateColumns = "repeat(".concat(i + 1, ", 1fr)");
    }
  }
  /* styling for tiles between the numbers 22 and 25 */


  if (numberOfTiles <= 25 && 21 < numberOfTiles) {
    memoryBlockArea.className = 'memory-block-area margin--30 gap--2 grid-col';
    gridCol[0].style.gridTemplateColumns = "repeat(5, 1fr)";
  }
  /* styling for tiles between the numbers 26 and 70*/


  for (var _i = 1; _i < 10; _i++) {
    if (numberOfTiles <= 25 + _i * 5 && 20 + _i * 5 < numberOfTiles) {
      memoryBlockArea.className = "memory-block-area gap--2 grid-col";
      gridCol[0].style.gridTemplateColumns = "repeat(".concat(_i + 5, ", 1fr)");
      /* select margin that's appriopriate for the number of tiles*/

      if (numberOfTiles <= 35 && 25 < numberOfTiles) {
        memoryBlockArea.classList.add("margin--30");
      }

      if (numberOfTiles <= 50 && 35 < numberOfTiles) {
        memoryBlockArea.classList.add("margin--20");
      }

      if (numberOfTiles <= 60 && 50 < numberOfTiles) {
        memoryBlockArea.classList.add("margin--15");
      }

      if (numberOfTiles <= 70 && 60 < numberOfTiles) {
        memoryBlockArea.classList.add("margin--10");
      }
    }
  }
  /* styling for tiles between the numbers 70 and 100*/


  for (var _i2 = 1; _i2 < 4; _i2++) {
    if (numberOfTiles <= 70 + _i2 * 10 && 60 + _i2 * 10 < numberOfTiles) {
      memoryBlockArea.className = "memory-block-area margin--".concat(40 - _i2 * 10, " gap--1 grid-col");
      gridCol[0].style.gridTemplateColumns = "repeat(".concat(5 + _i2 * 5, ", 1fr)");
    }
  }
}

;
/* how to style css properties of a class
        document.getElementsByClassName('scores-box')[0].style.height = "5rem";
        */

/* quit the game */

/* ------------------------------------------------- */

/* quit te game, reset all setting to default and return to the difficult select screen */

quitBtn.addEventListener('click', function () {
  removeMemoryTilesHtml();
  currentScore = 0;
  updateCurrentScore();
  highScore = 0;
  updateHighScore();
  generatedNumbersSequence = [];
  playerNumbersSequence = [];
  highScoreMessage.innerHTML = '';
  messageBox.innerHTML = 'Press start or spacebar to begin the game';
  gameAreaActive = false;
  toGameArea();
});
/* remove the generated memory tiles in the html document to reset the game */

function removeMemoryTilesHtml() {
  for (var i = 1; i <= numberOfTiles; ++i) {
    memoryBlockArea.removeChild(memoryBlockArea.lastElementChild);
  }
}
},{"../sound-effects/memorytile-beep.mp3":"sound-effects/memorytile-beep.mp3","../sound-effects/applause-sound.mp3":"sound-effects/applause-sound.mp3","../gifs/applause-1.gif":"gifs/applause-1.gif","../gifs/applause-2.gif":"gifs/applause-2.gif","../gifs/applause-3.gif":"gifs/applause-3.gif","../gifs/applause-4.gif":"gifs/applause-4.gif"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56127" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/script.js"], null)
//# sourceMappingURL=/script.e587773d.js.map