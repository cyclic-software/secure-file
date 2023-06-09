# @cyclic.sh/secure-file

This will help you Encrypt, Store and Decrypt files securely with no dependencies.

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)



## Getting Started

1) `npm install @cyclic.sh/secure-file`

## Store encrypted file in git

1) `git add <YOUR_INPUT_FILENAME>.secure; git commit -m "Added secret file"`
1) Set an environment variable `SECRET_PASSPHRASE` with the value used to encrypt the file
1) Read the file in your server
```
const { decryptToString } = require('./secure-file.js')
...
const secureFileName = './account.json.secure'
const jsonStr = await decryptToString(secureFileName)
```

## Store encrypted file in S3

Coming soon!

## Store encrypted file in DynamoDB

Coming soon!


