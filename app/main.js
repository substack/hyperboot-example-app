var gamma = require('gamma');
var observable = require('observable');

var result = document.querySelector('#result');
var obs = observable.input(document.querySelector('#n'));
obs(function (value) {
    result.textContent = gamma(Number(value));
});
