import { Player } from './Player'
import { PlayerDirector } from '../../design/Intermediary'

const playerDirector = new PlayerDirector()

const Jack = new Player('Jack', 'red', playerDirector)
const Bob = new Player('Bob', 'red', playerDirector)
const Faker = new Player('Faker', 'blue', playerDirector)
const Rose = new Player('Zoom', 'blue', playerDirector)

playerDirector
  .addPlayer(Jack)
  .addPlayer(Bob)
  .addPlayer(Faker)
  .addPlayer(Rose)

Jack.die()
Rose.die()
Bob.die()
