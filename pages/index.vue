<template>
  <div
    class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center"
  >
    <div>
      <div
        class="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center"
      >
        <h3 class="font-serif font-bold text-gray-900 text-xl">
          E-Bizmark Solutions
        </h3>
        <img
          class="w-full rounded-md"
          src="https://e-bizmarksolutions.com/wp-content/uploads/2019/10/tie-690084_1920-1-640x640.jpg"
          alt="motivation"
        />
        <p class="text-center leading-relaxed">
          e-BizMark Solution merupakan lembaga Pelatihan dan Riset, berdirinya
          lembaga ini atas dasar kesepakatan tujuh orang yang berprofesi sebagai
          dosen untuk mendirikan lembaga konsultan ini. Dosen sebagai ujung
          tombah dari sebuah riset juga menjadi sangat penting karena ini akan
          menjadi ilmu pengetahuan baru dan semakin berkembang.
        </p>
        <span class="text-center">e-bizmarksolutions.com</span>
        <NuxtLink
          to="/events"
          class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent"
        >
          List Events
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
