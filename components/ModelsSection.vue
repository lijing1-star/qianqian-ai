<template>
  <section class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">多模型集成，灵活选择</h2>
        <p class="section-subtitle">
          深度集成国内外主流大模型，根据场景需求自由切换，获得最佳AI体验
        </p>
      </div>

      <!-- Models Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div 
          v-for="model in models" 
          :key="model.name"
          class="group relative bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-primary-300 hover:shadow-lg transition-all duration-300"
        >
          <div class="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors" :class="model.bgColor">
            <span class="text-2xl font-bold" :class="model.textColor">{{ model.abbr }}</span>
          </div>
          <h3 class="font-semibold text-gray-900">{{ model.name }}</h3>
          <p class="mt-1 text-sm text-gray-500">{{ model.provider }}</p>
          <div class="mt-3">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="model.tagClass">
              {{ model.tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Integration Features -->
      <div class="mt-16 grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-14 h-14 mx-auto bg-primary-100 rounded-xl flex items-center justify-center">
            <ArrowsRightLeftIcon class="w-7 h-7 text-primary-600" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900">一键切换</h3>
          <p class="mt-2 text-gray-600">不同场景下可快速切换AI模型，获得最适合的回答</p>
        </div>
        <div class="text-center">
          <div class="w-14 h-14 mx-auto bg-primary-100 rounded-xl flex items-center justify-center">
            <BoltIcon class="w-7 h-7 text-primary-600" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900">智能路由</h3>
          <p class="mt-2 text-gray-600">根据问题类型自动推荐最佳模型，省心高效</p>
        </div>
        <div class="text-center">
          <div class="w-14 h-14 mx-auto bg-primary-100 rounded-xl flex items-center justify-center">
            <KeyIcon class="w-7 h-7 text-primary-600" />
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-900">自主配置</h3>
          <p class="mt-2 text-gray-600">支持自定义API Key，灵活控制成本和数据安全</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowsRightLeftIcon, BoltIcon, KeyIcon } from '@heroicons/vue/24/outline'

const models = [
  {
    name: 'GPT-4',
    abbr: 'GPT',
    provider: 'OpenAI',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
    tag: '国际领先',
    tagClass: 'bg-green-100 text-green-800'
  },
  {
    name: 'Claude 3',
    abbr: 'Cl',
    provider: 'Anthropic',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-600',
    tag: '长文本专家',
    tagClass: 'bg-orange-100 text-orange-800'
  },
  {
    name: '通义千问',
    abbr: 'Qwen',
    provider: '阿里云',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    tag: '国产优选',
    tagClass: 'bg-blue-100 text-blue-800'
  },
  {
    name: '文心一言',
    abbr: 'ERNIE',
    provider: '百度',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    tag: '中文理解',
    tagClass: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'DeepSeek',
    abbr: 'DS',
    provider: 'DeepSeek',
    bgColor: 'bg-cyan-100',
    textColor: 'text-cyan-600',
    tag: '高性价比',
    tagClass: 'bg-cyan-100 text-cyan-800'
  }
]
</script>
