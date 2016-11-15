var RestClient = require('node-rest-client').Client;
var restClient = new RestClient();

var Hearthstone = function(apiKey){
  var client = {};

  client.getCardByName = function(name, callback){
    restClient.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/' + name, {
      headers: {
        'X-Mashape-Key': apiKey,
        'Accept': 'application/json'
      }
    }, callback);
  };

  return client;
};

module.exports = Hearthstone;