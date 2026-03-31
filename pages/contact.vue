<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-white border-b border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">联系我们</h1>
        <p class="mt-4 text-lg text-gray-600">
          选择适合您的方式与我们取得联系
        </p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

    <!-- Contact Form -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">给我们留言</h2>
          <p class="mt-2 text-gray-600">有问题或建议？请填写以下表单与我们联系</p>
        </div>

        <form class="space-y-6" @submit.prevent="submitForm">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="您的姓名"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
              <input 
                type="email" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="your@email.com"
              >
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">咨询类型</label>
            <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors">
              <option>产品咨询</option>
              <option>技术支持</option>
              <option>商务合作</option>
              <option>加入我们</option>
              <option>其他</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">留言内容</label>
            <textarea 
              rows="5" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
              placeholder="请详细描述您的需求或问题..."
            ></textarea>
          </div>
          <button type="submit" class="w-full btn-primary py-4 text-lg">
            提交留言
          </button>
        </form>
      </div>
    </section>

    <!-- Enterprise Contact -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">企业咨询服务</h2>
              <p class="text-primary-100 mb-6">
                为企业提供定制化AI解决方案，包括私有化部署、定制开发、培训服务等。
              </p>
              <div class="space-y-3 text-primary-100">
                <div class="flex items-center">
                  <PhoneIcon class="w-5 h-5 mr-3" />
                  <span>400-XXX-XXXX</span>
                </div>
                <div class="flex items-center">
                  <EnvelopeIcon class="w-5 h-5 mr-3" />
                  <span>enterprise@qianqianai.com</span>
                </div>
                <div class="flex items-center">
                  <ClockIcon class="w-5 h-5 mr-3" />
                  <span>工作日 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 class="text-lg font-semibold text-white mb-4">服务范围</h3>
              <ul class="space-y-2 text-primary-100">
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 mr-2" />
                  企业版购买咨询
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 mr-2" />
                  私有化部署方案
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 mr-2" />
                  定制化开发服务
                </li>
                <li class="flex items-center">
                  <CheckIcon class="w-5 h-5 mr-2" />
                  培训和技术支持
                </li>
              </ul>
            </div>
          </div>
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
  title: '联系我们 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '联系黔前Ai助手团队，获取技术支持、商务合作、企业咨询等服务。' }
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
