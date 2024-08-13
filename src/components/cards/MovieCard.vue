<template>
  <div>
    <div class="card movie_card" :style="backgroundStyle">
      <div class="play-button-container">
        <button class="play-button">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#FFF"
            />
          </svg>
          Play
        </button>
      </div>
      <div class="bookmark_icon">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            stroke-width="1.5"
            :fill="movie.isBookmarked ? '#FFFFFF' : 'none'"
          />
        </svg>
      </div>
    </div>
    <div class="movie_info">
      <span class="year">
        {{ movie.year }}
      </span>
      <span class="dot-divider"></span>
      <span class="genre">
        <img src="/assets/icon-category-movie.svg" alt="movie" width="12" height="12" />
        {{ movie.category }}
      </span>
      <span class="dot-divider"></span>
      <span class="rating">
        {{ movie.rating }}
      </span>
      <h2 class="title">
        {{ movie.title }}
      </h2>
    </div>
  </div>
</template>
<script setup>
import { useBackgroundStyle } from '@/composables/useBackgroundStyle'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const { backgroundStyle } = useBackgroundStyle(props.movie)
</script>

<style scoped>
.movie_card {
  height: 140px;
}

.movie_info {
  padding-block: 10px;
  font-size: 0.688rem; /* 11px */
  font-weight: var(--font-weight-light);

  .title {
    padding-block: 5px;
    font-size: var(--body-sm);
    font-weight: var(--font-weight-medium);
  }
}

@media (min-width: 800px) {
  .movie_card {
    height: 174px;
  }
  .movie_info {
    .title {
      font-size: var(--heading-xs);
      font-weight: var(--font-weight-medium);
    }
  }
}
</style>
