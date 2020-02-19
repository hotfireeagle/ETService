### 1.功能概述

基于express + typescript + typeORM所搭建的后端系统，基本功能为：对待办事项进行CRUD操作．

### 2.该如何运行

```bash
npm i #安装依赖
```
### 3.遇到的问题

+ 1.项目使用了husky来提供一个git的hooks处理，已经按照官网的说明文档对package.json进行配置了，但是并不起作用．后面一直debug，查看了一下隐藏目录git中并不存在hooks文件，这是果，那么是因为什么引起的呢？后面猜测是因为先使用husky进行hook配置，但是此时本地还不存在git仓库所导致的问题．决定试验一番：先卸载本地的husky，在安装一些husky．发现的确是因为这个问题．所以：**在配置husky之前记得确保本地就已经是一个git仓库了．**

### 4.代办事项
+ 1.进行代码提交之前需要检查一下ormconfig.json文件里面是否有密码配置数据，如果有的话，那么进行push，避免你的密码泄漏到了线上环境．

### 5.学到的东西
+ 1.如果想要在你的typescript项目里面引用json模块的话，那么需要配置tsconfig.json文件，开启resolveJsonModule的值为true.