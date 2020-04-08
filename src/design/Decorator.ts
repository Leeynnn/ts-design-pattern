import { isFunction } from '../util/util'
// 装饰者链模式思想实现

/*
  装饰者模式可以动态地给某个对象添加一些额外的职责
  而不会影响从这个类中派生的其他对象

  核心思想是AOP
*/

interface DecoratorType {
  before(key: string, fun: any): DecoratorType
  after(key: string, fun: any): DecoratorType
}

interface DecoratorObjectType {
  [key: string]: any
}

export class Decorator implements DecoratorType {
  private decorator: DecoratorObjectType = {}
  private object: any = {}

  constructor(object: any) {
    this.object = object
  }

  public before(key: string, fun: any): Decorator {
    this.objectFunctionAop(key, fun)
    if (isFunction(fun)) {
      this.decorator[key].before.unshift(fun)
    }
    return this
  }

  public after(key: string, fun: any): Decorator {
    this.objectFunctionAop(key, fun)
    if (isFunction(fun)) {
      this.decorator[key].after.push(fun)
    }
    return this
  }

  private objectFunctionAop(key: string, fun: any) {
    if (isFunction(this.object[key]) && !this.decorator[key]) {
      this.decorator[key] = {
        before: [],
        after: [],
      }
      const objectFunction = this.object[key]
      this.object[key] = (...args: any) => {
        for (const callback of this.decorator[key].before) {
          callback()
        }
        objectFunction.apply(this.object, args)
        for (const callback of this.decorator[key].after) {
          callback()
        }
      }
    }
  }
}
