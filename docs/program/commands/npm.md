---
title: npm
date: 2022-06-21
---
## 通识
- -D: 安装到本地项目目录
- -g: 全局安装

## 查看已安装的依赖包 全局

npm list -g --depth 0

## 安装指定版本依赖包

npm install npm@8.12.1

## 安装淘宝镜像源

npm config set registry https://registry.npmmirror.com

## 升级最新npm版本
npm install -g npm-windows-upgrade