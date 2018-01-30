const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const keys = AschJS.crypto.getKeys(secret);
console.log('根据密码生成公钥、私钥');
console.log(keys);