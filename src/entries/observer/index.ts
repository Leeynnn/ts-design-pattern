import { SalesOffice } from './SalesOffice'
import { Observer } from '../../../design/Observer'
import { Client } from './Client'

const apartment = new SalesOffice('公寓', 'apartment')
const hotel = new SalesOffice('酒店', 'hotel')
const villa = new SalesOffice('别墅', 'villa')

const Tom = new Client('apartment', (name: number, price: number) => {
  document.write(`您订阅的${name}现价为：${price}元<br/>`)
})

const Jack = new Client(['hotel', 'villa'], (name: number, price: number) => {
  document.write(`您订阅的${name}现价为：${price}元<br/>`)
})

const observer = Observer.getInstance()

observer
  // 发布事件
  .release(apartment)
  .release(hotel)
  .release(villa)
  // 订阅事件
  .subscription(Tom)
  .subscription(Jack)

// 取消订阅事件
observer.unsubscribe('hotel', Jack.subscriptionList.hotel)

// 分发消息
setTimeout(() => {
  apartment.sendMessage(1000)
}, 1000)

setTimeout(() => {
  hotel.sendMessage(2000)
}, 2000)

setTimeout(() => {
  villa.sendMessage(3000)
}, 3000)
