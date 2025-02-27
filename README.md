## 简介
- 部署 - [Vercel](https://vercel.com/)
- 技术栈 - [Next.js](https://nextjs.org/)、[Tailwind CSS](https://tailwindcss.com/)、[TypeScript](https://www.typescriptlang.org/)
- 网站分析 - [Plausible](https://plausible.io/) 社区版
  
**感谢 [Timothy Lin](https://github.com/timlrx/tailwind-nextjs-starter-blog?tab=readme-ov-file) 开源项目模板以及 [Tuan Anh Huynh](https://github.com/hta218/leohuynh.dev) 对项目的重构。**

## 快速指南
- 克隆仓库
- 通过 `siteMetadata.js` 修改站点个人信息
- 通过 `tailwind.css` 更换网站样式
- 本地新建 `.env` 配置文件
- 安装 `Yarn` 和 `Node`
- `yarn dev` 启动项目

⚠️ **特别注意**

### 文章点赞记录
需要自己创建部署 `postgresql` 数据库，并在 `.env` 文件中添加配置：
```
DATABASE_URL=postgresql://username:passwd@ip:port/databasename`
```
建表语句如下：
```sql
-- 创建 ENUM 类型
CREATE TYPE type AS ENUM ('blog', 'snippet');

-- 创建 stats 表
CREATE TABLE IF NOT EXISTS stats (
  type type NOT NULL,
  slug VARCHAR(255) NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  loves INTEGER NOT NULL DEFAULT 0,
  applauses INTEGER NOT NULL DEFAULT 0,
  ideas INTEGER NOT NULL DEFAULT 0,
  bullseyes INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (type, slug)
);

```

### 获取 Spotify 歌曲信息 
在 `.env` 文件中添加配置：
```
SPOTIFY_CLIENT_ID= your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```
步骤参考博客文章 [如何通过 Spotify API 获取并展示当前播放歌曲](https://www.jxzsite.com/snippets/display-playing-track-by-spotify-api)

