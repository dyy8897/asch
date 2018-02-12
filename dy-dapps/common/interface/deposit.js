const AschJS = require('asch-js');
const request = require('superagent');
const async = require('async');
//充值
app.route.post('/deposit',  async function (req, cb) {
  //获取当前dapp id
  let dappid = req.query['BASE_URL']
  dappid = dappid.split('/api/dapps/')[1]
  //币种
  const currency = 'XAS'
  //费用
  const fee = String(0.1 * 100000000)
  //类别
  const type = 2
  //金额
  const amount = req.query['getRecharge']
  //options
  const options = {fee: fee, type: type, args: '["'+currency+'", "'+amount+'"]'}
  //账户
  const secret = req.query['getAccount']
  //调用接口生成transaction
  const transaction = transaction = AschJS.dapp.createInnerTransaction(options, secret)
  //调用提现接口
  const response = await request
      .post('localhost:4096/api/'+dappid+'/transactions/signed')
      .send({"transaction":transaction})
      .set('Content-Type','application/json')
      .set('magic', '594fe0f3')
      .set('version','')
      .set('accept', 'json')
  //response
  return {massage: response}
})
