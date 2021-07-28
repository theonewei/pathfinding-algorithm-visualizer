import Board from './scripts/classes/board'
import Controls from './scripts/classes/controls'

document.addEventListener('DOMContentLoaded',()=>{
  const body = document.querySelector('body')
  const board = new Board(20,50,[7,3],[14,38])
  const controls = new Controls(board)
  body.append(
    controls.render(),
    board.render())
})