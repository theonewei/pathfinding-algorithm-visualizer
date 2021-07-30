import Board from './scripts/classes/board'
import Controls from './scripts/classes/controls'
import Legend from './scripts/classes/legend'


document.addEventListener('DOMContentLoaded',()=>{
  const body = document.querySelector('body')
  const legend = new Legend()
  const board = new Board(30,60,[15,10],[15,50])
  const controls = new Controls(board)
  const app = document.createElement('div')
  app.id = 'app'
  app.append(
    controls.render(),
    board.render())
  body.append(legend.render(),app)
})