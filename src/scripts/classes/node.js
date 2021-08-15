class Node {
  constructor(position,board){
    this.isStart = false
    this.isEnd = false
    this.checked = false
    this.neighbors = []
    this.wallNeighbors = []
    this.board = board
    this.position = position
    this.pathFromStart = []
    this.priorityValue = Infinity
    this.distanceFromStart = 0
    this.wall = false
    this._startDrag = this._startDrag.bind(this)
    this._drop = this._drop.bind(this)
    this._dragOver = this._dragOver.bind(this)
    this._handleClick = this._handleClick.bind(this)
    this._turnNotWall = this._turnNotWall.bind(this)
    this._turnIntoWall = this._turnIntoWall.bind(this)
  }

  distanceFromEnd(){
    const endPos = this.board.end.position
    const deltaX = this.position[1]-endPos[1]
    const deltaY = this.position[0]-endPos[0]
    return Math.abs(deltaX) + Math.abs(deltaY)
  }

  getElement(){
    const id = `#pos-${this.position[0]}-${this.position[1]}`
    return document.querySelector(id)
  }

  becomeNormal(element){
    element.onclick = this._handleClick
    element.ondragstart = null
    element.draggable = false
    element.ondrop = this._drop
  }
  
  becomeStartEnd(element){
    element.onclick = null
    element.ondragstart = this._startDrag
    element.draggable = true
    element.ondrop = null
  }

  reset(){
    this.visited = false
    this.checked = false
    this.pathFromStart = []
    this.getElement().classList.remove('path','visited')
  }

  render(){
    const node = document.createElement('li')
    node.className = 'node'
    node.id = `pos-${this.position[0]}-${this.position[1]}`
    if(this.isStart) node.classList.add('start-node')
    if(this.isEnd) node.classList.add('end-node')
    if(this.isEnd || this.isStart){
      node.draggable = true
      node.ondragstart = this._startDrag
    }else{
      node.ondrop = this._drop
      node.onclick= this._handleClick
    }
    node.ondragover = this._dragOver
    return node
  }

  //HELPER METHODS

  
  _startDrag(){
    this.board.draggedNodePosition = this.position
  }

  _drop(){
    this.board.swap(this.board.draggedNodePosition,this.position)
  }
  
  _dragOver(e){
    e.preventDefault()
  }

  _handleClick(){
    if(this.wall){
      this._turnNotWall()
      this.getElement().classList.remove('wall')
    } else {
      this._turnIntoWall()
      this.getElement().classList.add('wall')
    }
    this.wall = !this.wall
  }

  _turnIntoWall(){
    const neighbors = this.neighbors.concat(this.wallNeighbors)
    this.neighbors = []
    this.wallNeighbors = []
    for(const neighbor of neighbors){
      if(neighbor.wall){
        this.neighbors.push(neighbor)
      }else{
        this.wallNeighbors.push(neighbor)
      }
      //move this node into wallneighbors for all neighbor nodes
      for(const node of neighbor.neighbors){
        if(node===this){
          
        }
      }
    }
  }

  _turnNotWall(){
    for(const neighbor of this.neighbors){
      if(neighbor.wall) continue
      neighbor.neighbors.push(this)
    }
  }

}

export default Node