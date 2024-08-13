<template>
  <section class="mobile">
    <img class="logo" src="/assets/logo.svg" alt="logo" width="25" height="20" />
    <!-- NAV -->
    <nav>
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path" v-slot="{ isActive }">
            <component :is="route.icon" :alt="route.label" :class="{ 'active-link': isActive }" />
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <img
        class="profile mobile_profile"
        src="/assets/image-avatar.png"
        alt="profile"
        width="24"
        height="24"
      />
    </div>
  </section>
</template>

<script setup>
import { routes } from '@/constants/index'
</script>

<style>
.mobile {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 24px;
  }
}
@media (min-width: 800px) {
  .mobile {
    border-radius: 10px;

    .logo {
      width: 32px;
      height: 25px;
    }

    ul {
      gap: 32px;
    }

    .mobile_profile {
      width: 32px;
      height: 32px;
    }
  }
}
@media (min-width: 1300px) {
  .mobile {
    display: none;
  }
}
</style>
