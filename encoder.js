import * as zlib from "zlib";

const baseChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encodeJson(obj) {
    const encoder = new TextEncoder();
    const bytes = encodeObjToBytes(encoder, obj);

    // Compress the bytes using zlib
    const compressed = zlib.deflateSync(bytes);

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

function encodeObjToBytes(encoder, obj) {
    return encoder.encode(JSON.stringify(obj));
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
