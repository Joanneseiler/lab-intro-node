class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a, b) => {
      if (a > b) {
        return 1
      }
      else if (b > a) {
        return -1
      }
      else {
        return 0
      }
    })
    return this.items
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length-1]
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }
  
  sum() {
    if (this.items.length === 0) {
      return 0
    }

    return this.items.reduce((sum,elem)=> {
      return sum + elem
    }, 0)
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    
    return this.sum() / this.length
  }
}

module.exports = SortedList;
