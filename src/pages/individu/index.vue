<template>
  <div class="relative lg:w-2/5 sm:w-3/5 sm:mx-auto">
    <form
        class="w-full m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="showKategoriModal = !showKategoriModal;"
    >
      <div class="flex justify-start">
        <h4 class="text-gray-700 text-2xl font-bold  mb-6">
          Form Pemesan
        </h4>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="namaLengkap"
          >
            Nama Lengkap
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="namaLengkap"
            type="text"
            placeholder="Contoh : Rezky Wahyuda"
            v-model="formData.nama"
        />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="noHp"
          >
            No HP
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="noHp"
            type="text"
            placeholder="Contoh : 082232221500"
            v-model="formData.noHp"
        />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="email"
          >
            Email
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Contoh : budira@gmail.com"
            v-model="formData.email"
        />
      </div>
<!--      <div class="md:flex md:items-center mb-6">-->
<!--        <div class="md:w-1/6">-->
<!--          <label-->
<!--              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"-->
<!--              for="tanggal"-->
<!--          >-->
<!--            Tanggal Lahir-->
<!--          </label>-->
<!--        </div>-->
<!--        <div class="inline-block relative w-64">-->
<!--          <litepie-datepicker-->
<!--              as-single-->
<!--              :formatter="formatter"-->
<!--              id="tanggal"-->
<!--              v-model="formData.tanggal"-->
<!--          ></litepie-datepicker>-->
<!--        </div>-->
<!--      </div>-->
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="domisili"
          >
            Kota Domisili
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="domisili"
            type="text"
            placeholder="Contoh : Kota Bandung/Kabupaten Bintan"
            v-model="formData.domisili"
        />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="referal"
          >
            Referal Code (Opsional)
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="referal"
            type="text"
            placeholder="Contoh : JJG27IKL"
            v-model="formData.referal"
        />
      </div>

      <!--Footer-->
      <div class="flex justify-end pt-2">
        <button
            @click="$router.go(-1)"
            type="button"
            class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
        >
          Kembali
        </button>
        <button
            class="px-3 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
        >
          Selanjutnya
        </button>
      </div>
    </form>
    <!--Kategori Umum/Mahasiswa Modal-->
    <card-modal :showing="showKategoriModal" @close="showKategoriModal = false">
      <h2 class="text-xl font-bold text-gray-900 text-center">Kategori Tiket</h2>
      <div class="my-4 w-full flex justify-center">
        <button class="btn-indigo hover:bg-indigo-400 md:w-1/4 mx-2" @click="keFormMahasiswa">
            Mahasiswa
        </button>
        <!--        <button class="btn-indigo hover:bg-indigo-400 w-full my-2">-->
        <!--          Mahasiswa-->
        <!--        </button>-->
        <button class="btn-indigo hover:bg-indigo-400 md:w-1/4 mx-2" @click="keFormUmum">
          Umum
        </button>
      </div>
    </card-modal>
  </div>
