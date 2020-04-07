import { ObjectPool } from '../../design/ObjectPool'
import { Book } from './Book'

const objectPool = new ObjectPool((title: string) => {
  return new Book(title)
})

interface Reader {
  name: string
  title: string
  book: Book | null
}

const firstReaders: Reader[] = [
  {
    name: 'Jack',
    title: '老人与海',
    book: null,
  },
  {
    name: 'Bob',
    title: '白雪公主',
    book: null,
  },
  {
    name: 'Tim',
    title: '三国演义',
    book: null,
  },
]

const secondReaders: Reader[] = [
  {
    name: 'Rose',
    title: '红楼梦',
    book: null,
  },
  {
    name: 'Ketty',
    title: '水浒传',
    book: null,
  },
  {
    name: 'Lily',
    title: '西游记',
    book: null,
  },
]

// 第一批读者借阅图书时书架（状态池）中没有一本（个）书（对象）
// 所以都是购买（创造）新的书（对象）存到书架（对象池）中
setTimeout(() => {
  firstReaders.forEach((reader) => {
    reader.book = objectPool.create(reader.title)
    reader.book!.read(reader.name)
  })
}, 1000)

// 第一批读者读完（使用完）书（对象）后将书（对象）还给书架（状态池）
setTimeout(() => {
  firstReaders.forEach((reader) => {
    document.write(`${reader.name}归还了图书${reader.title}<br/>`)
    objectPool.recover(reader.book)
    reader.book = null
  })
}, 2000)

setTimeout(() => {
  // 第二批读者借阅时不需要购买（新建）新书（新对象）了
  // 只需从书架（状态池）取书（对象）即可
  secondReaders.forEach((reader) => {
    reader.book = objectPool.create(reader.title)
    reader.book!.read(reader.name)
  })
}, 3000)
