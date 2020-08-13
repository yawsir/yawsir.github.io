(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{493:function(s,a,t){s.exports=t.p+"assets/img/CI.c0234f9f.png"},494:function(s,a,t){s.exports=t.p+"assets/img/dir.24497c78.png"},519:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"开发规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[s._v("#")]),s._v(" 开发规范")]),s._v(" "),n("h2",{attrs:{id:"版本规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本规范"}},[s._v("#")]),s._v(" 版本规范")]),s._v(" "),n("p",[s._v("主版本号、次版本号、修订号，如"),n("code",[s._v("1.1.1")]),s._v("\n项目的版本号应该根据某些规则进行迭代, 这里推荐使用语义化版本规范, 通过这个规范，用户可以了解版本变更的影响范围开发规范。规则如下")]),s._v(" "),n("ul",[n("li",[s._v("主版本号: 当你做了不兼容的API修改")]),s._v(" "),n("li",[s._v("次版本号：当你做了向下兼容的功能性新增")]),s._v(" "),n("li",[s._v("修订号：当你做了向下兼容的问题修正")])]),s._v(" "),n("h2",{attrs:{id:"项目构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目构建"}},[s._v("#")]),s._v(" 项目构建")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("umi")])]),s._v(" "),n("h2",{attrs:{id:"发布工作流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布工作流程"}},[s._v("#")]),s._v(" 发布工作流程")]),s._v(" "),n("p",[s._v("pdf")]),s._v(" "),n("h2",{attrs:{id:"持续集成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[s._v("#")]),s._v(" 持续集成")]),s._v(" "),n("p",[n("img",{attrs:{src:t(493),alt:"CI"}})]),s._v(" "),n("p",[s._v("持续集成的好处：")]),s._v(" "),n("ul",[n("li",[s._v("尽早发现错误，快速试错。越早发现错误，处理错误的成本越低。")]),s._v(" "),n("li",[s._v("动化工作流，减少人工干预。人类比机器容易犯错, 而且机器擅长做重复的事情。")])]),s._v(" "),n("h2",{attrs:{id:"目录组织"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录组织"}},[s._v("#")]),s._v(" 目录组织")]),s._v(" "),n("p",[n("img",{attrs:{src:t(494),alt:"dir"}})]),s._v(" "),n("h2",{attrs:{id:"编码规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编码规范"}},[s._v("#")]),s._v(" 编码规范")]),s._v(" "),n("h3",{attrs:{id:"文件规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件规范"}},[s._v("#")]),s._v(" 文件规范")]),s._v(" "),n("ul",[n("li",[s._v("文件夹/文件的命名：统一用驼峰，命名使用英文语义化，禁止使用特殊字符，禁止使用拼音，禁止使用中英文混合！")]),s._v(" "),n("li",[s._v("js、ts 文件命名:   xxx.jsx、xxx.tsx")]),s._v(" "),n("li",[s._v("css文件命名 :  xxx.less, 全局的css除外")]),s._v(" "),n("li",[s._v("Utf-8编码格式")]),s._v(" "),n("li",[s._v("以2个空格缩进")])]),s._v(" "),n("h3",{attrs:{id:"js规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js规范"}},[s._v("#")]),s._v(" js规范")]),s._v(" "),n("ul",[n("li",[s._v("组件、类 :  英文语义化，驼峰命名，首字母大写")]),s._v(" "),n("li",[s._v("函数: 驼峰命名，首字母小写，前缀应当为动词")]),s._v(" "),n("li",[s._v("变量:  驼峰命名，首字母小写，前缀应当为名词")]),s._v(" "),n("li",[s._v("Render内容: 语义化，尽可能减少div的嵌套")]),s._v(" "),n("li",[s._v("Lint工具:  ESList- 目前是社区最流行的、通用的Javascript Lint工具，Lint界的Babel。支持定制插件、preset。")])]),s._v(" "),n("h3",{attrs:{id:"css规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css规范"}},[s._v("#")]),s._v(" css规范")]),s._v(" "),n("ul",[n("li",[s._v("使用语义化，通用的命名方式，尽量反映元素用途和目的")]),s._v(" "),n("li",[s._v("驼峰命名")]),s._v(" "),n("li",[s._v("避免选择器嵌套过多，尽量少于3级")]),s._v(" "),n("li",[s._v("颜色，字体尽量通过theme文件设置主题色，字体等通用的css设置Render内容: 语义化，尽可能减少div的嵌套")])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("ul",[n("li",[s._v("不要轻易改动全局的CSS和通用CSS，改动后，要经过全面测试")]),s._v(" "),n("li",[s._v("无用的css代码删除")]),s._v(" "),n("li",[s._v("更改antd的样式，需要在自定义的样式中，避免影响其他功能显示")])])]),s._v(" "),n("h4",{attrs:{id:"尽量反映元素的用途和目的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尽量反映元素的用途和目的"}},[s._v("#")]),s._v(" 尽量反映元素的用途和目的")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* bad */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".red")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #f00"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* good */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".important")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #f00"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"尽量使用缩写属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尽量使用缩写属性"}},[s._v("#")]),s._v(" 尽量使用缩写属性")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* bad */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".nav")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* good */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".important")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h4",{attrs:{id:"避免使用标签名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免使用标签名"}},[s._v("#")]),s._v(" 避免使用标签名")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* bad */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".header div")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* good */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".header .logo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"_0后面不带单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0后面不带单位"}},[s._v("#")]),s._v(" 0后面不带单位")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* bad */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* good */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".nav")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"_16进制颜色代码缩写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_16进制颜色代码缩写"}},[s._v("#")]),s._v(" 16进制颜色代码缩写")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* bad */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333333"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* good */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #333"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"去掉小数点前的0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去掉小数点前的0"}},[s._v("#")]),s._v(" 去掉小数点前的0")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* bad */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.8rem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* good */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .8rem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"注释规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注释规范"}},[s._v("#")]),s._v(" 注释规范")]),s._v(" "),n("ul",[n("li",[s._v("html注释: 注释格式如下, 只能在注释的始末位置,不可置入注释文字区域;请务必要分开注释的文字（即注释文字中加空格)。"),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 头部 --\x3e")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- //头部 --\x3e")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[s._v("css注释: 注释格式如下;"),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* */")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[s._v("JavaScript注释: 注释格式如下"),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这儿是单行注释")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* \n  多行\n  注释\n */")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("务必添加注释列表\n公共组件使用说明\n各组件中重要函数或者类说明\n复杂的业务逻辑处理说明\n特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、\n使用了某种算法或思路等需要进行注释描述\n多重 if 判断语句")])])])]),s._v(" "),n("h2",{attrs:{id:"其他规范学习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他规范学习"}},[s._v("#")]),s._v(" 其他规范学习")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://ant.design/docs/spec/introduce-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("AntDesign设计规范"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://guide.aotu.io/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("凹凸实验室代码规范"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);