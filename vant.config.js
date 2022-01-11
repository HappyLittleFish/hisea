module.exports = {
  name: 'hisea',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/hisea/',
    },
  },
  site: {
    title: 'hisea',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
