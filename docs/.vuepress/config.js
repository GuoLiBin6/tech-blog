const padLeft0 = (num) => {
    return num > 9 ? num : `0${num}`
}

const timeFormatter = (time) => {
    const date = new Date(time)
    return `${date.getFullYear()}-${padLeft0(date.getMonth() + 1)}-${padLeft0(date.getDate())} ${padLeft0(date.getHours())}:${padLeft0(date.getMinutes())}:${padLeft0(date.getSeconds())}`
}

module.exports = {
    base: '/tech-blog/',
    title: "前端知识体系",
    description: "收录前端学习涉及的内容总结",
    plugins: [
        "vuepress-plugin-cat",
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return timeFormatter(timestamp)
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
        repo: 'GuoLiBin6/tech-blog',
        lastUpdated: '上次更新',
         // 页脚信息
        footer: {
            createYear: 2022, // 博客创建年份
            copyrightInfo:
            'GuoLiBin6 </br>冀ICP备2022013865号-1', // 博客版权信息，支持a标签或换行标签</br>
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
