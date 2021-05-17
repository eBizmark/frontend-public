<template>
  <h1>Page A - Message from server: {{ msg }}</h1>
</template>

<script>
import { useRoute } from 'vue-router'
import {onMounted} from "vue";
export default {
  setup(){
    const route = useRoute()
    //Membaca params
    onMounted(() => {
      console.log(route.params.id)
    })
  },
  name: 'PageA',
  props: {
    msg: String,
    server: Boolean,
    name: String,
  },
  mounted() {
    this.randomNumber = Math.random()
  },
  data() {
    return {
      randomNumber: 0,
      initialized: false,
      count: 0,
    }
  },
}
</script>
