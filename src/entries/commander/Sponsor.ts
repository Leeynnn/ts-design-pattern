import { SponsorType } from '../../design/Commander'
export class Sponsor implements SponsorType {
  public execute(msg: string) {
    document.write(`${msg}<br/>`)
  }
}
