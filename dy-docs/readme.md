## fork后跟踪原仓库
    git remote -v
    git remote add upstream https://github.com/AschPlatform/asch
    git fetch upstream
    git checkout master
    git merge upstream/master
    git push origin master

## ubuntu16.04建立开发环境
    sudo apt-get install curl sqlite3 ntp wget git libssl-dev openssl make gcc g++ autoconf automake python build-essential -y
    sudo apt-get install libtool libtool-bin -y
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

    export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

    nvm install v8
    node --version

    npm install -g gulp
    npm install -g bower

    cd asch/
    npm install

    cd asch/public/
    npm install
    bower install
    gulp build-main
    或者
    gulp build-test
    
    cd asch/
    node app.js
    注意:这样启动的是test版本,所以上面要用gulp build-test生成test版本的客户端,否则客户端的转账等post的功能不可用.
    浏览器打开 http://127.0.0.1:4096/
    使用创世帐号登录（12个英文单词组成的口令字符串）
        someone manual strong movie roof episode eight spatial brown soldier soup motor

## 使用docker建立本机的联盟链开发环境
    注意：config.json文件中的forging下的secret里的帐号被分配到9个虚拟机上！

    cd dy-docker/
    docker build -t asch  .
    docker images

    cd asch/dy-init/
    ./drun
    docker ps -a

    以后就是
    ./dstart
    ./dstop

    进入docker容器
    docker attach asch1

    使用代理人(矿工)登录
      aware rabbit syrup expose visa list pause shuffle lunch audit exchange wrong

      early sugar cannon mansion expose tunnel piece manual destroy exhaust helmet rather

      alter art sick gallery equal voice bunker sauce claw tourist twice essay

      pigeon chalk mother east harbor enlist busy parrot dune humble faith thought

      raise cloud royal wonder cradle job gate wife depth device bitter hope

      quarter predict civil guide attend chunk negative wheel rapid arm unfair rookie

      ceiling hair stick remember school agree reunion typical before ridge shy laugh

      steak turn suffer banner hope pretty angle exclude leg betray matter sweet

      regular eagle edge voice armor job purity alter genre soap embark chapter
      
      rubber paper menu pony able gather upon leaf pill pipe peace mad

## 侧链应用的开发，安装 asch-cli 工具
    npm install -g asch-cli
    如果没有权限，并且sudo也不行，那就cd /home/hitb/.nvm/versions/node/v8.9.4/lib/node_modules/
    然后 npm install asch-cli

## 本机Dapp的注册，获得dapp在主链上注册应用的id
    把正在开发的dapp注册应用到asch主链上，在dy-dapps/common/目录下执行
    asch-cli registerdapp -f dapp.json -e "someone manual strong movie roof episode eight spatial brown soldier soup motor"

    注册后，在应用中心的应用列表中可以看到，后面安装需要那个ID。

    浏览器打开 http://localhost:4096/api/dapps/get?id=那个ID

## 本机Dapp的安装，就是把项目拷贝到asch/dapp/下，并改名为注册应用的那个ID
    把dy-dapps/common/的文件夹拷贝到asch/dapp/下，并将文件夹名称改为dapp的那个ID，
    拷贝并改名后，在应用中心的已安装应用列表中可以看到。
    重启asch服务

## 使用Dapp的模板创建新项目
    asch-cli crypto -g 生成5个代理人（矿工）帐号
    [ { address: 'A7zGZ1YqHXahdh7rWG1NLMcKY5TkeE6QaR',
    secret: 'engage remind spin swap avocado combine toss donor parrot crane cute cruel',
    publicKey: 'bea68bf8e132bc3c9c9be655e094570b93b9ee80553d4c8f9a9847530c6f3726' },  { address: 'AEa5MDyAEndqY7sSQWuHT1MYABx5DqhG6G',
    secret: 'broccoli path skin wide shiver rice sentence jaguar swear elbow hard indoor',
    publicKey: '9ca91c19be85f446d71d9a9de72fa7136dc35fa0e3e305c2293d37c8bd04c415' },  { address: 'ABgTiA81p6A6j2rHDE8zmLMHAkyjDdQJP8',
    secret: 'crucial mirror crane brave juice betray chat exile exact phrase rack rent',
    publicKey: '049dce54fada64a5647435be76086a5948a2004b00a243b360e84acfee42d252' },  { address: 'APuMAGi6Ysq3thV58AZXh79iEUwdmEHNmj',
    secret: 'plastic nephew winter shallow disagree laundry average exist tired once drift inherit',
    publicKey: 'fae71f1f7c5bb4e9f62e1426f3ec285dd92ad63a6a6b2ab03eb4d5f8db21c867' },  { address: 'ACQ5U5tBhHFdF8BvN3Hi8BeoQFphiVQkDV',
    secret: 'tourist fabric genius organ inherit soft awkward pool boy police awake genius',
    publicKey: '9122ea60a6e2309feecf9d477662a5d0c32f537db27fdb0661743c9f53224509' } ]

    mkdir dy-dapps/common/
    cd dy-dapps/common/
    asch-cli dapps -a 使用dapp模板创建新项目的框架代码

    输入5个代理人的公钥
    049dce54fada64a5647435be76086a5948a2004b00a243b360e84acfee42d252,bea68bf8e132bc3c9c9be655e094570b93b9ee80553d4c8f9a9847530c6f3726,9ca91c19be85f446d71d9a9de72fa7136dc35fa0e3e305c2293d37c8bd04c415,fae71f1f7c5bb4e9f62e1426f3ec285dd92ad63a6a6b2ab03eb4d5f8db21c867,9122ea60a6e2309feecf9d477662a5d0c32f537db27fdb0661743c9f53224509

    输入创世帐号
    someone manual strong movie roof episode eight spatial brown soldier soup motor

    把5个代理人的口令写到新创建项目下的config.json文件中
    [
        "engage remind spin swap avocado combine toss donor parrot crane cute cruel",
        "broccoli path skin wide shiver rice sentence jaguar swear elbow hard indoor",
        "crucial mirror crane brave juice betray chat exile exact phrase rack rent",
        "plastic nephew winter shallow disagree laundry average exist tired once drift inherit",
        "tourist fabric genius organ inherit soft awkward pool boy police awake genius"
    ]




