const yargs = require('yargs')

module.exports = yargs.env('OCR')
	.options({
		'appId': {
			describe: 'baidu ocr app id. Can set using env var OCR_APP_ID',
			demandOption: true
		},
		'apiKey': {
			describe: 'baidu ocr api key. Can set using env var OCR_API_KEY',
			demandOption: true
		},
		'secretKey': {
			describe: 'baidu ocr secret key. Can set using env var OCR_SECRET_KEY',
			demandOption: true
		},
		'file': {
			alias: 'f',
			describe: 'image file for ocr',
			demandOption: true
		}
	})
	.usage('Usage: $0 -f <file>')
	.help()
	.argv
