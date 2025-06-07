import { TIME_TO_SHOW_BANNER } from '@/lib/constants'

function showMovieBannerAfterTime(seconds) {
  setTimeout(() => {
    const bannerElement = document.querySelector('#movie-banner')
    bannerElement.classList.remove('hidden')

    setTimeout(() => {
      const videoElement = document.querySelector('#video-player')
      videoElement.pause()
      videoElement.classList.add('hidden')
    }, 250)
  }, seconds * 1000)
}

showMovieBannerAfterTime(TIME_TO_SHOW_BANNER)
