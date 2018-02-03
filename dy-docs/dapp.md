## 进入开发模式
启动asch服务, 将dy-dapps/目录改名为dapps/, 浏览器打开,在应用中心-已安装应用列表中找到待开发应用的ID, 将dapps/目录下的对应目录改名为那个ID.

退出开发时, 将dapps/目录下的对应目录名改回来, 一般都是与dapp.json文件中的name属性一致, 最后在将dapps/目录改回dy-dapps/目录.

## public下的前端开发
先混合使用jquery和vue, 将jquery的ajax加入到Vue对象中,vue对象里的this.$ajax就相当于是jquery的$.ajax
    
使用cutestrap.css,直接在这个文件中修改.

## 后端服务开发(MVC模式)
model/下的文件定义数据结构,相当于数据库的表结构

interface/下的文件定义自己的web服务REST接口,asch_dapp_default_api中提供了系统自带的web接口.

contract/下的文件定义业务逻辑,使用asch_sdk_api开发(包括数据库操作),在init.js文件中注册,使用asch-js的dapp.createInnerTransaction(options, secret)调用.

