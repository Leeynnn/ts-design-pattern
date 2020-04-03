import { Strategy } from '../../design/Strategy'
const strategy = new Strategy()
strategy
  .addRule({
    rule: 'gradeS',
    strategy(name: string, pay: number) {
      document.write(`您好，${name}。您获得了${pay * 4}元年终奖<br/>`)
    }
  })
  .addRule({
    rule: 'gradeA',
    strategy(name: string, pay: number) {
      document.write(`您好，${name}。您获得了${pay * 3}元年终奖<br/>`)
    }
  })
  .addRule({
    rule: 'gradeB',
    strategy(name: string, pay: number) {
      document.write(`您好，${name}。您获得了${pay * 2}元年终奖<br/>`)
    }
  })
  .addRule({
    rule: 'gradeC',
    strategy(name: string, pay: number) {
      document.write(`您好，${name}。您获得了${pay * 1}元年终奖<br/>`)
    }
  })

strategy
  .add('gradeS', '刘备', 1000)
  .add('gradeA', '关羽', 900)
  .add('gradeB', '张飞', 800)
  .add('gradeC', '赵云', 700)

strategy.start()
