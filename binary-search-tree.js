//BST Construction

class Tree {
  constructor (val) {
      this.val = val
      this.left = null
      this.right = null
  }

  insert (val) {
      if (val < this.val) {
          if (this.left) {
              this.left.insert(val)
          } else {
              this.left = new Tree(val)
          }
      } else {
          if (this.right) {
              this.right.insert(val)
          } else {
              this.right = new Tree(val)
          }
      }
          
  }

  contains (val) {

      if (val < this.val) {
          if (!this.left) {
              return false
          } else {
              this.left.contains(val)
          }
      } else if (val > this.val) {
          if (!this.right) {
              return false
          } else {
              this.right.contains(val)
          }
      } else {
          return true
      }
  }

  remove (val, parent = null) {
      if (val < this.val) {
          if (this.left !== null) {
              this.left.remove(val, this)
          }
      } else if (val > this.val) {
          if (this.right !== null) {
              this.right.remove(val, this)
          }
      } else {
          if (this.left !== null && this.right !== null) {
              this.val = this.right.getMinVal()
              this.right.remove(this.val, this)
          } else if (parent === null) {
              if (this.left !== null) {
                  this.value = this.left.value
                  this.right = this.left.right
                  this.left = this.left.left
              } else if (this.right !== null) {
                  this.value = this.right.value
                  this.left = this.right.left
                  this.right = this.right.right
              } else {
                  //do nothing
              }
          } else if (parent.left === this) {
              parent.left = this.left !== null ? this.left: this.right
          } else if (parent.right === this) {
              parent.right = this.left !== null ? this.left : this.right
          }
      }
      return this
  }

  getMinVal () {
      if (this.left === null) {
          return this.value
      } else {
          return this.left.getMinVal()
      }
  }
}