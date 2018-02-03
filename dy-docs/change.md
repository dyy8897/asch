#### 2018-02-03
##### 在dy-dapps/common/项目下，引入cutestrap.css，用vue改写事件调用，数据绑定还没有做。

#### 2018-02-02
##### 修改dapp的category的maximum限制,支持9-游戏的注册应用
##### 新建dy-dapps/目录, 使用asch-cli工具创建了9种分类的dapp的框架代码, 但其实都是一样的.
##### 在dy-dapps/common/项目下, 先在public/目录下的前端开发中引入vue, 先混合使用jquery和vue, 将jquery的ajax加入到Vue对象中,vue对象里的this.$ajax就相当于是jquery的$.ajax

#### 2018-02-01
##### 去除对于生成区块的时间间隔的限制
在core/transport.js的private.attachApi方法的router.post("/transactions", ...)，加入《去除生成区块的时间间隔限制》，注释掉判断时间间隔的代码。
##### 修改网络投票的判断规则
在base/consensus.js的Consensus.prototype.hasEnoughVotes方法中，加入《todo:这里应该获取当前连接的peer数量，现在先写7》，原判断是大于2/3的代理人数量，现改为大于2/3的节点数量。因为开发用10个虚拟机，所以先写固定值7。
##### 没有交易的区块不发起投票
在core/block.js的Blocks.prototype.generateBlock方法中，加入《没有交易的block不发起投票，目的是不生成没有交易的block》，判断block.numberOfTransactions==0则返回。

#### 2018-01-31
##### 修改代理人（矿工）的设置
在core/delegates.js的private.loadMyDelegates方法中，加入《将101个config中设定的矿工分配到10个docker虚拟机上》
##### 修改移除节点的代码
在core/peer.js的Peer.prototype.remove方法中，加入《pip传入undefined，导致下面的sql执行报错，添加if(pip)的判断》
##### 解除publicIp对节点投票的限制
在app.js的function main方法中，注释掉加入种子节点的方法。
在init.js的function getPublicIp方法中，加入《如果没有公网IP，就用docker虚拟机IP代替》

#### 2018-01-30
##### 建立本机开发环境
在dy-docker/加入dockerFile文件。
在dy-init/加入docker运行脚本
##### 添加客户端测试代码
在dy-test/加入客户端测试代码