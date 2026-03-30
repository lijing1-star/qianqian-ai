<template>
  <section id="features" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">强大功能，助力高效办公</h2>
        <p class="section-subtitle">
          黔前Ai助手集成了多项AI能力，满足政府、企业的多样化办公需求
        </p>
      </div>

      <!-- Features List - 大图+文字布局 -->
      <div class="space-y-20">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Image Side -->
          <div class="w-full lg:w-1/2">
            <NuxtLink :to="feature.link" class="block group">
              <div class="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-500">
                <!-- Feature Screenshot - 真实软件截图 -->
                <img 
                  :src="feature.image" 
                  :alt="feature.title"
                  class="w-full h-auto aspect-[16/10] object-cover object-top"
                />
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors duration-300"></div>
              </div>
            </NuxtLink>
          </div>

          <!-- Content Side -->
          <div class="w-full lg:w-1/2 text-center lg:text-left">
            <NuxtLink :to="feature.link" class="group block">
              <!-- Icon & Title -->
              <div class="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                <div
                  class="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  :class="feature.iconBg"
                >
                  <component :is="feature.icon" class="w-7 h-7" :class="feature.iconColor" />
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {{ feature.title }}
                </h3>
              </div>
              
              <!-- Description -->
              <p class="text-gray-600 text-lg leading-relaxed mb-6">
                {{ feature.description }}
              </p>
              
              <!-- Tags -->
              <div v-if="feature.tags" class="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                <span
                  v-for="tag in feature.tags"
                  :key="tag"
                  class="px-3 py-1.5 text-sm font-medium rounded-full"
                  :class="feature.tagClass"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- CTA -->
              <div class="flex items-center justify-center lg:justify-start text-primary-600 font-medium group/link">
                了解详情
                <ArrowRightIcon class="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <p class="text-gray-600 mb-6">想了解更多功能详情？</p>
        <NuxtLink to="/docs" class="btn-primary">
          查看完整文档
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  FolderOpenIcon,
  MicrophoneIcon,
  WrenchIcon,
  DocumentMagnifyingGlassIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'

const features = [
  {
    id: 'ai-chat',
    title: 'AI 智能对话',
    description: '支持多轮对话、上下文理解，可调用多种AI模型进行智能问答。无论是日常咨询、专业问题解答，还是创意写作，都能获得高质量的回复。',
    icon: ChatBubbleLeftRightIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    image: '/images/feature-chat.png',
    link: '/docs/ai-chat',
    tags: ['GPT-4', 'Claude', '通义千问', 'DeepSeek'],
    tagClass: 'bg-blue-50 text-blue-700'
  },
  {
    id: 'knowledge-base',
    title: '知识库系统',
    description: '支持上传PDF、Word、Excel、PPT等多种格式文档，自动建立向量索引。基于RAG技术实现精准的知识检索和智能问答，让知识管理更高效。',
    icon: FolderOpenIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    image: '/images/feature-knowledge.png',
    link: '/docs/knowledge-base',
    tags: ['向量检索', 'PDF解析', '智能问答'],
    tagClass: 'bg-green-50 text-green-700'
  },
  {
    id: 'meeting',
    title: '会议纪要',
    description: '支持实时语音转文字、自动提取会议要点、生成结构化会议纪要。支持多人语音识别区分，大幅提升会议效率和信息留存质量。',
    icon: MicrophoneIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    image: '/images/feature-meeting.png',
    link: '/docs/meeting',
    tags: ['语音转写', '智能摘要', '参会人管理'],
    tagClass: 'bg-purple-50 text-purple-700'
  },
  {
    id: 'skills',
    title: '技能系统',
    description: '内置20+实用技能，涵盖文档生成、内容创作、数据分析、翻译、代码编写等多个领域。支持自定义技能开发，打造专属AI助手。',
    icon: WrenchIcon,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    image: '/images/feature-skills.png',
    link: '/docs/skills',
    tags: ['文档生成', '内容创作', '数据分析'],
    tagClass: 'bg-orange-50 text-orange-700'
  },
  {
    id: 'document',
    title: '文档模式',
    description: '专业的文档编辑环境，支持AI辅助写作、智能续写、格式调整。内置多种文档模板，一键生成各类公文、报告、方案。',
    icon: DocumentTextIcon,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    image: '/images/feature-document.png',
    link: '/docs/document',
    tags: ['AI写作', '智能排版', '模板库'],
    tagClass: 'bg-pink-50 text-pink-700'
  },
  {
    id: 'tender',
    title: '招投标助手',
    description: '专为招投标场景设计，支持招标文件解析、投标书自动生成、资质文件管理。大幅提升投标工作效率和标书质量。',
    icon: DocumentMagnifyingGlassIcon,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    image: '/images/feature-tender.png',
    link: '/docs/tender',
    tags: ['标书生成', '资质管理', '文件解析'],
    tagClass: 'bg-indigo-50 text-indigo-700'
  }
]
</script>
