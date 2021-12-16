const base64 = require('base64url');

const JWT_BASE64_URL = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZGRkZGRyZGhlQGdtYWlsLmNvbSIsImlhdCI6MTYyNTU2OTg1M30.Lz8KR4BXVGxeS7yRJsYFasVVlnlVfRuiAI1Fz9jt4j0';

const jwtParts = JWT_BASE64_URL.split('.');
// const headerInBase64UrlFormat = jwtParts[0];
const payloadInBase64UrlFormat = jwtParts[1]; //1
// const signatureInBase64UrlFormat = jwtParts[2];

// const decodedHeader = base64.decode(headerInBase64UrlFormat);
const decodedPayload = base64.decode(payloadInBase64UrlFormat);//1
// const decodedSignature = base64.decode(signatureInBase64UrlFormat);

// console.log(decodedHeader);
console.log(decodedPayload);//
// console.log(decodedSignature);