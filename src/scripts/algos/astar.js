import animatePath from "../utils/animations";
import PriorityQueue from "../utils/priority_queue";

function aStarSearch(startNode,speed){
  const queue = new PriorityQueue([startNode])
  const searchPath = []
  while(queue.length>0)
}