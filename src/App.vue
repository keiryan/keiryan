<template>
  <div
    class="w-screen h-screen flex justify-center overflow-y-auto font-['arial'] dark-bg text-white"
  >
    <!-- Middle Div -->
    <main class="max-w-screen-2xl w-full p-4 flex flex-col items-center">
      <!-- <Nav /> -->
      <!-- <Home /> -->
      <!-- <div class="flex flex-col gap-2 my-4"> -->
      <!-- <RouterLink to="/home">Go to Home</RouterLink>
        <RouterLink to="/vue-ios-toggle">Go to Vue ios toggle</RouterLink> -->
      <!-- </div> -->
      <RouterView />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped></style>
