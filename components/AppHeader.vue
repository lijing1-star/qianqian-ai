<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">黔</span>
          </div>
          <span class="text-xl font-bold text-gray-900">黔前Ai助手</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            :class="{ 'text-primary-600': $route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <NuxtLink to="/download" class="btn-primary text-sm">
            立即下载
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 text-gray-600 hover:text-gray-900"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-white border-t border-gray-100"
    >
      <div class="px-4 py-3 space-y-2">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
          :class="{ 'text-primary-600 bg-primary-50': $route.path === item.path }"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
        <NuxtLink 
          to="/download" 
          class="block px-3 py-2 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
          @click="mobileMenuOpen = false"
        >
          立即下载
        </NuxtLink>
      </div>
    </div>
  </header>
  <div class="h-16"></div>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '下载', path: '/download' },
  { name: '文档', path: '/docs' },
  { name: '定价', path: '/pricing' },
  { name: '社区', path: '/community' },
]
</script>
