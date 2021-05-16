<template>
  <div
      class="flex flex-col mx-auto max-w-md rounded-xl space-y-5 items-center"
  >
    <h3 class="font-serif font-bold text-gray-700 dark:text-white text-xl">
      E-Bizmark Solutions
    </h3>
    <img
        class="w-full rounded-md"
        src="https://e-bizmarksolutions.com/wp-content/uploads/2019/10/tie-690084_1920-1-640x640.jpg"
        alt="motivation"
    />
    <p class="text-center leading-relaxed text-gray-700 dark:text-white">
      e-BizMark Solution merupakan lembaga Pelatihan dan Riset, berdirinya
      lembaga ini atas dasar kesepakatan tujuh orang yang berprofesi sebagai
      dosen untuk mendirikan lembaga konsultan ini. Dosen sebagai ujung
      tombah dari sebuah riset juga menjadi sangat penting karena ini akan
      menjadi ilmu pengetahuan baru dan semakin berkembang.
    </p>
    <span class="text-center">e-bizmarksolutions.com</span>
    <router-link to="/events">
      <span class="btn-green">List Events</span>
    </router-link>
  </div>
</template>

<script>
import {defineComponent, inject, onBeforeMount, ref} from 'vue'
import {useHead} from '@vueuse/head'

export default defineComponent({
  name: 'Homepage',
  setup() {
    useHead({
      title: 'E-Bizmark',
      bodyAttrs: {class: 'dummy test'},
      meta: [
        {name: 'description', content: 'This should be moved to head'},
      ],
      link: [{rel: 'stylesheet'}],
    })
  },
})
</script>
