class Node {
  constructor(position,board){
    this.isStart = false
    this.isEnd = false
    this.checked = false
    this.neighbors = []
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
    this._linkWithNeighbors = this._linkWithNeighbors.bind(this)
    this._unlinkWithNeighbors = this._unlinkWithNeighbors.bind(this)
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
    // if(this.isStart || this.isEnd) {
    // }
    node.draggable = true
    node.ondragstart = this._startDrag
    node.ondrop = this._drop
    node.ondragover = this._dragOver
    node.onclick= this._handleClick
    return node
  }

  //HELPER METHODS

  
  _startDrag(){
    this.board.draggedNodePosition = this.position
    console.log(this.board.draggedNodePosition)
  }

  _drop(){
    console.log(this.position)
    this.board.swap(this.board.draggedNodePosition,this.position)
  }
  
  _dragOver(e){
    e.preventDefault()
  }

  _handleClick(){
    if(this.wall){
      this._linkWithNeighbors()
      this.getElement().classList.remove('wall')
    } else {
      this._unlinkWithNeighbors()
      this.getElement().classList.add('wall')
    }
    this.wall = !this.wall
  }

  _unlinkWithNeighbors(){
    for(const neighbor of this.neighbors){
      neighbor.neighbors = neighbor.neighbors.filter(node => node !== this)
    }
  }

  _linkWithNeighbors(){
    for(const neighbor of this.neighbors){
    neighbor.neighbors.push(this)
    }
  }

}

export default Node