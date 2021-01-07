## mysql安装 for Linux
#### 1home目录下新建安装包存放位置
```
cd home
mkdir lnmp
cd /home/lnmp
```
#### 2检查是否已经过mysql，新买的服务器未安装过mysql直接略过
```
yum list installed | grep mysql
```
注意：如果已安装,则清除
```
yum -y remove mysql-libs.x86_64
```
#### 3下载mysql5.7 rpm源
```
wget http://repo.mysql.com/mysql57-community-release-el7-8.noarch.rpm
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a38c58990?w=1342&h=274&f=png&s=29400" width="800" />
</div>

#### 4安装下载好的rpm包
```
rpm -ivh mysql57-community-release-el7-8.noarch.rpm
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a38dd5482?w=1179&h=119&f=png&s=14753" width="800" />
</div>

安装成功后，会在/etc/yum.repos.d/目录下增加了以下两个文件
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a45adbd8b?w=748&h=140&f=png&s=13488" width="800" />
</div>

#### 5安装mysql，发现提示，y到底
```
yum install mysql-server
```

#### 6查看下mysql的版本，确定是否安装成功
```
mysql -V
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a4532abad?w=1060&h=80&f=png&s=8886" width="800" />
</div>

#### 7运行mysql
```
service mysqld start
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a455c45a1?w=957&h=81&f=png&s=7256" width="800" />
</div>

#### 8取得mysql初始化随机密码
```
grep "password" /var/log/mysqld.log
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a45848205?w=1156&h=79&f=png&s=10775" width="800" />
</div>

#### 9登录mysql
```
mysql -u root -p
粘贴密码
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a69b0853e?w=1019&h=326&f=png&s=23474" width="800" />
</div>

#### 10更改root密码
```
SET PASSWORD = PASSWORD('你的新密码');   （“需要带数字，大写字母，小写字母，特殊符号”）
ALTER USER 'root'@'localhost' PASSWORD EXPIRE NEVER;  ("密码永不过期")
flush privileges; ("刷新MySQL的系统权限相关表")
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a6e8021b1?w=970&h=243&f=png&s=16754" width="800" />
</div>

根据个人需求,设置数据库用户在所有ip下以及在本地可访问,以下用root用户做演示
```
grant all privileges on *.* to root@"%" identified by "你的密码";
grant all privileges on *.* to root@"localhost" identified by "你的密码";
flush privileges;
```
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a6efa9627?w=1165&h=235&f=png&s=18144" width="800" />
</div>

注意：若远程工具连接不上，请用 ```  iptables -F  ```  命令来清除防火墙规则
#### 11桌面客户端登录成功
<div align="left">
    <img src="
https://user-gold-cdn.xitu.io/2019/2/27/1692e28a73214f66?w=1032&h=647&f=png&s=80624" width="800" />
</div>

## 拓展
#### 新建用户
```
CREATE USER 'icare_dev'@'%' IDENTIFIED BY '*********';
```
#### 用户授权
```
添加用户权限： GRANT ALL ON databasename.tablename TO 'icare_dev'@'%';
撤销用户权限： REVOKE ALL ON databasename.tablename TO 'icare_dev'@'%';
删除用户及权限 ：drop user 'icare_dev'@'%';
```
例如 当前数据库下所有的表： GRANT ALL ON icare_dev.* TO 'icare_dev'@'%';

# 最后
- 如果帮到你了,点个star.鼓励一下!
- qq交流群： 424072183   https://jq.qq.com/?_wv=1027&k=5E6XfSx
- github地址：https://github.com/Jasonccj
- 掘金博客地址：https://juejin.im/user/59035c4c61ff4b00669b241f/posts
- 慕课网博客地址:https://www.imooc.com/u/4139837/articles
