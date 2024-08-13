import { ref, computed, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { debounce } from 'lodash'

export const useAppStore = defineStore('app', () => {
  const searchText = ref('')
  const isSearching = ref(false)
  const movies = ref([])

  // Fetch the movie data
  const fetchMovies = async () => {
    try {
      const response = await fetch('/assets/data.json')
      const data = await response.json()
      movies.value = data.movies
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  onMounted(async () => {
    await fetchMovies()
  })

  // if searchText is empty, set isSearching to false
  watch(searchText, () => {
    if (!searchText.value) {
      isSearching.value = false
    }
  })

  // Computed property to get movies
  const getMovies = computed(() => {
    return movies.value.filter((movie) => movie.category === 'Movie')
  })
  // Computed property to get shows
  const getShows = computed(() => {
    return movies.value.filter((movie) => movie.category === 'TV Series')
  })
  // Computed property to get shows
  const getBookmarkMovies = computed(() => {
    return movies.value.filter((movie) => movie.isBookmarked && movie.category === 'Movie')
  })
  // Computed property to get shows
  const getBookmarkSeries = computed(() => {
    return movies.value.filter((movie) => movie.isBookmarked && movie.category === 'TV Series')
  })

  const filterMoviesByTrending = computed(() => {
    return movies.value.filter((movie) => movie.isTrending)
  })

  const filterBookmarkBySearch = computed(() => {
    const searchQuery = searchText.value.toLowerCase()
    return movies.value.filter(
      (movie) => movie.isBookmarked && movie.title.toLowerCase().includes(searchQuery)
    )
  })
  // Computed property to filter movies based on search text
  const filterContentBySearch = computed(() => {
    const searchQuery = searchText.value.toLowerCase()
    return movies.value.filter((movie) => movie.title.toLowerCase().includes(searchQuery))
  })

  // Computed property to filter movies based on search text
  const filterShowBySearch = computed(() => {
    const searchQuery = searchText.value.toLowerCase()
    return movies.value.filter(
      (movie) => movie.category === 'TV Series' && movie.title.toLowerCase().includes(searchQuery)
    )
  })

  const filterMoviesBySearch = computed(() => {
    const searchQuery = searchText.value.toLowerCase()
    return movies.value.filter(
      (movie) => movie.category === 'Movie' && movie.title.toLowerCase().includes(searchQuery)
    )
  })

  // Debounced method for setting search text
  const setDebounceSearchText = debounce((text) => {
    isSearching.value = true
    searchText.value = text
  }, 500)

  return {
    isSearching,
    filterMoviesByTrending,
    searchText,
    movies,
    getMovies,
    fetchMovies,
    getShows,
    getBookmarkMovies,
    getBookmarkSeries,
    filterBookmarkBySearch,
    filterContentBySearch,
    filterMoviesBySearch,
    filterShowBySearch,
    setDebounceSearchText
  }
})
