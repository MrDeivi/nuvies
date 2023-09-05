import type { QueryItem } from '~/types'

export const QUERY_LIST = {
  movie: <QueryItem[]>([
    { type: 'movie', title: 'Popular', query: 'popular' },
    { type: 'movie', title: 'Top Rated', query: 'top_rated' },
    { type: 'movie', title: 'Upcoming', query: 'upcoming' },
    { type: 'movie', title: 'Now Playing', query: 'now_playing' },
  ]),
  tv: <QueryItem[]>([
    { type: 'tv', title: 'Popular', query: 'popular' },
    { type: 'tv', title: 'Top Rated', query: 'top_rated' },
    { type: 'tv', title: 'Airing Today', query: 'airing_today' },
  ]),
}
