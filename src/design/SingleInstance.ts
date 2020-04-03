// 单例模式思想实现

export class SingleInstance {
  // 暴露静态方法获取类的单例
  // 重复调用getInstance不会多次实例化该类
  public static instance: SingleInstance
  public static getInstance(name: string): SingleInstance {
    if (!SingleInstance.instance) {
      SingleInstance.instance = new SingleInstance(name)
    }
    return SingleInstance.instance
  }
  public name: string
  constructor(name: string) {
    this.name = name
  }
}
