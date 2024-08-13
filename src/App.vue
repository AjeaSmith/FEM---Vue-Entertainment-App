<script setup>
import { RouterView } from 'vue-router'
import MobileNav from '@/components/nav/MobileNav.vue'
import DesktopNav from '@/components/nav/DesktopNav.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <section class="wrapper">
    <Header>
      <MobileNav />
      <DesktopNav />
    </Header>
    <main>
      <RouterView />
    </main>
  </section>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow: hidden;
}

main {
  padding-inline: 1rem;
  flex-grow: 1;
  overflow-y: auto;
}

/* Scroll bat styles*/
main::-webkit-scrollbar {
  width: 12px; /* Width of the scrollbar */
}

main::-webkit-scrollbar-track {
  background: #1f1f1f; /* Background color of the scrollbar track */
  border-radius: 10px; /* Rounded corners for the track */
}

main::-webkit-scrollbar-thumb {
  background-color: #888; /* Color of the scrollbar thumb */
  border-radius: 10px; /* Rounded corners for the thumb */
  border: 3px solid #1f1f1f; /* Adds padding around thumb for visual effect */
}

main::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color of the thumb on hover */
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  main {
    overflow: auto;
  }
}

@media (min-width: 800px) {
  .wrapper {
    margin: 1.563rem;
  }

  main {
    padding: 0;
  }
}
@media (min-width: 1300px) {
  .wrapper {
    flex-direction: row;
    gap: 2.25rem;
  }
}
</style>
