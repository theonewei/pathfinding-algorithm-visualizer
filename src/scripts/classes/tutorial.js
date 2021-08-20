class Tutorial{
  constructor(){
    this.visible = true
    this._toggleVisiblity = this._toggleVisiblity.bind(this)
  }

  render(){
    const box = document.createElement('div')
    box.innerText = 'hello'
    box.id = 'tutorial'
    const x = document.createElement('div')
    x.innerText = 'x'
    x.id = 'close-btn'
    x.onclick = this._toggleVisiblity
    box.append(x)

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