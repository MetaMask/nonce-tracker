# nonce-tracker

How metamask calculates nonces

```js
const NonceTracker = require('nonce-tracker')

const nonceTracker = new NonceTracker(config)

nonceLock = nonceTracker.getNonceLock('0xselectedEthereumAddress')

nonce = nonceLock.nextNonce
```
