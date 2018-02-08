const AschJS = require('asch-js');
const request = require('superagent');
const async = require('async');
//充值
app.route.post('/recharge',  async function (req, cb) {
  //获取当前dapp id
  let dappid = req.query['BASE_URL']
  dappid = dappid.split('/api/dapps/')[1]
  //币种
  const currency = 'XAS'
  //金额
  const amount = req.query['getRecharge']
  //账户
  const secret = req.query['getAccount']
  //二级密码
  const secondSecret = 'dzc944262316'
  //调用接口生成transaction
  const transaction = AschJS.transfer.createInTransfer(dappid, currency, amount, secret, undefined)
  //调用充值接口
  const response = await request
      .post('localhost:4096/peer/transactions')
      .send({"transaction":transaction})
      .set('Content-Type','application/json')
      .set('magic', '594fe0f3')
      .set('version','')
      .set('accept', 'json')
  //response
  return {massage: response}
})
