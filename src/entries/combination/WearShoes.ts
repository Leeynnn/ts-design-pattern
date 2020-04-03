import { Combination } from '../../design/Combination'

export class WearShoes extends Combination {
  public execute() {
    document.write('穿鞋子！<br/>')
    super.execute()
  }
}
