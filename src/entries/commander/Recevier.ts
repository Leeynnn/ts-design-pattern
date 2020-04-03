import { SponsorType } from '../../design/Commander'
export class Recevier {
  public msg: string
  constructor(msg: string) {
    this.msg = msg
  }

  public cook(sponsor: SponsorType | void) {
    if (sponsor) {
      const time = (Math.random() * 1000).toFixed(0)
      setTimeout(() => {
        sponsor.execute(`${this.msg}【共耗时${time}秒】`)
      }, parseFloat(time))
    }
  }
}
