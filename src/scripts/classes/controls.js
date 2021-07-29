import breadthFirstSearch from "../algos/bfs"

const ALGO_DESCRIPTIONS = {
  'Breadth-First Search': "Depth first search starts at a node and checks all its unchecked neighbors to see if any of them are the target node. If a neighbor is not the target node it is then marked as 'checked' and added to a queue of nodes to be explored. Once all the neighbors of the current node are checked, the process begins again on the next node in the queue. This process repeats until the target node is found or until the there are no more nodes left in the queue."
}

class Controls {
  constructor(board){
    this.board = board
    this.algorithm = breadthFirstSearch
    this.description = ALGO_DESCRIPTIONS['Breadth-First Search']
    this.speed = 25
    this._changeAlgorithm = this._changeAlgorithm.bind(this)
    this._visualizePath = this._visualizePath.bind(this)
    this._changeSpeed = this._changeSpeed.bind(this)
    this._resetBoard = this._resetBoard.bind(this)
  }

  _changeAlgorithm(event){
    switch (event.target.value){
      case 'Breadth-First Search':
        this.algorithm = breadthFirstSearch
        this.description = ALGO_DESCRIPTIONS[event.target.value]
      // case 'A* Search':
      //   this.algorithm = aStarSearch
      //   this.description = ALGO_DESCRIPTIONS[1]
      // case 'Greedy Best-First Search':
      //   this.algorithm = greedyBestFirstSearch
      //   this.description = ALGO_DESCRIPTIONS[2]
    }
  }

  _visualizePath(){
    this.algorithm(this.board.start,this.speed)
  }

  _changeSpeed(event){
    const speed = event.target.value
    this.speed = 
      speed === 'Average' ? 25 :
      speed === 'Fast' ? 5 : 100
  }

  _resetBoard(event){
    event.preventDefault()
    this.board.reset()
  }

  render(){
    // button for finding path
    const button = document.createElement('button')
    button.innerText = 'Find Path'
    button.addEventListener('click',this._visualizePath)
    
    //bfs option
    const bfsOption = document.createElement('option')
    bfsOption.innerText = 'Breadth-First Search'

    // //astar option
    // const astar = document.createElement('option')
    // astar.innerText = 'A* Search'

    // //greedy option
    // const greedy = document.createElement('option')
    // greedy.innerText = 'Greedy Best-First Search'
    
    //dropdown for selecting algorithm
    const menu = document.createElement('select')
    menu.append(
      bfsOption,
      // astar,
      // greedy
      )
    menu.addEventListener('change',this._changeAlgorithm)
    menu.id = 'algorithm-menu'

    //description for algorithm
    const description = document.createElement('a')
    description.innerText = this.description
    description.id = 'description'

    //speed controller
    const slow = document.createElement('option')
    slow.innerText = 'Slow'
    const average = document.createElement('option')
    average.innerText = 'Average'
    const fast = document.createElement('option')
    fast.innerText = 'Fast'

    const speed = document.createElement('select')
    speed.addEventListener('change',this._changeSpeed)
    speed.append(average,slow,fast)
    speed.id = 'speed-menu'

    //reset button
    const reset = document.createElement('button')
    reset.addEventListener('click',this._resetBoard)
    reset.innerText = 'Reset'

    //control panel
    const controlPanel = document.createElement('div')
    controlPanel.append(menu,button,reset,description,speed)
    controlPanel.id = 'controls'

    return controlPanel
  }
}

export default Controls