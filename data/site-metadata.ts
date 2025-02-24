export const SITE_METADATA = {
  title: `Tschën's dev blog`,
  author: 'Tschën',
  headerTitle: `Tschën's dev blog`,
  description:
    'Explore my personal blog where I share insights on software development, computer technology, and snippets of daily life.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.jxzsite.com',
  siteRepo: 'https://github.com/chienxx/chienxx.dev',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'lancertut@yahoo.com',
  github: 'https://github.com/chienxx',
  spotify: 'https://open.spotify.com/user/31e2umgbxsh6kjdd4vzmex6uggk4',
  discord: 'https://discord.com/users/chienxx',
  x: 'https://x.com/chienxxl',
  music: 'https://music.jxzsite.com/',
  // facebook: 'https://facebook.com/hta218',
  // youtube: 'https://www.youtube.com/@hta218_',
  // linkedin: 'https://www.linkedin.com/in/hta218',
  // threads: 'https://www.threads.net/hta218_',
  // instagram: 'https://www.instagram.com/hta218_',
  locale: 'en-US',
  stickyNav: false,
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    plausibleAnalytics: {
      plausibleDataDomain: 'jxzsite.com',
      src: 'https://collect.jxzsite.com/js/script.js',
      url: 'https://collect.jxzsite.com',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/chienxx',
  },
}
