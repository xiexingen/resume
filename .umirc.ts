import { defineConfig, utils } from 'umi';
import chinaWebpack from './config/plugin.chinaWebpack';

const { winPath } = utils;

export default defineConfig({
  favicon: '/favicon.png',
  runtimePublicPath: true,
  history: {
    type: 'browser',
  },
  hash: true,
  antd: {},
  request: false,
  targets: {
    ie: 9,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  theme: {
    // '@menu-bg':'red', // 菜单背景色
    '@body-background': '#fff', // 全局背景颜色
    '@component-background': '#fff', // 组件背景颜色
    '@primary-color': '#1890FF', // 全局主色
    '@link-color': '#1890ff', // 链接色
    '@success-color': '#52c41a', // 成功色
    '@warning-color': '#faad14', // 警告色
    '@error-color': '#f5222d', // 错误色
    '@font-size-base': '14px', // 主字号
    '@heading-color': 'rgba(0, 0, 0, .85)', // 标题色
    '@text-color': 'rgba(0, 0, 0, .65)', // 主文本色
    '@text-color-secondary': 'rgba(0, 0, 0, .45)', // 次文本色
    '@disabled-color': 'rgba(0, 0, 0, 0.65)', // 失效色
    '@border-radius-base': ' 4px', // 组件/浮层圆角
    '@border-color-base': '#d9d9d9', // 边框色
    '@box-shadow-base': '0 2px 8px rgba(60, 54, 54, .15)', // 浮层阴影
  },
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  lessLoader: {
    javascriptEnabled: true,
  },
  exportStatic:{},
  cssLoader: {
    // 这里的 modules 可以接受 getLocalIdent
    modules: {
      getLocalIdent: (
        context: {
          resourcePath: string;
        },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = winPath(antdProPath)
            .split('/')
            .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
            .map((a: string) => a.toLowerCase());
          return `wt-site${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }
        return localName;
      },
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: chinaWebpack,
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
});
