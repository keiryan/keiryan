<template>
  <!-- Background blur -->
  <div
    class="fixed top-0 left-0 w-screen h-screen z-[99 transition-all duration-300 ease-in-out bg-black/20"
    :class="
      toggleCard
        ? 'opacity-100 backdrop-blur-sm'
        : 'opacity-0 pointer-events-none'
    "
  ></div>
  <!-- Tile -->
  <div
    class="flex flex-1 transition-all duration-300 ease-in-out p-4 rounded-xl"
    @click="toggleCard = !toggleCard"
    :class="
     `${classes} ` + (toggleCard &&
        'fixed top-1/2 left-1/2 z-[50] w-[90%] h-[90%] expanded-tile ')
      
    "
  >
    <div :class="toggleCard && 'w-full h-full tile-interior'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTile",
  props: {
    classes: {
      type: String,
      default: "bg-yellow-500",
    },
  },
  data() {
    return {
      toggleCard: false,
    };
  },
};
</script>

<style scoped>
.expanded-tile {
  transform: rotateY(180deg) translateX(50%) translateY(-50%);
  transition: width 0.5s ease, height 0.5s ease, transform 0.5s ease;
}

.tile-interior {
  transform: rotateY(-180deg);
}
</style>
