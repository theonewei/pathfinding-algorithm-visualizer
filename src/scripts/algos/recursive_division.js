import animateWalls from "../utils/animate_walls"

function recursiveDivision(top,bottom,left,right,board,speed){
  const wallPathing = []
  _recursiveDivision(top,bottom,left,right,wallPathing,true)
  animateWalls(wallPathing,board,speed)
}

function _recursiveDivision(minY,maxY,minX,maxX,path,vertical){
  if(vertical){
    if(maxX-minX<6) return
    let wall = _random(minX,maxX)
    let hole = _random(minY,maxY)
    if(wall%2===0) wall--
    if(hole%2!==0) hole--
    for(let i = minY+1; i< maxY;i++){
      if(i===hole) continue
      path.push([i,wall])
    }
    _recursiveDivision(minY,maxY,minX,wall,path,_chooseOrientation(maxX-minX,maxY-minY))
    _recursiveDivision(minY,maxY,wall,maxX,path,_chooseOrientation(maxX-minX,maxY-minY))
  }else{
    if(maxY-minY<6) return
    let wall = _random(minY,maxY)
    let hole = _random(minX,maxX)
    if(wall%2===0) wall--
    if(hole%2!==0) hole--
    for(let i = minX+1; i<maxX;i++){
      if(i===hole) continue
      path.push([wall,i])
    }
    _recursiveDivision(minY,wall,minX,maxX,path,_chooseOrientation(maxX-minX,maxY-minY))
    _recursiveDivision(wall,maxY,minX,maxX,path,_chooseOrientation(maxX-minX,maxY-minY))
  }
}

function _random(min,max){
  return min + 3 + Math.floor(Math.random()*(max-min-5))
}

function _chooseOrientation(width,height){
  if(width<height) return false
  return true
}

export default recursiveDivision