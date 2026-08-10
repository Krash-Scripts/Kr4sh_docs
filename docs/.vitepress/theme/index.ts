import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import BrandStrip from './components/BrandStrip.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BrandStrip', BrandStrip)
  }
} satisfies Theme
