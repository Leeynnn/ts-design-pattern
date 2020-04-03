// 命令模式思想实现

/*
  发布订阅模式一般由
  命令发起者
  命令对象
  命令接收者
  构成
*/

interface CommanderType {
  setCommand(command: string, sponsor: Sponsor): Commander
  getCommand(command: string): Commander
}

export interface Sponsor {

}

export class Commander implements CommanderType {
  setCommand()
}
