"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

//*------------------------------------------------------------------*

var AutocompleteBox = require('./AutocompleteBox.jsx');


exports.render = function(options) {

    ReactDOM.render(
        React.createElement(
            AutocompleteBox
        ),
        (typeof options.target === "string") ? document.getElementById(options.target) : options.target
    );
};
