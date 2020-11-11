"use strict";

// Note that React events (like `onChange` below) are camel-cased
var HelloUser = function HelloUser(props) {
  return /*#__PURE__*/React.createElement("div", null, "Hello ", props.username, /*#__PURE__*/React.createElement("p", null, "Change Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.username,
    onChange: handleNameChange
  }));
}; // re-render <HelloUser> every time the 


var handleNameChange = function handleNameChange(e) {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloUser, {
    username: e.target.value
  }), document.querySelector("#app"));
};

var init = function init() {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloUser, {
    username: "Ace Coder"
  }), document.querySelector("#app"));
};

window.onload = init;
