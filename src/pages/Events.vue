<template>
  <div class="container mx-auto px-20">
    <h2 class="pb-3 md:text-2xl text-lg font-bold dark:text-white">Daftar Acara</h2>
    <div class="border-t-2 py-4"></div>
  </div>
  <!-- component -->
  <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      <div v-for="(acara, index) in dataAcara" :key="index">
        <button @click="toggleKategoriModal(acara)">
          <!-- 1 card -->
          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-indigo-500 left-4 -top-6">
<!--              &lt;!&ndash; svg  &ndash;&gt;-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />-->
<!--              </svg>-->
              <!-- svg  -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2 dark:text-black">{{acara.nama}}</p>
              <div class="flex space-x-2 text-gray-400 text-sm dark:text-black">
                <!-- svg  -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Zoom</p>
              </div>
              <div class="flex space-x-2 text-gray-400 text-sm my-3 dark:text-black">
                <!-- svg  -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>{{acara.tanggal}}</p>
              </div>
              <div class="border-t-2"></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <p class="text-left font-semibold text-base mb-2 dark:text-black">Pemateri</p>
                  <div class="flex space-x-2">
                    <div v-for="(pemateri, index) in acara.pemateri"
                         :key="index"
                    >
                      <img :src="pemateri.foto"
                           class="w-6 h-6 rounded-full"/>
                    </div>
<!--                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"-->
<!--                         class="w-6 h-6 rounded-full"/>-->
<!--                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"-->
<!--                         class="w-6 h-6 rounded-full"/>-->
                  </div>
                </div>
                <div class="my-2">
                  <p class="font-semibold text-base mb-2 dark:text-black">Kategori</p>
                  <div class="text-base text-gray-400 font-semibold dark:text-black">
                    <p>Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

      </div>


<!--      &lt;!&ndash; 2 card &ndash;&gt;-->
<!--      <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">-->
<!--        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">-->
<!--          &lt;!&ndash; svg  &ndash;&gt;-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />-->
<!--          </svg>-->
<!--        </div>-->
<!--        <div class="mt-8">-->
<!--          <p class="text-xl font-semibold my-2">Web Design</p>-->
<!--          <div class="flex space-x-2 text-gray-400 text-sm">-->
<!--            &lt;!&ndash; svg  &ndash;&gt;-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--            </svg>-->
<!--            <p>Core UI Team</p>-->
<!--          </div>-->
<!--          <div class="flex space-x-2 text-gray-400 text-sm my-3">-->
<!--            &lt;!&ndash; svg  &ndash;&gt;-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />-->
<!--            </svg>-->
<!--            <p>3 Weeks Left</p>-->
<!--          </div>-->
<!--          <div class="border-t-2 "></div>-->

<!--          <div class="flex justify-between">-->
<!--            <div class="my-2">-->
<!--              <p class="font-semibold text-base mb-2">Team Member</p>-->
<!--              <div class="flex space-x-2">-->
<!--                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"-->
<!--                     class="w-6 h-6 rounded-full"/>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="my-2">-->
<!--              <p class="font-semibold text-base mb-2">Progress</p>-->
<!--              <div class="text-base text-gray-400 font-semibold">-->
<!--                <p>76%</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; 3 card &ndash;&gt;-->
<!--      <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">-->
<!--        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">-->
<!--          &lt;!&ndash; svg  &ndash;&gt;-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />-->
<!--          </svg>-->
<!--        </div>-->
<!--        <div class="mt-8">-->
<!--          <p class="text-xl font-semibold my-2">Leading Page</p>-->
<!--          <div class="flex space-x-2 text-gray-400 text-sm">-->
<!--            &lt;!&ndash; svg  &ndash;&gt;-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--            </svg>-->
<!--            <p>Marketing Team</p>-->
<!--          </div>-->
<!--          <div class="flex space-x-2 text-gray-400 text-sm my-3">-->
<!--            &lt;!&ndash; svg  &ndash;&gt;-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />-->
<!--            </svg>-->
<!--            <p>2 Days Left</p>-->
<!--          </div>-->
<!--          <div class="border-t-2 "></div>-->

<!--          <div class="flex justify-between">-->
<!--            <div class="my-2">-->
<!--              <p class="font-semibold text-base mb-2">Team Member</p>-->
<!--              <div class="flex space-x-2">-->
<!--                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"-->
<!--                     class="w-6 h-6 rounded-full"/>-->
<!--                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"-->
<!--                     class="w-6 h-6 rounded-full"/>-->
<!--                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"-->
<!--                     class="w-6 h-6 rounded-full"/>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="my-2">-->
<!--              <p class="font-semibold text-base mb-2">Progress</p>-->
<!--              <div class="text-base text-gray-400 font-semibold">-->
<!--                <p>4%</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; 4 card &ndash;&gt;-->
<!--      <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">-->
<!--        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">-->
<!--          &lt;!&ndash; svg  &ndash;&gt;-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />-->
<!--          </svg>-->
<!--        </div>-->
<!--        <div class="mt-8">-->
<!--          <p class="text-xl font-semibold my-2">Business Compare</p>-->
<!--          <div class="flex space-x-2 text-gray-400 text-sm">-->
<!--            &lt;!&ndash; svg  &ndash;&gt;-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--            </svg>-->
<!--            <p>Marketing Team</p>-->
<!--          </div>-->
<!--          <div class="flex space-x-2 text-gray-400 text-sm my-3">-->
<!--            &lt;!&ndash; svg  &ndash;&gt;-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />-->
<!--            </svg>-->
<!--            <p>1 Month Left</p>-->
<!--          </div>-->
<!--          <div class="border-t-2 "></div>-->

