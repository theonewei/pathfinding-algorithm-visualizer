class Legend{
  constructor(){
    
  }

  render(){
    const bar = document.createElement('ul')

    //start node
    const start = document.createElement('li')
    let startKey = document.createElement('p')
    startKey.innerText = 'Start Node'
    let startBox = document.createElement('div')
    startBox.className = 'example start'
    start.append(startKey,startBox)

    //end node
    const end = document.createElement('li')
    let endKey = document.createElement('p')
    endKey.innerText = 'End Node'
    let endBox = document.createElement('div')
    endBox.className = 'example end'
    end.append(endKey,endBox)

    //searched node
    const searched = document.createElement('li')
    let searchedKey = document.createElement('p')
    searchedKey.innerText = 'Searched Node'
    let searchedBox = document.createElement('div')
    searchedBox.className = 'example searched'
    searched.append(searchedKey,searchedBox)

    //path node
    const path = document.createElement('li')
    let pathKey = document.createElement('p')
    pathKey.innerText = 'Path Node'
    let pathBox = document.createElement('div')
    pathBox.className = 'example path'
    path.append(pathKey,pathBox)
    
    //wall node
    const wall = document.createElement('li')
    let wallKey = document.createElement('p')
    wallKey.innerText = 'Wall Node'
    let wallBox = document.createElement('div')
    wallBox.className = 'example wall'
    wall.append(wallKey,wallBox)

    bar.append(start,end,searched,path,wall)
    bar.id = 'legend-bar'

    return bar
  }
}

export default Legend