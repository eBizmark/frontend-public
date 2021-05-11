<template>
  <div
    class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 w-2/5 sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-md sm:p-10"
      >
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div
              class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono"
            >
              i
            </div>
            <div
              class="block pl-2 font-semibold text-xl self-start text-gray-700"
            >
              <h2 class="leading-relaxed">{{ event.nama }}</h2>
              <p class="text-sm text-gray-500 font-normal leading-relaxed">
                {{ kategori }}
              </p>
              <p class="text-sm text-gray-500 font-normal leading-relaxed">
                {{ event.hari+', '+event.tanggal }}
              </p>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="flex flex-col">
                <text-input
                  type="text"
                  class="pt-4"
                  label="Nama Pemesan"
                  placeholder="Masukkan nama pemesan tiket"
                />
              </div>
              <div class="flex flex-col">
                <text-input
                  type="text"
                  class="pt-4"
                  label="No HP"
                  placeholder="Masukkan nomor hp"
                />
              </div>
              <div class="flex flex-col">
                <text-input
                  type="email"
                  class="pt-4"
                  label="E-mail"
                  placeholder="Masukkan email pemesan"
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Tanggal Lahir</label>
                <div class="relative focus-within:text-gray-600 text-gray-400">
                  <input
                    type="text"
                    class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="25/02/2020"
                  />
                  <div class="absolute left-3 top-2">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Kota Domisili</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Kota asal"
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Referal Code</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Optional"
                />
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button
                @click="$router.go(-1)"
                class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
              >
                <svg
                  class="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>
              <button
                class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                @click="toggleKategoriModal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Kategori Umum/Mahasiswa Modal-->
    <card-modal :showing="showKategoriModal" @close="showKategoriModal = false">
      <h2 class="text-xl font-bold text-gray-900">Kategori Tiket</h2>
      <div class="my-4 w-full">
        <button class="btn-red w-full my-2">
          Mahasiswa
        </button>
        <button class="btn-indigo w-full my-2">
          Umum
        </button>
      </div>

      <button class="btn-red" @click="showKategoriModal = false">
        Close
      </button>
    </card-modal>
  </div>
</template>

<script>
import { defineComponent, useMeta, computed, ref, onMounted, reactive } from '@nuxtjs/composition-api'
import axios from "axios";
export default defineComponent({
  head: {},
  setup(){
    useMeta({title: 'Form Pemesan'})
    const event = reactive({
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
  },
  data() {
    return {
      event: {},
      kategori: '',
      showKategoriModal: false
    };
  },
  mounted() {
    this.getEvent();
  },
  methods: {
    async getEvent() {
      let { data } = await axios.get(
        `http://localhost:5000/api/v1/event/` + this.$route.params.slug
      );
      this.event = data;
      this.kategori = data.kategori.nama
      console.log(this.event);
    },
    toggleKategoriModal() {
      this.showKategoriModal = !this.showKategoriModal;
    }
  }
});
</script>
