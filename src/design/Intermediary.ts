import { Player } from '../entries/intermediary/Player'
// 中介者模式思想实现

/*
  创造一个中介者来解除对象与对象之间的紧耦关系
  所有对象通过一个中介者来通信
  当一个对象发生改变时只需通知中介者即可

  遵循了【最少知识原则】，即一个对象应尽可能少地了解另外的对象
*/

/*
  这里举了一个分组比赛的例子来展现中介者模式思想
*/

export interface PlayerDirectorType {
  addPlayer(player: Player): PlayerDirectorType
  checkGameOver(): void
}

interface PlayersType {
  [team: string]: Player[]
}

export class PlayerDirector implements PlayerDirectorType {
  private players: PlayersType = {
    red: [],
    blue: [],
  }

  public addPlayer(player: Player): PlayerDirector {
    this.players[player.team].push(player)
    return this
  }

  public checkGameOver(): void {
    let winnerTeam = ''
    let looseTeam = ''
    if (this.players.red.every((player) => player.alive === 'died')) {
      winnerTeam = 'blue'
      looseTeam = 'red'
    }
    if (this.players.blue.every((player) => player.alive === 'died')) {
      winnerTeam = 'red'
      looseTeam = 'blue'
    }
    if (winnerTeam) {
      this.players[winnerTeam].forEach((player) => player.win())
      this.players[looseTeam].forEach((player) => player.loose())
    }
  }
}
