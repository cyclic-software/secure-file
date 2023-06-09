import { encryptFile } from './index.js'

let method = process.argv[2]
let inFile = process.argv[3]

if (method === 'encryptFile') {
  encryptFile(inFile)
}
