const AschJS = require('asch-js');
const request = require('superagent');
const async = require('async');
app.route.get('/hello',  async function (req) {
  const secret = "tourist fabric genius organ inherit soft awkward pool boy police awake genius"
  const message = AschJS.crypto.getKeys(secret)
  return { message: message }
})

app.route.put('/ping/:seq',  async function (req) {
  return { pong: Number(req.params.seq) + 1 }
})

app.route.post('/sleep',  async function (req, cb) {
  if (!req.query || !req.query.seconds) {
    throw new Error('Invalid params')
  }
  await new Promise(resolve => setTimeout(resolve, Math.floor(Number(req.query.seconds) * 1000)))
})
//分组器调用
//测试   curl -X POST -H "Content-Type: application/json" -k -d '{"B_WT4_V1_ID": 54950188,"DISEASE_CODE": "Z51.103","AGE": 62,"GENDER": "男","SF0100": -1,"SF0102": -1,"SF0104": -1,"SF0108": 1,"ACCTUAL_DAYS": 1,"TOTAL_EXPENSE": 12538.92,"diags_code": ["C20xx01","C77.901","C78.001","C78.701","Z22.501"],"opers_code": ["89.54001","99.25020"]}' http://127.0.0.1:4096/api/dapps/dapp/drgserver
app.route.post('/drgserver',  async function (req) {
  //作为调用分组使用
  // data = JSON.stringify(req.query);
  // var response = await request
  //                       .post('139.129.165.56:3002/comp_drg')
  //                       .send(req.query)
  //                       .set('Content-Type','application/json')
  //dapp转账,目前存余额不足情况
  var fee = String(0.1 * 100000000);
  var type = 3;
  var options = {fee: fee, type: type, args: '["CCTime.XCT", "10", "'+req.query["Key"]+'"]'};
  var secret = "elite brush pave enable history risk ankle shrimp debate witness ski trend";
  var transaction = AschJS.dapp.createInnerTransaction(options, secret);
  var response = await request
    .put('127.0.0.1:4096/api/dapps/5c4340ce57d698398a921a45743e24d2b6f81895da2db645844167680d9805c9/transactions/signed')
    .set('Content-Type','application/json')
    .set('magic', '594fe0f3')
    .set('version','')
    .set('accept', 'json')
    .send({"transaction": transaction})
    .set('Content-Type','application/json')
  return {reports: response}
})
