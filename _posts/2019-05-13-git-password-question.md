---
layout: post
author: hertz
categories: [Blog, Tutorial]
tags: [yarn, nvm, node]
excerpt: Initialize website information
previewimg: /yoyoyo/assets/images/wxmp.png
image: /yoyoyo/assets/images/wxmp.png
---
# 解决git操作时强制输入用户名密码的问题
- 首先进入自己项目的根目录
- 输入下面的命令
```bash
git config --global credential.helper store
```
- 再一次输入要执行的git操作（第一次需要输入密码，以后就不需要了）