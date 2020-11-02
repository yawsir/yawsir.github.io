(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{522:function(n,t,e){"use strict";e.r(t);var r=e(4),s=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"nginx是前端必会的服务器，是高性能的http及反向代理服务器，它有性能高，占用内存小等优点。记录nginx的学习过程以及使用。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx是前端必会的服务器，是高性能的http及反向代理服务器，它有性能高，占用内存小等优点。记录nginx的学习过程以及使用。"}},[n._v("#")]),n._v(" NGINX是前端必会的服务器，是高性能的http及反向代理服务器，它有性能高，占用内存小等优点。记录nginx的学习过程以及使用。\n"),e("img",{attrs:{src:"https://blog-1259762155.cos.ap-beijing.myqcloud.com/introduce/1579093700926-nginx_logo.png",alt:"NGINX"}})]),n._v(" "),e("h2",{attrs:{id:"正向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[n._v("#")]),n._v(" 正向代理")]),n._v(" "),e("p",[n._v("正常情况下，国内不能够访问youtube的官网，如果想看youtube的视频，那就可以在客户端配置一个代理服务器，这样我们可以访问代理服务器，告诉代理服务器我要看youtube，代理服务器访问youtube，把youtube的页面返回值我，这样我就看到了youtube。\n"),e("img",{attrs:{src:"https://blog-1259762155.cos.ap-beijing.myqcloud.com/content/1579096495226-zxdl.png",alt:"正向代理"}})]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[n._v("#")]),n._v(" 反向代理")]),n._v(" "),e("p",[n._v("正向代理需要客户端进行配置，而反向代理客户端0配置，当客户端访问反向代理服务器时，由该服务器去访问目标服务器，再返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，可以隐藏真实服务器的ip地址，也方便负载均衡。\n"),e("img",{attrs:{src:"https://blog-1259762155.cos.ap-beijing.myqcloud.com/content/1579096320912-fxdl.png",alt:"反向代理"}})]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[n._v("#")]),n._v(" 负载均衡")]),n._v(" "),e("p",[n._v("一般的项目都会用到负载均衡，一台服务器处理不了的并发请求，NGINX代理服务器可以将这些请求平均分布到配置的多台服务器中。")]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"动静分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[n._v("#")]),n._v(" 动静分离")]),n._v(" "),e("p",[n._v("将服务器分成动态资源服务器(jsp, servlet)和静态资源服务器(HTML，CSS，JS)，其实和负载均衡的概念差不太多，就是按文件类型请求服务器的意思。")]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"nginx常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用命令"}},[n._v("#")]),n._v(" NGINX常用命令")]),n._v(" "),e("ol",[e("li",[n._v("查看nginx版本 "),e("code",[n._v("nginx -v")])]),n._v(" "),e("li",[n._v("启动nginx "),e("code",[n._v("nginx")]),n._v(" 查看nginx是否启动可以看linux的进程 "),e("code",[n._v("ps -ef | grep nginx")])]),n._v(" "),e("li",[n._v("关闭nginx "),e("code",[n._v("nginx -s quit")])]),n._v(" "),e("li",[n._v("重新加载nginx "),e("code",[n._v("nginx -s reload")])])]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"nginx配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件"}},[n._v("#")]),n._v(" NGINX配置文件")]),n._v(" "),e("p",[n._v("nginx配置文件的位置 "),e("code",[n._v("/etc/nginx/nginx.conf")]),n._v("和"),e("code",[n._v("/etc/nginx/conf.d/defalult.conf")])]),n._v(" "),e("ol",[e("li",[n._v("nginx配置文件由三部分组成")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("全局块 配置整体运行的指令\nuser  nginx;\nworker_processes  1; #nginx 处理并发的数量\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;")])]),n._v(" "),e("li",[e("p",[n._v("events块 配置服务器与用户的网络连接")]),n._v(" "),e("p",[n._v("这部分对NGINX性能影响较大\nevents {\nworker_connections  1024;\n}")])]),n._v(" "),e("li",[e("p",[n._v("http块")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(' http {\n include       /etc/nginx/mime.types;\n default_type  application/octet-stream;\n \n log_format  main  \'$remote_addr - $remote_user \n [$time_local] "$request" \'\n \'$status $body_bytes_sent \n "$http_referer" \'\n \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n  access_log  /var/log/nginx/access.log  main;\n\n  sendfile        on;\n  #tcp_nopush     on;\n\n  keepalive_timeout  65;\n\n  #gzip  on;\n\n  include /etc/nginx/conf.d/*.conf; # 这里表示以模块方式引入server配置，server配置在/etc/nginx/conf.d/*.conf下\n }\n')])])])]),n._v(" "),e("li",[e("p",[n._v("serve块 "),e("code",[n._v("/etc/nginx/conf.d/*.conf")]),n._v("文件")]),n._v(" "),e("p",[n._v("这部分是配置最频繁的部分，一般一个文件代表一个代理配置。")])])]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"配置反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置反向代理"}},[n._v("#")]),n._v(" 配置反向代理")]),n._v(" "),e("p",[n._v("打开"),e("code",[n._v("/etc/nginx/conf.d/defalult.conf")]),n._v("文件\n"),e("img",{attrs:{src:"https://blog-1259762155.cos.ap-beijing.myqcloud.com/introduce/1579238238406-fjdlpz.png",alt:"default.conf"}})]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("listen 80 # nginx监听的端口号\nserver_name # 服务器域名可以是localhost或者填写服务器的ip地址\nlocation / {   # 拦截 / 请求\n    proxy_pass http://127.0.0.1:3000; # 将请求发送至该IP端口下 也可以是其他服务器的ip\n}\n")])])]),e("p",[n._v("将3000端口的项目启动，再将nginx启动，这样就做到了在浏览器访问80端口，nginx将请求转发到了3000端口，也就配置好了反向代理。")]),n._v(" "),e("h2",{attrs:{id:"实例：next-js项目的部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例：next-js项目的部署"}},[n._v("#")]),n._v(" 实例：next.js项目的部署")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("1. 后端使用eggjs开发，eggjs自带一个进程守护，因此部署时按照官网的描述就可以。\n2. 前台展示使用react服务端渲染框架next.js开发，将本地除了node_modules文件夹上传至服务器，先安装运行依赖`cnpm install --production`\n   运行项目，使用pm2守护进程 `pm2 start npm --name 'iradw-blog' -- run start` 项目会在3000端口运行\n3. 后台管理使用react开发，在`/etc/nginx/conf.d/default.conf` 文件中做刚刚写过的配置\n   新建`admin.conf`文件，可以直接复制default.conf文件再进行修改，修改如下\n\nserver {\n    listen 8080;\n    server_name: localhost;\n    location / {\n        root /blog/admin/build\n        index index.html index.htm\n    }\n}\n")])])]),e("p",[n._v("这样就实现了在浏览器中输入ip地址访问前台，输入ip:8080访问后台管理。")]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"负载均衡的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡的配置"}},[n._v("#")]),n._v(" 负载均衡的配置")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("在配置文件http块中，写入服务器列表\nupstream myserver {\n      server 192.168.1.1:3000;\n      server 192.168.1.2:3000;\n}\n")])])]),e("p",[n._v("在"),e("code",[n._v("/etc/nginx/conf.d")]),n._v("中的配置文件中配置")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("server {\n    listen 80;\n    server_name localhost;\n    location / {\n        proxy_pass http://myserver;\n        root html;\n        index index.html index.htm\n    }\n}\n")])])]),e("p",[n._v("当启动nginx后，访问nginx所在的服务器，nginx会把请求均衡转发到配置的服务器列表中。")]),n._v(" "),e("hr"),n._v(" "),e("h2",{attrs:{id:"nginx服务器分配策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务器分配策略"}},[n._v("#")]),n._v(" nginx服务器分配策略")]),n._v(" "),e("ol",[e("li",[n._v("轮询(默认)")])]),n._v(" "),e("p",[n._v("每个请求按时间顺序逐一分配到不同的后端服务器，如果某个后端服务器宕机，nginx可以自动剔除。\n2. weight权重")]),n._v(" "),e("p",[n._v("weight代表权重，默认值为1，权重越高被分配的客户端越多。\nupstream myserver {\nserver 192.168.1.1:3000 weight=1;\nserver 192.168.1.2:3000 weight=2;\n}\n3. ip_hash\n每个请求按访问的hash结果分配，这样每个方可固定访问一个后端。\nupstream myserver {\nip_hash\nserver 192.168.1.1:3000;\nserver 192.168.1.2:3000;\n}\n4. fair(第三方)")]),n._v(" "),e("p",[n._v("按后端服务器的响应时间来分配请求\nupstream myserver {\nserver 192.168.1.1:3000;\nserver 192.168.1.2:3000;\nfair\n}")])])}),[],!1,null,null,null);t.default=s.exports}}]);