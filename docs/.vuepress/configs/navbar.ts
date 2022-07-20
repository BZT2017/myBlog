import type { NavbarConfig } from "vuepress-theme-gungnir";

export const zh: NavbarConfig = [
  {
    text: "首页",
    link: "/",
    icon: "gi-tiger-head"
  },
  {
    text: "life",
    icon: "gi-cool-spices",
    children: [
      {
        text: "欢乐时光",
        link: "/life/happyTime.md",
        icon: "bi-joystick"
      },
      {
        text: "emo",
        link: "/life/emo.md",
        icon: "bi-cloud-rain-fill"
      },
      {
        text: "分享",
        link: "/life/share/mini-skate.md",
        icon: "gi-clover"
      },
    ]
  },
  {
    text: "编程",
    icon: "bi-code-slash",
    children: [
      {
        text: "算法",
        link: "/program/algorithm.md",
        icon: "si-thealgorithms"
      },
      {
        text: "设计模式",
        link: "/program/designPattern.md",
        icon: "gi-gear-stick-pattern",
      },
      {
        text: "常用命令行",
        link: "/program/commands/git.md",
        icon: "fc-command-line"
      },
    ]
  },
  {
    text: "团队协作",
    icon: "si-thealgorithms",
    children: [
      {
        text: "编码规范",
        link: "/team/codingStandard.md",  
        icon: "bi-code-slash",
      },
      {
        text: "持续集成与持续部署",
        link: "/team/ci-cd/ci-cd.md",  
        icon: "bi-code-slash",
      },
    ]
  },
  {
    text: "知识点",
    icon: "bi-signpost-2",
    children: [
      {
        text: "前端开发",
        link: "/interview/base/初级.md",
        icon: "vi-file-type-js-official",
      },
      {
        text: "vue",
        link: "/interview/vue.md",
        icon: "vi-file-type-vue",
      },
      {
        text: "typescript",
        link: "/interview/typescript.md",
        icon: "vi-file-type-typescript-official",
      },
      {
        text: "webpack",
        link: "/interview/webpack.md",
        icon: "vi-file-type-webpack",
      },
    ]
  },
  {
    text: "常用工具",
    icon: "la-toolbox-solid",
    children: [
      {
        text: "lodash",
        link: "https://www.lodashjs.com/",
        icon: "si-lodash"
      },
      {
        text: "DNS解析",
        link: "https://www.ipaddress.com/",
        icon: ""
      },
    ]
  }
];