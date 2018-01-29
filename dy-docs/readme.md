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
    浏览器打开 http://127.0.0.1:4096/
    使用创世帐号登录（12个英文单词组成的口令字符串）
        someone manual strong movie roof episode eight spatial brown soldier soup motor

## 使用docker建立本机的联盟链开发环境
    cd dy-docker/
    docker build -t asch  .
    docker images

    cd asch/dy-init/
    drun
    docker ps -a
    以后就是
    dstart
    dstop






