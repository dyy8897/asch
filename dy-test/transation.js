const AschJS = require('asch-js');
const Request = require('superagent');

const targetAddress = "16358246403719868041"; 
const amount = 100*100000000;   //100 XAS
const message = '备注';
const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'

const trans = AschJS.transaction.createTransaction(targetAddress, amount, message, secret, secondSecret)
console.log('在主链转账')
console.log(trans)

const trans_id = AschJS.crypto.getId(trans)
console.log('获取交易ID')
console.log(trans_id)