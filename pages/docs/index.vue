<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">使用文档</h1>
        <p class="mt-4 text-lg text-gray-600">
          了解如何使用黔前Ai助手的各项功能
        </p>
      </div>

      <!-- Doc Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="category in docCategories" 
          :key="category.title"
          :to="category.link"
          class="group block p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
        >
          <div 
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
            :class="category.iconBg"
          >
            <component :is="category.icon" class="w-7 h-7" :class="category.iconColor" />
          </div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {{ category.title }}
            </h3>
            <ArrowRightIcon class="w-5 h-5 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
          </div>
          <p class="text-gray-600 text-sm">{{ category.description }}</p>
        </NuxtLink>
      </div>

      <!-- Quick Start -->
      <div class="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">快速开始</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <NuxtLink 
            v-for="(step, index) in quickStartSteps" 
            :key="step.title"
            :to="step.link"
            class="group flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
          >
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{{ step.title }}</h3>
                <ArrowRightIcon class="w-4 h-4 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </div>
              <p class="mt-1 text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Feature Docs -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">功能详解</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink 
            v-for="feature in featureDocs" 
            :key="feature.title"
            :to="feature.link"
            class="group flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all duration-300"
          >
            <component :is="feature.icon" class="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
            <span class="font-medium text-gray-700 group-hover:text-primary-600 transition-colors">{{ feature.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Need Help -->
      <div class="mt-16 text-center bg-primary-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">需要帮助？</h2>
        <p class="text-gray-600 mb-6">
          如果在使用过程中遇到问题，可以通过以下方式获取帮助
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="/community" class="btn-primary">
            联系支持
          </NuxtLink>
          <NuxtLink to="/" class="btn-outline">
            返回首页
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowRightIcon,
  BookOpenIcon,
  CogIcon,
  CubeIcon,
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  FolderOpenIcon,
  MicrophoneIcon,
  WrenchIcon,
  DocumentTextIcon,
  DocumentMagnifyingGlassIcon,
  CpuChipIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '文档 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '黔前Ai助手使用文档，包括快速入门、功能指南、API文档等。' }
  ]
})

const docCategories = [
  {
    title: '快速入门',
    description: '下载安装、初始配置、第一个对话',
    icon: RocketLaunchIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    link: '/docs/getting-started'
  },
  {
    title: '使用指南',
    description: 'AI对话、知识库、会议纪要等功能详解',
    icon: BookOpenIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    link: '/docs/guide'
  },
  {
    title: '技能系统',
    description: '了解和使用各种AI技能',
    icon: LightBulbIcon,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    link: '/docs/skills'
  },
  {
    title: '模型配置',
    description: '配置和管理AI大模型',
    icon: CogIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    link: '/docs/models'
  },
  {
    title: 'API文档',
    description: '企业版和服务器版API接口文档',
    icon: CodeBracketIcon,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    link: '/docs/api'
  },
  {
    title: '部署指南',
    description: '私有化部署和服务器配置',
    icon: CubeIcon,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    link: '/docs/deploy'
  }
]

const quickStartSteps = [
  {
    title: '下载安装',
    description: '访问下载页面，选择适合您系统的版本进行下载安装。',
    link: '/download'
  },
  {
    title: '配置AI模型',
    description: '在设置中添加您的AI模型API Key，即可开始使用。',
    link: '/docs/models'
  },
  {
    title: '创建知识库',
    description: '上传文档创建知识库，让AI基于您的资料回答问题。',
    link: '/docs/knowledge-base'
  },
  {
    title: '探索技能',
    description: '体验各种AI技能，提升工作效率。',
    link: '/docs/skills'
  }
]

const featureDocs = [
  { title: 'AI 智能对话', link: '/docs/ai-chat', icon: ChatBubbleLeftRightIcon },
  { title: '知识库系统', link: '/docs/knowledge-base', icon: FolderOpenIcon },
  { title: '会议纪要', link: '/docs/meeting', icon: MicrophoneIcon },
  { title: '技能系统', link: '/docs/skills', icon: WrenchIcon },
  { title: '文档模式', link: '/docs/document', icon: DocumentTextIcon },
  { title: '招投标助手', link: '/docs/tender', icon: DocumentMagnifyingGlassIcon },
  { title: '多模型集成', link: '/docs/models', icon: CpuChipIcon },
  { title: '数据安全', link: '/docs/security', icon: ShieldCheckIcon }
]
</script>
