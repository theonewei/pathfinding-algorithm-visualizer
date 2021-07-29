class PriorityQueue {
  constructor(array){
    this.nodes = []
    this._build(array)
    this.length = this.nodes.length
  }

  parent(index){
    return Math.floor((index-1)/2)
  }

  leftChild(index){
    return index * 2 + 1
  }

  rightChild(index){
    return index*2+2
  }

  isLeaf(index){
    if(index >= Math.floor(this.nodes.length/2) && index<this.nodes.length) return true
    return false
  }

  swap(index1,index2){
    [this.nodes[index1],this.nodes[index2]] = [this.nodes[index2],this.nodes[index1]]
  }

  enqueue(node){
    this.nodes.push(node)
    if(this.nodes.length === 1) return
    this.pushUp()
  }

  dequeue(){
    if(this.nodes.length === 0) return
    const max = this.nodes[0]
    const end = this.nodes.pop()
    this.nodes[0] = end
    this.pushDown(0)
    return max
  }

  pushUp(){
    let index = this.nodes.length-1
    let parentIndex = this.parent(index) 
    while(index !== 0 && this.nodes[index].priorityValue < this.nodes[parentIndex].priorityValue){
      this.swap(index,parentIndex)
      index = parentIndex
      parentIndex = this.parent(index)
    }
  }

  pushDown(index){
    if(!this.isLeaf(index)){
      let leftChildIndex = this.leftChild(index)
      let rightChildIndex = this.rightChild(index)
      let maxIndex = index

      if(this.nodes[leftChildIndex]<this.nodes[index]){
        maxIndex = leftChildIndex
      }
      if(this.nodes[rightChildIndex]<=this.nodes[maxIndex]){
        maxIndex = rightChildIndex
      }
      if(maxIndex !== index){
        this.swap(maxIndex,index)
        this.pushDown(maxIndex)
      }
    }
  }

  _build(array){
    for(const node of array){
      this.enqueue(node)
    }
  }

  peek(){
    return this.nodes[0]
  }
}

export default PriorityQueue