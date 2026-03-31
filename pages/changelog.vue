<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-white">更新日志</h1>
        <p class="mt-4 text-lg text-primary-100">
          追踪黔前Ai助手的每一次更新与改进
        </p>
      </div>
    </section>

    <!-- Changelog Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Version 1.0.0 -->
        <div class="relative pl-8 border-l-2 border-primary-200 pb-12 last:pb-0">
          <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary-500 border-4 border-white shadow"></div>
          <div class="mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
              最新版本
            </span>
            <h2 class="text-2xl font-bold text-gray-900 mt-2">v1.0.0</h2>
            <p class="text-sm text-gray-500">2024年3月15日</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <SparklesIcon class="w-5 h-5 text-yellow-500 mr-2" />
              新功能
            </h3>
            <ul class="space-y-2 text-gray-600 mb-6">
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                AI智能对话功能，支持GPT-4、Claude、通义千问、DeepSeek等多模型切换
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                知识库系统，支持PDF、Word、Excel、PPT等文档的智能检索与问答
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                会议纪要功能，支持语音转写和智能摘要生成
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                技能系统，内置20+实用技能覆盖多种办公场景
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                文档模式，AI辅助写作与智能排版
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                招投标助手，支持招标文件解析与标书生成
              </li>
            </ul>
            
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
              <ShieldCheckIcon class="w-5 h-5 text-green-500 mr-2" />
              安全性
            </h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                支持私有化部署，数据完全本地存储
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                支持国密算法加密
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                完善的权限管控机制
              </li>
            </ul>
          </div>
        </div>

        <!-- Beta Version -->
        <div class="relative pl-8 border-l-2 border-gray-200 pb-12 last:pb-0 mt-12">
          <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-300 border-4 border-white"></div>
          <div class="mb-4">
            <h2 class="text-2xl font-bold text-gray-900">v0.9.0 Beta</h2>
            <p class="text-sm text-gray-500">2024年2月1日</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-gray-900 mb-3">测试版本发布</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-gray-400 mr-2">•</span>
                开放内测，邀请企业和政府用户参与测试
              </li>
              <li class="flex items-start">
                <span class="text-gray-400 mr-2">•</span>
                收集用户反馈，持续优化产品体验
              </li>
            </ul>
          </div>
        </div>

        <!-- Coming Soon -->
        <div class="relative pl-8 border-l-2 border-dashed border-gray-200 mt-12">
          <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-100 border-4 border-white"></div>
          <div class="mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
              敬请期待
            </span>
            <h2 class="text-2xl font-bold text-gray-900 mt-2">v1.1.0</h2>
            <p class="text-sm text-gray-500">预计2024年4月发布</p>
          </div>
          <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 class="font-semibold text-gray-900 mb-3">即将推出</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                移动端APP支持（iOS & Android）
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                更多AI模型接入
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                团队协作功能
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-2">•</span>
                高级数据分析技能
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscribe -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">获取更新通知</h2>
        <p class="text-gray-600 mb-8">订阅我们的更新通知，第一时间了解新功能发布</p>
        <div class="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="输入您的邮箱"
            class="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          >
          <button class="btn-primary rounded-l-none px-6">
            订阅
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { SparklesIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'

useHead({
  title: '更新日志 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '查看黔前Ai助手的版本更新历史，了解最新功能和改进。' }
  ]
})
</script>
