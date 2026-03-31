<template>
  <div class="bg-white min-h-screen">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-white">企业咨询服务</h1>
        <p class="mt-4 text-lg text-primary-100">
          为企业客户提供专业的AI解决方案和定制化服务
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <BuildingOfficeIcon class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">私有化部署</h3>
            <p class="text-gray-600">在您的自有服务器上部署，数据完全自主可控，满足企业安全合规要求</p>
          </div>
          <div class="bg-gray-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <WrenchIcon class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">定制开发</h3>
            <p class="text-gray-600">根据企业业务需求，定制专属AI技能和业务流程，深度集成现有系统</p>
          </div>
          <div class="bg-gray-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <AcademicCapIcon class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">培训支持</h3>
            <p class="text-gray-600">提供专业的使用培训和技术支持，帮助企业快速上手并充分利用AI能力</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">为什么选择我们</h2>
          <p class="mt-4 text-gray-600">专注政企市场，提供安全可靠的AI解决方案</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <ShieldCheckIcon class="w-10 h-10 text-green-500 mb-4" />
            <h3 class="font-semibold text-gray-900 mb-2">数据安全</h3>
            <p class="text-sm text-gray-600">私有化部署，数据不出企业，支持国密算法</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <CheckBadgeIcon class="w-10 h-10 text-blue-500 mb-4" />
            <h3 class="font-semibold text-gray-900 mb-2">合规认证</h3>
            <p class="text-sm text-gray-600">通过等保三级认证，符合政务软件规范</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <UserGroupIcon class="w-10 h-10 text-purple-500 mb-4" />
            <h3 class="font-semibold text-gray-900 mb-2">专业团队</h3>
            <p class="text-sm text-gray-600">7×24小时技术支持，快速响应企业需求</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <SparklesIcon class="w-10 h-10 text-orange-500 mb-4" />
            <h3 class="font-semibold text-gray-900 mb-2">持续创新</h3>
            <p class="text-sm text-gray-600">持续迭代更新，紧跟AI技术发展趋势</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">成功案例</h2>
          <p class="mt-4 text-gray-600">已为众多政府和企业客户提供服务</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="text-sm text-primary-600 font-medium mb-2">政务案例</div>
            <h3 class="font-bold text-gray-900 mb-3">某市政府办公厅</h3>
            <p class="text-gray-600 text-sm">部署私有化AI助手，用于公文写作、政策解读、会议纪要等场景，提升办公效率60%以上。</p>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="text-sm text-primary-600 font-medium mb-2">企业案例</div>
            <h3 class="font-bold text-gray-900 mb-3">某建筑集团</h3>
            <p class="text-gray-600 text-sm">定制招投标助手技能，自动解析招标文件、生成投标书，投标准备时间缩短70%。</p>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="text-sm text-primary-600 font-medium mb-2">教育案例</div>
            <h3 class="font-bold text-gray-900 mb-3">某高校图书馆</h3>
            <p class="text-gray-600 text-sm">搭建知识库系统，整合海量文献资料，为师生提供智能检索和问答服务。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900">获取企业方案</h2>
            <p class="mt-2 text-gray-600">填写以下信息，我们的商务顾问将在1个工作日内与您联系</p>
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
                <label class="block text-sm font-medium text-gray-700 mb-2">联系电话 *</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="您的电话"
                >
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">公司名称 *</label>
                <input 
                  v-model="form.company"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="您的公司名称"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">公司邮箱</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your@company.com"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">咨询类型 *</label>
              <select v-model="form.type" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors">
                <option value="">请选择咨询类型</option>
                <option value="purchase">企业版购买咨询</option>
                <option value="deploy">私有化部署方案</option>
                <option value="custom">定制开发需求</option>
                <option value="training">培训服务</option>
                <option value="other">其他</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">需求描述</label>
              <textarea 
                v-model="form.message"
                rows="4" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                placeholder="请描述您的具体需求，如用户规模、使用场景、预算范围等..."
              ></textarea>
            </div>

            <button type="submit" class="w-full btn-primary py-4 text-lg">
              提交咨询
            </button>

            <p class="text-xs text-gray-500 text-center">
              提交即表示您同意我们的<NuxtLink to="/privacy" class="text-primary-600 hover:underline">隐私政策</NuxtLink>和<NuxtLink to="/terms" class="text-primary-600 hover:underline">服务条款</NuxtLink>
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12">
          <div class="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <PhoneIcon class="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 class="font-semibold mb-2">咨询热线</h3>
              <p class="text-primary-100">400-XXX-XXXX</p>
              <p class="text-sm text-primary-200 mt-1">工作日 9:00-18:00</p>
            </div>
            <div>
              <EnvelopeIcon class="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 class="font-semibold mb-2">商务邮箱</h3>
              <p class="text-primary-100">enterprise@qianqianai.com</p>
              <p class="text-sm text-primary-200 mt-1">24小时内回复</p>
            </div>
            <div>
              <MapPinIcon class="w-8 h-8 mx-auto mb-4 opacity-80" />
              <h3 class="font-semibold mb-2">公司地址</h3>
              <p class="text-primary-100">贵州省贵阳市高新区</p>
              <p class="text-sm text-primary-200 mt-1">欢迎来访洽谈</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  BuildingOfficeIcon,
  WrenchIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: '企业咨询 - 黔前Ai助手',
  meta: [
    { name: 'description', content: '为企业客户提供专业的AI解决方案，包括私有化部署、定制开发、培训支持等服务。' }
  ]
})

const form = ref({
  name: '',
  phone: '',
  company: '',
  email: '',
  type: '',
  message: ''
})

const submitForm = () => {
  alert('感谢您的咨询！我们的商务顾问将在1个工作日内与您联系。')
  form.value = { name: '', phone: '', company: '', email: '', type: '', message: '' }
}
</script>
