## Java安装 for Linux
查询yum下所有的java版本
```
yum list java*
```
<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/2/27/1692dc599eeb2ba1?w=935&h=828&f=png&s=105765" width="500" />
</div>
安装1.8免费版
```
yum install java-1.8.0-openjdk.x86_64
```
<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/2/27/1692dca0e28934f4?w=1312&h=157&f=png&s=14730" width="500" />
</div>

配置java环境
```
vim etc/profile
i
----粘贴进文件开始---
#set java environment
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.191.b12-1.el7_6.x86_64
JRE_HOME=$JAVA_HOME/jre
CLASS_PATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
export JAVA_HOME JRE_HOME CLASS_PATH PATH
----粘贴进文件结束---
:wq
```
<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/2/27/1692dca0e2b7baae?w=881&h=176&f=png&s=17609" width="500" />
</div>

检测是否已安装
```
java -version
```
<div align="left">
    <img src="https://user-gold-cdn.xitu.io/2019/2/27/1692dca0e2c31fed?w=696&h=98&f=png&s=10374" width="500" />
</div>

# 最后
- 如果帮到你了,点个star.鼓励一下!
- qq交流群： 424072183   https://jq.qq.com/?_wv=1027&k=5E6XfSx
- github地址：https://github.com/Jasonccj
- 掘金博客地址：https://juejin.im/user/59035c4c61ff4b00669b241f/posts
- 慕课网博客地址:https://www.imooc.com/u/4139837/articles
