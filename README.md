# JSON Shortener

This is a simple JavaScript library for shortening JSON objects into shorter string.

Usage
Installation
Install the package using npm:

```npm install json-shortener```


## Example

```javascript
import {decodeJson, encodeJson} from "js-json-shortener";

const shortenedJson = encodeJson({
    name: 'john',
    lastName: 'doe',
    age: 22,
    favouriteNumber: 123241233333333333334123414323142314213421432142342342134,
    favouriteProgrammingLanguage: 'Anything but JavaScript',
    favouriteFramework: 'Anything not written in JavaScript',
    favouriteLibrary: 'Anything not written in JavaScript',
    favouriteEditor: 'Vim',
    location: {
        city: 'Kinshasa',
        country: 'Democratic Republic of the Congo',
        continent: 'Africa',
        planet: 'Earth',
        galaxy: 'Milky Way',
        universe: 'The one we live in',
    }
})
const obj = decodeJson(shortenedJson);

console.log(`Shortened JSON: ${shortenedJson}`); // A78VWi7b7mVg1msuZc1TbR0yizDIkj10D0g0hluV4Y1A0BepvXE6WLtsF8Km9pPESS9mNdJr8EIEz2onew1XQL9wEh1TwkL4K4jhVqICk24cUVLX46leFozA0KkIIgTH5j3pjwNR7zRHJMT6MZNSCrGmrWShZUEOKB0a4Lz2yjA2nSGjB5zxJyQcdrQUaUGMqPqZvlb5N0YYZYK3LNMZK2WW2Ng8H1UYDej8rnqG8p0asmm6navUyFkFtnfOfHdXuWNKMK7moYoOkeUtXz3vRpxZ7InYjFPG4U7vrJy5qAR9kZ9lRqaBIMSG0qL8CRII9et7lzaGWp4wscBaRxDdN8A18ZNDBRPdFWkk 
console.log('Shortened JSON length:', shortenedJson.length); // 356
console.log('Decoded object length:', JSON.stringify(obj).length); // 444
```

### License
MIT.
