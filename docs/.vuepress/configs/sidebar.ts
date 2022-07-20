import type { SidebarConfig } from "vuepress-theme-gungnir";

export const zh: SidebarConfig = {
  "/life/": [
    {
      text: "分享",
      children: [
        "/life/share/mini-skate.md",
        "/life/share/picgo.md",
        "/life/share/vuePress.md",
        "/life/share/gitMultipleAccounts.md",
        "/life/share/chrome-plugin.md",
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
  "/interview/base": [
    {
      text: "前端基础",
      children: [
        "/interview/base/初级.md",
        "/interview/base/中级.md",
        "/interview/base/高级.md",
      ]
    },
  ],
  "/interview/vue": [
    {
      text: "vue",
      children: [
        "/interview/vue.md",
      ]
    },
  ],
  "/interview/webpack": [
    {
      text: "webpack",
      children: [
        "/interview/webpack.md",
      ]
    },
  ],
  "/interview/typescript": [
    {
      text: "typescript",
      children: [
        "/interview/typescript.md",
      ]
    },
  ],
  "/team/": [
    {
      text: "持续集成与持续部署",
      children: [
        "/team/ci-cd/ci-cd.md",
        "/team/ci-cd/git-flow.md",
        "/team/ci-cd/jenkins.md",
      ]
    },
    {
      text: "编码规范",
      children: [
        "/team/codingStandard.md",
      ]
    },
  ],
}