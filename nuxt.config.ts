export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: '黔前Ai助手 - 政企级AI智能助手',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '黔前Ai助手是一款政企级AI智能助手，支持多模型集成、知识库管理、会议纪要、技能系统等强大功能，为政府、企业提供全方位的AI解决方案。' },
        { name: 'keywords', content: 'AI助手,人工智能,黔前Ai,政府AI,企业AI,智能助手,大模型' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  ssr: false,
  experimental: {
    payloadExtraction: false
  }
})
