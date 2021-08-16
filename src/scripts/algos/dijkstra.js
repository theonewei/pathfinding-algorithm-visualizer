import animatePath from "../utils/animate_path";
import PriorityQueue from "../utils/priority_queue";

function dijkstra(startNode,speed){
  const queue = new PriorityQueue([startNode])
  startNode.checked = true
  startNode.priorityValue = 0
  const searchPath = []
  while(queue.length > 0){
    const curr = queue.dequeue()
    for(const neighbor of curr.neighbors){
      if(neighbor.checked || neighbor.wall) continue
      if(neighbor.isEnd){
        animatePath(searchPath,curr.pathFromStart,speed)
        return
      }
      neighbor.checked = true
      searchPath.push(neighbor.position)
      neighbor.pathFromStart = curr.pathFromStart.slice(0)
      neighbor.pathFromStart.push(neighbor.position)
      neighbor.priorityValue = curr.priorityValue+1
      queue.enqueue(neighbor)
    }
  }
}

export default dijkstra