import animateWalls from "../utils/animate_walls"

function recursiveDivision(top,bottom,left,right,board,speed,reservedNodes){
  const wallPathing = []
  _recursiveDivision(top,bottom,left,right,wallPathing,true,reservedNodes)
  animateWalls(wallPathing,board,speed)
}

function _recursiveDivision(minY,maxY,minX,maxX,path,vertical,reservedNodes){
  if(vertical){
    if(maxX-minX<6) return
    let wall = _random(minX,maxX)
    let hole = _random(minY,maxY)
    if(wall%2===0) wall--
    if(hole%2!==0) hole--
    for(let i = minY+1; i< maxY;i++){
      if(i===hole) continue
      if(isEqual(reservedNodes[0],[i,wall]) || isEqual(reservedNodes[1],[i,wall])){
        continue
      }
      path.push([i,wall])
    }
    _recursiveDivision(minY,maxY,minX,wall,path,_chooseOrientation(maxX-minX,maxY-minY),reservedNodes)
    _recursiveDivision(minY,maxY,wall,maxX,path,_chooseOrientation(maxX-minX,maxY-minY),reservedNodes)
  }else{
    if(maxY-minY<6) return
    let wall = _random(minY,maxY)
    let hole = _random(minX,maxX)
    if(wall%2===0) wall--
    if(hole%2!==0) hole--
    for(let i = minX+1; i<maxX;i++){
      if(i===hole) continue
      if(isEqual(reservedNodes[0],[wall,i]) || isEqual(reservedNodes[1],[wall,i])){
        continue
      }
      path.push([wall,i])
    }
    _recursiveDivision(minY,wall,minX,maxX,path,_chooseOrientation(maxX-minX,maxY-minY),reservedNodes)
    _recursiveDivision(wall,maxY,minX,maxX,path,_chooseOrientation(maxX-minX,maxY-minY),reservedNodes)
  }
}

function _random(min,max){
  return min + 3 + Math.floor(Math.random()*(max-min-5))
}

function _chooseOrientation(width,height){
  if(width<height) return false
  return true
}

function isEqual(arrayA,arrayB){
  if(arrayA.length !== arrayB.length) return false
  for(let i = 0;i<arrayB.length;i++){
    if(arrayA[i]!==arrayB[i]) return false
  }
  return true
}

export default recursiveDivision