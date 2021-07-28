
function animatePath(path,solutionPath,speed,index = 0){
  if(index === path.length){
    animateSolutionPath(solutionPath,speed)
    return
  }
  setTimeout(()=>{
    const step = path[index]
    const id = `#pos-${step[0]}-${step[1]}`
    const li = document.querySelector(id)
    li.classList.add('visited')
    animatePath(path,solutionPath,speed,++index)
  },speed)
}

function animateSolutionPath(path,speed,index = 0){
  if(index === path.length) return
  setTimeout(()=>{
    const step = path[index]
    const id = `#pos-${step[0]}-${step[1]}`
    const li = document.querySelector(id)
    li.classList.add('path')
    animateSolutionPath(path,speed,++index)
  },speed)
}

export default animatePath