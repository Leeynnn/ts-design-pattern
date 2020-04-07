// 职责链模式思想实现

/*
  请求发送者与请求接收者之间的解耦
  请求发送者发送请求数据后
  去职责链里寻找可以处理请求的节点
*/

interface ChainType {
  add(fn: any): ChainType
  find(...data: any): void
}

export interface NodeType {
  next: NodeType | null
  callback: any
}

export class Chain implements ChainType {
  private nodeList: NodeType | null = null

  public add(fn: any) {
    this.createNode(fn)
    return this
  }
  public find(...data: any): void {
    if (this.nodeList) {
      let node: NodeType | null = this.nodeList
      while (node) {
        const finded: boolean = node.callback.apply(this, data)
        node = finded ? null : node.next
      }
    }
  }

  private createNode(fn: any): void {
    if (!this.nodeList) {
      this.nodeList = {
        next: null,
        callback: fn,
      }
    } else {
      let lastNode: NodeType = this.nodeList!
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = {
        next: null,
        callback: fn,
      }
    }
  }
}
