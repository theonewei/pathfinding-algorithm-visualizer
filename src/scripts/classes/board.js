import Node from "./node"

class Board {
  constructor(height,width,startPos,endPos){
    this.width = width
    this.height = height
    this.grid = []
    this._populateGrid()
    this.setStart(startPos)
    this.setEnd(endPos)
    this.draggedNodePosition = null
  }

  setStart(pos){
    this.node(pos).isStart = true
    this.node(pos).checked = true
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

  swap(posA,posB){
    const nodeA = this.node(posA),
          nodeB = this.node(posB),
          nodeElementA = nodeA.getElement(),
          nodeElementB = nodeB.getElement()

    //update board
    if(nodeA.isStart) this.start = nodeB
    if(nodeA.isEnd) this.end = nodeB

    //swap classes
    if(nodeA.isStart){
      nodeElementA.classList.remove('start-node')
      nodeElementB.classList.add('start-node')
      nodeA.isStart = false
      nodeB.isStart = true
    }
    if(nodeA.isEnd){
      nodeElementA.classList.remove('end-node')
      nodeElementB.classList.add('end-node')
      nodeA.isEnd = false
      nodeB.isEnd = true
    }
  }

  reset(){
    for(const row of this.grid){
      for(const node of row){
        node.reset()
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
        gridRow.append(node.render())
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
        row.push(new Node([i,j],this))
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
        if(col>0){
          const leftNode = this.grid[row][col-1]
          this._linkNodes(currNode,leftNode)
        }
        if(row>0){
          const aboveNode = this.grid[row-1][col]
          this._linkNodes(currNode,aboveNode)
        }
      }
    }
  }
}

export default Board