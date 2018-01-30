const AschJS = require('asch-js');
const Request = require('superagent');

Request
.get('127.0.0.1:4096/api/loader/status')
.end(function(req,res){
    console.log('查看本地区块链加载状态')
    if(res){
        console.log(res.body)
    }
})

Request
.get('127.0.0.1:4096/api/loader/status/sync')
.end(function(req,res){
    console.log('查看区块同步信息')
    if(res){
        console.log(res.body)
    }
})