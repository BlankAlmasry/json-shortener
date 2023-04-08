# JSON Shortener

This is a simple JavaScript library for shortening JSON objects into shorter string.

Usage
Installation
Install the package using npm:

```npm install json-shortener```


## Example

```javascript
import {decodeJson, encodeJson} from "json-shortener";

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

console.log(`Original length: ${JSON.stringify(obj).length}`); // 444
console.log('Shortened JSON length:', shortenedJson.length); // 320

console.log(`Shortened JSON: ${shortenedJson}`); // 1mT=8#Z[r.#D]q7<0U8=<}@sKQo?Ug{WJYot5Ae3RURedq[?A9sLYyw#k9JR6_4dGP^%HO{gfm5XE3hUt@_Vo28o8X64Fb_F>U9CDV.gryo4dFx4<r2QC4AC)C]RW<~XxWd}LYeui&0*uOGlX?-23bw)4>{g%O1I=@@m-7oa1D;M`m*`2g`}3QyS-QK51]xp)74Z-^(feN;=sr?LMJqfI*T9*D`zj7oQDi.c~{<n2Z?)Yp8^X8{~&N-=-`Q&#yy*|dNBQi,caQIbhx?FTehnjEk4GYfbR51Xf}qNP0&UDoMu5ZPSpZ5xOz9N,;h?FcSP
```
