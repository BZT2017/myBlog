import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  "/life/": [
    {
      text: "life",
      children: [
        "/life/happyTime.md",
        "/life/share.md",
        "/life/emo.md",
      ]
    },
  ],
  "/program/":[
    {
      text: "算法",
      children: [
        "/program/algorithm.md",
      ]
    },
    {
      text: "设计模式",
      children: [
        "/program/designPattern.md",
      ]
    },
    {
      text: "命令行",
      children: [
        "/program/commands/git.md",
        "/program/commands/npm.md",
        "/program/commands/nvm.md",
        "/program/commands/yarn.md",
      ]
    },
  ],
  "/interview/": [
    {
      text: "前端基础",
      children: [
        "/interview/base/初级.md",
        "/interview/base/中级.md",
        "/interview/base/高级.md",
      ]
    },
    {
      text: "vue",
      children: [
        "/interview/vue.md",
      ]
    },
  ],
}