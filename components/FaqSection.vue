<template>
  <section id="faq" class="py-20 md:py-32 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">常见问题</h2>
        <p class="section-subtitle">
          关于黔前Ai助手的常见疑问解答
        </p>
      </div>

      <!-- FAQ List -->
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqs" 
          :key="index"
          class="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            class="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
            @click="toggleFaq(index)"
          >
            <span class="font-semibold text-gray-900 pr-4">{{ item.question }}</span>
            <ChevronDownIcon 
              class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
            />
          </button>
          <div 
            v-show="openIndex === index"
            class="px-6 pb-5 text-gray-600 leading-relaxed"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">还有其他问题？</p>
        <NuxtLink to="/community" class="btn-primary">
          联系我们
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const openIndex = ref(0)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: '黔前Ai助手支持哪些AI大模型？',
    answer: '黔前Ai助手深度集成了国内外主流大模型，包括OpenAI的GPT-4/GPT-3.5、Anthropic的Claude系列、阿里云的通义千问、百度的文心一言、智谱AI的ChatGLM、DeepSeek等。用户可以根据需求自由切换模型，也可以配置自己的API Key。'
  },
  {
    question: '社区版和企业版有什么区别？',
    answer: '社区版面向个人用户，免费开源，支持基础的AI对话、知识库等功能，适合个人学习和轻度使用。企业版面向商业用户，提供团队协作、企业知识库、统一管理后台、高级安全功能、API接口等企业级功能，需要商业授权。'
  },
  {
    question: '数据安全如何保障？',
    answer: '黔前Ai助手非常重视数据安全：1）支持私有化部署，数据完全存储在本地服务器；2）支持国密SM2/SM3/SM4算法加密；3）提供细粒度的权限管控；4）支持审计日志；5）政府版专门适配国产操作系统和密码标准。'
  },
  {
    question: '是否支持国产操作系统？',
    answer: '是的，政府版专门适配了统信UOS、麒麟等国产操作系统，符合政务信息化要求。同时支持龙芯、飞腾等国产CPU架构，满足政府机关和国企的安全合规需求。'
  },
  {
    question: '如何获取技术支持？',
    answer: '社区版用户可以通过GitHub Issues、社区论坛获取技术支持。企业版和政府版用户享有专属技术支持通道，包括在线客服、电话支持、远程协助等服务。服务器版客户还可获得7x24小时技术支持。'
  },
  {
    question: '是否支持二次开发？',
    answer: '社区版完全开源，基于MIT协议，欢迎开发者进行二次开发。我们也提供了完善的开发文档和API接口。企业版和服务版支持定制化开发，可以根据企业需求进行功能定制。'
  },
  {
    question: '系统部署要求是什么？',
    answer: '客户端版本（社区版/企业版）支持Windows 10+、macOS 10.15+、主流Linux发行版。服务器版支持Linux（推荐Ubuntu/CentOS）和macOS服务器。最低配置要求4核CPU、8GB内存，推荐16GB以上内存获得更好的性能体验。'
  },
  {
    question: '如何升级到最新版本？',
    answer: '桌面版客户端支持自动检测更新，可以在设置中开启自动更新。也可以访问官网下载页面手动下载最新版本。服务器版建议使用Docker部署，通过拉取最新镜像进行升级，具体升级指南请参考文档中心。'
  }
]
</script>
