import { defineConfig } from "umi";

export default defineConfig({
  runtimePublicPath: {},
  mfsu: {
    runtimePublicPath: true,
  },
  history: {
    type: 'browser',
  },
  routes: [
    { path: "/", component: "index" },
    // { path: "/docs", component: "docs" },
  ],
   scripts: [
    // 'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.4/antd.min.js'
    // { content: `alert('你好');`, charset: 'utf-8' },
  ],
  // styles: ['https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.4/antd.min.css'],
  npmClient: 'pnpm',
});
