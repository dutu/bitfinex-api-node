var rest = require('./rest.js'),
    ws = require('./ws.js');

var BFX = function(api_key, api_secret){
    this.api_key = api_key;
    this.api_secret = api_secret;
    this.rest = new rest;
    this.ws = new ws;
};

module.exports = BFX;