<!--  <div-->
<!--      class="min-h-screen py-6 flex flex-col justify-center sm:py-12"-->
<!--  >-->
<!--    <div class="relative py-3 w-2/5 sm:mx-auto">-->
<!--      <div-->
<!--          class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-md sm:p-10"-->
<!--      >-->
<!--        <div class="max-w-md mx-auto">-->
<!--          <div class="md:flex items-center space-x-4">-->
<!--            <div-->
<!--                class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono"-->
<!--            >-->
<!--              i-->
<!--            </div>-->
<!--            <div-->
<!--                class="block font-semibold md:text-xl sm:text-md self-start text-gray-700"-->
<!--            >-->
<!--              <h2 class="leading-relaxed md:pr-9">{{ event.nama }}</h2>-->
<!--              <p class="text-sm text-gray-500 md:pr-20 font-normal leading-relaxed">-->
<!--                {{ event.kategori.nama }}-->
<!--              </p>-->
<!--              <p class="text-sm text-gray-500 md:pl-2 font-normal leading-relaxed">-->
<!--                {{ event.hari+', '+event.tanggal }}-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="divide-y divide-gray-200">-->
<!--            <div-->
<!--                class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"-->
<!--            >-->
<!--              <div class="flex flex-col">-->
<!--                <input-->
<!--                    type="text"-->
<!--                    class="pt-4"-->
<!--                    label="Nama Pemesan"-->
<!--                    placeholder="Masukkan nama pemesan tiket"-->
<!--                />-->
<!--              </div>-->
<!--              <div class="flex flex-col">-->
<!--                <input-->
<!--                    type="text"-->
<!--                    class="pt-4"-->
<!--                    label="No HP"-->
<!--                    placeholder="Masukkan nomor hp"-->
<!--                />-->
<!--              </div>-->
<!--              <div class="flex flex-col">-->
<!--                <input-->
<!--                    type="email"-->
<!--                    class="pt-4"-->
<!--                    label="E-mail"-->
<!--                    placeholder="Masukkan email pemesan"-->
<!--                />-->
<!--              </div>-->
<!--              <div class="flex flex-col">-->
<!--                <label class="leading-loose">Tanggal Lahir</label>-->
<!--                <div class="relative focus-within:text-gray-600 text-gray-400">-->
<!--                  <input-->
<!--                      type="text"-->
<!--                      class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"-->
<!--                      placeholder="25/02/2020"-->
<!--                  />-->
<!--                  <div class="absolute left-3 top-2">-->
<!--                    <svg-->
<!--                        class="w-6 h-6"-->
<!--                        fill="none"-->
<!--                        stroke="currentColor"-->
<!--                        viewBox="0 0 24 24"-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                    >-->
<!--                      <path-->
<!--                          stroke-linecap="round"-->
<!--                          stroke-linejoin="round"-->
<!--                          stroke-width="2"-->
<!--                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"-->
<!--                      ></path>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="flex flex-col">-->
<!--                <label class="leading-loose">Kota Domisili</label>-->
<!--                <input-->
<!--                    type="text"-->
<!--                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"-->
<!--                    placeholder="Kota asal"-->
<!--                />-->
<!--              </div>-->
<!--              <div class="flex flex-col">-->
<!--                <label class="leading-loose">Referal Code (Optional)</label>-->
<!--                <input-->
<!--                    type="text"-->
<!--                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"-->
<!--                    placeholder="Kode Referal"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="pt-4 flex items-center space-x-4">-->
<!--              <button-->
<!--                  @click="$router.go(-1)"-->
<!--                  class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"-->
<!--              >-->
<!--                <svg-->
<!--                    class="w-6 h-6 mr-3"-->
<!--                    fill="none"-->
<!--                    stroke="currentColor"-->
<!--                    viewBox="0 0 24 24"-->
<!--                    xmlns="http://www.w3.org/2000/svg"-->
<!--                >-->
<!--                  <path-->
<!--                      stroke-linecap="round"-->
<!--                      stroke-linejoin="round"-->
<!--                      stroke-width="2"-->
<!--                      d="M6 18L18 6M6 6l12 12"-->
<!--                  ></path>-->
<!--                </svg>-->
<!--                Cancel-->
<!--              </button>-->
<!--              <button-->
<!--                  class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"-->
<!--                  @click="showKategoriModal = !showKategoriModal;"-->
<!--              >-->
<!--                Next-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash;Kategori Umum/Mahasiswa Modal&ndash;&gt;-->
<!--      <card-modal :showing="showKategoriModal" @close="showKategoriModal = false">-->
<!--        <h2 class="text-xl font-bold text-gray-900">Kategori Tiket</h2>-->
<!--        <div class="my-4 w-full">-->
<!--          <router-link :to="`/daftar/umum/:slug`">-->
<!--            <button class="btn-indigo hover:bg-indigo-400 w-full my-2">-->
<!--              Mahasiswa-->
<!--            </button>-->
<!--          </router-link>-->
<!--          &lt;!&ndash;        <button class="btn-indigo hover:bg-indigo-400 w-full my-2">&ndash;&gt;-->
<!--          &lt;!&ndash;          Mahasiswa&ndash;&gt;-->
<!--          &lt;!&ndash;        </button>&ndash;&gt;-->
<!--          <router-link :to="`/daftar/mahasiswa/:slug`" class="btn-indigo hover:bg-indigo-400 w-full my-2">-->
<!--            Umum-->
<!--          </router-link>-->
<!--        </div>-->

<!--        <button class="btn-red hover:bg-red-400" @click="showKategoriModal = false">-->
<!--          Close-->
<!--        </button>-->
<!--      </card-modal>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import {useHead} from '@vueuse/head'
import { defineComponent, computed, toRefs, ref, onMounted, reactive } from 'vue'
import {useRoute, useRouter} from 'vue-router'
import axios from "axios";
import LitepieDatepicker from 'litepie-datepicker'
export default defineComponent({
  // head: {},
  // props: ['slug'],
  components: {
    LitepieDatepicker,
  },
  setup(){
    useHead({title: 'Form Pemesan'})
    const eventDetail = reactive({
      id:null,
      nama:'',
      slug:'',
      hari: '',
      tanggal :'',
      maksPeserta:'',
      created_at:'',
      updated_at:'',
      pemateri:'',
      kategori:'',
    })
    let formData = reactive({
      nama:'',
      noHp:'',
      email:'',
      tanggal:'',
      domisili:'',
      referal:''
    })
    // const dataEvent = toRefs(event)
    const showKategoriModal = ref(false)
    const event = ref(eventDetail)
    // const kategori = ref('')
    // let modalData = reactive({})

    const route = useRoute()
    // const slug = computed(() => route.params.slug)
    const slug = route.params.slug

    const getEvent = async () => {
      console.log("this is params"+ slug)
      let { data } = await axios.get(
          `https://api-ebizmark.irvankdhf.xyz/api/v1/event/` + slug
      );
      console.log("ini data" + data.nama)
      event.value = data;
      // console.log(event.kategori.nama);
      // kategori.value = data.kategori.nama
    }

    const formatter = reactive({
      date: 'YYYY-MM-DD',
      month: 'MM',
    })

    onMounted(() => {
      getEvent()
    })

    // function toggleKategoriModal() {
    //   showKategoriModal.value = !showKategoriModal.value;
    // }

    // function toggleKategoriModal(params) {
    //   modalData = params;
    //   console.log("ini modal data (kategori)" + modalData);
    //   showKategoriModal.value = !showKategoriModal.value;
    // }

    const router = useRouter()

    function keFormMahasiswa() {
      router.push({
        name: 'form-mahasiswa',
        params: {
          slug: slug,
          pemesan: formData
        }
      })
    }

    function keFormUmum() {

    }

    return {
      // dataEvent,
      // ...toRefs(event),
      event,
      showKategoriModal,
      // kategori,
      // toggleKategoriModal,
      formData,
      formatter,
      keFormMahasiswa,
      keFormUmum
    }
  },
});
</script>
