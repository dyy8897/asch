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

## 侧链应用Dapp的开发






