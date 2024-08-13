<template>
  <div class="search">
    <img src="/assets/icon-search.svg" alt="magnifying glass" width="24" height="24" />
    <input
      type="text"
      name="search"
      :placeholder="props.placeholder"
      v-model="inputValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'

const props = defineProps(['placeholder'])
const appStore = useAppStore()
const inputValue = appStore.searchText

function handleInput(event) {
  appStore.setDebounceSearchText(event.target.value)
}
</script>

<style scoped>
.search {
  margin-block: 1.5rem;
  display: flex;
  gap: 1rem;

  input {
    color: var(--text-color);
    width: 100%;
    background: transparent;
    border: none;
    caret-color: var(--red);
  }
  input:focus {
    padding-bottom: 12px;
    outline: none;
    border-bottom: 1px solid var(--blue-400);
  }
  
}

@media (min-width: 800px) {
  .search {
    margin-block: 2.063rem;

    img {
      width: 32px;
      height: 32px;
    }

    input {
      font-size: var(--heading-md);
    }
  }
}
</style>
