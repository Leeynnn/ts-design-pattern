import { Combination } from '../../design/Combination'
import { CloseDoorCommand } from './CloseDoorCommand'
import { WearShoes } from './WearShoes'
import { GoOutCommand } from './GoOutCommand'

const Jack = new Combination()
const wearShoes = new WearShoes()
const goOutCommand = new GoOutCommand()
const closeDoorCommand = new CloseDoorCommand()

goOutCommand.add(closeDoorCommand)
Jack.add(wearShoes).add(goOutCommand)

Jack.execute()
