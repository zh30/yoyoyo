---
layout: post
author: hertz
categories: [Blog, Tutorial]
tags: [hot, init]
excerpt: Initialize website information
previewimg: /yoyoyo/assets/images/wxmp.png
image: /yoyoyo/assets/images/wxmp.png
---
## 函数命名

- "get…" —— 返回值，
- "calc…" —— 计算
- "create…" —— 创建，
- "check…" —— 检查并返回 boolean 值
- "show…" —— 显示。

## 分解函数

```javascript
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

## 函数表达式

- 在代码块的结尾是不需要 ;，像 if { ... }，for { }，function f { } 等语法结构后面都不用加。
- 函数表达式通常这样声明： let sayHi = ...;，作为一个变量。 而不是代码块。不管什么值，建议在语句结尾处建议使用分号 ;。所以这里的分号与函数表达式本身没有任何关系，它只是终止了语句。