<template>
  <section class="container">
    <Card v-for="movie in appStore.movies" :movie="movie" :key="movie.title" />
  </section>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import Card from './Card.vue'

const appStore = useAppStore()
</script>
