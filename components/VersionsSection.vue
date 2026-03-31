<template>
  <section id="versions" class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">四大版本，满足不同需求</h2>
        <p class="section-subtitle">
          从个人用户到大型企业，从社区开源到政务服务，总有一款适合您
        </p>
      </div>

      <!-- Versions Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="version in versions" 
          :key="version.name"
          class="bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition-all duration-300 hover:shadow-lg"
          :class="version.borderColor"
        >
          <!-- Version Header -->
          <div class="px-6 py-5 border-b border-gray-100" :class="version.headerBg">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-bold" :class="version.titleColor">{{ version.name }}</h3>
              <span 
                class="px-2 py-1 text-xs font-semibold rounded-full"
                :class="version.badgeClass"
              >
                {{ version.badge }}
              </span>
            </div>
            <p class="mt-2 text-sm text-gray-600">{{ version.description }}</p>
          </div>

          <!-- Platforms -->
          <div class="px-6 py-4">
            <p class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">支持平台</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="platform in version.platforms" 
                :key="platform.name"
                class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
              >
                <component :is="platform.icon" class="w-3.5 h-3.5 mr-1" />
                {{ platform.name }}
              </span>
            </div>
          </div>

          <!-- Features -->
          <div class="px-6 py-4 border-t border-gray-100">
            <ul class="space-y-2">
              <li v-for="feature in version.features" :key="feature" class="flex items-start text-sm text-gray-600">
                <CheckIcon class="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="px-6 py-4 bg-gray-50">
            <NuxtLink 
              :to="version.ctaLink || '/download'" 
              class="block w-full text-center py-2.5 rounded-lg font-medium transition-colors"
              :class="version.buttonClass"
            >
              {{ version.cta }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  CheckIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  BuildingLibraryIcon
} from '@heroicons/vue/24/outline'

const versions = [
  {
    name: '社区版',
    badge: '免费',
    description: '适合个人用户和开发者',
    borderColor: 'border-green-200 hover:border-green-300',
    headerBg: 'bg-green-50/50',
    titleColor: 'text-green-700',
    badgeClass: 'bg-green-100 text-green-800',
    buttonClass: 'bg-green-600 text-white hover:bg-green-700',
    cta: '免费下载',
    platforms: [
      { name: 'Windows', icon: ComputerDesktopIcon },
      { name: 'macOS', icon: ComputerDesktopIcon },
      { name: 'Linux', icon: ComputerDesktopIcon },
    ],
    features: [
      '基础AI对话功能',
      '多模型切换',
      '本地知识库',
      '开源代码',
      '社区支持'
    ]
  },
  {
    name: '政府版',
    badge: '政务专用',
    description: '专为政府机构设计',
    borderColor: 'border-blue-200 hover:border-blue-300',
    headerBg: 'bg-blue-50/50',
    titleColor: 'text-blue-700',
    badgeClass: 'bg-blue-100 text-blue-800',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    cta: '咨询获取',
    ctaLink: '/sales',
    platforms: [
      { name: 'UOS', icon: BuildingLibraryIcon },
    ],
    features: [
      '国产操作系统适配',
      '国密算法支持',
      '完全本地化部署',
      '政务场景优化',
      '专属技术支持'
    ]
  },
  {
    name: '企业版',
    badge: '商业授权',
    description: '适合企业团队协作',
    borderColor: 'border-purple-200 hover:border-purple-300',
    headerBg: 'bg-purple-50/50',
    titleColor: 'text-purple-700',
    badgeClass: 'bg-purple-100 text-purple-800',
    buttonClass: 'bg-purple-600 text-white hover:bg-purple-700',
    cta: '联系购买',
    ctaLink: '/sales',
    platforms: [
      { name: 'Windows', icon: ComputerDesktopIcon },
      { name: 'macOS', icon: ComputerDesktopIcon },
      { name: 'Linux', icon: ComputerDesktopIcon },
      { name: 'iOS', icon: DevicePhoneMobileIcon },
      { name: 'Android', icon: DevicePhoneMobileIcon },
    ],
    features: [
      '团队协作功能',
      '企业知识库',
      '统一管理平台',
      '高级安全功能',
      '企业级支持'
    ]
  },
  {
    name: '服务器版',
    badge: '私有部署',
    description: '适合大规模私有部署',
    borderColor: 'border-orange-200 hover:border-orange-300',
    headerBg: 'bg-orange-50/50',
    titleColor: 'text-orange-700',
    badgeClass: 'bg-orange-100 text-orange-800',
    buttonClass: 'bg-orange-600 text-white hover:bg-orange-700',
    cta: '方案咨询',
    ctaLink: '/sales',
    platforms: [
      { name: 'Linux', icon: ServerIcon },
      { name: 'macOS', icon: ServerIcon },
    ],
    features: [
      '大规模并发支持',
      '集群部署方案',
      'API接口开放',
      '定制化开发',
      '7x24技术支持'
    ]
  }
]
</script>
