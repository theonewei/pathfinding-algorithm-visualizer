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
    this.length++
    if(this.nodes.length === 1) return
    this.pushUp()
  }

  dequeue(){
    if(this.nodes.length === 0) return
    const max = this.nodes[0]
    const end = this.nodes.pop()
    this.length--
    if(this.nodes.length !==0){
      this.nodes[0] = end
      this.pushDown(0)
    }
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
      const leftChildIndex = this.leftChild(index)
      const rightChildIndex = this.rightChild(index)
      let maxIndex = index

      if(this.nodes[leftChildIndex].priorityValue<this.nodes[index].priorityValue){
        maxIndex = leftChildIndex
      }
      if(this.nodes[rightChildIndex] && this.nodes[rightChildIndex].priorityValue<=this.nodes[maxIndex].priorityValue){
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

class Node {
  constructor(name,priorityValue){
    this.priorityValue = priorityValue
    this.name=name
  }
}

nodes = new PriorityQueue([new Node('20',1892)])

for(let i = 0;i<20;i++){
  let val = Math.floor(Math.random()*i)
  let node = new Node(`${i}`,val)
  nodes.enqueue(node)
}