const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'
const userName='张三'
let keys = AschJS.crypto.getKeys(secret);
const publicKey = keys.publicKey
const privateKey = keys.privateKey
const address = AschJS.crypto.getAddress(publicKey);
const target_address = "16358246403719868041";  
const amount = 100*100000000;   //100 XAS
const message = '备注';
const recipient_id = 'AFUH568CbGC2GPcE4gXHiZhxdYQYfziz2J';
let dapp_id = 'bebe3c57d76a5bbe3954bd7cb4b9e381e8a1ba3c78e183478b4f98b9d532f024';
let trans_id = '123b04a6e380500903d8942622d57987661e72b2ae95464066d0af3f02c3c691';
const amount_str = '10000000'
const currency = "XAS";
const fee = String(0.1 * 100000000); 
let type = 1; // 这里的type指的是合约标号，而非主链的交易类型
let trans = { 
    type: 0,  
    amount: 10000000000,
    fee: 10000000,
    recipientId: '16358246403719868041',
    message: 'beizhu',
    timestamp: 40566970,
    asset: {}}
let dapp_options = { 
    name: 'asch-dapp-cctime',
    link: 'https://github.com/AschPlatform/asch-dapp-cctime/archive/master.zip',
    category: 1,
    description: 'Decentralized news channel',
    tags: 'asch,dapp,demo,cctime',
    icon: 'http://o7dyh3w0x.bkt.clouddn.com/hello.png',
    type: 0,
    delegates: [ '8b1c24a0b9ba9b9ccf5e35d0c848d582a2a22cca54d42de8ac7b2412e7dc63d4',
    'aa7dcc3afd151a549e826753b0547c90e61b022adb26938177904a73fc4fee36',
    'e29c75979ac834b871ce58dc52a6f604f8f565dea2b8925705883b8c001fe8ce',
    '55ad778a8ff0ce4c25cb7a45735c9e55cf1daca110cfddee30e789cb07c8c9f3',
    '982076258caab20f06feddc94b95ace89a2862f36fea73fa007916ab97e5946a' ],
    unlockDelegates: 3
};
let voteContent = [
    '-ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7',
    '+c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2'
    ];

keys = AschJS.crypto.getKeys(secret)
trans.senderPublicKey = keys.publicKey;

trans = AschJS.signature.createSignature(secret, secondSecret)
trans = AschJS.transaction.createLock(8130, secret, secondSecret)
trans = AschJS.transaction.createTransaction(target_address, amount, message, secret, secondSecret)

const trans_bytes = AschJS.crypto.getBytes(trans)
const trans_hash = AschJS.crypto.getHash(trans)
trans_id = AschJS.crypto.getId(trans) 
const signature = AschJS.crypto.signBytes(trans_bytes,keys)

const dapp = AschJS.dapp.createDApp(dapp_options, secret);
const transfer = AschJS.transfer.createInTransfer(dapp_id, currency, amount, secret, secondSecret || undefined);

type = 2;
options = {fee: fee, type: type, args: '["CCTime.XCT", "100000000"]'}; 
trans = AschJS.dapp.createInnerTransaction(options, secret);
type = 3;
options = {fee: fee, type: type, args: '["CCTime.XCT", "100000000", "A6H9rawJ7qvE2rKwQfdtBHdeYVehB8gFzC"]'}; 
trans = AschJS.dapp.createInnerTransaction(options, secret);
type = 4;
options = {fee: fee, type: type, args: '["nicheng"]'}; 
trans = AschJS.dapp.createInnerTransaction(options, secret);

Request
.get('127.0.0.1:4096/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-0')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4196/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-1')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4296/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-2')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4396/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-3')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4496/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-4')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4596/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-5')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4696/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-6')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4796/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-7')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4896/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-8')
    err ? console.log('err') : console.log(res.body) 
})
Request
.get('127.0.0.1:4996/api/blocks/getheight') 
.end(function(err,res){
    console.log('获取区块链高度-9')
    err ? console.log('err') : console.log(res.body) 
})