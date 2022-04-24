module.exports = {
    title: "前端知识体系",
    description: "收录前端学习涉及的内容总结",
    plugins: [
        "vuepress-plugin-cat",
    ],
    theme: 'vdoing',
    themeConfig: {
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        sidebar: 'structuring',
        blogger: {
            avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
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
