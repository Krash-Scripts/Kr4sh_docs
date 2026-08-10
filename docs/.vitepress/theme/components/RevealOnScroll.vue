<template>
  <div ref="root" class="kr-reveal" :class="{ 'is-visible': visible }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!root.value) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    visible.value = true
    observer?.disconnect()
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -48px 0px'
  })

  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>
