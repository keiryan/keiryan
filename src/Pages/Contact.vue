<template>
  <div class="flex flex-col justify-center h-screen">
    <h1 class="text-3xl">Contact me</h1>
    <div class="flex flex-col gap-4 my-8">
    <a class="flex gap-2 hover:underline" href="tel:4043603613"
      ><Smartphone /> <span>404-360-3613</span></a
    >
    <a class="flex gap-2 hover:underline" href="mailto:name@example.com"
      ><Mail />
      <div>keiryanwilson@gmail.com</div></a
    >
  </div>
  </div>
</template>

<script setup>
import { Smartphone, Mail } from "lucide-vue-next";
</script>

<script>
export default {
  name: "Contact",
};
</script>

<style></style>
