import { PlayerDirectorType } from '../../design/Intermediary'
export type Team = 'blue' | 'red'
export type Alive = 'alive' | 'died'

export interface PlayerType {
  name: string
  team: Team
  alive: Alive
  playerDirector: PlayerDirectorType
  win(): void
  loose(): void
  die(): void
}

export class Player implements PlayerType {
  public name: string
  public team: Team
  public alive: Alive
  public playerDirector: PlayerDirectorType
  constructor(name: string, team: Team, playerDirector: PlayerDirectorType) {
    this.name = name
    this.team = team
    this.alive = 'alive'
    this.playerDirector = playerDirector
  }

  public win() {
    document.write(`${this.name}获胜<br/>`)
  }

  public loose() {
    document.write(`${this.name}失败<br/>`)
  }

  public die() {
    document.write(`${this.name}阵亡<br/>`)
    this.alive = 'died'
    this.playerDirector.checkGameOver()
  }
}
