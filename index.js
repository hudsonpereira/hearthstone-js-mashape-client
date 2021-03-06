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
    }, function(data){
      if (data.length == 1) {
        data = data.pop();
      }

      if (callback) {
        return callback(data);
      }
    });
  };

  client.getCardsByClass = function(object, callback){
    var classes = ['Mage', 'Paladin', 'Warlock', 'Hunter', 'Priest', 'Druid'];

    if (classes.indexOf(object.class) == -1) {
      return [];
    }

    restClient.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + object.class, {
      headers: {
        'X-Mashape-Key': apiKey,
        'Accept': 'application/json'
      }
    }, function(data){
      if (data.length == 1) {
        data = data.pop();
      }

      if (callback) {
        return callback(data);
      }
    });
  }

  return client;
};

module.exports = Hearthstone;