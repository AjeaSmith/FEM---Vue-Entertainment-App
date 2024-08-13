<template>
  <header>
    <slot></slot>
  </header>
</template>

<script setup></script>

<style>
header {
  padding: 1rem;
  background-color: var(--blue-600);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 800px) {
  header {
    padding: 1.5rem;
    border-radius: 10px;
  }
}

@media (min-width: 1300px) {
  header {
    border-radius: 20px;
    padding-block: 2.188rem;
    padding-inline: 1.875rem;
    background-color: var(--blue-600);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    ul li a svg path:hover {
      fill: var(--red);
    }
  }
}
</style>
