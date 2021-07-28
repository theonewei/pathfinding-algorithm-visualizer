class Node {
  constructor(position){
    this.isStart = false
    this.isEnd = false
    this.visited = false
    this.checked = false
    this.neighbors = []
    this.position = position
    this.pathFromStart = []
  }
}

export default Node