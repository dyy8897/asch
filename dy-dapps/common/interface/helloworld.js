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
app.route.get('/address',  async function (req) {
  const secret = req.query['secret']
  const keys = AschJS.crypto.getKeys(secret)
  // 通过公钥获得地址
  const publicKey = keys.publicKey
  const privateKey = keys.privateKey
  const address =  AschJS.crypto.getAddress(publicKey)
  return { message: address}
})

//分组器调用
//测试   curl -X POST -H "Content-Type: application/json" -k -d '{"B_WT4_V1_ID": 54950188,"DISEASE_CODE": "Z51.103","AGE": 62,"GENDER": "男","SF0100": -1,"SF0102": -1,"SF0104": -1,"SF0108": 1,"ACCTUAL_DAYS": 1,"TOTAL_EXPENSE": 12538.92,"diags_code": ["C20xx01","C77.901","C78.001","C78.701","Z22.501"],"opers_code": ["89.54001","99.25020"]}' http://127.0.0.1:4096/api/dapps/dapp/drgserver
app.route.post('/drgserver',  async function (req) {
  //作为调用分组使用
  let response = await request
                         .post('139.129.165.56:3001/comp_drg')
                         .send(req.query)
                         .set('Content-Type','application/json')
  //判定分组是否失败
  if(response['text'].error){
    return {info: "分组失败,没有产生交易", success: false}
  }else{
    //费用
    const fee = String(0.1 * 100000000);
    const type = 3;
    //每次交易1,A8QCwz5Vs77UGX9YqBg9kJ6AZmsXQBC8vj为创世账号地址
    const options = {fee: fee, type: type, args: '["XAS", "100000000", "A8QCwz5Vs77UGX9YqBg9kJ6AZmsXQBC8vj"]'};
    //调用分组传来的账号
    const secret = req.query["secret"];
    const transaction = AschJS.dapp.createInnerTransaction(options, secret);
    //调用dapp内交易
    let response = await request
                .put('127.0.0.1:4096/api/dapps/27d0d9176c51e3b9406e39a88b4fec3a71af06bbfbda4964579d2e38b58019d1/transactions/signed')
                .set('Content-Type','application/json')
                .set('magic', '594fe0f3')
                .set('version','')
                .set('accept', 'json')
                .send({"transaction": transaction})
                .set('Content-Type','application/json')
    if(JSON.parse(response['text']).success){
      return {info: "分组成功,交易成功", success: true}
    }else{
      return {info: "分组成功,交易失败,余额不足", success: false}
    }
  }
})
