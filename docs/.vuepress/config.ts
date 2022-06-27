import { defineUserConfig } from 'vuepress'
import { gungnirTheme } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'zzZT',
  description: '爱睡懒觉的Tiger.',
  head: [['link', { rel: 'icon', type: "image/png",
  sizes: "16x16",href: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/head-icon.png' }]],
  theme: gungnirTheme({
    // 你的主题配置
    navbarTitle: "Tiger.",
    navbar: navbar.zh,
    sidebar: sidebar.zh,
    // 首页
    homeHeaderImages: [
      // 图
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-1.jpg', mask: 'rgba(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-2.png', mask: 'rgba(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-3.jpg', mask: 'rgb(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-4.png', mask: 'rgb(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-5.png', mask: 'rgb(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-6.jpg', mask: 'rgb(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-7.jpg', mask: 'rgb(40, 57, 101, .4)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-8.jpg', mask: 'rgb(251, 170, 152, .2)' },
      { path: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/home-bg-9.jpg', mask: 'rgb(40, 57, 101, .4)' },
    ],
    blogNumPerPage: 20, // 可选：每页的博客数量，默认：10
    // 作者介绍
    personalInfo: {
      name: 'Tiger.', // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      avatar: 'https://cdn.jsdelivr.net/gh/BZT2017/oss-img/avatar.jpg', // 必须：头像，将在首页和移动端侧边栏显示
      description: 'A little tiger who likes to sleep in...', // 必须：个人简介，将在首页显示
      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: 'BZT2017', // Github
        // linkedin: '', // 领英
        // facebook: 'renovamen.zou', // Facebook
        // twitter: 'renovamen_zxh', // 推特
        // zhihu: 'chao-neng-gui-su', // 知乎
        // weibo: 'your-weibo-id', // 新浪微博
        email: '634513456@qq.com', // 邮箱
        // rss: '/rss.xml', // RSS 文件的链接
        // 添加其他的社交平台
        bilibili: {
          // 随便什么名字
          icon: 'ri-bilibili-line', // 社交平台的图标
          link: 'https://www.bilibili.com/', // 主页链接
        },
      },
    },
    markdown: {
      extractHeaders: {
        level: [2, 3, 4, 5],
      },
    },
    // 页面配置
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '吼哇朋友们，这是标签页',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/img/pages-tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      // 链接页配置
      links: {
        // 可选：链接页副标题
        subtitle: '吼哇朋友们，这是链接页',
        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },
    // 页脚配置
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
    catalog: false, // 禁用目录 可选，默认：true
  }),
});
