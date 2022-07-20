---
title: git多账号配置
date: 2022-07-19
---

## 场景
在公司可能会遇到多个git账号同时使用的问题，可能公司用gitlab账号提交公司代码，自己又要使用github或者其他账号提交自己的一些代码，这样就需要对git进行多账号配置了

## 解决方案
通过配置多个ssh对不同类型的账号进行管理

## 方法步骤
比如公司用gitlab账号，自己使用gitee账号
1. 清理全局账号配置

```bash
git config --global --unset user.name 
git config --global --unset user.email
```
2. 进入C盘的用户文件夹内的.ssh文件夹，删除其中的文件，如果没有.ssh文件夹就新建一个

3. 在.ssh内打开终端，执行以下命令

```bash
ssh-keygen -t rsa -C "你的邮箱地址"
```
之后会提示要求输入生成的文件名，可以以下划线做区分，如id_rsa_gitlab

等到执行完，专属于gitlab的公钥密钥对就生成完毕了

4. 在相应的网站上设置你的公钥并保存

5. 拉取项目代码并在目录中打开终端

6. 在相应的项目中配置你的local环境账号名与e-mail

```bash
git config --local user.name "xxxx"
git config --local user.email "xxxx"
```