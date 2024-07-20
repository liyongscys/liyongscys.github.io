/*
 * @Author: liyong
 * @Date: 2024-07-20 17:58:53
 * @LastEditors: liyong
 * @LastEditTime: 2024-07-20 18:04:04
 * @FilePath: \liyongscys.github.io\.vitepress\config.mts
 * @Description: 
 * 
 * Copyright (c) 2024 by cabletech, All Rights Reserved. 
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir:"./blog",outDir: './dist',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
