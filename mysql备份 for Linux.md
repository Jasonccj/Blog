# mysql备份for Linux   
## 1.创建数据库备份目录
选择自己想保存的目录,以下目录仅供演示:
```
cd /home
mkdir mysqlData
cd mysqlData
```
## 2.创建备份shell脚本

创建一个mysqlData.sh  ,根据以下情况填写以下内容:  
导出后缀为.sql文件,输入以下内容:
```
mysqldump -uusername -ppassword DatabaseName > /home/backup/DatabaseName_$(date +%Y%m%d_%H%M%S).sql
```

导出压缩包.gz文件,输入以下内容:
```
mysqldump -uusername -ppassword DatabaseName | gzip > /home/backup/DatabaseName_$(date +%Y%m%d_%H%M%S).sql.gz
```
删除多少天前数据库文件压缩包
```
find /home/icareserver/mysqlData -name "icare_dev_*.sql.gz" -type f -mtime +90 -exec rm {} \; > /dev/null 2>&1
```

*提示*  
* 把 username 替换为实际的用户名
* 把 password 替换为实际的密码
* 把 DatabaseName 替换为实际的数据库名

## 3.为脚本文件添加可执行权限
```
chmod u+x mysqlData.sh
```
## 4.利用定时任务执行脚本
执行定时任务需要安装crontab,没安装的请自行安装
```
crontab -e
```

编辑输入以下内容:
```
*/1 * * * * /home/mysqlData/mysqlData.sh  
```
上面的意思是每分钟执行一次脚本.
```
00 0 * * * * /home/mysqlData/mysqlData.sh
```
上面的意思是每天零点执行一次脚本

>* 具体关于crontab时间设置可以访问此[参考链接](https://www.cnblogs.com/intval/p/5763929.html)  

## 5.重启定时任务
```
service crond restart 
```

## 6.查看定时任务实时执行概况
```
tail -f /var/log/cron
```

# 写在最后
- [@Jasonccj](https://github.com/Jasonccj)
- [github](https://github.com/Jasonccj)
- [慕课网博客](https://www.imooc.com/u/4139837/articles)
- [掘金博客](https://juejin.im/user/59035c4c61ff4b00669b241f/posts)
- [QQ交流群:424072183](https://jq.qq.com/?_wv=1027&k=5E6XfSx)

