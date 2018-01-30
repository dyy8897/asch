const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const keys = AschJS.crypto.getKeys(secret);
console.log('根据密码生成公钥、私钥');
console.log(keys);

const publicKey = keys.publicKey
const address = AschJS.crypto.getAddress(publicKey);
console.log('根据公钥生成地址')
console.log(address)

const secondSecret = '123456'
const a = AschJS.signature.createSignature(secret, secondSecret)
console.log('设置二级密码')
console.log(a)

const b = AschJS.transaction.createLock(8130, secret, secondSecret)
console.log('账户锁仓')
console.log(b)
