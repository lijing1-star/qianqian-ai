<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-white border-b border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">下载黔前Ai助手</h1>
        <p class="mt-4 text-lg text-gray-600">
          选择适合您的版本开始体验
        </p>
      </div>
    </section>

    <!-- Version Tabs -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Tab Navigation -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            v-for="version in versions"
            :key="version.id"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="activeVersion === version.id ? 'bg-primary-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'"
            @click="activeVersion = version.id"
          >
            {{ version.name }}
            <span 
              class="ml-2 px-2 py-0.5 text-xs rounded-full"
              :class="activeVersion === version.id ? 'bg-white/20' : 'bg-gray-100 text-gray-600'"
            >
              {{ version.badge }}
            </span>
          </button>
        </div>

        <!-- Version Content -->
        <div class="transition-all duration-300">
          <!-- Version Info Card -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div class="p-8" :class="currentVersion.headerBg">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div class="flex items-center space-x-3">
                    <div 
                      class="w-12 h-12 rounded-xl flex items-center justify-center"
                      :class="currentVersion.iconBg"
                    >
                      <component :is="currentVersion.icon" class="w-6 h-6" :class="currentVersion.iconColor" />
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold text-gray-900">{{ currentVersion.name }}</h2>
                      <p class="text-gray-600">{{ currentVersion.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="text-sm text-gray-500">最新版本</span>
                  <div class="text-xl font-bold text-gray-900">{{ currentVersion.version }}</div>
                  <div class="text-sm text-gray-500">{{ currentVersion.date }}</div>
                </div>
              </div>
            </div>

            <!-- Downloads Grid -->
            <div class="p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-6">选择您的平台</h3>
              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  v-for="platform in currentVersion.platforms" 
                  :key="platform.name"
                  class="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div class="flex items-start justify-between">
                    <div class="flex items-center space-x-3">
                      <component :is="platform.icon" class="w-8 h-8 text-gray-600" />
                      <div>
                        <h4 class="font-semibold text-gray-900">{{ platform.name }}</h4>
                        <p class="text-sm text-gray-500">{{ platform.arch }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 space-y-2">
                    <button class="w-full py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center" :class="currentVersion.buttonClass">
                      <ArrowDownTrayIcon class="w-4 h-4 mr-2" />
                      下载安装包
                    </button>
                    <div class="flex space-x-2">
                      <button 
                        v-if="platform.portable"
                        class="flex-1 py-2 px-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        便携版
                      </button>
                      <button 
                        class="flex-1 py-2 px-3 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        查看SHA256
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="px-8 py-6 bg-gray-50 border-t border-gray-200">
              <div class="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">系统要求</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li v-for="req in currentVersion.requirements" :key="req">• {{ req }}</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">包含功能</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li v-for="feat in currentVersion.features" :key="feat">• {{ feat }}</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">获取方式</h4>
                  <p class="text-gray-600">{{ currentVersion.obtainMethod }}</p>
                  <NuxtLink 
                    v-if="currentVersion.ctaLink" 
                    :to="currentVersion.ctaLink"
                    class="inline-flex items-center mt-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {{ currentVersion.ctaText }}
                    <ArrowRightIcon class="w-4 h-4 ml-1" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- All Versions Table -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">版本对比</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">功能特性</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">社区版</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">政府版</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">企业版</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">服务器版</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="row in comparisonRows" :key="row.feature">
                  <td class="px-6 py-4 text-sm text-gray-900">{{ row.feature }}</td>
                  <td class="px-6 py-4 text-center">
                    <CheckIcon v-if="row.community === true" class="w-5 h-5 text-green-500 mx-auto" />
                    <XMarkIcon v-else-if="row.community === false" class="w-5 h-5 text-gray-300 mx-auto" />
                    <span v-else class="text-sm text-gray-600">{{ row.community }}</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <CheckIcon v-if="row.government === true" class="w-5 h-5 text-green-500 mx-auto" />
                    <XMarkIcon v-else-if="row.government === false" class="w-5 h-5 text-gray-300 mx-auto" />
                    <span v-else class="text-sm text-gray-600">{{ row.government }}</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <CheckIcon v-if="row.enterprise === true" class="w-5 h-5 text-green-500 mx-auto" />
                    <XMarkIcon v-else-if="row.enterprise === false" class="w-5 h-5 text-gray-300 mx-auto" />
                    <span v-else class="text-sm text-gray-600">{{ row.enterprise }}</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <CheckIcon v-if="row.server === true" class="w-5 h-5 text-green-500 mx-auto" />
                    <XMarkIcon v-else-if="row.server === false" class="w-5 h-5 text-gray-300 mx-auto" />
                    <span v-else class="text-sm text-gray-600">{{ row.server }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CheckIcon,
  XMarkIcon,
  UsersIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  ServerIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '下载 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '下载黔前Ai助手各版本，包括社区版、政府版、企业版和服务器版。支持Windows、macOS、Linux、UOS、iOS和Android平台。' }
  ]
})

const activeVersion = ref('community')

// 获取当前选中的版本数据
const currentVersion = computed(() => {
  return versions.find(v => v.id === activeVersion.value) || versions[0]
})

const versions = [
  {
    id: 'community',
    name: '社区版',
    badge: '免费',
    description: '面向个人用户和开发者的免费开源版本',
    version: 'v1.0.0',
    date: '2024-03-30',
    icon: UsersIcon,
    headerBg: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    buttonClass: 'bg-green-600 text-white hover:bg-green-700',
    platforms: [
      { name: 'Windows', arch: 'x64 / arm64', icon: ComputerDesktopIcon, portable: true },
      { name: 'macOS', arch: 'Intel / Apple Silicon', icon: ComputerDesktopIcon, portable: false },
      { name: 'Linux', arch: 'x64 / arm64', icon: ComputerDesktopIcon, portable: true },
    ],
    requirements: ['Windows 10+ / macOS 10.15+ / Ubuntu 20.04+', '4核 CPU', '8GB 内存', '2GB 存储空间'],
    features: ['AI对话', '知识库', '基础技能', '多模型支持', '本地部署'],
    obtainMethod: '免费下载使用，源码托管在GitHub开源',
    ctaLink: 'https://github.com',
    ctaText: '访问GitHub'
  },
  {
    id: 'government',
    name: '政府版',
    badge: '政务专用',
    description: '专为政府机构打造的国产化适配版本',
    version: 'v1.0.0',
    date: '2024-03-30',
    icon: BuildingLibraryIcon,
    headerBg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    platforms: [
      { name: 'UOS', arch: '龙芯/飞腾/x86', icon: ComputerDesktopIcon, portable: false },
    ],
    requirements: ['统信UOS 20+ / 麒麟V10+', '4核 CPU', '8GB 内存', '2GB 存储空间', '国产CPU支持'],
    features: ['国产系统适配', '国密算法', '完全本地化', '政务场景优化', '专属支持'],
    obtainMethod: '请联系我们的政府服务团队获取',
    ctaLink: '/community',
    ctaText: '联系咨询'
  },
  {
    id: 'enterprise',
    name: '企业版',
    badge: '商业授权',
    description: '面向企业团队的协作办公版本',
    version: 'v1.0.0',
    date: '2024-03-30',
    icon: BuildingOfficeIcon,
    headerBg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    buttonClass: 'bg-purple-600 text-white hover:bg-purple-700',
    platforms: [
      { name: 'Windows', arch: 'x64 / arm64', icon: ComputerDesktopIcon, portable: false },
      { name: 'macOS', arch: 'Intel / Apple Silicon', icon: ComputerDesktopIcon, portable: false },
      { name: 'Linux', arch: 'x64 / arm64', icon: ComputerDesktopIcon, portable: false },
      { name: 'iOS', arch: 'iPhone / iPad', icon: DevicePhoneMobileIcon, portable: false },
      { name: 'Android', arch: '手机 / 平板', icon: DevicePhoneMobileIcon, portable: false },
    ],
    requirements: ['Windows 10+ / macOS 11+ / Android 8+ / iOS 14+', '4核 CPU', '8GB 内存', '2GB 存储空间'],
    features: ['团队协作', '企业知识库', '统一管理', '高级安全', '移动办公'],
    obtainMethod: '购买商业授权后即可下载部署',
    ctaLink: '/pricing',
    ctaText: '查看定价'
  },
  {
    id: 'server',
    name: '服务器版',
    badge: '私有部署',
    description: '面向大规模私有部署的服务器版本',
    version: 'v1.0.0',
    date: '2024-03-30',
    icon: ServerIcon,
    headerBg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    buttonClass: 'bg-orange-600 text-white hover:bg-orange-700',
    platforms: [
      { name: 'Linux', arch: 'x64 / arm64', icon: ServerIcon, portable: false },
      { name: 'macOS', arch: 'Server', icon: ServerIcon, portable: false },
    ],
    requirements: ['Ubuntu 20.04+ / CentOS 7+ / Debian 11+', '8核 CPU', '32GB 内存', '50GB 存储空间', 'Docker支持'],
    features: ['大规模并发', '集群部署', 'API开放', '定制开发', '7x24支持'],
    obtainMethod: '联系销售获取部署方案和报价',
    ctaLink: '/community',
    ctaText: '方案咨询'
  }
]

const comparisonRows = [
  { feature: 'AI智能对话', community: true, government: true, enterprise: true, server: true },
  { feature: '知识库管理', community: true, government: true, enterprise: true, server: true },
  { feature: '会议纪要', community: true, government: true, enterprise: true, server: true },
  { feature: '技能系统', community: '基础', government: '全部', enterprise: '全部', server: '全部+定制' },
  { feature: '多模型支持', community: true, government: true, enterprise: true, server: true },
  { feature: '团队协作', community: false, government: true, enterprise: true, server: true },
  { feature: '移动端支持', community: false, government: false, enterprise: true, server: false },
  { feature: '国产系统适配', community: false, government: true, enterprise: false, server: false },
  { feature: '国密算法', community: false, government: true, enterprise: '可选', server: '可选' },
  { feature: '私有化部署', community: true, government: true, enterprise: true, server: true },
  { feature: '集群支持', community: false, government: false, enterprise: false, server: true },
  { feature: 'API接口', community: false, government: '受限', enterprise: true, server: true },
  { feature: '技术支持', community: '社区', government: '专属', enterprise: '企业级', server: '7x24' },
  { feature: '定制开发', community: false, government: true, enterprise: true, server: true },
]
</script>
