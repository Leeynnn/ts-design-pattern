import { SubscribeType, ListType, isFunction } from '../../../design/Observer'

export class Client implements SubscribeType {
  public subscriptionList: ListType = []
  constructor(eventName: string | string[], callback: any) {
    if (isFunction(callback)) {
      if (Array.isArray(eventName)) {
        eventName.forEach(event => {
          this.subscriptionList[event] = callback
        })
      } else {
        this.subscriptionList[eventName] = callback
      }
    }
  }
}
