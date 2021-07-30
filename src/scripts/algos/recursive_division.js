import animateWalls from "../utils/animate_walls"

function recursiveDivision(top,bottom,left,right,board){
  const wallPathing = []
  _recursiveDivision(top,bottom,left,right,wallPathing,true)
  animateWalls(wallPathing,board)
}

function _recursiveDivision(minY,maxY,minX,maxX,path,vertical){
  if(vertical){
    if(maxX-minX<4) return
    const wall = _random(minX,maxX)
    const hole = _random(minY,maxY)
    for(let i = minY+1; i< maxY;i++){
      if(i===hole) continue
      path.push([i,wall])
    }
    _recursiveDivision(minY,maxY,minX,wall,path,!vertical)
    _recursiveDivision(minY,maxY,wall,maxX,path,!vertical)
  }else{
    if(maxY-minY<4) return
    const wall = _random(minY,maxY)
    const hole = _random(minX,maxX)
    for(let i = minX+1; i<maxX;i++){
      if(i===hole) continue
      path.push([wall,i])
    }
    _recursiveDivision(minY,wall,minX,maxX,path,!vertical)
    _recursiveDivision(wall,maxY,minX,maxX,path,!vertical)
  }
}

function _random(min,max){
  return min + 2 + Math.floor(Math.random()*(max-min-4))
}

export default recursiveDivision