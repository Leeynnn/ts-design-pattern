import { Chain } from '../../design/Chain'

const order500 = (type: number): boolean => {
  if (type === 1) {
    document.write('500元定金预购，得到100元优惠券<br/>')
    return true
  }
  return false
}

const order200 = (type: number): boolean => {
  if (type === 2) {
    document.write('200元定金预购，得到50元优惠券<br/>')
    return true
  }
  return false
}

const order100 = (type: number): boolean => {
  if (type === 3) {
    document.write('100元定金预购，得到10元优惠券<br/>')
    return true
  }
  return false
}

const chain = new Chain()

chain
  .add(order500)
  .add(order200)
  .add(order100)

chain.find(3)
chain.find(2)
chain.find(1)
