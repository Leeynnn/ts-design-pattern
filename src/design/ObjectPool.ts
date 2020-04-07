import { isFunction } from '../util/util'
// 享元模式（对象池）思想实现

/*
  享元模式是为解决性能问题而生的模式
  避免创造大量的对象而导致的浏览器内存不足
  对象池的意义是
  需要使用对象时去对象池里取现有的对象
  用完后将对象还给对象池供他人使用
*/

interface ObjectPoolType {
  create(...args: any): any
  recover(object: any): ObjectPoolType
}

export class ObjectPool implements ObjectPoolType {
  public objectPool: any[] = []
  private objectPoolFactory: any

  constructor(objectPoolFactory: any) {
    if (isFunction(objectPoolFactory)) {
      this.objectPoolFactory = objectPoolFactory
    } else {
      this.objectPoolFactory = (): any => {
        return {}
      }
    }
  }

  public create(...args: any) {
    if (this.objectPool.length === 0) {
      return this.objectPoolFactory.apply(this, args)
    }
    return this.objectPool.shift()
  }

  public recover(object: any) {
    this.objectPool.push(object)
    return this
  }
}
