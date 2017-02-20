"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

//*------------------------------------------------------------------*

var AutocompleteBox = require('../src/AutocompleteBox.jsx');


exports.render = function(options) {

    ReactDOM.render(
        React.createElement(
            AutocompleteBox,
            {
              suggesterUrlTemplate: options.suggesterUrlTemplate || "https://www.ebi.ac.uk/gxa/json/suggestions?query={0}&species=",
              onGeneChosen: console.log
            }
        ),
        (typeof options.target === "string") ? document.getElementById(options.target) : options.target
    );
};
