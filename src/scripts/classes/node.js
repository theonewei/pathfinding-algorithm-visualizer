class Node {
  constructor(position,board){
    this.isStart = false
    this.isEnd = false
    this.visited = false
    this.checked = false
    this.neighbors = []
    this.board = board
    this.position = position
    this.pathFromStart = []
  }
}

export default Node