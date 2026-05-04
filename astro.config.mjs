// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 1. 确保 site 结尾没有斜杠
  site: 'https://jup1er.github.io', 
  // 2. 添加 base 属性，必须以斜杠开头和结尾
  base: '/jingxuanli.github.io/', 
  vite: {
    plugins: [tailwindcss()]
  }
});