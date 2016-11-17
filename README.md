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

#### Full Json Return:

```json
{ cardId: 'EX1_561',
  name: 'Alexstrasza',
  cardSet: 'Classic',
  type: 'Minion',
  faction: 'Neutral',
  rarity: 'Legendary',
  cost: 9,
  attack: 8,
  health: 8,
  text: '<b>Battlecry:</b> Set a hero\'s remaining Health to 15.',
  flavor: 'Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.',
  artist: 'Raymond Swanland',
  collectible: true,
  elite: true,
  race: 'Dragon',
  img: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_561.png',
  imgGold: 'http://wow.zamimg.com/images/hearthstone/cards/enus/animated/EX1_561_premium.gif',
  locale: 'enUS',
  mechanics: [ { name: 'Battlecry' } ] }
```

### Methods available:

- getCardByName
- getCardsByClass

### Contributing

Feel free to fork and create a PR.

Made with :heart: by [Hudson](https://github.com/hudsonpereira/)