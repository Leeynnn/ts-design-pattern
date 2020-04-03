// 组合（宏命令）模式思想实现

/*
  组合（宏命令）模式一般由顶端组合对象发布执行命令
  然后所有的叶子对象执行execute方法

  类似如图：
          Combination
          |         |
      WearShoes GoOutCommand
                    |
                CloseDoorCommand

  由左到右由上到下的execute执行顺序
*/

export interface CombinationType {
  execute(): void
}

export class Combination implements CombinationType {
  public commandsList: CombinationType[] = []

  public add(command: CombinationType): Combination {
    if (!this.commandsList.find(item => item === command)) {
      this.commandsList.push(command)
    }
    return this
  }

  public execute() {
    this.commandsList.forEach(command => {
      command.execute()
    })
  }
}
