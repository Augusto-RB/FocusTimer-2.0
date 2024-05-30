import {
  cafeteria,
  chuva,
  controlsPlay,
  controlsPause,
  controlsStop,
  controlsMinus,
  controlsPlus,
  floresta,
  lareira,
  minutes,
  seconds,
} from "./elements.js"
import state from "./state.js"
import { updateDisplay, countdown } from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  if (state.minutes <= 0 && state.seconds <= 0) {
    return
  }
  state.isRunning = document.documentElement.classList.toggle("running")
  countdown()
  sounds.buttonPressAudio.play()

  controlsPlay.classList.toggle("blink")
  controlsPause.classList.toggle("blink")
  setTimeout(function () {
    controlsPlay.classList.remove("blink"), controlsPause.classList.remove("blink")
  }, 300)
  clearTimeout()
}

export function stopRunning() {
  if ((state.minutes <= 0) & (state.seconds <= 0)) {
    return
  }
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove("running")
  state.minutes = 0
  state.seconds = 0

  minutes.textContent = String(state.minutes).padStart(2, "0")
  seconds.textContent = String(state.seconds).padStart(2, "0")
  updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()

  controlsStop.classList.toggle("blink")
  setTimeout(function () {
    controlsStop.classList.remove("blink")
  }, 300)
  clearTimeout()
}

export function plus() {
  state.minutes++
  state.minutes++
  state.minutes++
  state.minutes++
  state.minutes++
  minutes.textContent = String(state.minutes).padStart(2, "0")
  if (state.minutes > 60) {
    state.minutes = 60
    state.seconds = 0
    minutes.textContent = String(state.minutes)
    seconds.textContent = String(state.seconds).padStart(2, "0")
  }
  updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()

  controlsPlus.classList.toggle("blink")
  controlsMinus.classList.remove("blink")
  setTimeout(function () {
    controlsPlus.classList.remove("blink")
  }, 300)
  clearTimeout()
}

export function minus() {
  state.minutes--
  state.minutes--
  state.minutes--
  state.minutes--
  state.minutes--
  minutes.textContent = String(state.minutes).padStart(2, "0")
  if (state.minutes < 0) {
    stopRunning()
    state.minutes = 0
    state.seconds = 0
    minutes.textContent = String(state.minutes).padStart(2, "0")
    seconds.textContent = String(state.seconds).padStart(2, "0")
  } else {
    updateDisplay(minutes, seconds)
    sounds.buttonPressAudio.play()
  }

  controlsMinus.classList.add("blink")
  controlsPlus.classList.remove("blink")
  setTimeout(function () {
    controlsMinus.classList.remove("blink")
  }, 300)
  clearTimeout()
}

export function toggleFloresta() {
  floresta.classList.toggle("musicOn")
  chuva.classList.remove("musicOn")
  cafeteria.classList.remove("musicOn")
  lareira.classList.remove("musicOn")

  floresta.classList.toggle("blink")
  chuva.classList.remove("blink")
  cafeteria.classList.remove("blink")
  lareira.classList.remove("blink")

  if (floresta.classList.contains("musicOn")) {
    sounds.florestaAudio.play()
    sounds.chuvaAudio.pause()
    sounds.cafeteriaAudio.pause()
    sounds.lareiraAudio.pause()
  } else {
    sounds.florestaAudio.pause()
  }
}

export function toggleChuva() {
  floresta.classList.remove("musicOn")
  chuva.classList.toggle("musicOn")
  cafeteria.classList.remove("musicOn")
  lareira.classList.remove("musicOn")

  floresta.classList.remove("blink")
  chuva.classList.toggle("blink")
  cafeteria.classList.remove("blink")
  lareira.classList.remove("blink")

  if (chuva.classList.contains("musicOn")) {
    sounds.chuvaAudio.play()
    sounds.florestaAudio.pause()
    sounds.cafeteriaAudio.pause()
    sounds.lareiraAudio.pause()
  } else {
    sounds.chuvaAudio.pause()
  }
}

export function toggleCafeteria() {
  floresta.classList.remove("musicOn")
  chuva.classList.remove("musicOn")
  cafeteria.classList.toggle("musicOn")
  lareira.classList.remove("musicOn")

  floresta.classList.remove("blink")
  chuva.classList.remove("blink")
  cafeteria.classList.toggle("blink")
  lareira.classList.remove("blink")

  if (cafeteria.classList.contains("musicOn")) {
    sounds.cafeteriaAudio.play()
    sounds.florestaAudio.pause()
    sounds.chuvaAudio.pause()
    sounds.lareiraAudio.pause()
  } else {
    sounds.cafeteriaAudio.pause()
  }
}

export function toggleLareira() {
  floresta.classList.remove("musicOn")
  chuva.classList.remove("musicOn")
  cafeteria.classList.remove("musicOn")
  lareira.classList.toggle("musicOn")

  floresta.classList.remove("blink")
  chuva.classList.remove("blink")
  cafeteria.classList.remove("blink")
  lareira.classList.toggle("blink")

  if (lareira.classList.contains("musicOn")) {
    sounds.lareiraAudio.play()
    sounds.florestaAudio.pause()
    sounds.chuvaAudio.pause()
    sounds.cafeteriaAudio.pause()
  } else {
    sounds.lareiraAudio.pause()
  }
}
