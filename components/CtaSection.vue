<template>
  <section class="py-20 md:py-32 bg-gradient-to-br from-primary-600 to-primary-800">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        开启您的 AI 智能办公之旅
      </h2>
      <p class="mt-6 text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
        无论是个人学习、团队协作，还是政企数字化转型，黔前Ai助手都能为您提供专业的AI解决方案
      </p>
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/download" class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-700 bg-white rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
          <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
          免费下载
        </NuxtLink>
        <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors">
          <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2" />
          联系我们
        </NuxtLink>
      </div>
      <p class="mt-6 text-sm text-primary-200">
        社区版永久免费 · 无需注册 · 数据本地存储
      </p>
    </div>
  </section>
</template>

<script setup>
import { ArrowDownTrayIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
</script>
