import { Commander } from '../../design/Commander'
import { Sponsor } from './Sponsor'
import { Recevier } from './Recevier'

const commander = Commander.getInstance()

const Jack = new Sponsor()

const westCooker = new Recevier('为您做好了一份西冷牛排！')

const eastCooker = new Recevier('为您做好了一份番茄炒蛋！')

commander
  .setCommand('orderWesternFood', Jack)
  .setCommand('orderEasternFood', Jack)

westCooker.cook(commander.getCommand('orderWesternFood'))
eastCooker.cook(commander.getCommand('orderEasternFood'))
