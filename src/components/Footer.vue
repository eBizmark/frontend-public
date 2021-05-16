<script setup>
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStorage, usePreferredDark, useToggle } from '@vueuse/core'

const colorSchema = useStorage('color-schema', 'auto')

const preferredDark = usePreferredDark()

const isDark = computed({
  get() {
    return colorSchema.value === 'auto'
        ? preferredDark.value
        : colorSchema.value === 'dark'
  },
  set(v) {
    if (v === preferredDark.value) colorSchema.value = 'auto'
    else colorSchema.value = v ? 'dark' : 'light'
  },
})

const toggleDark = useToggle(isDark)

watch(
    isDark,
    (v) =>
        typeof document !== 'undefined' &&
        document.documentElement.classList.toggle('dark', v),
    { immediate: true }
)

const route = useRoute()
</script>

<template>
  <nav class="text-xl mt-6 space-x-2">
    <a class="icon-btn" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <router-link class="icon-btn" to="/about">
      <carbon-dicom-overlay />
    </router-link>
  </nav>
</template>
