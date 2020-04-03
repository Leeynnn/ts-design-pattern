import { Combination } from '../../design/Combination'

export class CloseDoorCommand extends Combination {
  public execute() {
    document.write('关门！<br/>')
    super.execute()
  }
}
