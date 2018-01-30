const AschJS = require('asch-js');
const Request = require('superagent');

const targetAddress = "16358246403719868041"; 
const amount = 100*100000000;   //100 XAS
const message = '备注';
const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'

const trans = AschJS.transaction.createTransaction(targetAddress, amount, message, secret, secondSecret || undefined)
console.log('在主链转账')
console.log(trans)

const trans_id = AschJS.crypto.getId(trans)
console.log('获取交易ID')
console.log(trans_id)

// /peer相关的api，在请求时都需要设置一个header
// key为magic，testnet value:594fe0f3, mainnet value:5f5b3cf5
// key为version，value为''

Request
.post('127.0.0.1:4096/peer/transactions')
.send({ transaction: trans})
.set('Content-Type', 'application/json')
.set('magic','594fe0f3')
.set('version', '')
.end(function(err,res){
    console.log('转账交易')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})


Request
.put('127.0.0.1:4096/api/transactions')
.send({ secret: secret, amount: 10000,
    recipientId: "16723473400748954103"
 }).set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('创建交易并广播')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/transactions?limit=2') 
.end(function(err,res){
    console.log('获取交易信息')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/transactions/get?id=' + trans_id) 
.end(function(err,res){
    console.log('根据交易id查看交易详情')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/transactions/unconfirmed/get?id=' + trans_id) 
.end(function(err,res){
    console.log('根据未确认交易id查看详情')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/transactions/unconfirmed?limit=2') 
.end(function(err,res){
    console.log('获取[全网所有]未确认的交易详情')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})


