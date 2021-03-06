import Queue from '../utils/queue'
import animatePath from '../utils/animate_path'

function breadthFirstSearch(startNode,speed){
  const queue = new Queue(startNode)
  const searchPath = []
  while(queue.length>0){
    let curr = queue.dequeue()
    curr.checked = true
    for(const neighbor of curr.neighbors){
      if(neighbor.checked || neighbor.wall) continue
      //update neighboring nodes' path from start
      neighbor.pathFromStart = curr.pathFromStart.slice(0)
      neighbor.pathFromStart.push(neighbor.position)
      searchPath.push(neighbor.position)
      if(neighbor.isEnd) {
        return animatePath(searchPath, neighbor.pathFromStart,speed)
      }
      neighbor.checked = true
      queue.enqueue(neighbor)
    }
  }
  alert('No path can be found! Remove some obstacles and try again.')
}

export default breadthFirstSearch