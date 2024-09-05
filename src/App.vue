<template>
  <div
    class="w-screen h-screen flex flex-col justify-between overflow-y-auto font-['arial'] text-[#1C1C1C]"
  >
    <!-- Middle Div -->
    <div class="max-w-screen-2xl w-full p-4">
      <!-- <Nav />
      <Home /> -->
      This is a test again
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Home from "./Pages/Home.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Nav,
    Home,
    Footer,
  },
};
</script>

<style scoped></style>
