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

Request
.get('127.0.0.1:4096/api/uia/issuers?offset=0&limit=1') 
.end(function(req,res){
    console.log('获取全网所有发行商')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/issuers/zhenxi') 
.end(function(req,res){
    console.log('查询指定发行商的信息')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/issuers/zhenxi/assets?offset=0&limit=2') 
.end(function(req,res){
    console.log('查看指定发行商的资产')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/assets?offset=0&limit=2') 
.end(function(req,res){
    console.log('获取全网所有资产信息')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/assets/zhenxi.UIA') 
.end(function(req,res){
    console.log('获取指定资产信息')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/assets/zhenxi.UIA/acl/1') 
.end(function(req,res){
    console.log('获取指定资产的访问控制列表（acl）')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/balances/AKKHPvQb2A119LNicCQWLZQDFxhGVEY57a') 
.end(function(req,res){
    console.log('获取指定账户所有uia的余额')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/my/transactions/16358246403719868041?offset=0&limit=2') 
.end(function(req,res){
    console.log('获取指定账户所有资产相关操作记录')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/balances/16358246403719868041/IssuerName.CNY') 
.end(function(req,res){
    console.log('获取指定账户指定资产的余额')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/transactions/my/16358246403719868041/IssuerName.CNY') 
.end(function(req,res){
    console.log('获取指定账户指定资产转账记录')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/uia/transactions/absorb.YLB') 
.end(function(req,res){
    console.log('获取指定资产转账记录')
    if(res){
        console.log(res.body)
    }
})



