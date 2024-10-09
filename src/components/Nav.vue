<template>
  <header class="w-full">
    <nav class="flex items-center justify-between flex-wrap py-6">
      <!-- <h1 class="text-3xl">Keiryan Wilson</h1> -->
      <button @click="navigateHome" v-if="showHome"><House /></button>
      <ul class="flex gap-4">
        <!-- <li>Creative</li> -->
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { House } from "lucide-vue-next";
</script>

<script>
export default {
  name: "Nav",
  methods: {
    navigateHome() {
      this.$router.push("/");
    },
  },

  created() {
    this.showHome = this.$route.path !== "/";
    this.$watch("$route", () => {
      this.showHome = this.$route.path !== "/";
    });
  },

  data() {
    return {
      showHome: false,
    };
  },
};
</script>

<style></style>
