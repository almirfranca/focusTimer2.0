import { controls } from "./elements.js"
import { musics } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') {
      return
    }
    
    actions[action]()
  })
}

export function registerBtnMusic() {
  musics.addEventListener('click', (e) => {
    const music = e.target.dataset.music

    if(typeof actions[music] != 'function') {
      return
    } 

    actions[music]()
  })
}