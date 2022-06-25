function integrateGitalk(router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.bootcdn.net/ajax/libs/gitalk/1.7.2/gitalk.min.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.bootcdn.net/ajax/libs/gitalk/1.7.2/gitalk.min.js';
    document.body.appendChild(scriptGitalk);
    var path = '';

    router.afterEach((to) => {
        if (scriptGitalk.onload) {
            setTimeout(loadGitalk, 5, to)
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to.fullPath);
            }
        }
    });

    function loadGitalk(to) {
        if (to.path !== path) {
            path = to.path;
            let commentsContainer = document.getElementById('gitalk-container');
            const $page = document.querySelector('.page');
            if (commentsContainer && $page) {
                $page.removeChild(commentsContainer)
            }
            commentsContainer = document.createElement('div');
            commentsContainer.id = 'gitalk-container';
            commentsContainer.classList.add('content');
            if ($page) {
                $page.appendChild(commentsContainer);
                if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
                    renderGitalk();
                }
            }
        }
    }
    function renderGitalk() {
        // 如果url路径有中文则使用decodeURIComponent，否则可以直接使用location.pathname
        const path = decodeURIComponent(location.pathname)
        const hList = document.getElementsByTagName('h1')
        console.log('hList', hList)
        let title = path.split('/').pop() || path
        if (hList[0] && hList[0].innerText) {
            title = `评论 ${hList[0].innerText}`
        }
        console.log(title)
        const gitalk = new Gitalk({
            clientID: 'a8bd0f836a9a0ea7a5fb',
            clientSecret: 'ba6976ade248e7b6c55ecfcf5d5a1b419553e246',
            repo: 'tech-blog', // GitHub 仓库
            owner: 'GuoLiBin6', // GitHub仓库所有者
            admin: ['GuoLiBin6'], // 对仓库有写权限的人
            title,
            id: path,      // 唯一，并且长度小于50
            language: 'zh-CN',
            labels: ['Gitalk', 'Comment'],
            body: `页面：https://guolibin6.github.io${window.location.pathname}`
        });
        gitalk.render('gitalk-container');
    }
    window.loadGitalk = loadGitalk;
}

export default ({ Vue, options, router }) => {
    try {
        document && integrateGitalk(router)
    } catch (e) {
        console.error(e.message)
    }
}

// export default ({
//     Vue, // VuePress 正在使用的 Vue 构造函数
//     options, // 附加到根实例的一些选项
//     router, // 当前应用的路由实例
//     siteData // 站点元数据
// }) => {
//     // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
// }

