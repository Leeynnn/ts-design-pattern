// 命令模式思想实现

/*
  发布订阅模式一般由
  命令发起者
  命令对象
  命令接收者
  构成
*/

interface CommanderType {
  setCommand(command: string, sponsor: SponsorType): Commander
  getCommand(command: string): SponsorType | void
}

export interface SponsorType {
  execute(...data: any): void
}

export interface CommandsType {
  [command: string]: SponsorType[]
}

export class Commander implements CommanderType {
  public static getInstance() {
    if (!Commander.instance) {
      Commander.instance = new Commander()
    }
    return Commander.instance
  }

  private static instance: Commander

  private commands: CommandsType = {}

  public setCommand(command: string, sponsor: SponsorType): Commander {
    if (!this.commands[command]) {
      this.commands[command] = []
    }
    const index = this.commands[command].findIndex(item => item === sponsor)
    if (index !== -1) {
      this.commands[command].splice(index, 1)
      this.commands[command].unshift(sponsor)
    } else {
      this.commands[command].push(sponsor)
    }
    return this
  }

  public getCommand(command: string): SponsorType | void {
    if (this.commands[command]) {
      if (this.commands[command].length > 0) {
        return this.commands[command].shift()
      }
    }
  }
}
