"use strict";

var SongContainer = function SongContainer(props) {
  if (props.songs.length === 0) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "No Songs Yet!"));
  } // return JSX for all the songs in the list


  var songList = props.songs.map(function (song) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, song.artist, " - ", /*#__PURE__*/React.createElement("i", null, song.title)));
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My favorite songs!"), songList);
};

var init = function init() {
  ReactDOM.render( /*#__PURE__*/React.createElement(SongContainer, {
    songs: []
  }), document.querySelector("#app"));
  setTimeout(function () {
    loadSongsFromServer();
  }, 2000);
};

var loadSongsFromServer = function loadSongsFromServer() {
  var xhr = new XMLHttpRequest();

  var setSongs = function setSongs() {
    var songResponse = JSON.parse(xhr.response);
    ReactDOM.render( /*#__PURE__*/React.createElement(SongContainer, {
      songs: songResponse
    }), document.querySelector("#app"));
  };

  xhr.onload = setSongs;
  xhr.open('GET', '/getSongs');
  xhr.send();
};

window.onload = init;
