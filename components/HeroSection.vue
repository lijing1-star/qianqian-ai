<template>
  <section class="relative overflow-hidden gradient-bg">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left animate-fade-in">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            v1.0 全新发布
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            政企级
            <span class="gradient-text">AI智能助手</span>
          </h1>
          <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            黔前Ai助手是一款专为政府和企业打造的AI智能助手，支持多模型集成、知识库管理、会议纪要、智能写作等功能，助力政企数字化转型。
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <NuxtLink to="/download" class="btn-primary text-lg px-8">
              <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
              免费下载
            </NuxtLink>
            <NuxtLink to="/docs" class="btn-outline text-lg px-8">
              <BookOpenIcon class="w-5 h-5 mr-2" />
              查看文档
            </NuxtLink>
          </div>
          <div class="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
            <div class="flex items-center">
              <CheckIcon class="w-4 h-4 text-green-500 mr-1" />
              <span>永久免费</span>
            </div>
            <div class="flex items-center">
              <CheckIcon class="w-4 h-4 text-green-500 mr-1" />
              <span>本地部署</span>
            </div>
            <div class="flex items-center">
              <CheckIcon class="w-4 h-4 text-green-500 mr-1" />
              <span>数据安全</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Product Preview -->
        <div class="relative animate-slide-up">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <!-- Mock UI Header -->
            <div class="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <div class="flex-1 text-center text-sm text-gray-500">黔前Ai助手</div>
            </div>
            <!-- Mock UI Content -->
            <div class="p-6 bg-white">
              <!-- Chat Interface Mock -->
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <UserIcon class="w-4 h-4 text-primary-600" />
                  </div>
                  <div class="bg-gray-100 rounded-lg rounded-tl-none px-4 py-2 max-w-xs">
                    <p class="text-sm text-gray-700">帮我分析一下这份招标文件的重点内容</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3 justify-end">
                  <div class="bg-primary-600 rounded-lg rounded-tr-none px-4 py-2 max-w-sm">
                    <p class="text-sm text-white">我来为您分析这份招标文件。主要包含以下几个重点部分：</p>
                    <ul class="mt-2 text-sm text-primary-100 space-y-1 list-disc list-inside">
                      <li>项目预算：500万元</li>
                      <li>资质要求：二级以上</li>
                      <li>交付周期：60个工作日</li>
                    </ul>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                    <SparklesIcon class="w-4 h-4 text-white" />
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <UserIcon class="w-4 h-4 text-primary-600" />
                  </div>
                  <div class="bg-gray-100 rounded-lg rounded-tl-none px-4 py-2 max-w-xs">
                    <p class="text-sm text-gray-700">生成一份符合要求的投标书</p>
                  </div>
                </div>
              </div>
              <!-- Input Mock -->
              <div class="mt-6 flex items-center space-x-2 pt-4 border-t border-gray-100">
                <div class="flex-1 bg-gray-50 rounded-lg px-4 py-2 text-sm text-gray-400">
                  输入消息...
                </div>
                <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <PaperAirplaneIcon class="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          <!-- Floating badges -->
          <div class="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-gray-100 animate-fade-in" style="animation-delay: 0.3s;">
            <div class="flex items-center space-x-2">
              <SparklesIcon class="w-5 h-5 text-yellow-500" />
              <span class="text-sm font-medium text-gray-700">AI 驱动</span>
            </div>
          </div>
          <div class="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-gray-100 animate-fade-in" style="animation-delay: 0.5s;">
            <div class="flex items-center space-x-2">
              <ShieldCheckIcon class="w-5 h-5 text-green-500" />
              <span class="text-sm font-medium text-gray-700">安全可靠</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="relative border-t border-gray-200 bg-white/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-3xl md:text-4xl font-bold text-primary-600">{{ stat.value }}</div>
            <div class="mt-1 text-sm text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ArrowDownTrayIcon, 
  BookOpenIcon, 
  CheckIcon, 
  UserIcon, 
  SparklesIcon, 
  PaperAirplaneIcon,
  ShieldCheckIcon 
} from '@heroicons/vue/24/outline'

const stats = [
  { value: '20+', label: 'AI 技能' },
  { value: '10+', label: '大模型支持' },
  { value: '4', label: '产品版本' },
  { value: '100%', label: '本地部署' },
]
</script>
