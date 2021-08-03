import breadthFirstSearch from "../algos/bfs"
import aStarSearch from "../algos/astar"
import greedyBestFirstSearch from "../algos/greedy"
import depthFirstSearch from "../algos/dfs"
import recursiveDivision from "../algos/recursive_division"
import dijkstra from "../algos/dijkstra"

const ALGO_DESCRIPTIONS = {
  'Depth-First Search': "Depth-First Search begins with a start node and picks a neighor to explore. It will then pick one of that node's neighbors and so on until it reaches a deadend. Then it will move onto the original nodes' next neighbor. This algorithm doesn't guarantee the shortest path.",
  'Breadth-First Search': "Breadth-First Search starts at a node and checks all its unchecked neighbors to see if any of them are the target node. If a neighbor is not the target node it is then marked as 'checked' and added to a queue of nodes to be explored. Once all the neighbors of the current node are checked, the process begins again on the next node in the queue. This process repeats until the target node is found or until the there are no more nodes left in the queue.",
  "Dijkstra's": "Dijkstra's algorithm is an improvement on Best-First Search. It begins at a node, adds all the nodes neighbors to a queue if they haven't been checked, and then dequeues the next node to repeat the process until it finds the end node. The only difference is that Dijkstra's has a heuristic that is used to sort the priority queue. Djikstra's heuristic keeps track of distance travelled so far. The priority queue pushes nodes with shorter travel distances to the front. Dijsktra's guarantees the shortest path",
  'Greedy Best-First Search': 'Greedy Best-First Search takes the idea of using a heuristic to allow an algorithm to prioritize nodes with higher chances of success and applies it more effectively by tracking the distance to the end node instead of distance travelled. This allows it to focus on nodes that bring it closer to the goal',
  'A* Search': "A* Search is a combination of Greedy Best-First Search and Dijkstra's algorithm. The heuristic that A* uses to determine node priority is the sum of distance travelled and distance to the end node. The nodes are also placed in a priority queue.",
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
    this._generateMaze = this._generateMaze.bind(this)
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
      case "Dijkstra's":
        this.algorithm = dijkstra
        break
    }
    this.board.reset()
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
    this.board.reset()
  }

  _generateMaze(){
    recursiveDivision(-1,this.board.grid.length,-1,this.board.grid[0].length,this.board,this.speed)
  }

  render(){
    //////////////////////////////////////////////////////
    //DROPDOWN MENUS

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

    //dijkstra's option
    const dijkstra = document.createElement('option')
    dijkstra.innerText = "Dijkstra's"
    
    //dropdown for selecting algorithm
    const menu = document.createElement('select')
    menu.append(
      dfs,
      bfsOption,
      dijkstra,
      greedy,
      astar,
      )
    menu.addEventListener('change',this._changeAlgorithm)
    menu.id = 'algorithm-menu'
    
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

    //selectors
    const select = document.createElement('div')
    select.append(menu,speed)
    select.id = 'selector-container'

    //////////////////////////////////////////////////////
    //BUTTONS

    // button for finding path
    const visualizeButton = document.createElement('button')
    visualizeButton.innerText = 'Find Path'
    visualizeButton.addEventListener('click',this._visualizePath)
    
    //generate maze button
    const mazeButton = document.createElement('button')
    mazeButton.innerText = 'Generate Maze'
    mazeButton.addEventListener('click',this._generateMaze)

    //maze and visualize button container
    const mazeAndVisualize = document.createElement('div')
    mazeAndVisualize.append(mazeButton,visualizeButton)
    mazeAndVisualize.id = 'maze-visualize'

    //////////////////////////////////////////////////////
    //DESCRIPTION

    const description = document.createElement('a')
    description.innerText = ALGO_DESCRIPTIONS['Depth-First Search']
    description.id = 'description'

    //////////////////////////////////////////////////////
    //RESET BUTTONS

    const resetSearch = document.createElement('button')
    resetSearch.addEventListener('click',this._resetBoard)
    resetSearch.innerText = 'Reset Search'

    const resetWalls = document.createElement('button')
    resetWalls.addEventListener('click',this._eraseWalls)
    resetWalls.innerText = 'Erase Walls'

    const resetButtons = document.createElement('div')
    resetButtons.append(resetSearch,resetWalls)
    resetButtons.className = 'reset-btns'

    //////////////////////////////////////////////////////
    //ENTIRE PANEL

    const controlPanel = document.createElement('div')
    controlPanel.append(select,mazeAndVisualize,description,resetButtons)
    controlPanel.id = 'controls'

    return controlPanel
  }
}

export default Controls