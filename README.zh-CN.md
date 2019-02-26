# 多页面应用模板 [![Vue](https://img.shields.io/badge/vue-2.5.17-brightgreen.svg)](https://github.com/vuejs/vue)

[English](./README.md) | 简体中文

## 介绍

把 VUE-ClI 2.x 构建的 SAP 改为多页面应用。写了两个页面：主页和测试页。新增页面的话，复制 src/views/test 文件夹，然后把 test 改为目标名称即可。

demo 教程：[VUE 单页面改造为多页面](https://june111.github.io/2019/02/22/spa-to-multiple-pages)

## 特性    

* 添加文件夹即为新建页面，不用修改配置文件
* 国际化用 vue-i18n 
* 用 babel-polyfill 兼容安卓4.4
* 代码分析，方便后期优化

## 作者

**June** -> [email](mailto:ru-q-ur@163.com)

## 开发
```bash
npm i # 下载依赖
npm run start #开发
```

浏览器访问：

主页
* [http://localhost:8080/ ](http://localhost:8080/ )
* [http://localhost:8080/test](http://localhost:8080/test)

测试页：[http://localhost:8080/test.html](http://localhost:8080/test.html)

## 发布
```bash
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



