<template>
  <footer class="w-full bg-black flex justify-center p-3">
    <ul class="flex gap-3">
      <li class="transition-all duration-300 ease-in-out hover:-translate-y-1">
        <a href="https://www.instagram.com/keiryans/" target="_blank"
          ><Instagram color="white"
        /></a>
      </li>
      <li class="transition-all duration-300 ease-in-out hover:-translate-y-1">
        <a href="https://www.linkedin.com/in/keiryan/" target="_blank"
          ><Linkedin color="white"
        /></a>
      </li>
      <li class="transition-all duration-300 ease-in-out hover:-translate-y-1">
        <a href="https://x.com/KeiryanWilson" target="_blank"
          ><Twitter color="white"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { Instagram, Linkedin, Twitter } from "lucide-vue-next";
</script>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
