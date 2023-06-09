import { encryptFile } from './secure-file.mjs'

let method = process.argv[2]
let inFile = process.argv[3]

if (method === 'encryptFile') {
  encryptFile(inFile)
}
