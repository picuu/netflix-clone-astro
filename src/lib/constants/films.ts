import OuterBanksLogo from '@/assets/logos/shows/outer-banks.webp'
import OuterBanksScene from '@/assets/scenes/outer-banks-fight.mp4'
import OuterBanksThumbnail from '@/assets/thumbnails/shows/outer-banks.jpg'

import SquidGameLogo from '@/assets/logos/shows/squid-games.webp'
import SquidGameScene from '@/assets/scenes/squid-games.mp4'
import SquidGameThumbnail from '@/assets/thumbnails/shows/juego-del-calamar.jpg'

import BreakingBadLogo from '@/assets/logos/shows/breaking-bad.webp'
import BreakingBadScene from '@/assets/scenes/breaking-bad-videotape.mp4'
import BreakingBadThumbnail from '@/assets/thumbnails/shows/breaking-bad.webp'

import InterstellarLogo from '@/assets/logos/films/interstellar.webp'
import InterstellarScene from '@/assets/scenes/interstellar.mp4'
import InterstellarThumbnail from '@/assets/thumbnails/films/interstellar.webp'

import StrangerThingsLogo from '@/assets/logos/shows/stranger-things.webp'
import StrangerThingsScene from '@/assets/scenes/stranger-things.mp4'
import StrangerThingsThumbnail from '@/assets/thumbnails/shows/stranger-things.jpg'

import CasaPapelLogo from '@/assets/logos/shows/casa-de-papel.webp'
import CasaPapelScene from '@/assets/scenes/la-casa-de-papel.mp4'
import CasaPapelThumbnail from '@/assets/thumbnails/shows/la-casa-de-papel.jpg'

import type { ImageMetadata } from 'astro'

interface FilmMetadata {
  name: string
  slug: string
  duration: string
  genres: string[]
  maturingRating: 0 | 7 | 12 | 16 | 18
  logo: ImageMetadata
  thumbnail: ImageMetadata
  poster?: ImageMetadata
  scene: string
}

const films: FilmMetadata[] = [
  {
    name: 'Outer Banks',
    slug: 'outer-banks',
    duration: '5 temporadas',
    genres: ['Aventura', 'Drama', 'Misterio'],
    maturingRating: 16,
    logo: OuterBanksLogo,
    thumbnail: OuterBanksThumbnail,
    poster: undefined, // Poster image can be added later if available
    scene: OuterBanksScene // Using the thumbnail as the scene image for now
  },
  {
    name: 'El Juego del Calamar',
    slug: 'squid-game',
    duration: '4 temporadas',
    genres: ['Ciencia Ficción', 'Terror', 'Aventura'],
    maturingRating: 16,
    logo: SquidGameLogo,
    thumbnail: SquidGameThumbnail,
    poster: undefined, // Poster image can be added later if available
    scene: SquidGameScene // Using the thumbnail as the scene image for now
  },
  {
    name: 'Breaking Bad',
    slug: 'breaking-bad',
    duration: '5 temporadas',
    genres: ['Crimen', 'Drama', 'Suspenso'],
    maturingRating: 18,
    logo: BreakingBadLogo,
    thumbnail: BreakingBadThumbnail,
    poster: undefined, // Poster image can be added later if available
    scene: BreakingBadScene // Using the thumbnail as the scene image for now
  },
  {
    name: 'Interstellar',
    slug: 'interstellar',
    duration: '2h 49 min',
    genres: ['Ciencia Ficción', 'Drama', 'Aventura'],
    maturingRating: 12,
    logo: InterstellarLogo,
    thumbnail: InterstellarThumbnail,
    poster: undefined, // Poster image can be added later if available
    scene: InterstellarScene // Using the thumbnail as the scene image for now
  },
  {
    name: 'Stranger Things',
    slug: 'stranger-things',
    duration: '4 temporadas',
    genres: ['Ciencia Ficción', 'Terror', 'Aventura'],
    maturingRating: 16,
    logo: StrangerThingsLogo,
    thumbnail: StrangerThingsThumbnail,
    poster: undefined, // Poster image can be added later if available
    scene: StrangerThingsScene // Using the thumbnail as the scene image for now
  },
  {
    name: 'La Casa de Papel',
    slug: 'la-casa-de-papel',
    duration: '5 temporadas',
    genres: ['Crimen', 'Drama', 'Suspenso'],
    maturingRating: 16,
    logo: CasaPapelLogo,
    thumbnail: CasaPapelThumbnail,
    poster: undefined, // Poster image can be added later if available
    scene: CasaPapelScene // Using the thumbnail as the scene image for now
  }
] as const

export default films
