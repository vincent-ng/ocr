# ocr

Process an image using baidu aip

## Usage

```bash
Usage:  -f <file>

Options：
  --appId      baidu ocr app id. Can set using env var OCR_APP_ID         [must]
  --apiKey     baidu ocr api key. Can set using env var OCR_API_KEY       [must]
  --secretKey  baidu ocr secret key. Can set using env var OCR_SECRET_KEY [must]
  --file, -f   image file for ocr                                         [must]
  --help       show this help                                             [boolean]
```

## Example
```bash
OCR_APP_ID=9851541 OCR_API_KEY=vv2fkIscM4WjvcWisb2sQDMV OCR_SECRET_KEY=tR41dG9HICEmyi1b5acLGB13oz6yPZmF node . -f ./pic.jpg 
```
