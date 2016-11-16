## Hearthstone REST Client

![Hearhstone](http://us.battle.net/hearthstone/static/images/logos/logo.png?v=58-23)

### Installation

```bash
npm install hearthstone-rest-client --save
# OR
yarn add hearthstone-rest-client --save
```

### Usage

```javascript
var api_key = 'xxxxxxxxxxxxxxxxxxxxxxxxxx';
var client = require('hearthstone-rest-client')(api_key);

client.getCardByName("Alexstrasza", function(card){
  console.log(card.flavor); //outputs: Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.
});
```

### Methods available:

- getCardByName


### Contributing

Feel free to fork and create a PR.

Made with :heart: by [Hudson](https://github.com/hudsonpereira/)