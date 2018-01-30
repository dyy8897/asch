const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'
const targetAddress = "16358246403719868041";  
const amount = 100*100000000;   //100 XAS
const message = 'beizhu';
trans = AschJS.transaction.createTransaction(targetAddress, amount, message, secret, secondSecret)
console.log('已签名的转账交易内容')
console.log(trans)

const b = AschJS.crypto.getBytes(trans)
console.log('根据交易内容获取字节Buffer对象')
console.log(b)

const c = AschJS.crypto.getHash(trans)
console.log('根据交易内容获取Hash Buffer对象')
console.log(c)

const d = AschJS.crypto.getId(trans) 
console.log('根据交易内容获取交易id')
console.log(d)


// 定义未签名交易
const trs = { 
    type: 0,  
    amount: 10000000000,
    fee: 10000000,
    recipientId: '16358246403719868041',
    message: 'beizhu',
    timestamp: 40566970,
    asset: {}}
// 根据密码，生成
keys = AschJS.crypto.getKeys(secret)
trs.senderPublicKey = keys.publicKey;
// 获取交易的Bytes Buffer
const buf = AschJS.crypto.getBytes(trs)
// 通过私钥对交易Bytes Buffer进行签名
const signature = AschJS.crypto.signBytes(buf,keys)

// const e = AschJS.crypto.verifyBytes(buf, trs.signature, trs.senderPublicKey)
// console.log('验证交易签名是否和已存在的签名一致')
// console.log(e)
