import { Decorator } from '../../design/Decorator'

class Ajax {
  public url: string
  constructor(url: string) {
    this.url = url
  }

  public get(name: string) {
    document.write(`${name}发送GET请求到${this.url}<br/>`)
  }
}

const ajax = new Ajax('https://www.xxx.com')

const ajaxDecorator = new Decorator(ajax)

ajaxDecorator
  .before('get', () => {
    document.write(`在GET请求发送到${ajax.url}前打印 before_1<br/>`)
  })
  .before('get', () => {
    document.write(`在GET请求发送到${ajax.url}前打印 before_2<br/>`)
  })
  .after('get', () => {
    document.write(`在GET请求发送到${ajax.url}后打印 after_1<br/>`)
  })
  .after('get', () => {
    document.write(`在GET请求发送到${ajax.url}后打印 after_2<br/>`)
  })

ajax.get('Jack')
