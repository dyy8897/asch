const AschJS = require('asch-js');
const Request = require('superagent');

const secret = 'someone manual strong movie roof episode eight spatial brown soldier soup motor';
const secondSecret = '123456'

const userName='张三'
const a = AschJS.delegate.createDelegate(userName, secret, secondSecret || undefined)
console.log('注册受托人')
console.log(a)

// 投票内容是一个列表，列表中的每一个元素是一个符号加上所选择的受托人的公钥，符号为+表示投票，符号为-表示取消投票
const voteContent = [
'-ae256559d06409435c04bd62628b3e7ea3894c43298556f52b1cfb01fb3e3dc7',
'+c292db6ea14d518bc29e37cb227ff260be21e2e164ca575028835a1f499e4fe2'
];
const b = AschJS.vote.createVote(voteContent, secret, secondSecret || undefined);
console.log('给受托人增加/取消投票')
console.log(b)