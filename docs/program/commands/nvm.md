---
title: nvm
date: 2022-06-21
---

## 简介
nvm是nodejs的版本管理工具，解决开发人员需要频繁切换node版本的场景

## 常用指令
- nvm ls  显示已安装版本
- nvm ls available 显示所有node可安装版本
- nvm install x.x.x 安装某node版本
- nvm use x.x.x 切换至已安装的node版本

## 注意事项
1. npm命令报警告

```bash
  npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
```
更新npm到最新版本以解决