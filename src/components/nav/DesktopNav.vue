<template>
  <section class="desktop">
    <div class="desktop_wrap">
      <!-- LOGO -->
      <img class="desktop_logo" src="/assets/logo.svg" alt="logo" width="25" height="20" />
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
    </div>
    <div>
      <img
        class="profile desktop_profile"
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
.desktop {
  display: none;
}
@media (min-width: 1300px) {
  .desktop {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .desktop_wrap {
      display: flex;
      flex-direction: column;
      gap: 74px;

      .desktop_logo {
        width: 32px;
        height: 25px;
      }

      .desktop_profile {
        width: 40px;
        height: 40px;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        list-style: none;
      }
    }
  }
}
</style>
