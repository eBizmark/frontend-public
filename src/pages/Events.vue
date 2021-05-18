<template>
  <div class="flex justify-center">
    <div class="space-y-4">
      <button v-for="(acara, index) in dataAcara" :key="index" @click="toggleKategoriModal(acara)" class="lg:flex shadow rounded-lg border border-black-400 md:w-200 2xl:w-250 w-full">
        <div class="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
          <div class="text-center tracking-wide">
            <div class="text-white font-bold text-2xl 2xl:text-3xl">{{acara.tanggal}}</div>
            <!--          <div class="text-white font-normal text-2xl">Sept</div>-->
          </div>
        </div>
        <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
          <div class="flex flex-row lg:justify-start justify-center">
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i class="far fa-clock"></i> 1:30 PM
            </div>
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              Kategori : {{acara.kategori.nama}}
            </div>
          </div>
          <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            <router-link to="/ticket">
              {{acara.nama}}
            </router-link>
          </div>

          <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
            Lokasi : Zoom
          </div>
        </div>
        <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
          <!--        <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">-->
          <!--          Going-->
          <!--        </span>-->

        </div>
      </button>
    </div>
    <!--Kategori Modal-->
    <card-modal :showing="showKategoriModal" @close="showKategoriModal = false">
      <h2 class="text-xl font-bold text-gray-900">Kategori Pendaftar</h2>
      <div class="my-4 w-full">
        <button class="btn-indigo hover:bg-indigo-400 w-1/3 mx-2" @click="keFormIndividu">
          Individual
        </button>
        <button class="btn-indigo hover:bg-indigo-400 w-1/3 mx-2" @click="toggleCounterModal">
          Group
        </button>
      </div>

      <button class="btn-red hover:bg-red-400" @click="showKategoriModal = false">
        Close
      </button>
    </card-modal>
  </div>
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