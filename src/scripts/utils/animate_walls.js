function animateWalls(path,board,speed){
  for(const pos of path){
    const node = board.node(pos)
    node.wall = true
  }
  _animateWalls(path,speed)
}

function _animateWalls(path,speed,index = 0){
  if(index === path.length) return
  setTimeout(()=>{
    const pos = path[index]
    const id = `#pos-${pos[0]}-${pos[1]}`
    const element = document.querySelector(id)
    element.classList.add('wall')
    _animateWalls(path,speed,++index)
  },speed)
}

export default animateWalls