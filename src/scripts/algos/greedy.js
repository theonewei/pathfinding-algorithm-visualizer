import animatePath from "../utils/animate_path";
import PriorityQueue from "../utils/priority_queue";

function greedyBestFirstSearch(startNode,speed){
  const queue = new PriorityQueue([startNode])
  const searchPath = []
  while(queue.length>0){
    let curr = queue.dequeue()
    if(curr.isEnd){
      animatePath(searchPath,curr.pathFromStart,speed)
      return
    }
    if(curr!==startNode) searchPath.push(curr.position)
    curr.checked = true

    for(const neighbor of curr.neighbors){
      if(neighbor.checked) continue

      //determine neighbors priority queue value
      neighbor.priorityValue = neighbor.distanceFromEnd()

      //update neighbors path from start
      neighbor.pathFromStart = curr.pathFromStart.slice(0)
      neighbor.pathFromStart.push(neighbor.position)
      queue.enqueue(neighbor)
    }
  }
}

export default greedyBestFirstSearch