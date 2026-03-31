<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-white border-b border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">联系我们</h1>
        <p class="mt-4 text-lg text-gray-600">
          我们期待与您建立联系，为您提供专业的AI解决方案
        </p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- 商务合作 -->
          <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-100">
              <BriefcaseIcon class="w-7 h-7 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">商务合作</h3>
            <p class="text-gray-600 mb-6">企业采购、定制化需求、战略合作</p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-700">
                <EnvelopeIcon class="w-5 h-5 mr-3 text-gray-400" />
                <span>business@qqai.com</span>
              </div>
              <div class="flex items-center text-gray-700">
                <PhoneIcon class="w-5 h-5 mr-3 text-gray-400" />
                <span>0851-8888-8888</span>
              </div>
            </div>
            <a 
              href="mailto:business@qqai.com"
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <PaperAirplaneIcon class="w-5 h-5 mr-2" />
              发送邮件
            </a>
          </div>

          <!-- 技术支持 -->
          <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-100">
              <WrenchIcon class="w-7 h-7 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">技术支持</h3>
            <p class="text-gray-600 mb-6">产品使用、技术咨询、故障反馈</p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-700">
                <EnvelopeIcon class="w-5 h-5 mr-3 text-gray-400" />
                <span>support@qqai.com</span>
              </div>
              <div class="flex items-center text-gray-700">
                <ClockIcon class="w-5 h-5 mr-3 text-gray-400" />
                <span>7×24 小时</span>
              </div>
            </div>
            <a 
              href="mailto:support@qqai.com"
              class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <TicketIcon class="w-5 h-5 mr-2" />
              提交工单
            </a>
          </div>

          <!-- 客服热线 -->
          <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-orange-100">
              <PhoneIcon class="w-7 h-7 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">客服热线</h3>
            <p class="text-gray-600 mb-6">7×24 小时在线服务</p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-700">
                <PhoneIcon class="w-5 h-5 mr-3 text-gray-400" />
                <span class="text-2xl font-bold text-orange-600">400-888-8888</span>
              </div>
              <div class="flex items-center text-gray-700">
                <ChatBubbleLeftRightIcon class="w-5 h-5 mr-3 text-gray-400" />
                <span>在线客服</span>
              </div>
            </div>
            <a 
              href="tel:400-888-8888"
              class="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              <PhoneIcon class="w-5 h-5 mr-2" />
              立即拨打
            </a>
          </div>

          <!-- 公司地址 -->
          <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-purple-100">
              <MapPinIcon class="w-7 h-7 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">公司地址</h3>
            <p class="text-gray-600 mb-6">欢迎来访洽谈</p>
            <div class="space-y-3 mb-6">
              <div class="flex items-start text-gray-700">
                <MapPinIcon class="w-5 h-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>贵州省贵阳市观山湖区<br>大数据综合保税区 A 栋 18 层</span>
              </div>
            </div>
            <a 
              href="https://map.baidu.com/search/%E8%B4%B5%E9%98%B3%E5%B8%82%E8%A7%82%E5%B1%B1%E6%B9%96%E5%8C%BA%E5%A4%A7%E6%95%B0%E6%8D%AE%E7%BB%BC%E5%90%88%E4%BF%9D%E7%A8%8E%E5%8C%BA"
              target="_blank"
              class="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              <MapIcon class="w-5 h-5 mr-2" />
              查看地图
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">给我们留言</h2>
          <p class="mt-2 text-gray-600">有问题或建议？请填写以下表单与我们联系</p>
        </div>

        <form class="space-y-6" @submit.prevent="submitForm">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
              <input 
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="您的姓名"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
              <input 
                type="email" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="your@email.com"
              >
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">咨询类型</label>
            <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors">
              <option>产品咨询</option>
              <option>技术支持</option>
              <option>商务合作</option>
              <option>加入我们</option>
              <option>其他</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">留言内容</label>
            <textarea 
              rows="5" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
              placeholder="请详细描述您的需求或问题..."
            ></textarea>
          </div>
          <button type="submit" class="w-full btn-primary py-4 text-lg">
            提交留言
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  BriefcaseIcon,
  WrenchIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  MapIcon,
  PaperAirplaneIcon,
  TicketIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '联系我们 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '联系黔前Ai助手团队，获取技术支持、商务合作、企业咨询等服务。' }
  ]
})

const submitForm = () => {
  alert('感谢您的留言！我们会尽快与您联系。')
}
</script>
