module.exports = {
    base: '/tech-blog/',
    title: "前端知识体系",
    description: "收录前端学习涉及的内容总结",
    plugins: [
        "vuepress-plugin-cat",
        [
            'vuepress-plugin-comment', // 评论
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'a8bd0f836a9a0ea7a5fb',
                    clientSecret: 'ba6976ade248e7b6c55ecfcf5d5a1b419553e246',
                    repo: 'tech-blog', // GitHub 仓库
                    owner: 'GuoLiBin6', // GitHub仓库所有者
                    admin: ['GuoLiBin6'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                },
            },
        ],
    ],
    theme: 'vdoing',
    themeConfig: {
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        sidebar: 'structuring',
        blogger: {
            avatar: '/tech-blog/images/avatar.jpeg',
            name: 'GuoLiBin6',
            slogan: '程序员永不下班',
        },
    },
    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.js',
    ],
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },
    
}
