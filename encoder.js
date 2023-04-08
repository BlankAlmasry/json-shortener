import * as zlib from "zlib";
import {baseChars} from "./baseChars.js";

function encodeJson(obj) {
    const compressed = zlib.deflateRawSync(JSON.stringify(obj));

    const singleNumber = encodeBytesToNumber(compressed);
    return encodeNumber(singleNumber);
}

function encodeBytesToNumber(bytes) {
    let singleNumber = 0n;
    for (let i = 0; i < bytes.length; i++) {
        singleNumber |= BigInt(bytes[i]) << BigInt(8 * (bytes.length - i - 1));
    }
    return singleNumber;
}

function encodeNumber(num) {
    const base = BigInt(baseChars.length);
    let encoded = '';

    while (num > 0n) {
        const remainder = num % base;
        encoded = baseChars[Number(remainder)] + encoded;
        num /= base;
    }

    return encoded.padStart(11, '0');
}

export {encodeJson};
