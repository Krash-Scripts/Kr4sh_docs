<template>
  <div class="kr-brand-strip">
    <div class="kr-brand-strip__main">
      <img :src="withBase('/k_scripts-logo.webp')" alt="K_Scripts" class="kr-brand-strip__logo" />
      <div class="kr-brand-strip__copy">
        <div class="kr-brand-strip__eyebrow">Powered by K_Scripts</div>
        <div class="kr-brand-strip__title">Oficjalny hub dokumentacji KR4SH</div>
      </div>
    </div>
    <div class="kr-brand-strip__meta">
      <span>FiveM</span>
      <span>ESX</span>
      <span>Docs v1</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
</script>
