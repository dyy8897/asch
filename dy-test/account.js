const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor'
const publicKey = AschJS.crypto.getKeys(secret).publicKey;  //根据密码生成公钥 
const address = AschJS.crypto.getAddress(publicKey);   //根据公钥生成地址

