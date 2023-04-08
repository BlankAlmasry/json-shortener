import zlib from "zlib";
import {baseChars} from "./baseChars.js";

function decodeJson(str) {
    const singleNumber = decodeNumber(str);
    const compressed = decodeNumberToBytes(singleNumber);

    const buffer = Buffer.from(compressed);
    const bytes = zlib.inflateRawSync(buffer);

    return JSON.parse(bytes.toString('utf8'));
}

function decodeNumberToBytes(singleNumber) {
    const backToBytes = [];
    let singleNumberDuplicate = singleNumber;
    while (singleNumberDuplicate > 0n) {
        backToBytes.push(Number(singleNumberDuplicate & 255n));
        singleNumberDuplicate >>= 8n;
    }

    return backToBytes.reverse();
}

function decodeNumber(str) {
    const base = BigInt(baseChars.length);
    let decoded = 0n;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = baseChars.indexOf(char);
        decoded = decoded * base + BigInt(index);
    }

    return decoded;
}

export {decodeJson};
