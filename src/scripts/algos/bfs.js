import Queue from '../utils/queue'
import animatePath from '../utils/animations'

function breadthFirstSearch(startNode,speed){
  const queue = new Queue(startNode)
  const searchPath = []
  while(queue.length>0){
    let curr = queue.dequeue()
    
    for(const neighbor of curr.neighbors){
      if(neighbor.checked) continue
      //update neighboring nodes' path from start
      neighbor.pathFromStart = curr.pathFromStart.slice(0)
      neighbor.pathFromStart.push(neighbor.position)
      searchPath.push(neighbor.position)
      if(neighbor.isEnd) {
        return animatePath(searchPath, neighbor.pathFromStart,speed)}
      
      neighbor.checked = true
      queue.enqueue(neighbor)
    }
  }
}

export default breadthFirstSearch