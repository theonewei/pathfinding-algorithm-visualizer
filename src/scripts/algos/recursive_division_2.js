import animateWalls from "../utils/animate_walls"

function recursiveDivision(top,bottom,left,right,board,speed,reservedNodes){
  const wallPathing = []

  //set the first boundaries of the maze
  for(let i = top;i<=bottom;i++){
    wallPathing.push([i,left])
    wallPathing.push([i,right])
  }
  for(let i = left+1;i<right;i++){
    wallPathing.push([top,i])
    wallPathing.push([bottom,i])
  }

  _recursiveDivision(top,bottom,left,right,wallPathing,true,reservedNodes)
  animateWalls(wallPathing,board,speed)
}

function _recursiveDivision(top,bottom,left,right,wallPathing,vertical,reservedNodes){
  //base case
  if(bottom<top || left>right) return

  //generate a random row and column for dividing up the grid
  const possibleRows = []
  for(let i = top; i<=bottom;i+=2) possibleRows.push(i)
  const possibleCols = []
  for(let i = left; i<=right; i+=2) possibleCols.push(i)
  const randomRowIndex = Math.floor(Math.random() * possibleRows.length)
  const randomColIndex = Math.floor(Math.random() * possibleCols.length)

  // when splitting the grid with a vertical wall
  if(vertical){

    //choosing where the wall and hole will be
    const wall = possibleCols[randomColIndex]
    const hole = possibleRows[randomRowIndex]

    //drawing the wall
    for(let i = top;i<=bottom;i++){
      if(i===hole) continue
      if(!isEqual([i,wall],reservedNodes[0]) && !isEqual([i,wall],reservedNodes[1])) wallPathing.push([i,wall])
    }
    
    //recursion
    if(bottom-top>wall-2-left){
      _recursiveDivision(top,bottom,left,wall-2,wallPathing,false,reservedNodes)
    }else{
      _recursiveDivision(top,bottom,left,wall-2,wallPathing,true,reservedNodes)
    }
    if(bottom-top>right-wall-2){
      _recursiveDivision(top,bottom,wall+2,right,wallPathing,false,reservedNodes)
    }else{
      _recursiveDivision(top,bottom,wall+2,right,wallPathing,true,reservedNodes)
    }

  }else{
  //splitting the grid with a horizontal wall

    //choosing where the wall and hole will be
    const wall = possibleRows[randomRowIndex]
    const hole = possibleCols[randomColIndex]

    //drawing the wall
    for(let i = left;i<=right;i++){
      if(i===hole) continue
      if(!isEqual([wall,i],reservedNodes[0]) && !isEqual([wall,i],reservedNodes[1]))wallPathing.push([wall,i])
    }

    //recursion
    if(wall-2-top>right-left){
      _recursiveDivision(top,wall-2,left,right,wallPathing,false,reservedNodes)
    }else{
      _recursiveDivision(top,wall-2,left,right,wallPathing,true,reservedNodes)
    }
    if(bottom-wall-2>right-left){
      _recursiveDivision(wall+2,bottom,left,right,wallPathing,false,reservedNodes)
    }else{
      _recursiveDivision(wall+2,bottom,left,right,wallPathing,true,reservedNodes)
    }
  }
}

function isEqual(arrayA,arrayB){
  if(arrayA.length !== arrayB.length) return false
  for(let i = 0;i<arrayB.length;i++){
    if(arrayA[i]!==arrayB[i]) return false
  }
  return true
}

export default recursiveDivision