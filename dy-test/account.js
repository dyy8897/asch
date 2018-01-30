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