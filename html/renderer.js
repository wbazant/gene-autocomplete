"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

//*------------------------------------------------------------------*

import Demo from './demo.jsx'

let __values__ = []

exports.render = function(options) {

    ReactDOM.render(
        React.createElement(
            Demo
        ),
        (typeof options.target === "string") ? document.getElementById(options.target) : options.target
    );
};
