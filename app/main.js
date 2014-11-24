var gamma = require('gamma');
var observable = require('observable');
var hboot = require('hyperboot/rpc');

var result = document.querySelector('#result');
var obs = observable.input(document.querySelector('#n'));
obs(function (value) {
    result.textContent = gamma(Number(value));
});

var button = document.querySelector('button#config');
button.addEventListener('click', function (ev) {
    ev.preventDefault();
    hboot.toggle();
});
