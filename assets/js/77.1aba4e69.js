(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{191:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_011-解释一下async-await的运行机制。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_011-解释一下async-await的运行机制。","aria-hidden":"true"}},[t._v("#")]),t._v(" 011: 解释一下async/await的运行机制。")]),t._v(" "),a("p",[a("code",[t._v("async/await")]),t._v("被称为 JS 中"),a("strong",[t._v("异步终极解决方案")]),t._v("。它既能够像 co + Generator 一样用同步的方式来书写异步代码，又得到底层的语法支持，无需借助任何第三方库。接下来，我们从原理的角度来重新审视这个语法糖背后究竟做了些什么。")]),t._v(" "),a("h2",{attrs:{id:"async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async","aria-hidden":"true"}},[t._v("#")]),t._v(" async")]),t._v(" "),a("p",[t._v("什么是 async ?")]),t._v(" "),a("blockquote",[a("p",[t._v("MDN 的定义: async 是一个通过异步执行并隐式返回 Promise 作为结果的函数。")])]),t._v(" "),a("p",[t._v("注意重点: "),a("strong",[t._v("返回结果为Promise")]),t._v("。")]),t._v(" "),a("p",[t._v("举个例子:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise {<resolved>: 100}")]),t._v("\n")])])]),a("p",[t._v("这就是隐式返回 Promise 的效果。")]),t._v(" "),a("h2",{attrs:{id:"await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#await","aria-hidden":"true"}},[t._v("#")]),t._v(" await")]),t._v(" "),a("p",[t._v("我们来看看 "),a("code",[t._v("await")]),t._v("做了些什么事情。")]),t._v(" "),a("p",[t._v("以一段代码为例:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们来分析一下这段程序。首先代码同步执行，打印出"),a("code",[t._v("0")]),t._v("，然后将"),a("code",[t._v("test")]),t._v("压入执行栈，打印出"),a("code",[t._v("100")]),t._v(", 下面注意了，遇到了关键角色"),a("strong",[t._v("await")]),t._v("。")]),t._v(" "),a("p",[t._v("放个慢镜头:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("被 JS 引擎转换成一个 Promise :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里调用了 resolve，resolve的任务进入微任务队列。")]),t._v(" "),a("p",[t._v("然后，JS 引擎将暂停当前协程的运行，把线程的执行权交给"),a("code",[t._v("父协程")]),t._v("(父协程不懂是什么的，上上篇才讲，回去补课)。")]),t._v(" "),a("p",[t._v("回到父协程中，父协程的第一件事情就是对"),a("code",[t._v("await")]),t._v("返回的"),a("code",[t._v("Promise")]),t._v("调用"),a("code",[t._v("then")]),t._v(", 来监听这个 Promise 的状态改变 。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相关逻辑，在resolve 执行之后来调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("然后往下执行，打印出"),a("code",[t._v("300")]),t._v("。")]),t._v(" "),a("p",[t._v("根据"),a("code",[t._v("EventLoop")]),t._v("机制，当前主线程的宏任务完成，现在检查"),a("code",[t._v("微任务队列")]),t._v(", 发现还有一个Promise的 resolve，执行，现在父协程在"),a("code",[t._v("then")]),t._v("中传入的回调执行。我们来看看这个回调具体做的是什么。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 将线程的执行权交给test协程")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 把 value 值传递给 test 协程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Ok, 现在执行权到了"),a("code",[t._v("test协程")]),t._v("手上，test 接收到"),a("code",[t._v("父协程")]),t._v("传来的"),a("strong",[t._v("200")]),t._v(", 赋值给 a ,然后依次执行后面的语句，打印"),a("code",[t._v("200")]),t._v("、"),a("code",[t._v("200")]),t._v("。")]),t._v(" "),a("p",[t._v("最后的输出为:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n")])])]),a("p",[t._v("总结一下，"),a("code",[t._v("async/await")]),t._v("利用"),a("code",[t._v("协程")]),t._v("和"),a("code",[t._v("Promise")]),t._v("实现了同步方式编写异步代码的效果，其中"),a("code",[t._v("Generator")]),t._v("是对"),a("code",[t._v("协程")]),t._v("的一种实现，虽然语法简单，但引擎在背后做了大量的工作，我们也对这些工作做了一一的拆解。用"),a("code",[t._v("async/await")]),t._v("写出的代码也更加优雅、美观，相比于之前的"),a("code",[t._v("Promise")]),t._v("不断调用then的方式，语义化更加明显，相比于"),a("code",[t._v("co + Generator")]),t._v("性能更高，上手成本也更低，不愧是JS异步终极解决方案！")])])}],!1,null,null,null);s.default=e.exports}}]);