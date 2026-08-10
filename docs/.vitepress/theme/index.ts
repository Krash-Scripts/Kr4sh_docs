import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import './custom.css'
import BrandStrip from './components/BrandStrip.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'
import RevealOnScroll from './components/RevealOnScroll.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'layout-top': () => h(AnimatedBackground)
  }),
  enhanceApp({ app }) {
    app.component('BrandStrip', BrandStrip)
    app.component('RevealOnScroll', RevealOnScroll)
  }
} satisfies Theme
