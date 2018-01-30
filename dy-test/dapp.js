const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'

let options = { 
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
const a = AschJS.dapp.createDApp(options, secret);
console.log('dapp注册')
console.log(a)

const dappid = "bebe3c57d76a5bbe3954bd7cb4b9e381e8a1ba3c78e183478b4f98b9d532f024";  
const currency = "XAS";  
const amount = 10*100000000;
const b = AschJS.transfer.createInTransfer(dappid, currency, amount, secret, secondSecret || undefined);
console.log('dapp充值')
console.log(b)

const fee = String(0.1 * 100000000);
let type = 2; // 这里的type指的是合约标号，而非主链的交易类型
options = {fee: fee, type: type, args: '["CCTime.XCT", "100000000"]'}; 
const c = AschJS.dapp.createInnerTransaction(options, secret);
console.log('')
console.log(c)

type = 3;
options = {fee: fee, type: type, args: '["CCTime.XCT", "100000000", "A6H9rawJ7qvE2rKwQfdtBHdeYVehB8gFzC"]'}; 
const d = AschJS.dapp.createInnerTransaction(options, secret);
console.log('dapp内部转账')
console.log(d)

type = 4;
options = {fee: fee, type: type, args: '["nicheng"]'}; 
const e = AschJS.dapp.createInnerTransaction(options, secret);
console.log('dapp内设置昵称')
console.log(e)


const recipientId = 'AFUH568CbGC2GPcE4gXHiZhxdYQYfziz2J';
const dappId = 'bebe3c57d76a5bbe3954bd7cb4b9e381e8a1ba3c78e183478b4f98b9d532f024';
const transactionId = '123b04a6e380500903d8942622d57987661e72b2ae95464066d0af3f02c3c691';
const amount_str = '10000000'
// const trans = AschJS.transfer.createOutTransfer(recipientId, dappId, transactionId, currency, amount, secret, secondSecret);
// console.log('创建提现交易')
// console.log(trans)

// trans.signatures = [] // 受托人签名列表
// const delegate1_secret = 'chalk flame jeans rebuild dutch stone abstract capital lucky pottery raven depend'
// const signature1 = AschJS.transfer.signOutTransfer(trans,delegate1_secret);
// trans.signatures.push(signature1) // 将签名加入到transaction的签名列表中
// console.log(trans.signatures)