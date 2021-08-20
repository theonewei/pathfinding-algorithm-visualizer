class Tutorial{
  constructor(){
    this.visible = true
  }

  render(){
    const box = document.createElement('div')
    box.innerText = 'hello'
    box.id = 'tutorial'
    box.className = this.visible ? null : 'invisible'
    return box
  }
}

export default Tutorial