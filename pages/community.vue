<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-white border-b border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">加入社区</h1>
        <p class="mt-4 text-lg text-gray-600">
          与我们一起共建AI智能办公生态
        </p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section id="contact" class="py-16 scroll-mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">联系我们</h2>
          <p class="mt-2 text-gray-600">选择适合您的方式与我们取得联系</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="channel in contactChannels" 
            :key="channel.title"
            class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
          >
            <div 
              class="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4"
              :class="channel.iconBg"
            >
              <component :is="channel.icon" class="w-7 h-7" :class="channel.iconColor" />
            </div>
            <h3 class="font-semibold text-gray-900">{{ channel.title }}</h3>
            <p class="mt-2 text-sm text-gray-600">{{ channel.description }}</p>
            <a 
              :href="channel.link"
              class="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              {{ channel.action }}
              <ArrowRightIcon class="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Forum -->
    <section id="forum" class="py-16 bg-white scroll-mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">社区论坛</h2>
          <p class="mt-2 text-gray-600">与其他用户交流使用心得、分享技巧、提问求助</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-3">问题求助</h3>
            <p class="text-sm text-gray-600 mb-4">遇到问题？在这里寻求帮助</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">进入板块 →</a>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-3">使用技巧</h3>
            <p class="text-sm text-gray-600 mb-4">分享你的使用心得和技巧</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">进入板块 →</a>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-3">功能建议</h3>
            <p class="text-sm text-gray-600 mb-4">提出你的功能改进建议</p>
            <a href="#" class="text-primary-600 hover:text-primary-700 text-sm font-medium">进入板块 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback -->
    <section id="feedback" class="py-16 scroll-mt-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900">反馈建议</h2>
            <p class="mt-2 text-gray-600">您的建议是我们改进的动力</p>
          </div>
          <form class="space-y-6" @submit.prevent="submitForm">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="您的姓名">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="your@email.com">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">反馈类型</label>
              <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                <option>功能建议</option>
                <option>问题反馈</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">详细描述</label>
              <textarea rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none resize-none" placeholder="请详细描述您的建议..."></textarea>
            </div>
            <button type="submit" class="w-full btn-primary py-4">提交反馈</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Enterprise CTA -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">需要企业级服务？</h2>
          <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
            为企业客户提供私有化部署、定制开发、培训支持等专业服务
          </p>
          <NuxtLink to="/enterprise" class="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            了解企业方案
            <ArrowRightIcon class="w-5 h-5 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Open Source -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">开源共建</h2>
        <p class="text-gray-600 mb-8">
          黔前Ai助手社区版完全开源，欢迎开发者参与贡献代码、提交Issue、分享经验。
        </p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
            GitHub
          </a>
          <a href="#" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Gitee
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  UserGroupIcon,
  BookOpenIcon,
  PhoneIcon,
  ClockIcon,
  CheckIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '社区 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '加入黔前Ai助手社区，获取技术支持、参与开源贡献、联系我们获取商业服务。' }
  ]
})

const contactChannels = [
  {
    title: '技术交流',
    description: '加入技术交流群，与其他用户交流使用经验',
    icon: ChatBubbleLeftRightIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    link: '#',
    action: '加入群聊'
  },
  {
    title: '用户论坛',
    description: '在论坛提问、分享经验、获取帮助',
    icon: UserGroupIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    link: '#',
    action: '访问论坛'
  },
  {
    title: '文档中心',
    description: '查看详细的使用文档和开发指南',
    icon: BookOpenIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    link: '/docs',
    action: '查看文档'
  },
  {
    title: '邮件支持',
    description: '发送邮件获取专业技术支持',
    icon: EnvelopeIcon,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    link: 'mailto:support@qianqianai.com',
    action: '发送邮件'
  }
]

const submitForm = () => {
  alert('感谢您的留言！我们会尽快与您联系。')
}
</script>
