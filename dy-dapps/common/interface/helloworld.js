const AschJS = require('asch-js');
app.route.get('/hello',  async function (req) {
  const secret = "tourist fabric genius organ inherit soft awkward pool boy police awake genius"
  console.log(secret)
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