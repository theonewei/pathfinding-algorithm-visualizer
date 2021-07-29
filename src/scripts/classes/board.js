import Node from "./node"

class Board {
  constructor(height,width,startPos,endPos){
    this.width = width
    this.height = height
    this.grid = []
    this._populateGrid()
    this.setStart(startPos)
    this.setEnd(endPos)
  }

  setStart(pos){
    this.node(pos).isStart = true
    this.start = this.node(pos)
  }
  
  setEnd(pos){
    this.node(pos).isEnd = true
    this.end = this.node(pos)
  }

  node(pos){
    const row = pos[0]
    const col = pos[1]
    return this.grid[row][col]
  }

  reset(){
    for(const row of this.grid){
      for(const node of row){
        node.visited = false
        node.checked = false
        node.pathFromStart = []
        const pos = node.position
        const nodeBox = document.querySelector(`#pos-${pos[0]}-${pos[1]}`)
        nodeBox.className = 'node'
        if(node.isStart) nodeBox.classList.add('start-node')
        if(node.isEnd) nodeBox.classList.add('end-node')
      }
    }
  }

  render(){
    const Grid = document.createElement('div')
    Grid.id = 'grid'

    //render grid
    for(const row of this.grid){
      const gridRow = document.createElement('ul')
      gridRow.className = 'grid-row'
      for(const node of row){
        const nodeBox = document.createElement('li')
        nodeBox.className = 'node'
        nodeBox.id = `pos-${node.position[0]}-${node.position[1]}`
        if(node.isStart) nodeBox.classList.add('start-node')
        if(node.isEnd) nodeBox.classList.add('end-node')
        gridRow.append(nodeBox)
      }
      Grid.append(gridRow)
    }

    return Grid
  }

  // HELPER METHODS

  _populateGrid(){
    for(let i=0;i<this.height;i++){
      const row = []
      for(let j=0;j<this.width;j++){
        row.push(new Node([i,j]))
      }
      this.grid.push(row)
    }
    this._linkGrid()
  }

  _linkNodes(nodeA,nodeB){
    if(nodeA.neighbors.includes(nodeB) || nodeB.neighbors.includes(nodeA)) return
    nodeA.neighbors.push(nodeB)
    nodeB.neighbors.push(nodeA)
  }

  _linkGrid(){
    for(let row = 0; row<this.height; row++){
      for(let col = 0; col<this.width; col++){
        const currNode = this.grid[row][col]
        if(row>0){
          const aboveNode = this.grid[row-1][col]
          this._linkNodes(currNode,aboveNode)
        }
        if(col>0){
          const leftNode = this.grid[row][col-1]
          this._linkNodes(currNode,leftNode)
        }
      }
    }
  }
}

export default Board