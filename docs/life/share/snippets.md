---
title: vscode常用代码片段
date: 2022-07-21
---

文件 -> 首选项 -> 配置用户代码片段

## vue基础片段
```json
// vue.json文件
{
	"Print to console": {
		"prefix": "vue",
		"body": [
			"<template>",
			"  <div>",
			"    $1",
			"  </div>",
			"</template>",
			"<script>",
			"//import  from ",
			"export default {",
			"  components: {},",
			"  props: {},",
			"  computed: {},",
			"  data() {",
			"    return {",
			"      ",
			"    }",
			"  },",
			"  created() {},",
			"  created() {},",
			"  methods: {},",
			"}",
			"</script>",
			"<style lang='less' scoped>",
			"",
			"</style>",
		],
		"description": ""
	}
}
```