import { defineConfigWithTheme } from 'vitepress';
import { VuetomThemeConfig } from 'vitepress-theme-vuetom';
import { mdPlugin } from './utils/plugins';
import nav from './config/nav';
import head from './config/head';
import sidebar from './config/sidebars';
import pkg from '../package.json';

export default defineConfigWithTheme<VuetomThemeConfig>({
  lang: 'zh-CN',
  base: '/',
  title: '前端知识库',
  description: 'Theme For Vitepress',
  outDir: 'dist',
  head,
  themeConfig: {
    // 展示搜索框
    algolia: {
      appId: '',
      apiKey: 'your_api_key',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api'],
      },
    },
    repo: pkg.repository,
    docsDir: 'docs',
    sidebar,
    nav,
    bgImg: '/imgs/bg.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    flashEnable: true,
    flashColor: ['238,17,17', '0,98,255'],
    parallaxEnable: false,
    pageBgEnable: true,
    pageBgOpacity: 0.8,
    featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)'],
  },
  markdown: {
    lineNumbers: false,
    config: md => mdPlugin(md),
  },
  lastUpdated: true,
  scrollOffset: 20,
});
