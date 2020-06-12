const jwkToPem = require('jwk-to-pem');

const fs = require('fs');
const data = fs.readFileSync(0, 'utf-8');

console.log(jwkToPem(JSON.parse(data), { private: true }));
