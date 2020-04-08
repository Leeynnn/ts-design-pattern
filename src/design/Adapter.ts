// 适配器模式思想实现

/*
  适配器模式的作用是解决两个软件实体间的不兼容问题
*/

/*
  这里举了一个转换第三方接口为通用接口的例子
*/

export function Adapter(target: any): any {
  target.show = () => {
    return target.display()
  }
  return target
}
