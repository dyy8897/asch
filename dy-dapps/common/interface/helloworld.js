const AschJS = require('asch-js');
const request = require('superagent');
const async = require('async');
app.route.get('/hello',  async function (req) {
  const secret = "tourist fabric genius organ inherit soft awkward pool boy police awake genius"
  console.log(secret)
  console.log('sssssssssssdasdasdasdqweqwrqwefsdfd')
  const message = AschJS.crypto.getKeys(secret)
  return { message: 'ssssssss' }
})

app.route.post('/drgserver',  async function (req) {
  data = JSON.stringify(req.query);
  var response = await request
                        .post('127.0.0.1:3002/comp_drg')
                        .send(req.query)
                        .set('Content-Type','application/json')
  return {reports: response["text"]}
})

app.route.put('/ping/:seq',  async function (req) {
  return { pong: Number(req.params.seq) + 1 }
})

app.route.post('/sleep',  async function (req, cb) {
  if (!req.query || !req.query.seconds) {
    throw new Error('Invalid params')
  }
  await new Promise(resolve => setTimeout(resolve, Math.floor(Number(req.query.seconds) * 1000)))
  // return { pong: req }
})


app.route.get('/my_height',  async function (req) {
  let height = await app.model.Comment.findAll({limit: 300, sort: {}})
  return { message: height}
})
