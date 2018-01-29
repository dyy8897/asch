const AschJS = require('asch-js');
const Request = require('superagent');

// 测试服务器连接
Request
    .get('127.0.0.1:4096')
    .end(function(req,res){
        if(res){
            console.log('测试服务器连接')
            console.log(res.statusCode)
        }
    })

// 获取节点信息
Request
    .get('127.0.0.1:4096/api/peers') 
    .end(function(req,res){
        if(res){
            console.log('获取节点信息')
            console.log(res.body)
        }
    })