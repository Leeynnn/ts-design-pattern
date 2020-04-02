import { SingleInstance } from '../../../design/SingleInstance'

const instance1 = SingleInstance.getInstance('Tom')
const instance2 = SingleInstance.getInstance('Bob')
document.write(instance1.name + '<br/>')
document.write(instance2.name + '<br/>')
