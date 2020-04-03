import { Combination } from '../../design/Combination'

export class GoOutCommand extends Combination {
  public execute() {
    document.write('出门！<br/>')
    super.execute()
  }
}
