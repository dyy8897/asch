const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'
const name = 'IssuerName'
const desc = 'IssuerDesc'
const a = AschJS.uia.createIssuer(name, desc, secret, secondSecret)
console.log('资产发行商注册')
console.log(a)

const currency = 'IssuerName.CNY';
const maximum = '1000000';
const precision = 3;
const strategy = '';
// const b = AschJS.uia.createAsset(currency, desc, maximum  , precision, strategy, secret, secondSecret)
// console.log('资产注册')
// console.log(b)

let flagType = 1  //资产是否注销，1：流通，2：注销
const flag = 1 //访问控制列表的类型，0：黑名单， 1：白名单，资产创建后默认为黑名单模式
const c = AschJS.uia.createFlags(currency, flagType, flag, secret, secondSecret)
console.log('资产设置访问控制列表(acl)模式')
console.log(c)

const operator = '+'
const list = ['15745540293890213312']
const d = AschJS.uia.createAcl(currency, operator, flag, list, secret, secondSecret)
console.log('更新访问控制列表')
console.log(d)

const amount = '100000'
const e = AschJS.uia.createIssue(currency, amount, secret, secondSecret)
console.log('资产发行')
console.log(e)

const recipientId = 'AKKHPvQb2A119LNicCQWLZQDFxhGVEY57a' //接收地址
const f = AschJS.uia.createTransfer(currency, amount, recipientId, secret, secondSecret)
console.log('资产转账')
console.log(f)

flagType = 2
const g = AschJS.uia.createFlags(currency, flagType, flag, secret, secondSecret)
console.log('资产注销')
console.log(g)