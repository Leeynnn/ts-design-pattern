// 策略模式思想实现

/*
  策略模式一般由两个部分组成：
  策略类（封装具体的算法逻辑）；
  环境类（接受请求并将请求委托给策略类来处理）
*/

interface RuleType {
  (...environment: any): void
}

interface StrategiesType {
  [rule: string]: RuleType
}

interface StrategyType {
  rule: string
  strategy: RuleType
}

interface StrategyClassType {
  addRule(strategy: StrategyType): StrategyClassType
  add(strategies: string | string[], environment: any): StrategyClassType
  start(): StrategyClassType
}

interface CacheType {
  environment: any
  strategy: string
}

export class Strategy implements StrategyClassType {
  private strategies: StrategiesType // 策略对象（类）
  private cache: CacheType[] // 缓存环境类的请求等待一次处理所有的请求（函数柯里化思想）
  constructor() {
    this.strategies = {}
    this.cache = []
  }

  // 添加策略对象里的策略
  public addRule(strategy: StrategyType): Strategy {
    this.strategies[strategy.rule] = strategy.strategy
    return this
  }

  // 接受环境请求并委托给对应的策略来处理(这里通过函数柯里化思想来缓存委托，延迟到一次性处理委托)
  public add(strategies: string | string[], ...environment: any): Strategy {
    if (Array.isArray(strategies)) {
      strategies.forEach(strategy => {
        if (strategy in this.strategies) {
          this.cache.push({
            environment,
            strategy
          })
        }
      })
    } else {
      if (strategies in this.strategies) {
        this.cache.push({
          environment,
          strategy: strategies
        })
      }
    }
    return this
  }

  public start(): Strategy {
    this.cache.forEach(item => {
      this.strategies[item.strategy].apply(this, item.environment)
    })
    return this
  }
}
