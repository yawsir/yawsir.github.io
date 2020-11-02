(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{493:function(s,t,n){s.exports=n.p+"assets/img/jenkins1.095ce190.png"},494:function(s,t,n){s.exports=n.p+"assets/img/jenkins2.7f0626b7.png"},495:function(s,t,n){s.exports=n.p+"assets/img/jenkins3.7b509eee.png"},496:function(s,t,n){s.exports=n.p+"assets/img/jenkins4.69f31978.png"},497:function(s,t,n){s.exports=n.p+"assets/img/webhooks.47c2decd.png"},498:function(s,t,n){s.exports=n.p+"assets/img/webhooks2.90cbc47f.png"},499:function(s,t,n){s.exports=n.p+"assets/img/jenkins5.24fb774e.png"},526:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"配置jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置jenkins"}},[s._v("#")]),s._v(" 配置jenkins")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在"),a("code",[s._v("jenkins")]),s._v("中新建流水线")]),s._v(" "),a("p",[a("img",{attrs:{src:n(493),alt:"jenkins"}})])]),s._v(" "),a("li",[a("p",[s._v("填写gitlab项目的地址，并勾选‘当gitlab收到改变代码的push'时的hook")]),s._v(" "),a("p",[a("img",{attrs:{src:n(494),alt:"jenkins"}})]),s._v(" "),a("p",[a("img",{attrs:{src:n(495),alt:"jenkins"}})])]),s._v(" "),a("li",[a("p",[s._v("配置触发的分支，支持正则并生成"),a("code",[s._v("Token")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(496),alt:"jenkins"}})])])]),s._v(" "),a("h2",{attrs:{id:"配置gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置gitlab"}},[s._v("#")]),s._v(" 配置gitlab")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("配置gitlab的webhooks,填写jenkins项目地址以及刚刚生成的"),a("code",[s._v("Token")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(497),alt:"webhooks"}})])]),s._v(" "),a("li",[a("p",[s._v("配置好以后可以在"),a("code",[s._v("webhooks")]),s._v("下方看到"),a("code",[s._v("Project Hooks")]),s._v("，点击"),a("code",[s._v("Test => push event")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(498),alt:"webhooks"}})]),s._v(" "),a("p",[s._v("如果在"),a("code",[s._v("jenkins")]),s._v("页面中看到构建记录，则配置成功。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(499),alt:"webhooks"}})])])]),s._v(" "),a("h2",{attrs:{id:"配置项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项目"}},[s._v("#")]),s._v(" 配置项目")]),s._v(" "),a("p",[s._v("添加"),a("code",[s._v("Dockerfile")]),s._v("和"),a("code",[s._v("jenkinsfile")])]),s._v(" "),a("p",[s._v("Dockerfile")]),s._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" docker.nroad.com.cn/node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("10 as frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("builder\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" set "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("x \\\n    && npm config set registry https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//nexus.nroad.com.cn/repository/npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("public/ \\\n    && npm config set _auth amVua2luczpqZW5raW5z \\\n    && npm config set email zhoupen9@sina.cn \\\n    && npm install \\\n    && npm run build\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" package.json ./dist/\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm publish dist\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" docker.nroad.com.cn/nginx\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from=frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("builder /frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build/dist /usr/share/nginx/html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("Jenkinsfile")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" label "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"w-pw-ja-${UUID.randomUUID().toString()}"')]),s._v("\n\npodTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    containers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        containerTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker.nroad.com.cn/docker:18'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ttyEnabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'checkout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            checkout scm\n\n            env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("APP_VERSION "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returnStdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"cat package.json | grep version | head -1 | awk -F: '{ print \\$2 }' | sed 's/[\\\",]//g' | tr -d '[[:space:]]'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WORKSPACE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DOCKER_HOST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://dm0.nroad.com.cn:2375"')]),s._v("\n            env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("REGISTRY "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.nroad.com.cn/soc"')]),s._v("\n            env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IMAGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"large-screen"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v('\n                sh "docker '),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("host $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DOCKER_HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" build \\\n                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("file")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WORKSPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Dockerfile \\\n                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tag $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("REGISTRY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IMAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("APP_VERSION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \\\n                            $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WORKSPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n                sh '),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker --host ${env.DOCKER_HOST} push ${env.REGISTRY}/${env.IMAGE}:${env.APP_VERSION}"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("    container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wenet-dev.nroad.com.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("each "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("            sh "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker -H ${it} service update --force "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" --image ${env.REGISTRY}/${env.IMAGE}:${env.APP_VERSION} "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" wenet_wechat-self-front"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" stage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("     container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jnlp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" kubernetes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'target/classes/META-INF/fabric8'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("         sh "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubectl -n xift apply -f ${kubernetes}/kubernetes.yml"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);