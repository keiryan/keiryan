<template>
  <section class="w-full h-full flex items-center justify-center">
    <h1 class="text-4xl font-bold uppercase">Coming soon!</h1>
  </section>
  <!-- <section class="flex w-full h-full relative">
    <div class="flex flex-1 bg-red-500">
      <div class="flex flex-1 bg-gray-500 max-h-[70%]"></div>
    </div>
    <div class="flex flex-col flex-1 bg-blue-500 h-full">
      <div class="flex flex-[3] bg-pink-500 max-h-[70%]"></div>
      <div class="flex flex-1">
        <HomeTile classes="bg-green-500"> here! </HomeTile>
        <HomeTile> here! </HomeTile>
      </div>
    </div>
  </section> -->
</template>

<script>
import HomeTile from "../components/HomeTile.vue";
export default {
  name: "Home",
  components: {
    HomeTile,
  },
};
</script>

<style></style>
