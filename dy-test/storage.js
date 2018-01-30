const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'

const content = new Buffer('helloworld').toString('hex')
const a = AschJS.storage.createStorage(content, secret, secondSecret)
console.log('创建存储交易')
console.log(a)
