class Queue {
  constructor(elements){
    this.deposit = [elements]
    this.withdraw = []
    this.length = this.deposit.length
  }

  enqueue(element){
    this.deposit.push(element)
    this.length++
  }

  dequeue(){
    if(this.withdraw.length===0){
      while(this.deposit.length!==0){
        this.withdraw.push(this.deposit.pop())
      }
    }
    this.length--
    return this.withdraw.pop()
  }

  peek(){
    if(this.withdraw.length>0){
      return this.withdraw[this.withdraw.length-1]
    }else if(this.deposit.length>0){
      return this.deposit[0]
    }
    return null
  }
}

export default Queue