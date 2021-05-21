<template>
  <div class="relative lg:w-2/5 sm:w-3/5 sm:mx-auto">
    <form
        class="w-full m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="showConfirmModal = !showConfirmModal;"
    >
      <div class="flex justify-start">
        <h4 class="text-gray-700 text-2xl font-bold  mb-6">
          Biodata Mahasiswa
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
              for="universitas"
          >
            Universitas
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="universitas"
            type="text"
            placeholder="Pilih"
            v-model="formData.universitas"
        />
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
              class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              for="programStudi"
          >
            Program Studi
          </label>
        </div>
        <input
            class="inline-block relative w-64 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="programStudi"
            type="text"
            placeholder="Pilih"
            v-model="formData.programStudi"
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
            class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
    <!--Kategori Umum/Mahasiswa Modal-->
    <card-modal :showing="showConfirmModal" @close="showConfirmModal = false">
      <h2 class="text-xl font-bold text-gray-900 text-center pb-6">Apakah data diri yang anda masukkan sudah benar ?</h2>
      <div class="my-4 w-full flex justify-center">
        <button class="btn-indigo hover:bg-indigo-400 md:w-1/5 mx-2" @click="submitAll">
          Benar
        </button>
        <!--        <button class="btn-indigo hover:bg-indigo-400 w-full my-2">-->
        <!--          Mahasiswa-->
        <!--        </button>-->
        <button class="btn-red hover:bg-red-400 md:w-1/5 mx-2" @click="showConfirmModal = false">
          Tidak
        </button>
      </div>
    </card-modal>
  </div>
</template>

<script>
import {useHead} from '@vueuse/head'
import { defineComponent, computed, ref, onMounted, reactive } from 'vue'
import {useRoute, useRouter} from 'vue-router'
import LitepieDatepicker from 'litepie-datepicker'
import axios from "axios";
export default defineComponent({
  components: {
    LitepieDatepicker
  },
  setup(){
    useHead({title: 'Form Mahasiswa'})
    // const event = reactive({
    //   id:null,
    //   nama:'',
    //   slug:'',
    //   hari: '',
    //   tanggal :'',
    //   maksPeserta:'',
    //   created_at:'',
    //   updated_at:'',
    //   pemateri:'',
    //   kategori:'',
    // })
    let formData = reactive({
      nama: '',
      universitas: '',
      programStudi: '',
      noHp:'',
      email:'',
      tglLahir:'',
      domisili:''
    })
    const route = useRoute()
    const pemesan = route.params.pemesan
    const slug = route.params.slug
    const showConfirmModal = ref(false)

    function submitPemesan() {

    }

    function submitPeserta() {

    }

    function submitAll() {
      submitPemesan()
      submitPeserta()
    }

    return {
      formData,
      pemesan,
      showConfirmModal,
      submitAll
    }
  },
  // data() {
  //   return {
  //     event: {},
  //     kategori: '',
  //     showKategoriModal: false
  //   };
  // },
  // mounted() {
  //   this.getEvent();
  // },
  // methods: {
  //   async getEvent() {
  //     let { data } = await axios.get(
  //         `http://localhost:5000/api/v1/event/` + this.$route.params.slug
  //     );
  //     this.event = data;
  //     this.kategori = data.kategori.nama
  //     console.log(this.event);
  //   },
  //   toggleKategoriModal() {
  //     this.showKategoriModal = !this.showKategoriModal;
  //   }
  // }
});
</script>

<style scoped>

</style>
