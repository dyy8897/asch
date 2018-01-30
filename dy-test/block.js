const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'

Request
.get('127.0.0.1:4096/api/blocks?limit=2&offset=0&orderBy=height:desc') 
.end(function(err,res){
    console.log('获取区块数据')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/get?id=6076474715648888747') 
.end(function(err,res){
    console.log('获取指定区块的详情')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/getFee') 
.end(function(err,res){
    console.log('获取普通转账手续费')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/getMilestone') 
.end(function(err,res){
    console.log('获取里程碑')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/getReward') 
.end(function(err,res){
    console.log('查看单个区块奖励')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/getSupply') 
.end(function(err,res){
    console.log('获取XAS当前供应值')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/getStatus') 
.end(function(err,res){
    console.log('区块链状态')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})

Request
.get('127.0.0.1:4096/api/blocks/full?height=2392') 
.end(function(err,res){
    console.log('获取指定区块的交易信息')
    if(err){
        console.log(err)
    }else{
        console.log(res.body)        
    }
})