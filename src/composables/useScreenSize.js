import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScreenSize() {
  const isLargeScreen = ref(window.innerWidth >= 1024)

  const updateScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024
  }

  onMounted(() => {
    window.addEventListener('resize', updateScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenSize)
  })

  return {
    isLargeScreen
  }
}
