const fs = require('fs')
const argv = require('./yargs.js')
const ai = require('./baidu-aip')

const ocr = new ai.ocr(argv.appId, argv.apiKey, argv.secretKey)

const fileContent = fs.readFileSync(argv.file).toString('base64')
ocr.generalBasic(fileContent).then(console.log)
