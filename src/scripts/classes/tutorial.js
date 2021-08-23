class Tutorial{
  constructor(){
    this.visible = true
    this._toggleVisiblity = this._toggleVisiblity.bind(this)
  }

  render(){
    const box = document.createElement('p')
    box.id = 'tutorial'

    const title = document.createElement('div')
    title.id = 'title'
    title.innerText = 'Pathfinding Algorithm Visualizer:'

    const subtitle = document.createElement('div')
    subtitle.id = 'subtitle'
    subtitle.innerText = "Pathfinding algorithms are used to find path's between two given points on a graph. Algorithms differ in their speed at finding a path and also how efficient the path they find is"

    const x = document.createElement('div')
    x.innerText = 'x'
    x.id = 'close-btn'

    x.onclick = this._toggleVisiblity
    const instructions = document.createElement('div')
    instructions.id = 'instructions'
    instructions.innerText="1. Drag Start and End Nodes to where you want them to be\n \n 2. If you want some obstacles for the algorithm to navigate around, you can either click on nodes to turn them into walls or use the maze generator"

    box.append(title,subtitle,x,instructions)

    const modal = document.createElement('div')
    modal.append(box)
    modal.id = 'modal'

    return modal
  }

  _toggleVisiblity(){
    this.visible = !this.visible
    const tutorial = document.querySelector('#modal')
    tutorial.className = this.visible ? '': 'invisible'
  }
}

export default Tutorial