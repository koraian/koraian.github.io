const CONFIG = {
  // profile setting (required)
  profile: {
    name: "KORAIA",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "한국인공지능협회",
    bio: `시선은 미래를 향하고, 행동은 미래를 앞당긴다.`,
    email: "info@koraia.org",
    linkedin: "koraia",
    github: "koraia",
    instagram: "",
  },
  projects: [
    {
      name: `(사)한국인공지능협회`,
      href: "https://koraia.org",
    },
    {
      name: `🔴 사업공고 살펴보기`,
      href: "https://docs.google.com/spreadsheets/d/1Buc5ErfEW2RDUtCFyXxoZVwRK-4c4UViDDnWwT3pNk4/edit?gid=0#gid=0",
    },
    {
      name: `🟠 회원사 소식보기`,
      href: "https://koraia.org/default/mp5/sub5.php?sub=05",
    },
    {
      name: `🟢 AI LEADER 아카데미 모집중`,
      href: "https://ceo.koraia.org",
    },
  ],
  // blog setting (required)
  blog: {
    title: "미래를 여는 AI, 한국인공지능협회",
    description: "한국인공지능협회(Korea Artificial Intelligence Association, KORAIA)는 인공지능(AI) 기술 및 산업 발전을 촉진하기 위해 설립된 비영리 단체입니다.",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://news.koraia.org",
  since: 2017, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
