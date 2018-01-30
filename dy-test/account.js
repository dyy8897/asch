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

Request
.post('127.0.0.1:4096/api/accounts/open2/')
.send({ publicKey: publicKey })    
.set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('本地加密后再登陆')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.post('127.0.0.1:4096/api/accounts/open/')
.send({ secret: secret })    
.set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('本地不加密直接登陆')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts?address=' + address) 
.end(function(err,res){
    console.log('根据地址获取账户信息')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/getBalance?address=' + address) 
.end(function(err,res){
    console.log('获取账户余额')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/getPublickey?address=' + address) 
.end(function(err,res){
    console.log('根据地址获取账户公钥')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.post('127.0.0.1:4096/api/accounts/generatePublickey/')
.send({ secret: secret })    
.set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('生成公钥')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/delegates?address=' + address) 
.end(function(err,res){
    console.log('根据地址获取其投票列表')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/delegates/fee') 
.end(function(err,res){
    console.log('获取受托人手续费设置')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.put('127.0.0.1:4096/api/accounts/delegates/')
.send({ secret: secret, publicKey: publicKey,
    delegates: ["+" + address]
 }).set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('给受托人投票')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/new') 
.end(function(err,res){
    console.log('生成新账户')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/top?limit=2&offset=0') 
.end(function(err,res){
    console.log('获取账户排行榜前100名')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/accounts/count') 
.end(function(err,res){
    console.log('获取当前链上账户总个数')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.put('127.0.0.1:4096/api/signatures')
.send({ secret: secret, secondSecret: "123456"})
.set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('设置二级密码')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

 
Request
.get('127.0.0.1:4096/api/signatures/fee') 
.end(function(err,res){
    console.log('获取二级密码设置手续费')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.put('127.0.0.1:4096/api/multisignatures')
.send({ secret: secret, secondSecret: '123456', min: 2, lifetime: 1, 
    keysgroup: ["+eb48b9ab7c9a34a9b7cdf860265d65b31af774355cabf1b3a387d14a1925dc97","+d5d7aa157f866c47a2a1e09e2746286ed089fd90976b54fbfa930e87d11609cb"]})
.set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('设置普通账户为多重签名账户')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/multisignatures/pending?publicKey=2cef5711e61bb5361c544077aa08aebc4d962a1d656571901c48d716382ad4fd') 
.end(function(err,res){
    console.log('根据公钥获取挂起的多重签名交易详情')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})


Request
.post('127.0.0.1:4096/api/multisignatures/sign')
.send({ secret: secret ,secondSecret: secondSecret,
    transactionId: '17620378998277022323'})    
.set('Content-Type', 'application/json')
.end(function(err,res){
    console.log('非交易发起人对交易进行多重签名')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})


Request
.get('127.0.0.1:4096/api/multisignatures/accounts?publicKey=eb48b9ab7c9a34a9b7cdf860265d65b31af774355cabf1b3a387d14a1925dc97') 
.end(function(err,res){
    console.log('获取多重签名账户信息')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})