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
  data = JSON.stringify(req.query);
  var response = await request
                        .post('139.129.165.56:3001/comp_drg')
                        .send(req.query)
                        .set('Content-Type','application/json')
  return {reports: response["text"]}
})
