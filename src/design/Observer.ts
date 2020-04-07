import { isFunction } from '../util/util'
// 发布订阅模式思想实现

/*
  发布订阅模式一般由
  发布者
  中间者
  订阅者
  构成
*/

interface ObserverType {
  release(release: ReleaseType): ObserverType // 发布
  subscription(subscribe: SubscribeType): ObserverType // 订阅
  unsubscribe(event: string, callback: any): void // 取消订阅
}

export interface ListType {
  [event: string]: any
}

// 发布者实例
export interface ReleaseType {
  event: string // 发布者发布的事件名
  observer: Observer // 发布者者关联的中间者实例
}

// 订阅者实例
export interface SubscribeType {
  subscriptionList: ListType
}

export class Observer implements ObserverType {
  public static getInstance = () => {
    if (!Observer.instance) {
      Observer.instance = new Observer()
    }
    return Observer.instance
  }
  private static instance: Observer

  public releaseList: ListType = {} // 发布者，所有事件发布在releaseList里
  public subscriptionList: ListType = {} // 订阅者，所有订阅事件存在subscriptionList里

  // 发布者实例关联中间者实例（将事件发布到中间者）
  public release(release: ReleaseType): Observer {
    if (!this.releaseList.hasOwnProperty(release.event)) {
      this.releaseList[release.event] = release
      this.subscriptionList[release.event] = []
      release.observer = Observer.getInstance()
    }
    return this
  }

  // 订阅者实例关联中间者实例（将订阅的事件存入中间者）
  public subscription(subscribe: SubscribeType): Observer {
    Object.keys(subscribe.subscriptionList).forEach((event: string) => {
      const callback = subscribe.subscriptionList[event]
      if (isFunction(callback)) {
        if (this.subscriptionList.hasOwnProperty(event)) {
          this.subscriptionList[event].push(callback)
        }
      }
    })
    return this
  }

  // 取消订阅
  public unsubscribe(event: string, callback: any): void {
    this.subscriptionList[event].forEach((subscribe: any, index: number) => {
      if (subscribe === callback) {
        this.subscriptionList[event].splice(index, 1)
      }
    })
  }
}
