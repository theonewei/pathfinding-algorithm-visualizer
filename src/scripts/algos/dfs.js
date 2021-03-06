import animatePath from "../utils/animate_path";

function depthFirstSearch(startNode, speed){
  const searchedPath = []
  const endNode = _recursiveSearch(startNode,searchedPath)
  if(!endNode.isEnd) return alert('No path can be found! Remove some obstacles and try again.')
  animatePath(searchedPath,endNode.pathFromStart,speed)

}

function _recursiveSearch(node,searchedPath){
  if(node.isEnd) return node
  node.checked = true
  for(const neighbor of node.neighbors){
    if(neighbor.checked || neighbor.wall) continue
    neighbor.pathFromStart = node.pathFromStart.slice(0)
    neighbor.pathFromStart.push(neighbor.position)
    searchedPath.push(neighbor.position)
    const endNode = _recursiveSearch(neighbor,searchedPath)
    if(endNode) return endNode
  }
  return false
}

export default depthFirstSearch