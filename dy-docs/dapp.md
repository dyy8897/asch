## 进入开发模式
启动asch服务, 将dy-dapps/目录改名为dapps/, 浏览器打开,在应用中心-已安装应用列表中找到待开发应用的ID, 将dapps/目录下的对应目录改名为那个ID.

退出开发时, 将dapps/目录下的对应目录名改回来, 一般都是与dapp.json文件中的name属性一致, 最后在将dapps/目录改回dy-dapps/目录.

## public下的前端开发
先混合使用jquery和vue, 将jquery的ajax加入到Vue对象中,vue对象里的this.$ajax就相当于是jquery的$.ajax
    
