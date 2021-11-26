(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{478:function(s,t,a){"use strict";a.r(t);var e=a(24),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用react-typescript构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用react-typescript构建项目"}},[s._v("#")]),s._v(" 使用React+Typescript构建项目")]),s._v(" "),a("h2",{attrs:{id:"一、-创建react-typescript项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-创建react-typescript项目"}},[s._v("#")]),s._v(" 一、 创建React+Typescript项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx create-react-app project-name --template typescript\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、-配置prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-配置prettier"}},[s._v("#")]),s._v(" 二、 配置Prettier")]),s._v(" "),a("h3",{attrs:{id:"_1-添加prettier依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加prettier依赖"}},[s._v("#")]),s._v(" 1. 添加prettier依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn add --dev --exact prettier\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-根目录下创建prettier配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-根目录下创建prettier配置文件"}},[s._v("#")]),s._v(" 2. 根目录下创建prettier配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("echo {}> .prettierrc.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-根目录下创建-prettierignore-配置要忽略格式化的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-根目录下创建-prettierignore-配置要忽略格式化的文件"}},[s._v("#")]),s._v(" 3. 根目录下创建.prettierignore,配置要忽略格式化的文件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("# Ignore artifacts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nbuild\ncoverage\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"三、-使用pre-commit-hook在提交代码前进行格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-使用pre-commit-hook在提交代码前进行格式化"}},[s._v("#")]),s._v(" 三、 使用Pre-commit Hook在提交代码前进行格式化")]),s._v(" "),a("h3",{attrs:{id:"_1-lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-lint-staged"}},[s._v("#")]),s._v(" 1. lint-staged")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx mrm lint-staged\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-在package-json中增加ts及tsx支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在package-json中增加ts及tsx支持"}},[s._v("#")]),s._v(" 2. 在package.json中增加ts及tsx支持")]),s._v(" "),a("p",[s._v("原：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"lint-staged": {\n    "*.{js,css,md}": "prettier --write"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("增加后：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"lint-staged": {\n    "*.{js,css,md,ts,tsx}": "prettier --write"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3-npx-mrm-lint-staged失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-npx-mrm-lint-staged失败"}},[s._v("#")]),s._v(" 3."),a("code",[s._v("npx mrm lint-staged")]),s._v("失败")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("E:\\nodejs\\node_cache\\_npx\\25144\\node_modules\\mrm\\bin\\mrm.js:55\n                throw err;\n\nError: Cannot find module 'E:\\nodejs\\node_cache\\_npx\\25144\\lib\\node_modules\\mrm-task-lint-staged'\nRequire stack:\n- E:\\nodejs\\node_cache\\_npx\\25144\\node_modules\\mrm\\src\\index.js\n- E:\\nodejs\\node_cache\\_npx\\25144\\node_modules\\mrm\\bin\\mrm.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:746:27)\n    at Module.require (internal/modules/cjs/loader.js:974:19)\n    at require (internal/modules/cjs/helpers.js:92:18)\n    at E:\\nodejs\\node_cache\\_npx\\25144\\node_modules\\mrm\\src\\index.js:164:18\n    at new Promise (<anonymous>)\n    at runTask (E:\\nodejs\\node_cache\\_npx\\25144\\node_modules\\mrm\\src\\index.js:154:9)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5) {\n  code: 'MODULE_NOT_FOUND',\n  requireStack: [\n    'E:\\\\nodejs\\\\node_cache\\\\_npx\\\\25144\\\\node_modules\\\\mrm\\\\src\\\\index.js',\n    'E:\\\\nodejs\\\\node_cache\\\\_npx\\\\25144\\\\node_modules\\\\mrm\\\\bin\\\\mrm.js'\n  ]\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("strong",[s._v("原因：")]),s._v("\nNode.js（windows系统）:ExperimentalWarning: The fs.promises API is experimental\n根本原因是node的版本不是最新的，而在项目引入的模块是最新的，node.js的版本低于模块的版本：\n"),a("em",[s._v("但是将node升级到最新稳定版还是会报错，于是决定降低mrm版本")]),s._v(" "),a("strong",[s._v("解决：降低 mrm 版本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx mrm@2 lint-staged\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"四、解决prettier与eslint格式冲突问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、解决prettier与eslint格式冲突问题"}},[s._v("#")]),s._v(" 四、解决Prettier与ESLint格式冲突问题")]),s._v(" "),a("h3",{attrs:{id:"_1-安装eslint-config-prettier依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装eslint-config-prettier依赖"}},[s._v("#")]),s._v(" 1. 安装"),a("code",[s._v("eslint-config-prettier")]),s._v("依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yarn add eslint-config-prettier -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-修改package-json中eslintconfig配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改package-json中eslintconfig配置"}},[s._v("#")]),s._v(" 2. 修改package.json中eslintConfig配置")]),s._v(" "),a("blockquote",[a("p",[s._v("使用Prettier的规则覆盖一部分冲突规则")])]),s._v(" "),a("p",[s._v("原:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslintConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app/jest"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("修改后：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslintConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app/jest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prettier"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"五、使用commitlint设置代码提交内容的规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、使用commitlint设置代码提交内容的规范"}},[s._v("#")]),s._v(" 五、使用commitlint设置代码提交内容的规范")]),s._v(" "),a("h3",{attrs:{id:"_1-安装commitlint依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装commitlint依赖"}},[s._v("#")]),s._v(" 1. 安装commitlint依赖")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("# Install commitlint cli and conventional config\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("conventional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cli"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n# For Windows"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("conventional @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n\n# Configure commitlint to use conventional config\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"module.exports = {extends: ['@commitlint/config-conventional']}\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" commitlint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-配置hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置hook"}},[s._v("#")]),s._v(" 2. 配置hook")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npx husky add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("husky"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("msg "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npx --no-install commitlint --edit \"$1\"'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交规范"}},[s._v("#")]),s._v(" 3. 提交规范")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional",target:"_blank",rel:"noopener noreferrer"}},[s._v("@commitlint/config-conventional"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("提交示例:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" some message # fails\nfix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" some message # passes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"type-enum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-enum"}},[s._v("#")]),s._v(" type-enum")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("值")]),s._v(" "),a("th",[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("feat")]),s._v(" "),a("td",[s._v("新功能(feature)")])]),s._v(" "),a("tr",[a("td",[s._v("fix")]),s._v(" "),a("td",[s._v("修补bug")])]),s._v(" "),a("tr",[a("td",[s._v("docs")]),s._v(" "),a("td",[s._v("只改动了文档相关内容(documentation)")])]),s._v(" "),a("tr",[a("td",[s._v("style")]),s._v(" "),a("td",[s._v("格式(不影响代码运行的变动，如去掉空格、改变缩进、增删分号)")])]),s._v(" "),a("tr",[a("td",[s._v("build")]),s._v(" "),a("td",[s._v("构造工具的或者外部依赖的改动，例如webpack，npm")])]),s._v(" "),a("tr",[a("td",[s._v("refactor")]),s._v(" "),a("td",[s._v("重构")])]),s._v(" "),a("tr",[a("td",[s._v("revert")]),s._v(" "),a("td",[s._v("执行git revert打印的message")])]),s._v(" "),a("tr",[a("td",[s._v("test")]),s._v(" "),a("td",[s._v("增加测试或者修改现有测试")])]),s._v(" "),a("tr",[a("td",[s._v("perf")]),s._v(" "),a("td",[s._v("提升了性能")])]),s._v(" "),a("tr",[a("td",[s._v("ci")]),s._v(" "),a("td",[s._v("与CI（持续集成服务）有关的改动")])]),s._v(" "),a("tr",[a("td",[s._v("chore")]),s._v(" "),a("td",[s._v("不修改src或者test的其余修改，例如构建过程或辅助工具的变动")])])])]),s._v(" "),a("h2",{attrs:{id:"六、mock方案-本地node服务器-json-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、mock方案-本地node服务器-json-server"}},[s._v("#")]),s._v(" 六、Mock方案-本地node服务器-"),a("code",[s._v("json-server")])]),s._v(" "),a("p",[a("code",[s._v("json-server")]),s._v("优点：")]),s._v(" "),a("ol",[a("li",[s._v("配置简单，"),a("code",[s._v("json-server")]),s._v("甚至可以0代码30启动一个REST API Server")]),s._v(" "),a("li",[s._v("自定义程度高")]),s._v(" "),a("li",[s._v("增删改查真实模拟")])])])}),[],!1,null,null,null);t.default=n.exports}}]);