<template>
  <section class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title">用户怎么说</h2>
        <p class="section-subtitle">
          来自政府、企业用户的真实反馈
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.name"
          class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <!-- Stars -->
          <div class="flex space-x-1 mb-4">
            <StarIcon 
              v-for="i in 5" 
              :key="i" 
              class="w-5 h-5"
              :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-200'"
            />
          </div>

          <!-- Quote -->
          <p class="text-gray-700 mb-6 leading-relaxed">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-lg">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="ml-4">
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.title }} · {{ testimonial.org }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <div class="text-3xl font-bold text-primary-600">10万+</div>
          <div class="mt-1 text-sm text-gray-600">活跃用户</div>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <div class="text-3xl font-bold text-primary-600">500+</div>
          <div class="mt-1 text-sm text-gray-600">企业客户</div>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <div class="text-3xl font-bold text-primary-600">50+</div>
          <div class="mt-1 text-sm text-gray-600">政府机构</div>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <div class="text-3xl font-bold text-primary-600">99.9%</div>
          <div class="mt-1 text-sm text-gray-600">服务可用性</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'

const testimonials = [
  {
    content: '黔前Ai助手大大提升了我们的公文处理效率，会议纪要功能尤其出色，原本需要半天整理的内容现在几分钟就能完成。',
    rating: 5,
    name: '张主任',
    title: '办公室主任',
    org: '某市政府'
  },
  {
    content: '作为国产操作系统UOS用户，终于找到了适配的AI助手。政府版功能全面，数据安全有保障，非常满意。',
    rating: 5,
    name: '李科长',
    title: '信息化科长',
    org: '某省厅单位'
  },
  {
    content: '企业版的团队协作功能很实用，知识库帮助我们沉淀了大量内部文档，新员工上手更快了。',
    rating: 5,
    name: '王经理',
    title: 'IT总监',
    org: '某科技公司'
  },
  {
    content: '招投标助手功能帮我们节省了大量标书编写时间，智能分析招标文件很准确，推荐！',
    rating: 5,
    name: '陈总',
    title: '投标负责人',
    org: '某工程公司'
  },
  {
    content: '社区版开源免费，功能却很强大。作为一个开发者，可以基于源码进行二次开发，非常灵活。',
    rating: 5,
    name: '刘工程师',
    title: '全栈开发者',
    org: '开源社区'
  },
  {
    content: '私有化部署方案很完善，数据不出内网满足了我们的安全合规要求，技术支持响应也很及时。',
    rating: 5,
    name: '赵架构师',
    title: '技术负责人',
    org: '某金融机构'
  }
]
</script>
