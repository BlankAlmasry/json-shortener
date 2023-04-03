import zlib from "zlib";

const baseChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function decodeJson(str) {
    const decoder = new TextDecoder();

    const singleNumber = decodeNumber(str);
    const compressed = decodeNumberToBytes(singleNumber);

    const buffer = Buffer.from(compressed);
    const bytes = zlib.inflateSync(buffer);

    return decodeBytesToObj(decoder, bytes);
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

function decodeBytesToObj(decoder, bytes) {
    return JSON.parse(decoder.decode(bytes));
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
