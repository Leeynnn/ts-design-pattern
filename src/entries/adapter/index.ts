import { Adapter } from '../../design/Adapter'

const rendeMap = {
  display() {
    document.write('百度渲染地图')
  },
}

const newRenderMap = Adapter(rendeMap)

newRenderMap.show()
