# 个人技术博客

前端部分，个人技术博客。基于 [VuePress](https://www.vuepress.cn/) 搭建，集合个人博客展示、无后台评论系统、图床使用、每天定时百度推送等内容。

# 建站介绍

## VuePress

[VuePress](https://www.vuepress.cn/) 是 Vue 驱动的静态网站生成器，由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

## vuepress-theme-vdoing

[vuepress-theme-vdoing](https://doc.xugaoyi.com/) 是 VuePress v1.x 的一个主题，是在默认主题基础上做的修改和扩展，很多配置仍然沿用官方配置。使用该主题可以很方便的搭建一个结构化的知识库或博客。

## 图床

相较于多个平台都要发布同一篇文章或使用同一个图片，每一个平台都要上传一遍图片，那 图床（把图片统一上传到一个在线的第三方静态资源库中，返回一个图片的URL）将是一个很好的解决方案，推荐查看 [GitHub + jsDelivr + TinyPNG+ PicGo 打造稳定快速、高效免费图床](https://xugaoyi.com/pages/a5f73af5185fdf0a)

## 评论模块

[Gitalk](https://gitalk.github.io/) 做评论模块，具体使用介绍可查看 wiki [评论模块实现](https://github.com/GuoLiBin6/tech-blog/wiki/%E8%AF%84%E8%AE%BA%E6%A8%A1%E5%9D%97%E5%AE%9E%E7%8E%B0)

## express 服务端 + Github Pages 部署

打包后，将打包文件发布至Github Pages，然后移动到express public目录中，同时完成服务端部署

```js
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:GuoLiBin6/tech-blog.git master:gh-pages

cd -
rm -rf public/tech-blog
cp -r docs/.vuepress/dist public/tech-blog
rm -rf docs/.vuepress/dist
```
