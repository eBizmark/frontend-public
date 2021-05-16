<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>
    <h1 class="mt-10 text-2xl text-white">Not found</h1>
    <div>
      <button
          class="btn m-3 text-sm mt-8"
          @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
