import breadthFirstSearch from "../algos/bfs"
import aStarSearch from "../algos/astar"
import greedyBestFirstSearch from "../algos/greedy"
import depthFirstSearch from "../algos/dfs"

const ALGO_DESCRIPTIONS = {
  'Breadth-First Search': "Breadth-First Search starts at a node and checks all its unchecked neighbors to see if any of them are the target node. If a neighbor is not the target node it is then marked as 'checked' and added to a queue of nodes to be explored. Once all the neighbors of the current node are checked, the process begins again on the next node in the queue. This process repeats until the target node is found or until the there are no more nodes left in the queue.",
  'A* Search': "A* search is a heuristic pathfinding algorithm that chooses which nodes to explore based on a heuristic value. At each node, it assigns each of its neighbors a heuristic value that comes from the sum of its distance travelled and its distance from the end. It then inserts the neighbors into a priority queue that sorts the nodes by their heuristic value. This causes nodes with better heuristic values to be searched first, thus increasing the speed at which the shortest path is found.",
  'Greedy Best-First Search': 'Greedy Best-First Search is very simliar to A* because it gives soon-to-be explored nodes a heuristic value and then uses that value to determine each node a place in a priority queue. The main difference is that the heuristic function does not take into account distance travelled already',
  'Depth-First Search': "Depth-First Search begins with a start node and picks a neighor to explore. It will continue to burrow down one branch until every node in that branch has been check. Then it will move onto the original nodes next neighbor. This algorithm doesn't guarantee the shortest path."
}

class Controls {
  constructor(board){
    this.board = board
    this.algorithm = depthFirstSearch
    this.speed = 5
    this._changeAlgorithm = this._changeAlgorithm.bind(this)
    this._visualizePath = this._visualizePath.bind(this)
    this._changeSpeed = this._changeSpeed.bind(this)
    this._resetBoard = this._resetBoard.bind(this)
    this._eraseWalls = this._eraseWalls.bind(this)
  }

  _changeAlgorithm(event){
    switch (event.target.value){
      case 'Breadth-First Search':
        this.algorithm = breadthFirstSearch
        break
      case 'A* Search':
        this.algorithm = aStarSearch
        break
      case 'Greedy Best-First Search':
        this.algorithm = greedyBestFirstSearch
        break
      case 'Depth-First Search':
        this.algorithm = depthFirstSearch
        break
    }
    // this.description = 
    document.querySelector('#description').innerText = ALGO_DESCRIPTIONS[event.target.value]
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

  _eraseWalls(){
    this.board.eraseWalls()
  }

  render(){
    //bfs option
    const bfsOption = document.createElement('option')
    bfsOption.innerText = 'Breadth-First Search'

    // //astar option
    const astar = document.createElement('option')
    astar.innerText = 'A* Search'

    // //greedy option
    const greedy = document.createElement('option')
    greedy.innerText = 'Greedy Best-First Search'

    //dfs option
    const dfs = document.createElement('option')
    dfs.innerText = 'Depth-First Search'
    
    //dropdown for selecting algorithm
    const menu = document.createElement('select')
    menu.append(
      dfs,
      bfsOption,
      astar,
      greedy
      )
    menu.addEventListener('change',this._changeAlgorithm)
    menu.id = 'algorithm-menu'

    // button for finding path
    const visualizeButton = document.createElement('button')
    visualizeButton.innerText = 'Find Path'
    visualizeButton.addEventListener('click',this._visualizePath)
    
    //speed controller
    const slow = document.createElement('option')
    slow.innerText = 'Slow'
    const average = document.createElement('option')
    average.innerText = 'Average'
    const fast = document.createElement('option')
    fast.innerText = 'Fast'

    const speed = document.createElement('select')
    speed.addEventListener('change',this._changeSpeed)
    speed.append(fast,average,slow)
    speed.id = 'speed-menu'

    const visualizeAndSpeed = document.createElement('div')
    visualizeAndSpeed.append(visualizeButton,speed)
    visualizeAndSpeed.className = 'reset-btns'

    //description for algorithm
    const description = document.createElement('a')
    description.innerText = ALGO_DESCRIPTIONS['Depth-First Search']
    description.id = 'description'

    //reset buttons
    const resetSearch = document.createElement('button')
    resetSearch.addEventListener('click',this._resetBoard)
    resetSearch.innerText = 'Reset Search'

    const resetWalls = document.createElement('button')
    resetWalls.addEventListener('click',this._eraseWalls)
    resetWalls.innerText = 'Erase Walls'

    const resetButtons = document.createElement('div')
    resetButtons.append(resetSearch,resetWalls)
    resetButtons.className = 'reset-btns'

    //control panel
    const controlPanel = document.createElement('div')
    controlPanel.append(menu,visualizeAndSpeed,description,resetButtons)
    controlPanel.id = 'controls'

    return controlPanel
  }
}

export default Controls