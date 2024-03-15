import {
  CrownOutlined,
  HighlightOutlined,
  GithubOutlined,
  FireOutlined,
  PullRequestOutlined,
  PhoneOutlined,
  QqOutlined,
  MailOutlined,
  WechatOutlined,
} from '@ant-design/icons'

export default {
  "companys": [
    {
      "company": "广州奔步电脑",
      "dateRange": "2013.06-2016.04",
      "description": "新项目的开发(如：订单、充值、提现、支付、快递查询、短信邮件通知、web 快递单打印、条码打印、第三方登录…)相关事情、技术升级、框架的支持等"
    },
    {
      "company": "湖南微试云医疗",
      "dateRange": "2016.04-2021.07",
      "description": "负责公司整体前端架构、基础组件研发和维护；为业务开发人员提供培训、完善开发文档等；公司 github 地址:https://github.com/wetrial、https://github.com/nomui/nomui"
    },
    {
      "company": "安克创新",
      "dateRange": "2021.07-2022.01",
      "description": "技术栈为 vue + vuetify + nuxt 的 ssr，负责业务的开发迭代、抽取基建；负责了如:多语言硬编码的lint工具、基础 filter 组件等"
    },
    {
      "company": "奇安信",
      "dateRange": "2022.02-目前",
      "description": "主要参与大禹平台 6.4.0、6.60.0、6.62.0、6.70.0 等版本的迭代开发以及国家电网项目的定制化开发，涉及到的模块有:消息中心、日志检索、告警、事件、拓扑图等模块的开发工作"
    }
  ],
  "educations": [
    {
      "name": "湖南信息职业技术学院",
      "type": "专科",
      "profession": "计算机软件技术",
      "dateRange":"2010-2013",
       "tagInfo":{
         "short":"全",
         "color":"success",
         "full":"全日制"
       }
    },
    {
      "name": "中南林业科技大学",
      "type": "本科",
      "profession": "计算机科学与技术",
      "dateRange":"2014-2016",
      "tagInfo":{
        "short":"函",
        "color":"processing",
        "full":"函授"
      }
    }
  ],
  "socials": [
    {
      "icon": CrownOutlined,
      "url": "https://blog.xxgtalk.cn",
      "title": "个人博客",
      "description": "个人博客分享"
    },
    {
      "icon": HighlightOutlined,
      "url": "https://xiexingen.github.io/hand-tear-ahooks/hooks/async/use-request",
      "title": "手撕ahooks",
      "description": "学习研究ahooks源码"
    },
    {
      "icon": GithubOutlined,
      "url": "https://wetrial.github.io/wetrials",
      "title": "wetrials",
      "description": "公司的前端组件库"
    },
    {
      "icon": GithubOutlined,
      "url": "https://www.github.com/xiexingen",
      "title": "个人github",
      "description": "个人学习、娱乐的个人github"
    },
    {
      "icon": FireOutlined,
      "url": "https://github.com/xiexingen/CTS.Signalr",
      "title": "signalr",
      "description": "基于Signalr实现的推送"
    },
    {
      "icon": PullRequestOutlined,
      "url": "https://github.com/crawlab-team/artipub",
      "title": "artipub",
      "description": "参与的社区项目"
    }
  ],
  "concats": [
    {
      "icon": PhoneOutlined,
      "title": "手机",
      "description": "18569590930"
    },
    {
      "icon": QqOutlined,
      "title": "QQ",
      "description": "1002275364"
    },
    {
      "icon": MailOutlined,
      "title": "邮箱",
      "description": "1002275364@qq.com"
    },
    {
      "icon": WechatOutlined,
      "title": "微信",
      "description": "xxg1002275364"
    }
  ],
  "technicals": [
    "React、Antd、TypeScript、Webpack、Nodejs、Vue、ElementUI、umi、taro、uni-app",
    "AST、低代码等",
    "axios、lodash、dayjs、bpmnjs...",
    ".NET Core、SqlServer、Dapper、EF、PetaPoco、WPF、ABP、Redis、MongoDB",
    "Docker、CICD、Linux",
    "第三方支付、第三方登录、快递接口、短信接口、web快递单打印、条码打印、导出 excel,word,pdf 等常用第三的东西"
  ],
  "projects": [
    {
      "name": "大禹平台",
      "url": "",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": ["大禹平台是面向安全大数据的通用开发分析平台，并提供配套的内置安全能力;其核心能力包括数据接入、数据治理、云地协同、联合分析系统、事件分析与管理、安全设备接入..."]
        },
        {
          "header": "主要职责",
          "contents": ["主要参与大禹平台 6.4.0、6.60.0、6.62.0、6.70.0 等版本的迭代开发以及国家电网项目的定制化开发，涉及到的模块有:消息中心、日志检索、告警、事件、拓扑图等模块的开发工作"]
        },
        {
          "header": "架构相关",
          "contents": [
            "合计有三四十个微应用，全部基于自定义微前端框架管理(基于 qiankun 二开的微前端框架)"
          ]
        }
      ],
      "images": [
        {
          "src": "imgs/dayu/alert-normal.png",
          "title": "告警模块"
        },
        {
          "src": "imgs/dayu/alert-add-filter.png",
          "title": "添加到检索"
        },
        {
          "src": "imgs/dayu/alert-fields.png",
          "title": "自定义展示列"
        },
        {
          "src": "imgs/dayu/alert-sort.png",
          "title": "自定义排序"
        },
        {
          "src": "imgs/dayu/alert-advance.png",
          "title": "高级模式"
        },
        {
          "src": "imgs/dayu/topology-design.png",
          "title": "拓扑图设计器"
        },
        {
          "src": "imgs/dayu/topology-bind.png",
          "title": "拓扑图绑定设备"
        },
        {
          "src": "imgs/dayu/topology-view.png",
          "title": "拓扑图实际上图"
        }
      ]
    },
    {
      "name": "宝马MINI小程序",
      "url": "",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": ["主要是集成在微信端的小程序，方便用户在线预约、选购车型"]
        },
        {
          "header": "主要职责",
          "contents": ["负责该小程序的开发，调用后端api来实现功能。"]
        },
        {
          "header": "架构相关",
          "contents": [
            "采用 taro + dva 来实现多端，支持编译到小程序、h5页面，一套代码实现两套系统"
          ]
        }
      ],
      "images": [
        {
          "src": "imgs/mini-car/barcode.jpg",
          "title": "小程序二维码"
        },
        {
          "src": "imgs/mini-car/home.png",
          "title": "首屏"
        },
        {
          "src": "imgs/mini-car/list.png",
          "title": "车辆列表"
        },
        {
          "src": "imgs/mini-car/list-detail.png",
          "title": "带部分详情的列表"
        },
        {
          "src": "imgs/mini-car/detail.png",
          "title": "车辆详细信息"
        },
        {
          "src": "imgs/mini-car/pre-order.png",
          "title": "预定|预约试驾"
        },
        {
          "src": "imgs/mini-car/me.png",
          "title": "个人中心"
        }
      ]
    },
    {
      "name": "Wetrial临床试验平台-药物警戒线系统",
      "url": "https://www.wetrial-pv.com",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": [
            "主要用于记录临床试验过程中的不良事件、反应等形成报告以GateWay形式对接国家药监局"
          ]
        },
        {
          "header": "主要职责",
          "contents": ["负责该系统的整体工作，把控需求搭建框架分配任务等"]
        },
        {
          "header": "架构相关",
          "contents": [
            "自研react块，并分析风险程度，引入实际使用；比以往不同，以此项目为铺垫，后期平台的所有前端部分都将切换到react栈",
            "采用前后端完全分离形式，前端采用react+antd+roadhog+dva+umi 后端仅通过api提供数据"
          ]
        }
      ],
      "images": [
        {
          "src": "imgs/pv/admin.png",
          "title": "企业管理员"
        },
        {
          "src": "imgs/pv/baogao.png",
          "title": "pv报告管理"
        },
        {
          "src": "imgs/pv/status.png",
          "title": "流程状态"
        },
        {
          "src": "imgs/pv/zsy.png",
          "title": "响应式布局"
        }
      ]
    },
    {
      "name": "Wetrial临床试验平台",
      "url": "https://www.wetrial.com",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": [
            "主要为创新药临床研究提供一站式服务平台， 将申办方、CRO、SMO、机构、受试者、研究者、CRA、CRC 等并联起来；实现项目任务流、信息流、数据流、资金流的可控",
            "整块平台由Wetrial、CTMS、SIS、EDC、IWRC、PV等系统组成，可以完成整套临床研究的流程"
          ]
        },
        {
          "header": "主要职责",
          "contents": [
            "进度管理模块的后端api、前端页面、推送等",
            "自主研发的jui前端框架的维护、迭代、升级、bug修改等",
            "后端底层基础框架的开发、解决遇到的问题、研究新技术并评估可行性引入使用"
          ]
        }
      ],
      "images": [
        {
          "src": "imgs/cts/message.png",
          "title": "消息"
        },
        {
          "src": "imgs/cts/progressAssignUser.png",
          "title": "指派责任人"
        },
        {
          "src": "imgs/cts/progressComment.png",
          "title": "评论"
        },
        {
          "src": "imgs/cts/progressDrag.png",
          "title": "项目管理拖拽"
        },
        {
          "src": "imgs/cts/progressEdit.png",
          "title": "项目管理编辑"
        },
        {
          "src": "imgs/cts/progressListEdit.png",
          "title": "项目管理列表编辑"
        },
        {
          "src": "imgs/cts/progressMyTaskGroupByProject.png",
          "title": "我的任务分组"
        },
        {
          "src": "imgs/cts/projectCollect.png",
          "title": "项目统计"
        }
      ]
    },
    {
      "name": "天马奇兵-跨境电商转运系统",
      "url": "https://www.spacehorse.cn",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": [
            "主要用户群体:海淘客、B 类用户;海淘客和 B 类用户可以在海外电商平台或线下实体店铺购买喜欢的商品，将商品打包寄送到我们的海外仓库，仓库收到包裹后进行一些列(加固、清点、合箱、拆箱、打快递单…)操作后，将包裹送交海关清关，最后通过国内快递寄送到用户手上"
          ]
        },
        {
          "header": "主要职责",
          "contents": [
            "在该系统中负责整个系统的功能设计、开发(如：订单、充值、提现、支付、快递查询、短信邮件通知、web 快递单打印、条码打印、第三方登录…)相关事情"
          ]
        },
        {
          "header": "架构相关",
          "contents": [
            "后端：基于 DDD 领域驱动设计，系统分为核心框架层、领域层、应用层、展示层",
            "前端:自定义 js 插件库(弹窗、分页、自动完成、选择、消息提示、ajax 扩展等)",
            "使用 bower 来管理第三方的一些插件、通过 gulp 来合并压缩 js、css(放弃后台的bundle)来达到优化网络请求的目的"
          ]
        }
      ],
      "images": [
        {
          "src": "imgs/spacehorse/01home.png",
          "title": "首页"
        },
        {
          "src": "imgs/spacehorse/02home.png",
          "title": "支持国家"
        },
        {
          "src": "imgs/spacehorse/02login.png",
          "title": "登录"
        },
        {
          "src": "imgs/spacehorse/03memberCenter.png",
          "title": "会员中心"
        },
        {
          "src": "imgs/spacehorse/05package2.png",
          "title": "包裹快递"
        },
        {
          "src": "imgs/spacehorse/06warehouse.png",
          "title": "仓库"
        },
        {
          "src": "imgs/spacehorse/cost.png",
          "title": "费用"
        },
        {
          "src": "imgs/spacehorse/costCalc.png",
          "title": "计算器"
        }
      ]
    },
    {
      "name": "HDaya ERP",
      "url": "",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": [
            "本 ERP 是为香港大邑国际洋行有限公司(HDaya)公司开发使用，集订单、采购、收货、发票、凭证、财务报表等功能"
          ]
        },
        {
          "header": "主要职责",
          "contents": [
            "代码生成工具 CodeSmith 模板的编写",
            "通用分页、高级查询、消息处理、通用验证、权限处理",
            "模块 SalesOrder、PurchaseOrder、GRN、Invoice、Currency、自动 Generate Voucher 的后台及前台实现",
            "历史数据的解析及删除操作的记录、显示",
            "根据用户权限生成 Excel 模板及 Excel 导入导出通用库",
            "Code Review、性能优化及其他…"
          ]
        }
      ],
      "images": [
        {
          "src": "imgs/hdaya/home.png",
          "title": "Home"
        },
        {
          "src": "imgs/hdaya/MainQuickKey.png",
          "title": "Hot Key"
        },
        {
          "src": "imgs/hdaya/deleteLog.png",
          "title": "Delete Log"
        },

        {
          "src": "imgs/hdaya/invoiceAdvanceSearch.png",
          "title": "Advance Search"
        },
        {
          "src": "imgs/hdaya/invoiceAmount.png",
          "title": "Invoice Amount"
        },
        {
          "src": "imgs/hdaya/invoicePackList.png",
          "title": "Invoice Pack List"
        },
        {
          "src": "imgs/hdaya/labelPrint.png",
          "title": "Label Print"
        },
        {
          "src": "imgs/hdaya/log.png",
          "title": "Logs"
        }
      ]
    },
    {
      "name": "特百惠会员系统",
      "url": "https://github.com/xiexingen/Bootstrap-SmartForm",
      "descriptions": [
        {
          "header": "产品介绍",
          "contents": [
            "该系统需要依赖微信，用户关注公众账号后，可以通过公众账号来进行后续操作，如：会员注册、升级、优惠券、积分券、礼品等"
          ]
        },
        {
          "header": "主要职责",
          "contents": [
            "在该项目中主要负责前端相关；基于 jquery 和 bootstrap 自定意了一套组件，包含：消息插件、弹窗插件、分页插件、表单插件等",
            "Note:表单插件已经上传到 github",
            "   地址：https://github.com/xiexingen/Bootstrap-SmartForm",
            "   相关介绍：https://www.cnblogs.com/xiexingen/p/4555416.html"
          ]
        }
      ],
      "images": []
    }
  ],
  "opens": [
    {
      "github": "https://github.com/xiexingen/topology-designable",
      "title": "拓扑图",
      "subTitle": "基于 x6 的拓扑图设计器",
      "detail": "用于设计网络部署拓扑图，支持设计、预览"
    },
    {
      "github": "https://github.com/nomui/nomui",
      "title": "nomui",
      "subTitle": "统筹nomui的整体开发工作，包括自动发布、组件开发、文档编写等",
      "detail": "一套企业内部的组件库，重复的造轮子。"
    },
    {
      "github": "https://github.com/wetrial",
      "title": "Wetrial",
      "subTitle": "负责Wetrial组织下所有库的开发、维护工作",
      "detail": "包括了wetrial基础库、jui、cli、文档、hooks等。"
    },
    {
      "github": "https://github.com/xiexingen",
      "title": "个人项目",
      "subTitle": "工作这些年积累和贡献的个人代码库",
      "detail": "涉及后端、jquery插件、taro、uni-app、微信小程序、umi、antd、ahooks、abp、爬虫等。"
    },
    {
      "github": "https://github.com/crawlab-team/artipub",
      "title": "ArtiPub",
      "subTitle": "业余时间参与的ArtiPub云端版本的开发",
      "detail": "ArtiPub (Article Publisher的简称，意为\"文章发布者\")是一款开源的一文多发平台，可以帮助文章作者将编写好的文章自动发布到掘金、SegmentFault、CSDN、知乎、开源中国等技术媒体平台，传播优质知识，获取最大的曝光度。ArtiPub安装简单，提供了多种安装方式，可以一键安装使用，安装一般只要5分钟。ArtiPub目前支持文章编辑、文章发布、数据统计的功能，后期我们会加入存量文章导入、数据分析的功能，让您更好的管理、优化您的技术文章。此外，我们还会接入更多媒体渠道，真正做到让文章随处可阅。"
    }
  ]
}
