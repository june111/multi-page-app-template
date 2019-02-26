# vue-multi-page-template  [![Vue](https://img.shields.io/badge/vue-2.5.17-brightgreen.svg)](https://github.com/vuejs/vue) 

English | [简体中文](./README.zh-CN.md)

## Introduction

Change the SAP built by VUE-ClI 2.x to a multi-page application. There are three pages: home page, test page and single page without routing. If you want to add new pages, copy the folder corresponding to the requirements under src/views, and then change the file name to the target name.

Demo tutorial available at [VUE 单页面改造为多页面](https://june111.github.io/2019/02/22/spa-to-multiple-pages)

## Features    

* Add folders to create new pages without modifying configuration files
* Vue-i18n for Internationalization 
* Compatibility with Android 4.4 with babel-polyfill
* Code analysis for later optimization

## Author

**June** -> [email](mailto:ru-q-ur@163.com)

## Getting started
```bash
# Installing
npm install
# Compiles and hot-reloads for development
npm run dev
```
App will be running at: 

Homepage (history mode)

* [http://localhost:8080/ ](http://localhost:8080/ )
* [http://localhost:8080/test](http://localhost:8080/test)

Test page (hash mode)

* [http://localhost:8080/test.html#/](http://localhost:8080/test.html#/)
* [http://localhost:8080/test.html#/test](http://localhost:8080/test.html#/test)

Single page without routing (No router)

* [http://localhost:8080/single.html](http://localhost:8080/single.html)

## Build 
```bash
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


