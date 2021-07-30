function animateWalls(path,board){
  for(const pos of path){
    const node = board.node(pos)
    node.wall = true
    node._unlinkWithNeighbors() 
  }
  _animateWalls(path)
}

function _animateWalls(path,index = 0){
  if(index === path.length) return
  setTimeout(()=>{
    const pos = path[index]
    const id = `#pos-${pos[0]}-${pos[1]}`
    const element = document.querySelector(id)
    element.classList.add('wall')
    _animateWalls(path,++index)
  },10)
}

export default animateWalls