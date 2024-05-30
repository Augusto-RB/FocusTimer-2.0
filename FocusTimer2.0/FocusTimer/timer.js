import { stopRunning } from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import * as sounds from "./sounds.js"
export function updateDisplay(minutes, seconds) {
  minutes = state.minutes
  seconds = state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function countdown() {
  clearTimeout(state.countdownId)
  if (!state.isRunning) {
    return
  }

  state.seconds--

  if (state.seconds < 0) {
    state.seconds = 59
    state.minutes--
  }

  if (state.minutes < 0) {
    stopRunning()
    sounds.kichenTimer.play()
    return
  }

  updateDisplay()
  state.countdownId = setTimeout(() => countdown(), 1000)
}
