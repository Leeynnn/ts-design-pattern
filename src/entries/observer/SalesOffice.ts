import { ReleaseType, Observer } from '../../design/Observer'

export class SalesOffice implements ReleaseType {
  public name: string
  public event: string
  public observer: Observer
  constructor(name: string, ev: string) {
    this.name = name
    this.event = ev
    this.observer = Observer.getInstance()
  }

  public sendMessage(price: number): void {
    this.observer.subscriptionList[this.event].forEach(
      (subscription: (name: string, price: number) => void) => {
        subscription(this.name, price)
      }
    )
  }
}
