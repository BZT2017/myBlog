---
title: webpack
date: 2022-07-06
---
![wepback简易流程图](https://cdn.jsdelivr.net/gh/BZT2017/oss-img/202207071835850.png)

## 为什么要使用webpack
上古时代，通过script标签引入的方法会导致以下几个问题

- 作用域问题

  **IIFE方案** 可以解决作用域问题，但是该方案会存在大量无用代码，文件体积过大，导致构建速度与加载效率问题，所以不得不对代码进行拆分

- 代码拆分问题

  **nodejs** 基于 **commonjs** 的方案可以解决代码拆分问题，但是无法在浏览器运行

- 如何让浏览器支持模块

  **browesrify** 与 **requirejs** 的方案可以使类似commonjs运行在浏览器内，但是使用起来对比commonjs不够简洁

  **esmodule** 是es提出的规范，专门用来做模块管理，但这种方案对浏览器的支持不够完整

 
## 竞品 
 - **parcel**

   如果你想构建简单的应用并让他快速的运行起来

 - **rollup**

   如果你想构建一个类库并集成很少的第三方库

   
 - **vite**

   本地构建速度极快，开发编译速度快，热更新体验丝滑


## webPack配置

```javascript
// webpack.config.js文件
const path= require('path')
module.exports = {
  // 入口文件
  entey: '.src/index.js',
  // 输出配置
  output:{
    filename: 'bundle.js',
    // 输出文件路径
    path: path.resolve(__dirname,'./dist'),
    // 清理dist文件
    clean: true

  },
  mode: {
    ...
  }
// 非必须定义
  // 开发环境
  devtool: 'inline-source-map',
  // 插件配置
  plugins:[

  ]
}

```

## webpack常用插件
帮助webpack在编译过程中处理某些特定任务的工具，如打包优化、资源管理等等
- Community
  社区的插件

- Webpack
  内置插件

- Webpack Contrib
  第三方插件

## webpack-dev-server
用来实行代码热更行的工具

:::warning
不会输出任何物理文件，只是把webpack输出的dist文件放入了内存
:::

- 配置
  ```javascript
  // webpack.config.js文件
  module.exports = {
    ...
    devServer:{
      // 将启动的服务器地址指向本地的dist目录下
      static: './dist'
    }
  }

  ```

## 资源模块
项目中使用**esmodule**引入

配置资源的输出路径
```javascript
// webpack.config.js文件
module.exports = {
  ...
  output:{
    ...
    // 资源模块输出文件路径&文件名
    // [contenthash] 表示使用文件内容自动生成文件名
    // [ext] 表示使用文件自己的扩展名
    assetModuleFilename: '<路径>/[contenthash].[ext]'
  },
}

```
:::warning
 **output** 内设置的资源输出规则优先级小于在 **rule --> generator** 内设置的优先级
:::


### asset/resource
表示该资源导出类型为**url**的格式,可加载字体文件

  ```javascript {11-14}
  // webpack.config.js文件
  module.exports = {
    ...
    mode:{
      rule: [
        ...
        {
          // 正则匹配
          test: /\.png$/,
          type: 'asset/resource',
          // 设置输出资源的规则，优先级大于output
          generator: {
            filename: '<路径>/[contenthash].[ext]'
          }
        },
        {
          // 还可以加载字体
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        }
      ]
    }
  }
  ```
  输入结果为：
  ```html
  <img src="http://xxxxxxxxxxxx.png">
  ```

### asset/inline
表示该资源导出类型为**base64**格式

```javascript
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.svg$/,
        type: 'asset/inline'
      }
    ]
  }
}

```
输入结果为：
```html
<img src="data:image/svg+xml;base64,xxxxxxxxxxx">
```

### asset/source
表示该资源导出类型为**源代码**

```javascript
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.text$/,
        type: 'asset/source'
      }
    ]
  }
}

```

引入text文件并将它写入div内

输入结果为：
```html
<div>xxxxxxxxxxxx</div>
```


### asset
通用资源类型

:::tip
文件**大于8K**将使用**resource**策略，**小于8K**使用**inline**策略

可以通过 **parser.dataUrlCondition.maxSize** 配置该临界值
:::
```javascript {9-14}
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.text$/,
        type: 'asset',
        // 设置临界值
        parser:{
          dataUrlCondition:{
            maxSize: 4 * 1024 // 4M
          }
        }
      }
    ]
  }
}

```


## loaders
为了解析某些文件，例如 **css、xml、cxv**等文件

:::tip
webpack开箱自带的解析器只可以解析**js、json**这样的文件

xml、cxv文件不需要引入可直接配置
:::
1. 安装相应的loader
2. 引入loader
3. 配置loader

    使用方法：
    ```javascript
    // webpack.config.js文件
    module.exports = {
      ...
      mode:{
        rule: [
          ...
          {
            test: /\.text$/,
            // use表示解析.text文件时，在打包前先用raw-loader转化
            use: 'raw-loader'
          }
        ]
      }
    }
    ```

### 加载样式
  
使用前需要先安装less-loader、css-loader、style-loader

```javascript
// webpack.config.js文件
module.exports = {
  ...
  mode:{
    rule: [
      ...
      {
        test: /\.(css|less)$/,
        use: ['style-loader','css-loader','less-loader']
      }
    ]
  }
}
```
:::warning
use为数组时有加载顺序，顺序为**从后往前**,即先加载less-loader,再加载css-loader，最后加载style-loader，调用方式为链式调用

第一个loader会将转化后的结果传递给下一个loader，最后返回一个js供webpack解析
:::

### 抽离 & 压缩css
- 抽离css

  1. 安装 mini-css-extract-plugin
  2. 引入该插件

  该插件会将工程内多个css文件合并为一个css文件，并插入 **< head >** 标签内
  :::warning
  插入head标签的效果得益于 **html-webpack-plugin**
  :::
  

  ```javascript {10-12,19}
  // webpack.config.js文件
  module.exports = {
    ...
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'app.html',
        inject: 'body'
      }),
      new MiniCssExtractPlugin({
        filename: '<路径>/[contenthash].css'
      })
    ],
    mode:{
      rule: [
        ...
        {
          test: /\.(css|less)$/,
          use: [MiniCssExtractPlugin.loader，'style-loader','css-loader','less-loader']
        }
      ]
    }
  }
  ```
- 压缩css

  1. 安装 css-minimizer-webpack-plugin
  2. 引入该插件
  3. 在 (**optimization**) 优化属性内配置
  ```javascript {4-8}
  // webpack.config.js文件
  module.exports = {
    ...
    optimization: {
      minimizer: [
        new CssMinimizerPlugin()
      ]
    }
  }
  ```
  :::warning
  压缩代码时注意，应只在生产环境设置代码压缩，即 mode: 'production'
  :::

### 自定义json模块parser

解析 **yaml、toml、json5** 类型的文件

1. 安装 yaml、toml、json5
2. require 进 webpack.config.js文件
3. 配置解析器

  ```javascript {11-13}
  // webpack.config.js文件
  module.exports = {
    ...
    mode:{
      rule: [
        ...
        {
          // toml、json5与此方法一致
          test: /\.yaml$/,
          type: 'json',
          parser:{
            parse: yaml.parse
          }
        }
      ]
    }
  }
  ```

## babel-loader

- 简介

  babel-loader是用来保证 **ES6** 代码能运行在不同浏览器内的js解析器

- 核心插件

  - babel-loader：在webpack里应用babel解析ES6的桥梁

  - @babel/core： babel核心模块

  - @babel/runtime：babel运行时需要

  - @babel、plugin-transform-runtime: 
  
    该插件会在regeneratorRuntime的地方自动require导包，编译时需要

  - @babel/preset-env：babel预设的一组babel插件集合

  :::tip
  **regeneratorRuntime** 是webpack打包生成的全局辅助函数，由babel生成，用于兼容async/await语法
  :::

- 使用
  1. 安装 babel-loader、@babel/core、@babel/preset-env
  2. 配置loader
    ```javascript {7-17}
    // webpack.config.js文件
    module.exports = {
      ...
      mode:{
        rule: [
          ...
          {
            test: /\.js$/,
            // 设置此loader忽略的文件夹
            exclude: /node_modules/,
            use:{
              loader: 'babel-lodaer',
              options:{
                // 配置预设插件
                presets:['@babel/preset-env']，
                // 配置babel-lodaer的插件
                plugins: [
                  ['@babel/plugin-transform-runtime']
                ]
              }
            }
          }
        ]
      }
    }
    ```


## 代码分离

优点：可以用于获取更小的bundle（打包分离出来的文件），以及控制资源加载的优先级

常用的代码分离方法有3种
1. 入口起点：通过配置entry多个入口文件来进行代码分离
2. 防止重复：
3. 动态引入：

### 入口起点
配置entry
 ```javascript {7-17}
// webpack.config.js文件
module.exports = {
  ...
  entry：{
    index_1: './xxxx/xxxx.js',
    index_2: './xxxx/xxxx.js',
  },
  output:{
    // [name] 可以拿到entry里面的key的值，在此处为index_1和index_2
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,'./dist'),
    clean:true,
    assetModuleFilename: 'imges/[contenthash][ext]'
  }
}
```
打包结果：
```html
<body>
<script defer src="index_1.bundle.js"></script><script defer src="index_2.bundle.js"></script>
</body>
```


:::warning
该方法会将多个入口文件所引用的通用代码库重复打包

例如：index_1中引入了lodash，index_2中也引入lodash，webpack会将两者引入的lodash分别打包到相应的bundle内
:::

### 防止重复



### 动态引入








