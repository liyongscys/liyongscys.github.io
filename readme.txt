

git submodule update --init --recursive

清除掉缓存在git中的用户名和密码
git credential-manager uninstall

 
查看持久化存储的方式
git config --list | grep credential 
git config --global credential.helper wincred

git submodule update --remote blog

node node_modules/gh-pages/bin/gh-pages.js -d dist