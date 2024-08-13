import { computed } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'

export function useBackgroundStyle(movie, type = 'movie') {
  const { isLargeScreen } = useScreenSize()
  
  const backgroundStyle = computed(() => {
    const imageUrl = isLargeScreen.value
      ? movie.thumbnail[type]?.large || movie.thumbnail.regular.large
      : movie.thumbnail[type]?.small || movie.thumbnail.regular.small

    return {
      background:
        type === 'trending'
          ? `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1) 0%, 
          rgba(0, 0, 0, 0.1) 50%, 
          rgba(0, 0, 0, 0.2) 100%
        ),
        url(${imageUrl})`
          : `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  })

  return {
    backgroundStyle
  }
}
