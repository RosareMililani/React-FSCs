"use strict";

// React components need to be capitalized
// always need some "root" HTML that wraps all the other HTML
var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/React.createElement("div", null, "Hello World");
}; // ReactDOM is imported by the client (example1.handlebars)
// render out the JSX tag <HelloWorld />, and put it in the #app div


var init = function init() {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), document.querySelector("#app"));
};

window.onload = init;
