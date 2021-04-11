# nonce-tracker

How metamask calculates nonces

```js
const NonceTracker = require('nonce-tracker')

const nonceTracker = new NonceTracker(config)

nonceLock = nonceTracker.getNonceLock('0xselectedEthereumAddress')

nonce = nonceLock.nextNonce
```

## NonceTracker

[index.js:13-159][13]

### Parameters

-   `opts` **[Object][14]** {Object}
    -   `opts.provider` **[Object][14]** a ethereum provider
    -   `opts.getPendingTransactions` **[Function][15]** a function that returns an array of txMeta
        whose status is `submitted`
    -   `opts.getConfirmedTransactions` **[Function][15]** a function that returns an array of txMeta
        whose status is `confirmed`
    -   `opts.blockTracker`

### getGlobalLock

[index.js:27-32][16]

Returns **[Promise][17]&lt;[Object][14]>** with the key releaseLock (the gloabl mutex)

### getNonceLock

[index.js:48-82][18]

#### Parameters

-   `address`

#### Properties

-   `highestLocallyConfirmed` **[number][19]** A hex string of the highest nonce on a confirmed transaction.
-   `nextNetworkNonce` **[number][19]** The next nonce suggested by the eth_getTransactionCount method.
-   `highestSuggested` **[number][19]** The maximum between the other two, the number returned.

this will return an object with the `nextNonce` `nonceDetails`, and the releaseLock
Note: releaseLock must be called after adding a signed tx to pending transactions (or discarding).

#### Parameters

-   `address`  {string} the hex string for the address whose nonce we are calculating

Returns **[Promise][17]&lt;NonceDetails>**

## Running tests

```bash
yarn test
```



[13]: https://github.com/MetaMask/nonce-tracker/blob/587ee0b25e16543330830e71372e0a9b94c166c4/index.js#L13-L159 "Source code on GitHub"

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[16]: https://github.com/MetaMask/nonce-tracker/blob/587ee0b25e16543330830e71372e0a9b94c166c4/index.js#L27-L32 "Source code on GitHub"

[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[18]: https://github.com/MetaMask/nonce-tracker/blob/587ee0b25e16543330830e71372e0a9b94c166c4/index.js#L48-L82 "Source code on GitHub"

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

