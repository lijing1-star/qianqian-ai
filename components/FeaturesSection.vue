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

      <!-- Features Grid - 3列对称布局 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="feature in features"
          :key="feature.id"
          :to="feature.link"
          class="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
        >
          <!-- Icon Header -->
          <div class="flex items-center space-x-4 mb-4">
            <div
              class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              :class="feature.iconBg"
            >
              <component :is="feature.icon" class="w-7 h-7" :class="feature.iconColor" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {{ feature.title }}
              </h3>
            </div>
            <ArrowRightIcon class="w-5 h-5 text-gray-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
          </div>
          
          <!-- Description -->
          <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ feature.description }}</p>
          
          <!-- Tags -->
          <div v-if="feature.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in feature.tags"
              :key="tag"
              class="px-2.5 py-1 text-xs font-medium rounded-full"
              :class="feature.tagClass"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
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
    description: '支持多轮对话、上下文理解，可调用多种AI模型进行智能问答，满足日常咨询、专业问题解答等需求。',
    icon: ChatBubbleLeftRightIcon,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    link: '/docs/ai-chat',
    tags: ['GPT-4', 'Claude', '通义千问', 'DeepSeek'],
    tagClass: 'bg-blue-50 text-blue-700'
  },
  {
    id: 'knowledge-base',
    title: '知识库系统',
    description: '支持上传PDF、Word、Excel、PPT等文档，自动建立向量索引，实现智能检索和问答。',
    icon: FolderOpenIcon,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    link: '/docs/knowledge-base',
    tags: ['向量检索', 'PDF解析', '智能问答'],
    tagClass: 'bg-green-50 text-green-700'
  },
  {
    id: 'meeting',
    title: '会议纪要',
    description: '支持语音转文字、自动提取会议要点、生成结构化会议纪要，大幅提升会议效率。',
    icon: MicrophoneIcon,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    link: '/docs/meeting',
    tags: ['语音转写', '智能摘要', '参会人管理'],
    tagClass: 'bg-purple-50 text-purple-700'
  },
  {
    id: 'skills',
    title: '技能系统',
    description: '内置20+实用技能，涵盖文档生成、内容创作、数据分析、翻译、代码编写等多个领域。',
    icon: WrenchIcon,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    link: '/docs/skills',
    tags: ['文档生成', '内容创作', '数据分析'],
    tagClass: 'bg-orange-50 text-orange-700'
  },
  {
    id: 'document',
    title: '文档模式',
    description: '专业的文档编辑环境，支持AI辅助写作、智能续写、格式调整，让文档创作更轻松。',
    icon: DocumentTextIcon,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    link: '/docs/document',
    tags: ['AI写作', '智能排版', '模板库'],
    tagClass: 'bg-pink-50 text-pink-700'
  },
  {
    id: 'tender',
    title: '招投标助手',
    description: '专为招投标场景设计，支持招标文件解析、投标书生成、资质管理等功能。',
    icon: DocumentMagnifyingGlassIcon,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    link: '/docs/tender',
    tags: ['标书生成', '资质管理', '文件解析'],
    tagClass: 'bg-indigo-50 text-indigo-700'
  },
  {
    id: 'models',
    title: '多模型集成',
    description: '深度集成国内外主流大模型，用户可根据需求自由切换，获得最佳问答体验。',
    icon: CpuChipIcon,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    link: '/docs/models',
    tags: ['OpenAI', '通义千问', 'DeepSeek'],
    tagClass: 'bg-cyan-50 text-cyan-700'
  },
  {
    id: 'security',
    title: '数据安全',
    description: '支持私有化部署，数据完全本地存储，支持国密算法加密，满足政府和企业安全合规要求。',
    icon: ShieldCheckIcon,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    link: '/docs/security',
    tags: ['私有化部署', '国密算法', '权限管控'],
    tagClass: 'bg-red-50 text-red-700'
  },
  {
    id: 'api',
    title: 'API接口',
    description: '企业版和服务器版提供完整API，支持将AI能力集成到您的业务系统中。',
    icon: CodeBracketIcon,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    link: '/docs/api',
    tags: ['RESTful', 'SDK', 'Webhook'],
    tagClass: 'bg-teal-50 text-teal-700'
  }
]
</script>
