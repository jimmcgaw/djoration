/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(function () {

	  var tag = document.createElement('script');

	  tag.src = "https://www.youtube.com/iframe_api";
	  var firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	  // 3. This function creates an <iframe> (and YouTube player)
	  //    after the API code downloads.
	  var speechPlayer;
	  var musicPlayer;
	  window.onYouTubeIframeAPIReady = function () {
	    speechPlayer = new YT.Player('speech-player', {
	      height: '390',
	      width: '640',
	      videoId: 'xo-6BNtq5RY',
	      playerVars: {
	        'fs': 0,
	        'autoplay': 1
	      },
	      events: {
	        onReady: function onReady(event) {
	          event.target.setVolume(50);
	          event.target.playVideo();
	        }
	      }
	    });

	    musicPlayer = new YT.Player('music-player', {
	      height: '390',
	      width: '640',
	      videoId: 'vnHudUSzDuY',
	      playerVars: {
	        'fs': 0,
	        'autoplay': 1
	      },
	      events: {
	        onReady: function onReady(event) {
	          event.target.setVolume(50);
	          event.target.playVideo();
	        }
	      }
	    });
	  };

	  var videoPlayerStyles = {
	    'float': 'left',
	    'width': '500px'
	  };

	  var VideoPlayer = (function (_React$Component) {
	    _inherits(VideoPlayer, _React$Component);

	    function VideoPlayer(props) {
	      _classCallCheck(this, VideoPlayer);

	      _get(Object.getPrototypeOf(VideoPlayer.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(VideoPlayer, [{
	      key: 'render',
	      value: function render() {
	        return React.createElement(
	          'div',
	          { id: 'player-panel' },
	          React.createElement('div', { id: 'speech-player', style: videoPlayerStyles }),
	          React.createElement('div', { id: 'music-player', style: videoPlayerStyles })
	        );
	      }
	    }]);

	    return VideoPlayer;
	  })(React.Component);

	  ReactDOM.render(React.createElement(VideoPlayer, null), document.getElementById('panel'));

	  var VideoLink = (function (_React$Component2) {
	    _inherits(VideoLink, _React$Component2);

	    function VideoLink(props) {
	      _classCallCheck(this, VideoLink);

	      _get(Object.getPrototypeOf(VideoLink.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(VideoLink, [{
	      key: 'render',
	      value: function render() {
	        return React.createElement(
	          'a',
	          { href: '#', onClick: this.props.onSelect.bind(this), 'data-video_id': this.props.videoId },
	          this.props.videoId
	        );
	      }
	    }]);

	    return VideoLink;
	  })(React.Component);

	  var VideoMenu = (function (_React$Component3) {
	    _inherits(VideoMenu, _React$Component3);

	    function VideoMenu(props) {
	      _classCallCheck(this, VideoMenu);

	      _get(Object.getPrototypeOf(VideoMenu.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(VideoMenu, [{
	      key: 'onSpeechSelect',
	      value: function onSpeechSelect(e) {
	        var anchor = $(e.target);
	        var videoId = anchor.data('video_id');
	        speechPlayer.loadVideoById(videoId);
	      }
	    }, {
	      key: 'onMusicSelect',
	      value: function onMusicSelect(e) {
	        var anchor = $(e.target);
	        var videoId = anchor.data('video_id');
	        musicPlayer.loadVideoById(videoId);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var self = this;
	        return React.createElement(
	          'div',
	          { id: 'player-menu' },
	          React.createElement(
	            'div',
	            { id: 'speech-menu', style: videoPlayerStyles },
	            React.createElement(
	              'h3',
	              null,
	              'Change Speech'
	            ),
	            React.createElement('br', null),
	            React.createElement(
	              'ul',
	              null,
	              this.props.speechOptions.map(function (videoId) {
	                return React.createElement(
	                  'li',
	                  null,
	                  React.createElement(VideoLink, { videoId: videoId, onSelect: self.onSpeechSelect.bind(self), key: videoId })
	                );
	              })
	            )
	          ),
	          React.createElement(
	            'div',
	            { id: 'music-menu', style: videoPlayerStyles },
	            React.createElement(
	              'h3',
	              null,
	              'Select Beat'
	            ),
	            React.createElement('br', null),
	            React.createElement(
	              'ul',
	              null,
	              this.props.musicOptions.map(function (videoId) {
	                return React.createElement(
	                  'li',
	                  null,
	                  React.createElement(VideoLink, { videoId: videoId, onSelect: self.onMusicSelect.bind(self), key: videoId })
	                );
	              })
	            )
	          )
	        );
	      }
	    }]);

	    return VideoMenu;
	  })(React.Component);

	  var speechOptions = ['j8d-IYSM-08', 'pOjpaIO2seY', 'xo-6BNtq5RY', 'IDl84vusXos'];
	  var musicOptions = ['vnHudUSzDuY', 'JpfiJ3FU2Tk', '0gp0JvfPpmE', 'NpOtkhBcc8k'];

	  ReactDOM.render(React.createElement(VideoMenu, { speechOptions: speechOptions, musicOptions: musicOptions }), document.getElementById('menu'));

	  $('#slider').slider({
	    slide: function slide(event, ui) {
	      var speechVolume = 100 - ui.value;
	      var musicVolume = ui.value;
	      speechPlayer.setVolume(speechVolume);
	      musicPlayer.setVolume(musicVolume);
	    },
	    value: 50
	  });
	})();

/***/ }
/******/ ]);