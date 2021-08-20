import Board from './scripts/classes/board'
import Controls from './scripts/classes/controls'
import Legend from './scripts/classes/legend'
import Tutorial from './scripts/classes/tutorial'


document.addEventListener('DOMContentLoaded',()=>{
  const body = document.querySelector('body')
  const legend = new Legend()
  const board = new Board(31,61,[15,10],[15,50])
  const controls = new Controls(board)
  const tutorial = new Tutorial()
  const app = document.createElement('div')
  app.id = 'app'
  app.append(
    controls.render(),
    board.render(),
    )
  body.append(
    tutorial.render(),
    legend.render(),
    app,
    )
})