<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Breadcrumb -->
      <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-primary-600">首页</NuxtLink>
        <ChevronRightIcon class="w-4 h-4" />
        <NuxtLink to="/docs" class="hover:text-primary-600">文档</NuxtLink>
        <ChevronRightIcon class="w-4 h-4" />
        <span class="text-gray-900">{{ docTitle }}</span>
      </nav>
      
      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Sidebar Navigation -->
        <aside class="hidden lg:block lg:col-span-1">
          <div class="sticky top-24">
            <h3 class="font-semibold text-gray-900 mb-4">文档导航</h3>
            <nav class="space-y-1">
              <NuxtLink 
                v-for="item in sidebarItems" 
                :key="item.path"
                :to="item.path"
                class="block px-3 py-2 rounded-lg text-sm transition-colors"
                :class="$route.path === item.path ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-600 hover:bg-gray-50'"
              >
                {{ item.title }}
              </NuxtLink>
            </nav>
          </div>
        </aside>
        
        <!-- Main Content -->
        <main class="lg:col-span-3">
          <div class="prose prose-lg max-w-none">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{{ docTitle }}</h1>
            
            <!-- Dynamic content based on current slug -->
            <div v-if="currentDoc">
              <p class="text-xl text-gray-600 mb-8">{{ currentDoc.description }}</p>
              
              <!-- Feature highlights -->
              <div v-if="currentDoc.highlights" class="grid md:grid-cols-2 gap-4 mb-8 not-prose">
                <div 
                  v-for="highlight in currentDoc.highlights" 
                  :key="highlight.title"
                  class="bg-gray-50 rounded-xl p-4"
                >
                  <div class="flex items-center space-x-3 mb-2">
                    <component :is="highlight.icon" class="w-5 h-5 text-primary-600" />
                    <h4 class="font-semibold text-gray-900">{{ highlight.title }}</h4>
                  </div>
                  <p class="text-sm text-gray-600">{{ highlight.desc }}</p>
                </div>
              </div>
              
              <!-- Content sections -->
              <div v-for="section in currentDoc.sections" :key="section.title" class="mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ section.title }}</h2>
                <p v-if="section.content" class="text-gray-600 mb-4">{{ section.content }}</p>
                
                <ul v-if="section.list" class="space-y-2">
                  <li v-for="item in section.list" :key="item" class="flex items-start">
                    <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
                
                <!-- Code block example -->
                <div v-if="section.code" class="bg-gray-900 rounded-xl p-4 mt-4 overflow-x-auto">
                  <pre class="text-sm text-gray-100"><code>{{ section.code }}</code></pre>
                </div>
              </div>
              
              <!-- Quick tips -->
              <div v-if="currentDoc.tips" class="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 not-prose">
                <div class="flex items-start space-x-3">
                  <LightBulbIcon class="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-blue-900 mb-2">使用技巧</h4>
                    <ul class="space-y-1 text-blue-800">
                      <li v-for="tip in currentDoc.tips" :key="tip">{{ tip }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <!-- CTA -->
              <div class="flex flex-wrap gap-4 not-prose">
                <NuxtLink to="/download" class="btn-primary">
                  <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
                  立即下载体验
                </NuxtLink>
                <NuxtLink to="/community" class="btn-outline">
                  联系支持
                </NuxtLink>
              </div>
            </div>
            
            <!-- 404 content -->
            <div v-else class="text-center py-16">
              <DocumentMagnifyingGlassIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 class="text-2xl font-bold text-gray-900 mb-2">文档未找到</h2>
              <p class="text-gray-600 mb-6">抱歉，您查找的文档内容暂时不可用。</p>
              <NuxtLink to="/docs" class="btn-primary">返回文档首页</NuxtLink>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  ChevronRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
  DocumentMagnifyingGlassIcon,
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  FolderOpenIcon,
  MicrophoneIcon,
  WrenchIcon,
  DocumentTextIcon,
  DocumentMagnifyingGlassIcon as DocIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BookOpenIcon,
  CogIcon,
  CodeBracketIcon,
  CubeIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const slug = computed(() => route.params.slug?.[0] || '')

// Sidebar navigation items
const sidebarItems = [
  { title: '快速入门', path: '/docs/getting-started' },
  { title: 'AI 智能对话', path: '/docs/ai-chat' },
  { title: '知识库系统', path: '/docs/knowledge-base' },
  { title: '会议纪要', path: '/docs/meeting' },
  { title: '技能系统', path: '/docs/skills' },
  { title: '文档模式', path: '/docs/document' },
  { title: '招投标助手', path: '/docs/tender' },
  { title: '模型配置', path: '/docs/models' },
  { title: '数据安全', path: '/docs/security' },
  { title: 'API文档', path: '/docs/api' },
  { title: '部署指南', path: '/docs/deploy' },
  { title: '开发指南', path: '/docs/dev-guide' }
]

// Document content data
const docContent = {
  'getting-started': {
    title: '快速入门',
    description: '快速了解黔前Ai助手的基本使用方法，从下载安装到第一个AI对话。',
    highlights: [
      { title: '简单安装', desc: '一键安装，即刻使用', icon: RocketLaunchIcon },
      { title: '多平台支持', desc: 'Windows、macOS、Linux全覆盖', icon: CpuChipIcon },
      { title: '灵活配置', desc: '支持多种AI模型接入', icon: CogIcon },
      { title: '快速上手', desc: '直观的操作界面设计', icon: BookOpenIcon }
    ],
    sections: [
      {
        title: '下载安装',
        content: '访问我们的下载页面，选择适合您操作系统的版本进行下载。安装过程简单快速，按照向导提示完成即可。',
        list: [
          '社区版：适合个人用户免费使用',
          '政府版：专为国产操作系统适配',
          '企业版：支持团队协作和移动办公',
          '服务器版：私有化部署方案'
        ]
      },
      {
        title: '配置AI模型',
        content: '首次启动后，您需要配置AI模型API Key。黔前Ai助手支持接入多个主流大模型服务。',
        code: `// 配置示例
{
  "openai": {
    "apiKey": "your-api-key",
    "model": "gpt-4"
  },
  "deepseek": {
    "apiKey": "your-api-key",
    "model": "deepseek-chat"
  }
}`
      },
      {
        title: '开始对话',
        content: '配置完成后，点击新建对话按钮，即可开始与AI助手交流。您可以询问问题、请求创作、分析文档等。'
      }
    ],
    tips: [
      '使用快捷键 Ctrl+N 快速新建对话',
      '输入 / 可以唤起快捷指令菜单',
      '长按消息可复制或重新生成回答'
    ]
  },
  'ai-chat': {
    title: 'AI 智能对话',
    description: '了解如何使用黔前Ai助手的智能对话功能，支持多轮对话、上下文理解和多种AI模型切换。',
    highlights: [
      { title: '多模型支持', desc: 'GPT-4、Claude、通义千问等', icon: CpuChipIcon },
      { title: '上下文理解', desc: '支持长文本记忆', icon: ChatBubbleLeftRightIcon },
      { title: '智能切换', desc: '根据场景选择最优模型', icon: CogIcon },
      { title: '流式输出', desc: '实时显示AI回复', icon: RocketLaunchIcon }
    ],
    sections: [
      {
        title: '开始新对话',
        content: '点击主界面左下角的"新建对话"按钮，选择您想要使用的AI模型，即可开始交流。支持同时开启多个对话窗口。'
      },
      {
        title: '多轮对话',
        content: '黔前Ai助手支持上下文记忆，AI能够记住对话历史，进行连贯的多轮交流。您可以随时追问、修正或转换话题。',
        list: [
          '自然流畅的对话体验',
          '支持长达128K上下文的超长对话',
          '可随时查看和导出对话记录',
          '支持对话分支和历史回溯'
        ]
      },
      {
        title: '模型切换',
        content: '不同场景下可以选择不同模型：复杂推理任务选择GPT-4，创意写作选择Claude，中文场景选择通义千问或DeepSeek。'
      }
    ],
    tips: [
      '使用 @模型名 快速切换模型',
      '输入 clear 清空当前对话上下文',
      '使用 #话题标签 整理对话分类'
    ]
  },
  'knowledge-base': {
    title: '知识库系统',
    description: '掌握知识库功能，上传文档建立智能知识库，实现基于私域资料的精准问答。',
    highlights: [
      { title: '多格式支持', desc: 'PDF、Word、Excel、PPT', icon: FolderOpenIcon },
      { title: '向量检索', desc: '语义级智能搜索', icon: DocumentMagnifyingGlassIcon },
      { title: '智能问答', desc: '基于资料精准回答', icon: ChatBubbleLeftRightIcon },
      { title: '权限管理', desc: '细粒度访问控制', icon: ShieldCheckIcon }
    ],
    sections: [
      {
        title: '创建知识库',
        content: '进入知识库模块，点击"新建知识库"，为您的知识库命名并添加描述。支持创建多个知识库用于不同场景。'
      },
      {
        title: '上传文档',
        content: '支持上传多种格式的文档，系统自动解析并建立向量索引。支持的格式包括：',
        list: [
          'PDF文档（含扫描件OCR）',
          'Microsoft Word (.doc/.docx)',
          'Excel表格 (.xls/.xlsx)',
          'PowerPoint演示文稿 (.ppt/.pptx)',
          '纯文本文件 (.txt/.md)',
          '网页链接自动抓取'
        ]
      },
      {
        title: '智能检索',
        content: '基于向量语义检索技术，即使关键词不完全匹配，也能找到相关内容。支持跨文档综合问答。'
      }
    ],
    tips: [
      '定期更新知识库保持内容时效性',
      '使用标签对文档进行分类管理',
      '设置访问权限保护敏感资料'
    ]
  },
  'meeting': {
    title: '会议纪要',
    description: '使用会议纪要功能，自动将语音转为文字，提取关键信息，生成结构化会议记录。',
    highlights: [
      { title: '语音转写', desc: '高精度语音识别', icon: MicrophoneIcon },
      { title: '智能摘要', desc: '自动提取关键要点', icon: DocumentTextIcon },
      { title: '参会管理', desc: '发言人自动识别', icon: ChatBubbleLeftRightIcon },
      { title: '多语言支持', desc: '支持中英文混合', icon: RocketLaunchIcon }
    ],
    sections: [
      {
        title: '开始录音',
        content: '点击"新建会议"按钮，选择录音源（麦克风/系统音频/两者同时），开始录制会议内容。支持实时转写显示。'
      },
      {
        title: '上传录音文件',
        content: '也可以上传已有的录音文件进行转写。支持 MP3、WAV、M4A 等常见音频格式，以及 MP4、AVI 等视频格式。',
        list: [
          '支持长达4小时的连续录音',
          '自动识别多位发言人',
          '支持专业术语优化',
          '可导出多种格式文档'
        ]
      },
      {
        title: '生成纪要',
        content: '录音结束后，系统自动生成会议纪要，包含：会议概要、讨论要点、行动事项、待办任务等结构化内容。'
      }
    ],
    tips: [
      '会前导入议程可提高识别准确率',
      '使用蓝牙麦克风获得更好效果',
      '会议中标记重要时刻便于后续查找'
    ]
  },
  'skills': {
    title: '技能系统',
    description: '探索20+实用AI技能，涵盖文档生成、数据分析、翻译、代码编写等多个专业领域。',
    highlights: [
      { title: '丰富技能', desc: '20+专业领域技能', icon: WrenchIcon },
      { title: '一键使用', desc: '零配置开箱即用', icon: RocketLaunchIcon },
      { title: '持续更新', desc: '定期上线新技能', icon: LightBulbIcon },
      { title: '自定义技能', desc: '支持创建专属技能', icon: CogIcon }
    ],
    sections: [
      {
        title: '技能市场',
        content: '浏览技能市场，发现适合您工作场景的专业技能。技能覆盖文档处理、内容创作、数据分析、编程开发等多个领域。',
        list: [
          '文档生成：报告、合同、标书自动生成',
          '内容创作：文案、脚本、营销方案',
          '数据分析：报表解读、趋势预测',
          '代码助手：代码生成、Bug修复、代码审查',
          '翻译专家：多语言精准翻译',
          '学习辅导：知识讲解、习题解答'
        ]
      },
      {
        title: '使用技能',
        content: '点击技能卡片即可开始使用。每个技能都有预设的提示词模板，只需输入关键信息，AI即可生成专业输出。'
      },
      {
        title: '自定义技能',
        content: '企业版用户可创建自定义技能，将常用工作流程封装为技能，提高团队协作效率。'
      }
    ],
    tips: [
      '收藏常用技能方便快速访问',
      '组合使用多个技能完成复杂任务',
      '关注技能市场获取最新技能'
    ]
  },
  'document': {
    title: '文档模式',
    description: '专业的AI辅助文档编辑环境，支持智能写作、续写、改写，让文档创作更轻松高效。',
    highlights: [
      { title: 'AI写作', desc: '智能生成和续写', icon: DocumentTextIcon },
      { title: '智能排版', desc: '自动调整文档格式', icon: RocketLaunchIcon },
      { title: '模板库', desc: '丰富的文档模板', icon: FolderOpenIcon },
      { title: '实时协作', desc: '多人同时编辑', icon: ChatBubbleLeftRightIcon }
    ],
    sections: [
      {
        title: '创建文档',
        content: '在文档模式下新建文档，或导入现有文档进行编辑。支持从模板库选择适合的模板快速开始。',
        list: [
          '工作报告模板',
          '会议纪要模板',
          '项目方案模板',
          '合同协议模板',
          '演示文稿模板'
        ]
      },
      {
        title: 'AI辅助写作',
        content: '选中需要AI协助的内容，点击工具栏的AI按钮，选择相应的操作（续写、改写、润色、扩写等）。'
      },
      {
        title: '格式调整',
        content: 'AI可自动识别并调整文档格式，包括标题层级、段落间距、列表样式、表格美化等。'
      }
    ],
    tips: [
      '使用 // 唤起AI快捷菜单',
      '保存常用排版样式为模板',
      '定期自动保存防止内容丢失'
    ]
  },
  'tender': {
    title: '招投标助手',
    description: '专为招投标场景设计，支持招标文件解析、投标书智能生成、资质管理等功能。',
    highlights: [
      { title: '文件解析', desc: '快速提取招标要点', icon: DocIcon },
      { title: '标书生成', desc: '智能生成投标文件', icon: DocumentTextIcon },
      { title: '资质管理', desc: '企业资质统一管理', icon: ShieldCheckIcon },
      { title: '风险检测', desc: '自动识别潜在风险', icon: CheckCircleIcon }
    ],
    sections: [
      {
        title: '导入招标文件',
        content: '上传PDF或Word格式的招标文件，系统自动解析并提取关键信息，包括：投标要求、评分标准、时间节点等。'
      },
      {
        title: '生成投标书',
        content: '根据招标文件要求和企业资质信息，智能生成投标书框架和内容，大幅提升标书制作效率。',
        list: [
          '企业简介自动生成',
          '技术方案智能撰写',
          '商务报价辅助计算',
          '资质证明文件整理'
        ]
      },
      {
        title: '资质管理',
        content: '建立企业资质库，统一管理营业执照、资质证书、业绩案例、人员证书等投标常用资料。'
      }
    ],
    tips: [
      '定期更新资质库保持信息时效',
      '多轮审核确保标书质量',
      '导出前检查格式要求'
    ]
  },
  'security': {
    title: '数据安全',
    description: '了解黔前Ai助手的数据安全机制，私有化部署方案，以及国密算法支持。',
    highlights: [
      { title: '私有化部署', desc: '数据本地存储', icon: ShieldCheckIcon },
      { title: '国密算法', desc: '符合国家密码标准', icon: CogIcon },
      { title: '权限管控', desc: '细粒度访问控制', icon: FolderOpenIcon },
      { title: '审计日志', desc: '完整操作记录', icon: DocumentTextIcon }
    ],
    sections: [
      {
        title: '私有化部署',
        content: '服务器版支持完全私有化部署，所有数据存储在企业内部服务器，无需上传至第三方云端，确保数据完全可控。'
      },
      {
        title: '国密算法支持',
        content: '政府版和企业版支持国密SM2/SM3/SM4算法，满足政府和企业密码应用合规要求。',
        list: [
          'SM2：非对称加密算法',
          'SM3：哈希算法',
          'SM4：对称加密算法',
          '符合等保2.0要求'
        ]
      },
      {
        title: '权限管理',
        content: '支持基于角色的权限控制，可设置不同用户的访问权限、功能权限和数据权限。'
      }
    ],
    tips: [
      '定期备份重要数据',
      '启用双因素认证增强安全',
      '定期审计用户访问日志'
    ]
  },
  'models': {
    title: '模型配置',
    description: '配置和管理AI大模型，接入OpenAI、Claude、通义千问、DeepSeek等多种主流模型服务。',
    highlights: [
      { title: '多模型支持', desc: '主流模型全覆盖', icon: CpuChipIcon },
      { title: '灵活配置', desc: '自定义模型参数', icon: CogIcon },
      { title: '负载均衡', desc: '多Key自动切换', icon: RocketLaunchIcon },
      { title: '成本优化', desc: '智能选择模型', icon: LightBulbIcon }
    ],
    sections: [
      {
        title: '支持的模型',
        content: '黔前Ai助手支持接入以下主流大模型服务：',
        list: [
          'OpenAI：GPT-4、GPT-3.5',
          'Anthropic：Claude 3 系列',
          '阿里云：通义千问',
          'DeepSeek：DeepSeek-V2、DeepSeek-Coder',
          '百度：文心一言',
          '智谱AI：GLM-4',
          '本地模型：Ollama、LM Studio'
        ]
      },
      {
        title: '配置API Key',
        content: '在设置-模型配置页面，添加您要使用的模型API Key。支持配置多个Key实现负载均衡。',
        code: `# OpenAI配置
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
OPENAI_BASE_URL=https://api.openai.com/v1

# DeepSeek配置
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxx
DEEPSEEK_BASE_URL=https://api.deepseek.com/v1`
      },
      {
        title: '参数调优',
        content: '可根据需求调整模型参数，如温度系数、最大输出长度、Top-p采样等，获得不同的输出效果。'
      }
    ],
    tips: [
      '配置多个API Key提高可用性',
      '根据任务选择合适的模型',
      '关注各模型的价格策略'
    ]
  },
  'api': {
    title: 'API文档',
    description: '企业版和服务器版提供的API接口文档，支持将AI能力集成到您的业务系统中。',
    highlights: [
      { title: 'RESTful API', desc: '标准接口设计', icon: CodeBracketIcon },
      { title: 'SDK支持', desc: '多语言SDK', icon: RocketLaunchIcon },
      { title: 'Webhook', desc: '事件通知机制', icon: ChatBubbleLeftRightIcon },
      { title: '详细文档', desc: '完整API说明', icon: BookOpenIcon }
    ],
    sections: [
      {
        title: 'API概述',
        content: '黔前Ai助手企业版和服务器版提供完整的API接口，支持对话、知识库查询、文档处理等功能集成。',
        list: [
          '对话API：发起AI对话，支持流式输出',
          '知识库API：查询知识库，语义检索',
          '文档API：上传处理文档，提取信息',
          '技能API：调用预设技能',
          '会议API：创建和管理会议记录'
        ]
      },
      {
        title: '认证方式',
        content: 'API使用API Key进行认证，在请求头中携带Authorization字段。',
        code: `curl https://api.qianqian-ai.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`
      },
      {
        title: 'SDK下载',
        content: '提供Python、JavaScript、Java、Go等语言的官方SDK，简化集成开发工作。'
      }
    ],
    tips: [
      '查看SDK示例代码快速上手',
      '使用Webhook接收异步通知',
      '合理控制请求频率避免限流'
    ]
  },
  'deploy': {
    title: '部署指南',
    description: '私有化部署和服务器配置指南，支持Docker、Kubernetes等多种部署方式。',
    highlights: [
      { title: 'Docker部署', desc: '容器化快速部署', icon: CubeIcon },
      { title: 'K8s支持', desc: '云原生集群部署', icon: RocketLaunchIcon },
      { title: '高可用', desc: '支持集群和负载均衡', icon: ShieldCheckIcon },
      { title: '监控告警', desc: '完善的运维体系', icon: CogIcon }
    ],
    sections: [
      {
        title: '系统要求',
        content: '服务器版部署的最低和推荐配置：',
        list: [
          'CPU：8核以上（推荐16核）',
          '内存：32GB以上（推荐64GB）',
          '存储：100GB SSD以上',
          '网络：公网IP或内网访问',
          '系统：Ubuntu 20.04+ / CentOS 7+'
        ]
      },
      {
        title: 'Docker部署',
        content: '使用Docker Compose快速部署单机版：',
        code: `version: '3.8'
services:
  qianqian-ai:
    image: qianqian-ai/server:latest
    ports:
      - "8080:8080"
    volumes:
      - ./data:/app/data
      - ./config:/app/config
    environment:
      - DB_HOST=postgres
      - REDIS_HOST=redis`
      },
      {
        title: '集群部署',
        content: '使用Kubernetes进行集群部署，支持自动扩缩容、负载均衡和高可用配置。'
      }
    ],
    tips: [
      '生产环境建议配置SSL证书',
      '定期备份数据库和重要文件',
      '配置监控告警及时发现异常'
    ]
  },
  'dev-guide': {
    title: '开发指南',
    description: '开发者指南，包括插件开发、API集成、自定义技能开发等技术文档。',
    highlights: [
      { title: '插件开发', desc: '开发自定义插件', icon: CodeBracketIcon },
      { title: 'API集成', desc: 'RESTful API调用', icon: RocketLaunchIcon },
      { title: '技能开发', desc: '自定义AI技能', icon: WrenchIcon },
      { title: 'SDK接入', desc: '多语言SDK使用', icon: BookOpenIcon }
    ],
    sections: [
      {
        title: '环境准备',
        content: '开始开发前，请确保您的开发环境满足以下要求：',
        list: [
          'Node.js 18+ 或 Python 3.10+',
          'Git版本控制工具',
          '代码编辑器（推荐VS Code）',
          '黔前Ai助手开发者账号'
        ]
      },
      {
        title: '插件开发',
        content: '黔前Ai助手支持插件扩展机制，开发者可以创建自定义插件来扩展功能。插件采用JavaScript/TypeScript开发，通过标准化接口与主程序通信。',
        code: `// 插件示例
export default {
  name: 'my-plugin',
  version: '1.0.0',
  
  // 插件激活时调用
  activate(context) {
    // 注册命令
    context.registerCommand('myCommand', () => {
      // 插件逻辑
    });
  },
  
  // 插件停用时调用
  deactivate() {
    // 清理资源
  }
};`
      },
      {
        title: '技能开发',
        content: '自定义技能开发允许您创建专属的AI助手能力。技能由提示词模板、参数定义和处理逻辑组成。',
        list: [
          '定义技能元数据（名称、描述、版本）',
          '编写提示词模板',
          '配置输入参数',
          '实现后处理逻辑',
          '打包并发布技能'
        ]
      },
      {
        title: 'API集成',
        content: '通过RESTful API将黔前Ai助手能力集成到您的应用中。API支持对话、知识库查询、文档处理等功能。'
      },
      {
        title: 'SDK使用',
        content: '官方提供多语言SDK，简化集成开发工作。支持JavaScript、Python、Java、Go等主流语言。',
        code: `// JavaScript SDK示例
import { QianQianAI } from '@qianqian-ai/sdk';

const client = new QianQianAI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.qianqian-ai.com'
});

// 发起对话
const response = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: '你好' }]
});`
      }
    ],
    tips: [
      '阅读完整API文档了解所有接口',
      '使用开发者工具调试插件',
      '加入开发者社区获取支持',
      '遵循最佳实践编写高质量代码'
    ]
  }
}

const currentDoc = computed(() => {
  return docContent[slug.value]
})

const docTitle = computed(() => {
  return currentDoc.value?.title || '文档详情'
})

useHead(() => ({
  title: `${docTitle.value} - 文档 - 黔前Ai助手`,
  meta: [
    { name: 'description', content: currentDoc.value?.description || '黔前Ai助手使用文档' }
  ]
}))
</script>
