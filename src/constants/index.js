import IconBookmark from '@/components/Icons/nav/IconBookmark.vue'
import IconHome from '@/components/Icons/nav/IconHome.vue'
import IconMovies from '@/components/Icons/nav/IconMovies.vue'
import IconShow from '@/components/Icons/nav/IconShow.vue'

export const routes = [
  { path: '/', icon: IconHome },
  { path: '/movies', icon: IconMovies },
  { path: '/shows', icon: IconShow },
  { path: '/bookmarked', icon: IconBookmark }
]
