const IntervalCache = require('./lib/interval-cache')

module.exports = async function () {
  console.log('enter dapp init')
  // 在interface/下的文件中,用asch-js调用dapp的自定义合约
  // AschJS.dapp.createInnerTransaction(options, secret)
  // var type = 2000; // 这里的type指的是合约标号,就是下面的2000,2001,1000,1001等等
  app.registerContract(2000, 'domain.register')
  app.registerContract(2001, 'domain.set_ip')

  app.registerContract(1000, 'cctime.postArticle')
  app.registerContract(1001, 'cctime.postComment')
  app.registerContract(1002, 'cctime.voteArticle')
  app.registerContract(1003, 'cctime.likeComment')
  app.registerContract(1004, 'cctime.report')
  app.registerContract(1005, 'drgserver.comp')

  app.setDefaultFee('10000000', 'CCTime.XCT')

  app.custom.cache = new IntervalCache(10 * 1000)

  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}