<!--          <div class="flex justify-between">-->
<!--            <div class="my-2">-->
<!--              <p class="font-semibold text-base mb-2">Team Member</p>-->
<!--              <div class="flex space-x-2">-->
<!--                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"-->
<!--                     class="w-6 h-6 rounded-full"/>-->
<!--                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"-->
<!--                     class="w-6 h-6 rounded-full"/>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="my-2">-->
<!--              <p class="font-semibold text-base mb-2">Progress</p>-->
<!--              <div class="text-base text-gray-400 font-semibold">-->
<!--                <p>90%</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>





<!--  <div class="flex justify-center">-->
<!--    <div class="space-y-4">-->
<!--      <button v-for="(acara, index) in dataAcara" :key="index" @click="toggleKategoriModal(acara)" class="lg:flex shadow rounded-lg border border-black-400 md:w-200 2xl:w-250 w-full">-->
<!--        <div class="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">-->
<!--          <div class="text-center tracking-wide">-->
<!--            <div class="text-white font-bold text-2xl 2xl:text-3xl">{{acara.tanggal}}</div>-->
<!--            &lt;!&ndash;          <div class="text-white font-normal text-2xl">Sept</div>&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">-->
<!--          <div class="flex flex-row lg:justify-start justify-center">-->
<!--            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">-->
<!--              <i class="far fa-clock"></i> 1:30 PM-->
<!--            </div>-->
<!--            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">-->
<!--              Kategori : {{acara.kategori.nama}}-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">-->
<!--              {{acara.nama}}-->
<!--          </div>-->

<!--          <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">-->
<!--            Lokasi : Zoom-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">-->
<!--          &lt;!&ndash;        <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">&ndash;&gt;-->
<!--          &lt;!&ndash;          Going&ndash;&gt;-->
<!--          &lt;!&ndash;        </span>&ndash;&gt;-->

<!--        </div>-->
<!--      </button>-->
<!--    </div>-->
    <!--Kategori Modal-->
    <card-modal :showing="showKategoriModal" @close="showKategoriModal = false">
      <h2 class="text-xl font-bold text-gray-900">Kategori Pendaftar</h2>
      <div class="my-4 w-full flex justify-center">
        <button class="btn-indigo hover:bg-indigo-400 md:w-1/4 mx-2" @click="keFormIndividu">
          Individu
        </button>
        <button class="btn-indigo hover:bg-indigo-400 md:w-1/4 mx-2" @click="toggleCounterModal">
          Grup
        </button>
      </div>
<div class="flex justify-end">
  <button class="btn-red hover:bg-red-400" @click="showKategoriModal = false">
    Close
  </button>
</div>
    </card-modal>
<!--  </div>-->
</template>
<script>
import {useHead} from '@vueuse/head'
import {defineComponent, ref, reactive, onMounted} from "vue";
import {useRouter} from "vue-router"
import axios from "axios";
// useHead({
//   title: 'List Event E-Bizmark',
//   bodyAttrs: {class: 'dummy test'},
//   meta: [
//     {name: 'description', content: 'This should be moved to head'},
//   ],
//   link: [{rel: 'stylesheet'}],
// })
export default defineComponent({
  name: 'List Events',
  setup() {
    useHead({
      title: 'List Event E-Bizmark',
      bodyAttrs: {class: 'dummy test'},
      meta: [
        {name: 'description', content: 'This should be moved to head'},
      ],
      link: [{rel: 'stylesheet'}],
    })

    const acara = reactive({
      id: null,
      nama: '',
      tanggal: '',
      maksPeserta: '',
      pemateri: [
        {
          id: null,
          nama: '',
          foto: '',
        },
      ],
      kategori: '',
    })

    const dataAcara = ref([acara])
    const showKategoriModal = ref(false)
    const showCounterModal = ref(false)
    let modalData = reactive({})
    const peserta = ref(1)

    const getDataAcara = async () => {
      let { data } = await axios.get('https://api-ebizmark.irvankdhf.xyz/api/v1/event')
      console.log("ini data acara "+data)
      dataAcara.value = data
    }

    onMounted(() => {
      getDataAcara()
    })
    // const getEvents = async () => {
    //   let { data } = await axios.get("http://localhost:5000/api/v1/event");
    //   dataAcara.value = data;
    //   console.log(events.value);
    // }
    function toggleKategoriModal(params) {
      modalData = params;
      console.log("ini modal data (kategori)" + modalData);
      showKategoriModal.value = !showKategoriModal.value;
    }

    function toggleCounterModal() {
      showCounterModal.value = !showCounterModal.value;
    }

    function tambahJumlah() {
      peserta.value++;
    }

    function kurangiJumlah() {
      if (peserta.value > 0) peserta.value--;
    }

    const router = useRouter()

    function keFormGrup() {
      modalData.team = {
        jumlah: peserta.value
      };
      this.$router.push(`/register/individual/${modalData.slug}`);
      console.log(modalData.slug);
    }

    function keFormIndividu() {
      // console.log("ini slug" + modalData.slug)
      router.push({
        name: 'pemesan-individu',
        params: {
          slug: modalData.slug
        }
      })
    }

    return {
      dataAcara,
      showKategoriModal,
      showCounterModal,
      modalData,
      peserta,
      toggleKategoriModal,
      toggleCounterModal,
      tambahJumlah,
      kurangiJumlah,
      keFormGrup,
      keFormIndividu
    }
  },
})
</script>

<style></style>