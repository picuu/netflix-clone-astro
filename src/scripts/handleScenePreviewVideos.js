import { TIME_TO_HIDE_VIDEO } from '@/lib/constants'

function init() {
  const scenePreviewVideos = document.querySelectorAll('.scene-preview')
  scenePreviewVideos.forEach((video) => listenVideoHover(video, TIME_TO_HIDE_VIDEO))
}

function listenVideoHover(video, timeToHide = 5) {
  const videoCard = video.parentElement.parentElement.parentElement // .thumbnail
  const videoContainer = video.parentElement // .video-container

  const videoName = video.getAttribute('data-film-name')
  const filmThumbnail = document.querySelector(`#${videoName}-thumbnail`)

  let videoPassedTimeToHide = false

  const hideScenePreview = () => {
    videoContainer.classList.add('hidden')
    video.pause()
  }

  const showFilmThumbnail = () => {
    filmThumbnail.classList.add('visible')
  }

  const handleTimeUpdate = () => {
    if (video.currentTime >= timeToHide && !videoPassedTimeToHide) {
      showFilmThumbnail()
      hideScenePreview()
      videoPassedTimeToHide = true
    }
  }

  const handleMouseEnter = async () => {
    videoPassedTimeToHide = false
    video.currentTime = 0
    await video.play()

    video.addEventListener('timeupdate', handleTimeUpdate)
  }

  const handleMouseLeave = () => {
    video.pause()
    setTimeout(() => {
      videoContainer.classList.remove('hidden')
    }, 500)
    video.removeEventListener('timeupdate', handleTimeUpdate)
  }

  videoCard.addEventListener('mouseenter', handleMouseEnter)
  videoCard.addEventListener('mouseleave', handleMouseLeave)
}

init()
