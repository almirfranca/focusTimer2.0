import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function addFive () {
  timer.countFiveUp()
}

export function removeFive () {
  timer.countFiveDown()
}



export function forestMusic() {
  state.musicOff = document.documentElement.classList.toggle('music-on')
  state.forest.classList.toggle('secondary')

  if(state.musicOff) {
    sounds.floresta.play()
    return
  }
    sounds.floresta.pause()
}

export function rainMusic() {
  state.musicOff = document.documentElement.classList.toggle('music-on')
  state.cloudRain.classList.toggle('secondary')

  if(state.musicOff) {
    sounds.chuva.play()
    return
  }
    sounds.chuva.pause()
}

export function coffeMusic() {
  state.musicOff = document.documentElement.classList.toggle('music-on')
  state.timeCoffe.classList.toggle('secondary')

  if(state.musicOff) {
    sounds.cafeteria.play()
    return
  }
    sounds.cafeteria.pause()
}

export function fireplaceMusic() {
  state.musicOff = document.documentElement.classList.toggle('music-on')
  state.fireplace.classList.toggle('secondary')

  if(state.musicOff) {
    sounds.lareira.play()
    return
  }
    sounds.lareira.pause()
}
