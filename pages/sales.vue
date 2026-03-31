<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-white">专业咨询与购买服务</h1>
        <p class="mt-4 text-lg text-primary-100">
          为您的组织提供定制化的AI解决方案，从咨询到部署全程支持
        </p>
      </div>
    </section>

    <!-- Service Types -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">选择服务类型</h2>
          <p class="mt-2 text-gray-600">根据您的需求选择合适的服务入口</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- 咨询获取 -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-blue-50 px-6 py-8 text-center">
              <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <BuildingLibraryIcon class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">咨询获取</h3>
              <p class="mt-2 text-sm text-blue-600 font-medium">政府版专属</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">国产系统适配咨询</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">安全合规方案评估</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">采购流程指导</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">试用申请与部署</span>
                </li>
              </ul>
              <div class="space-y-3">
                <div class="flex items-center text-sm text-gray-600">
                  <PhoneIcon class="w-4 h-4 mr-2 text-gray-400" />
                  <span>400-888-8888 转 1</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon class="w-4 h-4 mr-2 text-gray-400" />
                  <span>gov@qqai.com</span>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6">
              <a 
                href="mailto:gov@qqai.com?subject=政府版咨询"
                class="block w-full text-center py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                立即咨询
              </a>
            </div>
          </div>

          <!-- 联系购买 -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-purple-50 px-6 py-8 text-center">
              <div class="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <BuildingOfficeIcon class="w-8 h-8 text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">联系购买</h3>
              <p class="mt-2 text-sm text-purple-600 font-medium">企业版专属</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">授权方案定制</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">团队规模报价</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">功能模块选配</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">企业采购流程</span>
                </li>
              </ul>
              <div class="space-y-3">
                <div class="flex items-center text-sm text-gray-600">
                  <PhoneIcon class="w-4 h-4 mr-2 text-gray-400" />
                  <span>400-888-8888 转 2</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon class="w-4 h-4 mr-2 text-gray-400" />
                  <span>sales@qqai.com</span>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6">
              <a 
                href="mailto:sales@qqai.com?subject=企业版购买咨询"
                class="block w-full text-center py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                联系购买
              </a>
            </div>
          </div>

          <!-- 方案咨询 -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
            <div class="bg-orange-50 px-6 py-8 text-center">
              <div class="w-16 h-16 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <ServerIcon class="w-8 h-8 text-orange-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900">方案咨询</h3>
              <p class="mt-2 text-sm text-orange-600 font-medium">服务器版专属</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">私有化部署规划</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">集群架构设计</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">定制开发需求</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span class="text-gray-600">运维支持方案</span>
                </li>
              </ul>
              <div class="space-y-3">
                <div class="flex items-center text-sm text-gray-600">
                  <PhoneIcon class="w-4 h-4 mr-2 text-gray-400" />
                  <span>400-888-8888 转 3</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon class="w-4 h-4 mr-2 text-gray-400" />
                  <span>enterprise@qqai.com</span>
                </div>
              </div>
            </div>
            <div class="px-6 pb-6">
              <a 
                href="mailto:enterprise@qqai.com?subject=服务器版方案咨询"
                class="block w-full text-center py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                方案咨询
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">填写咨询表单</h2>
          <p class="mt-2 text-gray-600">留下您的信息，我们的专业顾问将在24小时内与您联系</p>
        </div>

        <form class="space-y-6" @submit.prevent="submitForm">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="您的姓名"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">电话 *</label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="联系电话"
              >
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">邮箱 *</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="your@email.com"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">公司名称</label>
              <input 
                v-model="form.company"
                type="text" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                placeholder="您的公司名称"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">咨询类型 *</label>
            <select 
              v-model="form.type"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            >
              <option value="">请选择咨询类型</option>
              <option value="government">政府版 - 咨询获取</option>
              <option value="enterprise">企业版 - 联系购买</option>
              <option value="server">服务器版 - 方案咨询</option>
              <option value="other">其他咨询</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">需求描述</label>
            <textarea 
              v-model="form.message"
              rows="4" 
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
              placeholder="请简要描述您的需求，如使用场景、团队规模、特殊要求等..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-lg"
            :disabled="submitting"
          >
            {{ submitting ? '提交中...' : '提交咨询' }}
          </button>
        </form>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">为什么选择黔前Ai助手</h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div class="w-12 h-12 mx-auto bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheckIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">安全可靠</h3>
            <p class="text-sm text-gray-600">支持私有化部署，数据完全自主可控，符合等保要求</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div class="w-12 h-12 mx-auto bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <CogIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">灵活定制</h3>
            <p class="text-sm text-gray-600">根据业务需求定制功能模块，提供个性化解决方案</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div class="w-12 h-12 mx-auto bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <UserGroupIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">专业团队</h3>
            <p class="text-sm text-gray-600">资深技术团队提供全程支持，从咨询到部署一站式服务</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div class="w-12 h-12 mx-auto bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <ClockIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">快速响应</h3>
            <p class="text-sm text-gray-600">24小时内响应咨询，专业顾问一对一服务</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-900">常见问题</h2>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(item, index) in faqs" 
            :key="index"
            class="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              class="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              @click="toggleFaq(index)"
            >
              <span class="font-medium text-gray-900 pr-4">{{ item.question }}</span>
              <ChevronDownIcon 
                class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openFaq === index }"
              />
            </button>
            <div 
              v-show="openFaq === index"
              class="px-6 py-4 text-gray-600 leading-relaxed bg-white"
            >
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  ServerIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  CogIcon,
  UserGroupIcon,
  ClockIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '咨询与购买 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '获取黔前Ai助手政府版、企业版、服务器版的专业咨询和购买服务，提供私有化部署、定制开发等解决方案。' }
  ]
})

const openFaq = ref(-1)
const submitting = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  company: '',
  type: '',
  message: ''
})

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? -1 : index
}

const submitForm = async () => {
  submitting.value = true
  // 模拟提交
  await new Promise(resolve => setTimeout(resolve, 1500))
  alert('感谢您的咨询！我们的专业顾问将在24小时内与您联系。')
  submitting.value = false
  form.value = { name: '', phone: '', email: '', company: '', type: '', message: '' }
}

const faqs = [
  {
    question: '政府版和企业版有什么区别？',
    answer: '政府版专为政务场景设计，适配国产操作系统（UOS、麒麟等），支持国密SM2/SM3/SM4算法，完全符合等保2.0要求。企业版面向商业用户，提供团队协作、企业知识库、移动办公等功能，支持Windows、macOS、Linux、iOS、Android全平台。'
  },
  {
    question: '服务器版支持多大的并发量？',
    answer: '服务器版采用分布式架构设计，单节点可支持1000+并发用户，通过集群部署可轻松扩展至数万用户。具体部署方案需根据您的实际用户规模和业务场景进行规划。'
  },
  {
    question: '是否支持试用？',
    answer: '政府版和企业版提供30天免费试用期，可部署在您的本地环境进行功能验证。服务器版提供POC（概念验证）服务，我们的技术团队将协助您完成小规模部署测试。'
  },
  {
    question: '购买流程是怎样的？',
    answer: '1. 提交咨询表单或致电销售热线；2. 需求沟通与方案设计；3. 商务报价与合同签订；4. 产品部署与培训交付；5. 售后支持与持续服务。整个流程通常需要2-4周。'
  },
  {
    question: '是否支持定制化开发？',
    answer: '是的，我们提供定制开发服务。可以根据您的业务需求定制功能模块、开发专属技能、对接内部系统等。具体需求和费用将在需求评估后确定。'
  }
]
</script>
