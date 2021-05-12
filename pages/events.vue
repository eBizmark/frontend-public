<template>
  <div
    class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center"
  >
    <div class="bg-white rounded-md shadow overflow-x-auto w-2/3">
      <table class="w-full whitespace-nowrap">
        <tr class="text-left font-bold">
          <th class="px-6 pt-6 pb-4">Nama Seminar</th>
          <th class="px-6 pt-6 pb-4">Tanggal</th>
        </tr>
        <tr
          v-for="(event, index) in events"
          :key="index"
          class="hover:bg-gray-100 focus-within:bg-gray-100"
          @click="toggleKategoriModal(event)"
        >
          <td class="border-t">
            <span
              class="px-6 py-4 flex items-center focus:text-indigo-500 cursor-pointer"
            >
              {{ event.nama }}
            </span>
          </td>
          <td class="border-t">
            <span
              class="px-6 py-4 flex items-center focus:text-indigo-500 cursor-pointer"
            >
              {{ event.tanggal }}
            </span>
          </td>
          <td class="border-t w-px">
            <span
              class="px-6 py-4 flex items-center focus:text-indigo-500 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="block w-6 h-6 fill-gray-400"
              >
                <polygon
                  points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"
                />
              </svg>
            </span>
          </td>
        </tr>
        <tr v-if="events.length === 0">
          <td class="border-t px-6 py-4" colspan="4">
            No events found.
          </td>
        </tr>
      </table>
    </div>
    <!--Kategori Modal-->
    <card-modal :showing="showKategoriModal" @close="showKategoriModal = false">
      <h2 class="text-xl font-bold text-gray-900">Kategori Tiket</h2>
      <div class="my-4 w-full">
        <nuxt-link :to="`/register/individual/${modalData.slug}`">
          <button class="btn-indigo hover:bg-indigo-400 w-full my-2">
            Individual
          </button>
        </nuxt-link>
        <button class="btn-indigo hover:bg-indigo-400 w-full my-2" @click="toggleCounterModal">
          Group
        </button>
      </div>

      <button class="btn-red hover:bg-red-400" @click="showKategoriModal = false">
        Close
      </button>
    </card-modal>

    <!--Counter Modal untuk Team-->
    <card-modal :showing="showCounterModal" @close="showCounterModal = false">
      <h2 class="text-xl font-bold text-gray-900">Jumlah Orang</h2>
      <div class="my-4 w-full">
        <div class="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
          <button
            @click="decreaseNumber"
            class="bg-gray-200 text-black hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-bold">−</span>
          </button>
          <input
            type="text"
            class="outline-none focus:outline-none text-center w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 mx-2"
            name="custom-input-number"
            v-model="peserta"
          />
          <button
            @click="increaseNumber"
            class="bg-gray-200 text-black hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-bold">+</span>
          </button>
        </div>
      </div>

      <button class="btn-red mr-auto" @click="showCounterModal = false">
        Close
      </button>

      <button class="btn-green ml-auto float-right" @click="lanjutTeamCounter">
        Lanjut
      </button>
    </card-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: [],
      showKategoriModal: false,
      showCounterModal: false,
      modalData: {},
      peserta: 1
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      let { data } = await axios.get("http://localhost:5000/api/v1/event");
      this.events = data;
      console.log(this.events);
    },
    toggleKategoriModal(params) {
      this.modalData = params;
      console.log(this.modalData);
      this.showKategoriModal = !this.showKategoriModal;
    },
    toggleCounterModal(params) {
      this.showCounterModal = !this.showCounterModal;
    },
    increaseNumber() {
      this.peserta++;
    },
    decreaseNumber() {
      if (this.peserta > 0) this.peserta--;
    },
    lanjutTeamCounter() {
      this.modalData.team = {
        jumlah: this.peserta
      };
      this.$router.push(`/register/individual/${this.modalData.slug}`);
      console.log(this.modalData);
    }
  }
};
</script>

<style></style>
