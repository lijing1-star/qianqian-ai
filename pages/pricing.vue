<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-white border-b border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">定价方案</h1>
        <p class="mt-4 text-lg text-gray-600">
          选择适合您的版本，开启AI智能办公
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="plan in pricingPlans" 
            :key="plan.name"
            class="bg-white rounded-2xl shadow-sm border-2 overflow-hidden flex flex-col"
            :class="plan.borderColor"
          >
            <!-- Plan Header -->
            <div class="px-6 py-6" :class="plan.headerBg">
              <h3 class="text-lg font-bold" :class="plan.titleColor">{{ plan.name }}</h3>
              <p class="mt-1 text-sm text-gray-600">{{ plan.description }}</p>
              <div class="mt-4">
                <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
                <span v-if="plan.period" class="text-gray-500">/{{ plan.period }}</span>
              </div>
            </div>

            <!-- Features -->
            <div class="px-6 py-6 flex-1">
              <ul class="space-y-3">
                <li v-for="feature in plan.features" :key="feature" class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-sm text-gray-600">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <div class="px-6 py-6 bg-gray-50 border-t border-gray-100">
              <NuxtLink 
                :to="plan.ctaLink"
                class="block w-full text-center py-3 rounded-lg font-medium transition-colors"
                :class="plan.buttonClass"
              >
                {{ plan.ctaText }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enterprise Features -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">企业版功能详情</h2>
          <p class="mt-2 text-gray-600">为企业团队提供全方位的AI办公解决方案</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="category in enterpriseFeatures" :key="category.title">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ category.title }}</h3>
            <ul class="space-y-3">
              <li v-for="feature in category.features" :key="feature" class="flex items-start">
                <CheckIcon class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-8">常见问题</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-16 bg-primary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-4">需要定制化方案？</h2>
        <p class="text-primary-100 mb-8">
          我们为大型企业和政府机构提供定制化解决方案，请联系我们的销售团队获取专属报价
        </p>
        <NuxtLink to="/community" class="inline-flex items-center justify-center px-8 py-3 text-primary-700 bg-white rounded-lg font-medium hover:bg-gray-100 transition-colors">
          联系销售
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'

useHead({
  title: '定价 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '黔前Ai助手定价方案，包括免费的社区版、政务专用的政府版、功能全面的企业版和私有化部署的服务器版。' }
  ]
})

const pricingPlans = [
  {
    name: '社区版',
    description: '个人用户和开发者',
    price: '免费',
    period: null,
    borderColor: 'border-green-200',
    headerBg: 'bg-green-50',
    titleColor: 'text-green-700',
    buttonClass: 'bg-green-600 text-white hover:bg-green-700',
    features: [
      'AI智能对话',
      '本地知识库（1GB）',
      '基础技能系统',
      '多模型切换',
      '社区技术支持',
      '开源代码',
      'Windows/macOS/Linux'
    ],
    ctaText: '免费下载',
    ctaLink: '/download'
  },
  {
    name: '政府版',
    description: '政府机构和事业单位',
    price: '定制',
    period: null,
    borderColor: 'border-blue-200',
    headerBg: 'bg-blue-50',
    titleColor: 'text-blue-700',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    features: [
      '国产系统适配（UOS/麒麟）',
      '国密算法支持',
      '完全本地化部署',
      '政务场景优化',
      '专属技术支持',
      '定制化开发',
      '安全合规认证'
    ],
    ctaText: '咨询获取',
    ctaLink: '/community'
  },
  {
    name: '企业版',
    description: '企业团队使用',
    price: '¥99',
    period: '人/月',
    borderColor: 'border-purple-200',
    headerBg: 'bg-purple-50',
    titleColor: 'text-purple-700',
    buttonClass: 'bg-purple-600 text-white hover:bg-purple-700',
    features: [
      '团队协作功能',
      '企业知识库（10GB/人）',
      '完整技能系统',
      '移动端支持（iOS/Android）',
      '统一管理后台',
      '企业技术支持',
      'API接口访问'
    ],
    ctaText: '联系购买',
    ctaLink: '/community'
  },
  {
    name: '服务器版',
    description: '大规模私有部署',
    price: '定制',
    period: null,
    borderColor: 'border-orange-200',
    headerBg: 'bg-orange-50',
    titleColor: 'text-orange-700',
    buttonClass: 'bg-orange-600 text-white hover:bg-orange-700',
    features: [
      '大规模并发支持',
      '集群部署方案',
      '开放API接口',
      'SSO单点登录',
      '定制化开发',
      '7x24技术支持',
      '专属客户经理'
    ],
    ctaText: '方案咨询',
    ctaLink: '/community'
  }
]

const enterpriseFeatures = [
  {
    title: '团队协作',
    features: [
      '无限团队成员',
      '共享知识库空间',
      '团队对话历史',
      '权限分级管理',
      '部门组织架构'
    ]
  },
  {
    title: '管理功能',
    features: [
      '统一账号管理',
      '使用统计分析',
      '内容审核功能',
      '安全策略配置',
      '审计日志记录'
    ]
  },
  {
    title: '高级功能',
    features: [
      '优先模型响应',
      '高级数据分析',
      '自定义技能',
      '品牌定制',
      '私有模型接入'
    ]
  }
]

const faqs = [
  {
    question: '社区版真的免费吗？',
    answer: '是的，社区版完全免费，永久开源。您可以自由下载、使用和修改源代码，基于MIT协议发布。'
  },
  {
    question: '企业版如何计费？',
    answer: '企业版按用户数计费，每月99元/人。我们提供年付优惠，年付可享受8折优惠。具体价格请联系销售团队。'
  },
  {
    question: '是否支持退款？',
    answer: '企业版和政府版支持7天无理由退款。服务器版根据项目进度协商退款事宜。'
  },
  {
    question: '如何升级版本？',
    answer: '您可以从社区版直接升级到企业版，数据会自动迁移。升级只需补差价即可。'
  }
]
</script>
