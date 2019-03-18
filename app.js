const bitcoinMessage = require('bitcoinjs-message');

const address = 'COPY ADDRESS FROM ELECTRUM';
const signature = 'COPY SIGNATURE FROM ELECTRUM';
const message = 'COPY WHATEVER MESSAGE ';



console.log(bitcoinMessage.verify(message, address, signature)); // you should get 'true' if everything is ok